import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons

const menuItems = {
  Home: [],
  About: [],
  Projects: [],
  Contact: [],
  Resume: ["Download PDF", "View Online"],
};

type Page = "Home" | "Projects" | "About" | "Contact";

type TopToolbarProps = {
  currentPage: Page;
  onPageChange: (menu: Page) => void;
};

const TopToolbar: React.FC<TopToolbarProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClickMenu = (menu: string) => {
    setOpenMenu(null);
    if (["Home", "Projects", "About", "Contact"].includes(menu)) {
      onPageChange(menu as Page);
    }
  };

  const handleItemClick = (menu: string, item: string) => {
    console.log(`Clicked submenu item "${item}" in "${menu}"`);
    setOpenMenu(null);
    setMobileOpen(false);
  };

  return (
    <div id="navbar">
      {/* Header */}
      <div className="bg-midnight text-blush flex justify-between items-center p-3 text-xl font-bold w-full relative z-10 border-b-2 border-lavender">
        <h1>Jackie Guan</h1>
        <button
          className="sm:hidden text-lavender"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex bg-lavender text-gray-300 items-center px-3 h-8 select-none border-b border-black/60 font-mono text-sm w-full relative z-10 gap-x-2">
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
              <div className="absolute left-0 bg-midnight border border-lavender shadow-md rounded-sm w-40 z-20">
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden bg-lavender border-t border-black/60 font-mono text-sm px-3 py-2 space-y-2 mx-2 rounded-b-xl">
          {Object.entries(menuItems).map(([menu, items]) => (
            <div key={menu}>
              <div
                className={`cursor-pointer px-2 py-1 rounded ${
                  currentPage === menu
                    ? "bg-midnight text-white"
                    : "hover:bg-midnight"
                }`}
                onClick={() => handleClickMenu(menu)}
              >
                {menu}
              </div>
              {items.length > 0 && (
                <div className="ml-4 mt-1 space-y-1">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="cursor-pointer text-sm hover:text-white"
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
      )}
    </div>
  );
};

export default TopToolbar;
