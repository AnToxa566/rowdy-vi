import { FC } from "react";
import Link from "next/link";

import { Button } from "@nextui-org/react";

export interface SectionTitleProps {
  title: string;
  actionHref?: string;
  actionLabel?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  title,
  actionHref,
  actionLabel,
}) => {
  return (
    <div className="flex items-center gap-4 justify-between w-full md:justify-start md:w-auto">
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight uppercase">
        {title}
      </h2>

      {actionHref && actionLabel && (
        <Link href={actionHref} target="_blank">
          <Button
            size="sm"
            radius="full"
            color="primary"
            className="bg-[#e62621]"
          >
            {actionLabel}
          </Button>
        </Link>
      )}
    </div>
  );
};
