"use client";

import { logout } from "@/app/(auth)/logout/actions";
import { Button } from "@/app/_components/ui/button";

export default function Logout() {
  return (
    <Button
      onClick={() => {
        logout();
      }}
    >
      Logout
    </Button>
  );
}
