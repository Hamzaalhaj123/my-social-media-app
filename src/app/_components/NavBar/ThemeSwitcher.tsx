"use client";

import useTheme from "@/app/_hooks/shared/useTheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import { Button } from "../ui/Button";

export default function ThemeSwitcher() {
  const [theme, handleSwitch] = useTheme();
  console.log(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{theme ?? "system"}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => handleSwitch("dark")}>
          dark
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSwitch("light")}>
          light
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSwitch(null)}>
          system
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
