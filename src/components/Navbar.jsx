import ThemeController from "./ThemeController";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-5xl font-extrabold">LLC</a>
      </div>
      <div className="dropdown md:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div className="flex-none hidden md:block" id="menu">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About us</a>
          </li>
        </ul>
      </div>
      <ThemeController />
    </div>
  );
};
