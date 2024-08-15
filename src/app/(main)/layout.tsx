import SessionProvidor from "@/app/(main)/SessionProvidor";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "./Navbar";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validateRequest();
  if (!session.user) redirect("/login");

  return (
    <SessionProvidor value={session}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className=" mx-auto max-w-7xl p-5">{children}</div>
      </div>
    </SessionProvidor>
  );
}
