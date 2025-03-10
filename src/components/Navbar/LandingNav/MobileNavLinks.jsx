import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { Menuitems } from "./menuItems";

const MobileNavLinks = ({ setIsMenuOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(3);
  const [active, setActive] = useState(Menuitems[0].id);
  const location = useLocation();
  const pathname = location.pathname;

  const handleDropdownToggle = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleChildClick = (parentId) => {
    setActive(parentId);
  };

  useEffect(() => {
    if (pathname !== "/") {
      setActive(0);
    }
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div>
      <ul className="flex flex-col md:flex-row items-start md:items-center justify-center w-full space-y-2 md:space-x-3">
        {Menuitems?.map((item) => {
          let isActive = false;
          if (item.children) {
            item.children.find((child) => {
              if (child?.children) {
                let nestedvalue = child.children.find(
                  (value) => value.href === pathname
                );
                if (nestedvalue) {
                  isActive = true;
                }
              } else {
                let value = child.href === pathname;
                if (value) {
                  isActive = true;
                }
              }
            });
            let value = item.href === pathname;
            if (value) {
              isActive = true;
            }
          } else {
            let value = item.href === pathname;
            if (value) {
              isActive = true;
            }
          }

          return (
            <li key={item.id} className="relative w-full">
              <Link
                to={item.href}
                className={`w-full flex mobile-nav__link items-center justify-between px-3 py-2 rounded-md text-[14px] transition-all ease-in-out duration-300 ${
                  isActive ? "active" : "text-[#94A3B8]"
                }`}
                onClick={() => item.children && handleDropdownToggle(item.id)}
              >
                <span>{item.title}</span>
                {item.children && (
                  <IoChevronDown
                    className={`transform transition-transform duration-300 ${
                      activeDropdown === item.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </Link>
              {activeDropdown === item.id && item.children && (
                <ul className="pl-6 pt-2 space-y-2 transition-opacity duration-300 opacity-100">
                  {item.children.map((child) => (
                    <li key={child.id} title={child.title}>
                      <Link
                        to={child.href}
                        onClick={() => handleChildClick(item.id)}
                      >
                        <p
                          className={`block py-1 px-3 rounded-md text-[16px] transition-all ease-in-out duration-300 ${
                            child.href === pathname
                              ? "text-primary font-semibold"
                              : "text-[#94A3B8] hover:text-primary"
                          }`}
                        >
                          {child.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNavLinks;
