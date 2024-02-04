"use client";

import { FC } from "react";

import { Button } from "@nextui-org/react";

export interface DeleteModalProps {
  entitySlug: string;
  onCancel?: () => void;
  onDelete?: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({
  entitySlug,
  onCancel = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h3 className="font-bold text-xl text-danger">
          Видалити сутність {entitySlug}?
        </h3>
      </header>

      <main>Ви впевнені, що бажаєте видалити сутність {entitySlug}?</main>

      <footer className="flex items-center justify-end gap-2">
        <Button variant="light" onClick={onCancel}>
          Відміна
        </Button>

        <Button color="danger" onClick={onDelete}>
          Видалити
        </Button>
      </footer>
    </div>
  );
};

export { DeleteModal };
