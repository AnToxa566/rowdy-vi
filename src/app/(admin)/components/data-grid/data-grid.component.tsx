"use client";

import {
  ChangeEvent,
  Key,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

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
  Pagination,
  Progress,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import {
  RiAddFill,
  RiDeleteBinLine,
  RiEdit2Line,
  RiEyeLine,
  RiSearch2Line,
} from "@remixicon/react";

import { ColumnKey } from "@/common/enums";
import { Account, BaseModel, Category } from "@/common/models";
import { ModalContext } from "@/app/providers";
import { ColumnDef } from "@/common/types";

import { DeleteModal, EntityForm } from "..";

export interface DataGridProps<T extends BaseModel, C, U>
  extends PropsWithChildren {
  title: string;
  entitySlug: string;
  data: T[];
  schema: ColumnDef[];
  loading?: boolean;
  rowsPerPage?: number;
  enableActios?: boolean;
  enableAdd?: boolean;
  enableDetails?: boolean;
  enableUpdate?: boolean;
  enableDelete?: boolean;
  enableSearch?: boolean;
  onDelete?: (id: string) => void;
  onCreate?: (data: C) => void;
  onUpdate?: (id: string, data: U) => void;
  onSearch?: (query: string) => void;
}

function DataGrid<T extends BaseModel, C, U>({
  title,
  entitySlug,
  data,
  schema,
  children,
  loading = false,
  rowsPerPage = 6,
  enableActios = true,
  enableAdd = true,
  enableDetails = true,
  enableUpdate = true,
  enableDelete = true,
  enableSearch = false,
  onDelete = () => {},
  onCreate = () => {},
  onUpdate = () => {},
  onSearch = () => {},
}: DataGridProps<T, C, U>) {
  const pageSizes = [6, 10, 25, 50, 100];

  const [filterValue, setFilterValue] = useState("");

  const [page, setPage] = useState(1);

  const [pageSize, setPageSize] = useState<number>(rowsPerPage);

  const pages = Math.ceil(data.length / pageSize);

  const { onClose, handleModal } = useContext(ModalContext);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return data.slice(start, end);
  }, [data, page, pageSize]);

  const onClear = useCallback(() => {
    setFilterValue("");
    onSearch("");
    setPage(1);
  }, [onSearch]);

  const onSearchChange = useCallback(
    (value?: string) => {
      if (value) {
        setFilterValue(value);
        onSearch(value);
      } else {
        setFilterValue("");
        onSearch("");
      }

      setPage(1);
    },
    [onSearch]
  );

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPageSize(parseInt(event.target.value));
  };

  const handleCreateEntity = (data: C) => {
    onCreate(data);
    onClose();
  };

  const handleUpdateEntity = (id: string, data: U) => {
    onUpdate(id, data);
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

  const handleOpenUpdateModal = (item: T) => {
    handleModal({
      content: (
        <EntityForm
          schema={schema}
          item={item}
          updateState={true}
          entitySlug={entitySlug}
          onCancel={onClose}
          onSave={(data) => handleUpdateEntity(item._id, data as U)}
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

  const columnTypeViewMap = new Map<
    Key,
    ({ cellValue, item }: { cellValue: T[keyof T]; item: T }) => ReactNode
  >([
    [
      ColumnKey.DATE,
      ({ cellValue }) =>
        new Date(cellValue?.toString() || "").toLocaleDateString("uk"),
    ],
    [
      ColumnKey.COLOR,
      ({ cellValue }) => (
        <div
          style={{ backgroundColor: cellValue as string }}
          className="w-4 h-4 rounded-full"
        ></div>
      ),
    ],
    [
      ColumnKey.SUM,
      ({ cellValue }) => (
        <span className="font-semibold">
          {(cellValue as number).toFixed(2)}
        </span>
      ),
    ],
    [ColumnKey.NUMBER, ({ cellValue }) => (cellValue as number).toFixed(2)],
    [
      ColumnKey.PERCENT,
      ({ cellValue }) => (
        <div
          style={{ width: `${cellValue}%` }}
          className="relative h-6 bg-danger-300"
        >
          <span className="absolute left-2 h-full flex items-center font-bold">
            {`${cellValue}%`}
          </span>
        </div>
      ),
    ],
    [
      ColumnKey.CATEGORY,
      ({ cellValue }) => (
        <div className="flex gap-2 items-center">
          <div
            style={{
              backgroundColor: (cellValue as Category)?.color || "#808080",
            }}
            className="w-3 h-3 rounded-full"
          ></div>

          <span>{(cellValue as Category)?.name || "Не знайдено"}</span>
        </div>
      ),
    ],
    [
      ColumnKey.ACCOUNT,
      ({ cellValue }) => (
        <div
          style={{
            backgroundColor: (cellValue as Account)?.color || "#808080",
          }}
          className="py-1 px-2 rounded-full text-white w-min text-nowrap"
        >
          {(cellValue as Account)?.name || "Не знайдено"}
        </div>
      ),
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
                onClick={() => handleOpenUpdateModal(item)}
              >
                <RiEdit2Line />
              </span>
            </Tooltip>
          )}

          {enableDelete && (
            <Tooltip color="danger" content="Видалити">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleOpenDeleteModal(item._id)}
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
    const [columnName, columnType] = columnKey.toString().split(":");

    const cellValue = item[columnName as keyof T];

    if (columnTypeViewMap.has(columnType)) {
      return columnTypeViewMap.get(columnType)?.({ cellValue, item });
    }

    return cellValue?.toString();
  };

  const getColumns = () => {
    const columns = [...schema.filter((column) => !column.isHidden)];

    if (enableActios) {
      columns.push({
        name: ColumnKey.ACTIONS,
        columnType: ColumnKey.ACTIONS,
        label: "Дії",
      });
    }

    return columns;
  };

  return (
    <Card className="p-1 md:p-4" shadow="sm">
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>

        <div className="flex items-center gap-3">
          {enableSearch && (
            <Input
              isClearable
              size="sm"
              placeholder="Пошук..."
              startContent={<RiSearch2Line />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
          )}

          {enableAdd && (
            <Button
              size="sm"
              color="danger"
              isIconOnly
              startContent={<RiAddFill />}
              onPress={handleOpenCreateModal}
            ></Button>
          )}
        </div>
      </CardHeader>

      <CardBody>
        <Table
          isStriped
          aria-label={`Таблиця ${title}`}
          topContent={
            loading && (
              <Progress
                size="sm"
                isIndeterminate
                color="danger"
                aria-label="Loading..."
                className="mb-2"
              />
            )
          }
          bottomContent={
            <div className="flex flex-wrap justify-between items-center gap-2 w-full">
              <Pagination
                isCompact
                showControls
                showShadow
                color="danger"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />

              <Select
                size="sm"
                variant="underlined"
                label="Розмір пагінації"
                className="max-w-xs"
                defaultSelectedKeys={[pageSize.toString()]}
                onChange={handlePageSizeChange}
              >
                {pageSizes.map((pageSize) => (
                  <SelectItem key={pageSize.toString()}>
                    {pageSize.toString()}
                  </SelectItem>
                ))}
              </Select>
            </div>
          }
        >
          <TableHeader columns={getColumns()}>
            {(column) => (
              <TableColumn key={`${column.name}:${column.columnType}`}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>

          <TableBody items={paginatedData} emptyContent={"Данні не додані"}>
            {(item) => (
              <TableRow key={item._id}>
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
