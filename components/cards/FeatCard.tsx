"use client";
import React from "react";
import { Card, Image } from "@nextui-org/react";

type FeatCardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const FeatCard: React.FC<FeatCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="w-[350px] flex flex-col gap-[1rem]">
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt={title}
          className="object-cover"
          height={350}
          src={imageUrl}
          width={350}
        />
      </Card>
      <div className="flex flex-col gap-2">
        <h1 className="text-[24px] font-[700] text-center">{title}</h1>
        <p className="text-[16px] font-[400] text-center">{description}</p>
      </div>
    </div>
  );
};

export default FeatCard;
