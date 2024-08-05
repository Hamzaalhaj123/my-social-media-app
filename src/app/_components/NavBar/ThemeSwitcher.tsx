"use client";

// import { Button } from "@/app/_components/shared/Button";
import { Button } from "../../_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../_components/ui/dropdown-menu";
import useTheme from "@/app/_hooks/shared/useTheme";

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
