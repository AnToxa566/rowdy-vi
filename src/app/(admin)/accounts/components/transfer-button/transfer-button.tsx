"use client";

import { useContext } from "react";
import { Button } from "@nextui-org/react";

import { ModalContext } from "@/app/providers";

import { TransferForm } from "..";

export const TransferButton = () => {
  const { onClose, handleModal } = useContext(ModalContext);

  const handleTransfer = () => {
    handleModal({
      content: <TransferForm onCancel={onClose} onTransfer={onClose} />,
    });
  };

  return (
    <Button color="danger" onClick={handleTransfer}>
      Перевести гроші
    </Button>
  );
};
