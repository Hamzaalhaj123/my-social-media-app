import AuthManager from "./_components/AuthManager";
import ShowUsers from "./_components/ShowUsers";

export default function Home() {
  return (
    <>
      <AuthManager />
      <ShowUsers />
    </>
  );
}
