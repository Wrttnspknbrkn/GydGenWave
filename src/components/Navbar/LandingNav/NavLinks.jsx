import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoChevronDown } from "react-icons/io5";
import { Menuitems } from "./menuItems";

const NavLinks = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [active, setActive] = useState(Menuitems[0].id);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const handleDropdownEnter = (itemId) => {
    setActiveDropdown(itemId);
    // setActive(itemId);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleChildClick = (parentId) => {
    setActive(parentId);
  };

  useEffect(() => {
    if (pathname != "/") {
      setActive(0);
    }
  }, []);
  return (
    <div>
      <ul className="flex items-center justify-center w-full space-x-3">
        {Menuitems?.map((item) => {
          let isActive = false;
          if (item.children) {
            item.children.find((item) => {
              if (item?.children) {
                let nestedvalue = item.children.find(
                  (value) => value.href === pathname
                );
                if (nestedvalue) {
                  isActive = true;
                }
              } else {
                let value = item.href === pathname;
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
            <li key={item.id} className="relative group">
              {item.children ? (
                <Link
                  to={item.href}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleDropdownEnter(item.id)}
                  onClick={() => {
                    setActive(item.id);
                  }}
                >
                  <p
                    className={`w-full hover:font-semibold text-[14px] transition-all ease-in  ${
                      isActive
                        ? "text-primary font-semibold"
                        : "group-hover:bg-lightprimary group-hover:text-primary text-[#94A3B8]"
                    } py-2 px-3 rounded-md flex gap-2 items-center text-ld`}
                  >
                    <div>
                      <span className="flex gap-2 items-center w-full ">
                        <span>{item.title}</span>
                        {item.children && <IoChevronDown className="ms-auto" />}
                      </span>
                    </div>
                  </p>
                  {activeDropdown === item.id && (
                    <div
                      className={`absolute left-0 rtl:right-0 mt-2 z-[100]  bg-white dark:bg-dark rounded-md shadow-lg ${
                        item.column == 4 ? "w-screen max-w-[800px]" : "w-52"
                      }`}
                      onMouseEnter={() => handleDropdownEnter(item.id)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <ul
                        className={`p-3 text-sm  gap-2  ${
                          item.column == 4
                            ? "grid grid-cols-2"
                            : "flex flex-col"
                        } `}
                      >
                        {item.children.map((child) => (
                          <li
                            key={child.id}
                            className={` ${item.column == 4 ? "mb-2" : ""} `}
                            title={child.title}
                            onClick={() => {
                              handleChildClick(item.id);
                            }}
                          >
                            <Link to={child.href}>
                              <p
                                className={`w-full ${
                                  child.href === pathname
                                    ? "text-primary dark:text-primary hover:text-primary"
                                    : "group-hover/nav:bg-lightprimary group-hover/nav:text-primary"
                                } py-1 px-3 rounded-md flex gap-3 items-center text-ld  hover:text-primary`}
                              >
                                <span className="flex gap-3 items-center w-full">
                                  {child.icon && <child.icon />}
                                  <span className="">{`${child.title}`}</span>
                                </span>
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Link>
              ) : (
                <Link to={item.href} onClick={() => setActive(item.id)}>
                  <p
                    className={`hover:font-semibold transition-all ease-in text-[#94A3B8] text-[14px] group-hover:text-primary py-2 px-3 rounded-md flex gap-2 items-center ${
                      active === item.id
                        ? "text-primary font-semibold"
                        : "group-hover/nav:bg-primary group-hover/nav:text-primary font-light"
                    }`}
                  >
                    <span>{`${item.title}`}</span>
                  </p>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
