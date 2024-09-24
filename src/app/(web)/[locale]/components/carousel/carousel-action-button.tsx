"use client";

import { FC } from "react";

import { Button } from "@nextui-org/react";

export interface CarouselActionButtonProps {
  label: string;
  onClick?: () => void;
}

export const CarouselActionButton: FC<CarouselActionButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <Button
      size="sm"
      radius="full"
      color="primary"
      className="bg-[#e62621]"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
