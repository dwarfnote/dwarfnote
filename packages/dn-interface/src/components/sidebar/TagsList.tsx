import { Link } from "@tanstack/react-location";
import { useMemo } from "react";
import { AddIcon } from "../icons";

const TagsList = () => {
  const tags = useMemo(
    () => [
      {
        to: "book",
        label: "Book",
        badge: 4,
        color: "#EF4444",
      },
      {
        to: "person",
        label: "Person",
        badge: 10,
        color: "#4ADE80",
      },
      {
        to: "article",
        label: "Article",
        badge: 14,
        color: "#EAB308",
      },
    ],
    []
  );

  return (
    <div className="sidebar__section">
      <div className="sidebar__section__header">
        <p className="sidebar__section__header__title">Tags</p>
        <div className="sidebar__section__header__actions">
          <button className="icon-btn icon-btn--small">
            <AddIcon />
          </button>
        </div>
      </div>
      <ul className="link-list">
        {tags.map((item) => (
          <li key={item.to} className="link-list__item link-item">
            <Link to={`tag/${item.to}`} className="link-item__link">
              {({ isActive }) => (
                <div
                  className={`link-item__wrapper ${
                    isActive ? "link-item__wrapper--active" : ""
                  } `}
                >
                  <span className="link-item__icon">
                    <span
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: 100,
                        backgroundColor: item.color,
                      }}
                    ></span>
                  </span>
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

export default TagsList;
