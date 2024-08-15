import ThemeSwitcher from "../_components/NavBar/ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="bg-background-lighter flex justify-between  px-5 py-2 shadow-md">
      <div className=" bg-success-lighter ">Logo</div>
      <nav className=" flex justify-center  bg-primary-darker flex-[3]">
        nav
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
