import { describe, it, expect } from "vitest";
import { siteConfig } from "../config/site";

describe("siteConfig", () => {
  it("exposes the site name and description", () => {
    expect(siteConfig.name).toBe("LilDiary");
    expect(typeof siteConfig.description).toBe("string");
    expect(siteConfig.description.length).toBeGreaterThan(0);
  });

  it("has the expected primary nav items", () => {
    const labels = siteConfig.navItems.map((i) => i.label);
    expect(labels).toEqual(["Home", "Docs", "Pricing", "Blog", "About"]);
  });

  it("nav items all carry a non-empty href", () => {
    siteConfig.navItems.forEach((item) => {
      expect(item.href).toMatch(/^\//);
      expect(item.href.length).toBeGreaterThan(0);
    });
  });

  it("menu items include Profile and Logout", () => {
    const labels = siteConfig.navMenuItems.map((i) => i.label);
    expect(labels).toContain("Profile");
    expect(labels).toContain("Logout");
  });

  it("menu items all carry a valid href", () => {
    siteConfig.navMenuItems.forEach((item) => {
      expect(item.href).toMatch(/^\//);
    });
  });

  it("exposes external links as https URLs", () => {
    Object.values(siteConfig.links).forEach((url) => {
      expect(url).toMatch(/^https:\/\//);
    });
  });

  it("links includes github, twitter, docs, discord, sponsor", () => {
    expect(Object.keys(siteConfig.links).sort()).toEqual(
      ["discord", "docs", "github", "sponsor", "twitter"].sort(),
    );
  });
});
