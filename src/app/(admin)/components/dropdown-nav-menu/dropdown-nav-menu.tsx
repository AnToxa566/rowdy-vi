"use client";

import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownItem,
  DropdownMenu,
  Link,
} from "@nextui-org/react";
import { RiMenuLine } from "@remixicon/react";

import { sidebarLinks } from "../sidebar";

export const DropdownNavMenu = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="lg" isIconOnly color="danger">
          <RiMenuLine />
        </Button>
      </DropdownTrigger>

      <DropdownMenu>
        {sidebarLinks.map((link) => (
          <DropdownItem key={link.link}>
            <Link
              key={link.label}
              href={link.link}
              className="flex gap-2 text-black"
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
