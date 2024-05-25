import Link from "next/link";
import Image from "next/image";

import { AppPath } from "@/common/enums";

export const Logo = () => {
  return (
    <Link href={AppPath.HOME} className="shrink-0" aria-label="Rowdy">
      <Image width={130} height={25} alt="Rowdy Barbershop Logo" src="/images/logo-white.png" />
    </Link>
  );
};
