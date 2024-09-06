import { ReactNode } from "react";

import { ColumnDef } from "@/common/types";

export interface EntityDetailsProps<T> {
  item: T;
  schema: ColumnDef[];
  entitySlug: string;
}

export function EntityDetails<T>({
  item,
  schema,
  entitySlug,
}: EntityDetailsProps<T>) {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h3 className="font-bold text-xl">Деталі сутності {entitySlug}</h3>
      </header>

      <main className="flex flex-col gap-3">
        {schema.map((field) => {
          return (
            <div key={field.name} className="flex gap-1">
              <span className="font-semibold">{field.label}:</span>

              <span>
                {(item[field.name as keyof T] as ReactNode)?.toString() ||
                  "null"}
              </span>
            </div>
          );
        })}
      </main>
    </div>
  );
}
