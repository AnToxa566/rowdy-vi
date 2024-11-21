import { FC } from "react";
import { useTranslations } from "next-intl";

export interface SectionContainerProps {
  id: string;
  isBlackBg?: boolean;
  children: React.ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  id,
  children,
  isBlackBg = false,
}) => {
  const t = useTranslations();

  return (
    <section
      id={id}
      className={`relative z-30 py-10 px-4 sm:px-8 ${
        isBlackBg ? "bg-black text-white" : "bg-white"
      }`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};
