import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const links = [
    <>
      <li className="active:underline ">
        <a>Home </a>
      </li>
      <li className="active:underline ">
        <a>Product</a>
      </li>
      <li className="active:underline ">
        <a>Categories</a>
      </li>
      <li className="active:underline ">
        <a>SALE</a>
      </li>
    </>,
  ];
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
              <li>
                {" "}
                <div className="form-control relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search p-2 border rounded-md bg-gray-200 md:w-40 w-32 visited:bg-white "
                  />
                  <IoSearch className="absolute right-16 top-[17px]" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <a className="btn btn-ghost text-lg font-medium navbar-center">
          MEJIWOO <br />
          미지우
        </a>
        <div className="navbar-end gap-4 lg:gap-7 ">
          <div className="form-control relative hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="search p-2 border rounded-md bg-gray-200 w-24 md:w-44 visited:bg-white "
            />
            <IoSearch className="absolute right-5 top-[14px]" />
          </div>
          <HiOutlineShoppingBag className="text-2xl font-light" />
          <CgProfile className="text-2xl font-light" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
