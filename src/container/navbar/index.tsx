import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex flex-row my-14 ml-52 items-center text-md text-black font-semibold">
      <NavLink className="ml-6" to="/">
        <div>Home</div>
      </NavLink>
      <NavLink className="ml-6" to="/about">
        <div>About</div>
      </NavLink>
      <NavLink className="ml-6" to="/kepengurusan">
        <div>Kepengurusan</div>
      </NavLink>
      <NavLink className="ml-6" to="/inventaris">
        <div>Inventaris</div>
      </NavLink>
    </nav>
  );
}
