"use client";

import { Key, PropsWithChildren, ReactNode, useContext } from "react";

import {
  Card,
  CardHeader,
  Button,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  CardFooter,
  Tooltip,
} from "@nextui-org/react";
import {
  RiAddFill,
  RiDeleteBinLine,
  RiEdit2Line,
  RiEyeLine,
} from "@remixicon/react";

import { ColumnKey } from "@/common/enums";
import { BaseModel } from "@/common/models";
import { ModalContext } from "@/app/providers";
import { ColumnDef } from "@/common/types";

import { DeleteModal, EntityForm } from "..";

export interface DataGridProps<T extends BaseModel, C, U>
  extends PropsWithChildren {
  title: string;
  entitySlug: string;
  data: T[];
  schema: ColumnDef[];
  enableActios?: boolean;
  enableAdd?: boolean;
  enableDetails?: boolean;
  enableUpdate?: boolean;
  enableDelete?: boolean;
  onDelete?: (id: string) => void;
  onCreate?: (data: C) => void;
}

function DataGrid<T extends BaseModel, C, U>({
  title,
  entitySlug,
  data,
  schema,
  children,
  enableActios = true,
  enableAdd = true,
  enableDetails = true,
  enableUpdate = true,
  enableDelete = true,
  onDelete = () => {},
  onCreate = () => {},
}: DataGridProps<T, C, U>) {
  const { onClose, handleModal } = useContext(ModalContext);

  const handleCreateEntity = (data: C) => {
    onCreate(data);
    onClose();
  };

  const handleDeleteEntity = (id: string) => {
    onDelete(id);
    onClose();
  };

  const handleOpenCreateModal = () => {
    handleModal({
      content: (
        <EntityForm
          schema={schema}
          entitySlug={entitySlug}
          onCancel={onClose}
          onSave={(data) => handleCreateEntity(data as C)}
        />
      ),
    });
  };

  const handleOpenDetailsModal = () => {
    handleModal({
      content: "Will be soon",
    });
  };

  const handleOpenUpdateModal = () => {
    handleModal({
      content: (
        <EntityForm
          schema={schema}
          updateState={true}
          entitySlug={entitySlug}
          onCancel={onClose}
        />
      ),
    });
  };

  const handleOpenDeleteModal = (id: string) => {
    handleModal({
      content: (
        <DeleteModal
          entitySlug={entitySlug}
          onCancel={onClose}
          onDelete={() => handleDeleteEntity(id)}
        />
      ),
    });
  };

  const columnKeyViewMap = new Map<
    Key,
    ({ cellValue, item }: { cellValue: T[keyof T]; item: T }) => ReactNode
  >([
    [
      ColumnKey.DATE,
      ({ cellValue }) =>
        new Date(cellValue?.toString() || "").toLocaleDateString("uk"),
    ],
    [
      ColumnKey.ACTIONS,
      ({ item }) => (
        <div className="relative flex items-center gap-2">
          {enableDetails && (
            <Tooltip content="Деталі">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={handleOpenDetailsModal}
              >
                <RiEyeLine />
              </span>
            </Tooltip>
          )}

          {enableUpdate && (
            <Tooltip content="Редагувати">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={handleOpenUpdateModal}
              >
                <RiEdit2Line />
              </span>
            </Tooltip>
          )}

          {enableDelete && (
            <Tooltip color="danger" content="Видалити">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleOpenDeleteModal(item.id)}
              >
                <RiDeleteBinLine />
              </span>
            </Tooltip>
          )}
        </div>
      ),
    ],
  ]);

  const renderCell = (item: T, columnKey: Key) => {
    const cellValue = item[columnKey as keyof T];

    if (columnKeyViewMap.has(columnKey)) {
      return columnKeyViewMap.get(columnKey)?.({ cellValue, item });
    }

    return cellValue?.toString();
  };

  const getColumns = () => {
    const columns = [...schema.filter((column) => !column.isHidden)];

    if (enableActios) {
      columns.push({ name: ColumnKey.ACTIONS, label: "Дії" });
    }

    return columns;
  };

  return (
    <Card className="p-4" shadow="sm">
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>

        {enableAdd && (
          <Button
            size="sm"
            color="danger"
            isIconOnly
            startContent={<RiAddFill />}
            onPress={handleOpenCreateModal}
          ></Button>
        )}
      </CardHeader>

      <CardBody>
        <Table aria-label={`Таблиця ${title}`}>
          <TableHeader columns={getColumns()}>
            {(column) => (
              <TableColumn key={column.name}>{column.label}</TableColumn>
            )}
          </TableHeader>

          <TableBody items={data} emptyContent={"Данні не додані"}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>

      {children && <CardFooter>{children}</CardFooter>}
    </Card>
  );
}

export { DataGrid };
