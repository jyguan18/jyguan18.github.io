import React, { useState } from "react";

const menuItems = {
  Home: [],
  About: [],
  Projects: [],
  Contact: [],
  Resume: ["Download PDF", "View Online"],
};

type Page = "Home" | "Projects" | "About" | "Contact";

type TopToolbarProps = {
  currentPage: "Home" | "Projects";
  onPageChange: (menu: Page) => void;
};

const TopToolbar: React.FC<TopToolbarProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleClickMenu = (menu: string) => {
    setOpenMenu(null);
    if (["Home", "Projects", "About", "Contact"].includes(menu)) {
      onPageChange(menu as Page);
    }
  };

  const handleItemClick = (menu: string, item: string) => {
    console.log(`Clicked submenu item "${item}" in "${menu}"`);
    setOpenMenu(null);
  };

  return (
    <div>
      <div className="bg-midnight text-blush flex items-center px-3 h-8 select-none border-b border-black/60 font-mono text-xl font-bold w-full relative z-10">
        <h3>Jackie Guan</h3>
      </div>
      <div className="bg-lavender text-gray-300 flex items-center px-3 h-8 select-none border-b border-black/60 font-mono text-xs w-full relative z-10">
        {Object.entries(menuItems).map(([menu, items]) => (
          <div
            key={menu}
            className="relative"
            onMouseEnter={() => setOpenMenu(menu)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div
              className={`cursor-pointer px-2 py-0.5 rounded ${
                currentPage === menu
                  ? "bg-midnight text-white"
                  : "hover:bg-midnight"
              }`}
              onClick={() => handleClickMenu(menu)}
            >
              {menu}
            </div>

            {openMenu === menu && items.length > 0 && (
              <div className="absolute left-0 bg-midnight border border-lavender shadow-md rounded-sm w-40">
                {items.map((item) => (
                  <div
                    key={item}
                    className="px-3 py-1 hover:bg-lavender cursor-pointer"
                    onClick={() => handleItemClick(menu, item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopToolbar;
