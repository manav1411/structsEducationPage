import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";

interface SidebarItemProps {
  item: {
    name: string;
    children?: SidebarItemProps["item"][];
    isOpen?: boolean;
    url: string;
  };
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
  const [open, setOpen] = useState(item.isOpen || false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const currentPath = window.location.pathname;

  useEffect(() => {
    setIsHighlighted(currentPath.includes(item.url));

    console.log(currentPath);

    if (currentPath.includes(item.url)) {
      setOpen(true);
    }
  }, [currentPath]);

  const toggleOpen = () => {
    setOpen(!open);
    item.isOpen = !item.isOpen;
  };

  if (item.children) {
    return (
      <div className={isHighlighted ? "sidebar-item highlighted" : "sidebar-item"}>
        <div className="sidebar-title">
          <div className="sidebar-name">{item.name}</div>
          <div className="sidebar-arrow" onClick={toggleOpen}>
            {open ? <AiOutlineDown /> : <AiOutlineRight />}
          </div>
        </div>
        {open && (
          <div className="sidebar-content">
            {item.children.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={`sidebar-item plain ${currentPath === item.url ? "focus" : ""}`}>
        {item.name}
      </div>
    );
  }
};

export default SidebarItem;
