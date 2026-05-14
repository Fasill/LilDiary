# syntax=docker/dockerfile:1.7

# ---------- Build ----------
FROM node:22-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json ./
COPY .npmrc ./
RUN npm install --legacy-peer-deps --no-audit --no-fund

COPY . .
RUN npm run build

# ---------- Runtime ----------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=build --chown=nextjs:nodejs /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:3000/').then(r => process.exit(r.status<500?0:1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]
