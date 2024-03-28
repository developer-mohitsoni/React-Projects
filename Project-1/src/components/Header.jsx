const Header = () => {
  return (
    <nav className="flex justify-between max-w-screen-2xl m-auto h-24 bg-slate-400 items-center px-2">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="" />
      </div>

      <div className="font-bold text-2xl">
        <ul className="flex list-none gap-10">
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </div>

      <div className="text-2xl border-[3px] border-solid border-black hover:cursor-pointer rounded-sm py-[6px] px-4 bg-[#D01C28] text-white font-medium">
        <button>Login</button>
      </div>
    </nav>
  );
};
export default Header;
