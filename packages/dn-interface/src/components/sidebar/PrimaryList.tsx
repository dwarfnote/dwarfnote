import { Link } from "@tanstack/react-location";
import React, { useMemo } from "react";
import { NoteIcon, CalendarIcon, MapIcon, TrashIcon } from "../icons";

const PrimaryList = () => {
  const primaryLinks = useMemo(
    () => [
      {
        to: "drafts",
        label: "Drafts",
        icon: <NoteIcon />,
        badge: 12,
      },
      {
        to: "daily",
        label: "Daily",
        icon: <CalendarIcon />,
        badge: 12,
      },
      {
        to: "map",
        label: "Mind Map",
        icon: <MapIcon />,
      },
      {
        to: "trash",
        label: "Trash",
        icon: <TrashIcon />,
      },
    ],
    []
  );
  return (
    <div className="sidebar__section">
      <ul className="link-list">
        {primaryLinks.map((item) => (
          <li key={item.to} className="link-list__item link-item">
            <Link to={item.to} className="link-item__link">
              {({ isActive }) => (
                <div
                  className={`link-item__wrapper ${
                    isActive ? "link-item__wrapper--active" : ""
                  } `}
                >
                  <span className="link-item__icon">{item.icon}</span>
                  <span className="link-item__label">{item.label}</span>
                  {!!item.badge && (
                    <span className="link-item__badge">{item.badge}</span>
                  )}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrimaryList;
