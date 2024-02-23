"use client";

import { FC, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/react";
import { Locale } from "@/common/enums";

export interface RuLangModalProps {
  onCancel?: () => void;
}

export const RuLangModal: FC<RuLangModalProps> = ({ onCancel = () => {} }) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSelectUk = () => {
    startTransition(() => {
      router.replace(Locale.UK);
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 py-2">
      <span className="font-bold text-lg text-center">
        Переходь на українську версію сайту 🇺🇦
      </span>

      <Button
        color="primary"
        radius="full"
        size="lg"
        className="bg-[#e62621] font-semibold"
        isLoading={isPending}
        onClick={handleSelectUk}
      >
        Перейти на українську
      </Button>

      <Button
        variant="light"
        radius="full"
        className="text-gray-400"
        onClick={onCancel}
      >
        Залишити російську
      </Button>
    </div>
  );
};
