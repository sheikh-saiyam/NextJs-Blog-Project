"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const MobileNavbar = ({ user }) => {
  const [position, setPosition] = useState("bottom");
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">☰</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuLabel>NavLinks</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <Link href="/">
              {" "}
              <DropdownMenuRadioItem value="bottom">Home</DropdownMenuRadioItem>
            </Link>
            <Link href="/blogs">
              <DropdownMenuRadioItem value="top">Blogs</DropdownMenuRadioItem>
            </Link>
            {user && (
              <Link href="/profile">
                <DropdownMenuRadioItem value="right">
                  Profile
                </DropdownMenuRadioItem>
              </Link>
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MobileNavbar;
