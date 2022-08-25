import { Link } from "@tanstack/react-location";
import { useMemo } from "react";
import { AddIcon, ExpandMoreIcon, NotebookIcon } from "../icons";

const NotebooksList = () => {
  const notebooks = useMemo(
    () => [
      {
        to: "books",
        label: "Books",
        badge: 2,
        children: [
          {
            to: "atomic-habits",
            label: "Atomic Habits",
            badge: 12,
          },
          {
            to: "mindset",
            label: "Mindset",
            badge: 3,
          },
        ],
      },
      {
        to: "projects",
        label: "Projects",
        badge: 4,
        children: [
          {
            to: "dwarfnote",
            label: "Dwarfnote",
            badge: 15,
          },
          {
            to: "codetoimg",
            label: "CodeToImg",
            badge: 3,
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="sidebar__section">
      <div className="sidebar__section__header">
        <p className="sidebar__section__header__title">Notebooks</p>
        <div className="sidebar__section__header__actions">
          <button className="icon-btn icon-btn--small">
            <AddIcon />
          </button>
        </div>
      </div>
      <ul className="link-list">
        {notebooks.map((item) => (
          <li key={item.to} className="link-list__item link-item">
            <Link to={`notebook/${item.to}`} className="link-item__link">
              {({ isActive }) => (
                <div
                  className={`link-item__wrapper ${
                    isActive ? "link-item__wrapper--active" : ""
                  } `}
                >
                  <span className="link-item__icon">
                    <NotebookIcon />
                  </span>
                  <span className="link-item__label">{item.label}</span>
                  {!!item.badge && (
                    <span className="link-item__badge">{item.badge}</span>
                  )}
                  <button className="link-item__expand-btn icon-btn icon-btn--small">
                    <ExpandMoreIcon />
                  </button>
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotebooksList;
