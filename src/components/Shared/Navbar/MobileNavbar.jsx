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
            <DropdownMenuRadioItem value="bottom">
              <Link href="/">Home</Link>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="top">
              <Link href="/blogs">Blogs</Link>
            </DropdownMenuRadioItem>
            {user && (
              <DropdownMenuRadioItem value="right">
                <Link href="/profile">Profile</Link>
              </DropdownMenuRadioItem>
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MobileNavbar;
