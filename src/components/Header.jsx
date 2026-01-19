export const Header = () => {
  return (
    <>
      <div className="sticky z-10 lg:fixed top-0 w-full lg:top-5 lg:px-5">
        <div className="navbar bg-base-100 shadow-sm lg:rounded-xl">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex-1">
              <a href="#top" className="btn btn-ghost text-xl">
                Portfolio
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#social">Social</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
