import SessionProvider from "@/app/(main)/SessionProvider";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "../_components/NavBar/NavBar";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validateRequest();
  if (!session.user) redirect("/login");

  return (
    <SessionProvider value={session}>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <div className=" mx-auto max-w-7xl p-5 bg-background-lighter">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}
