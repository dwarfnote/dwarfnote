import { SearchIcon } from "../icons";

const SearchButton = () => {
  return (
    <button className="sidebar__search-btn">
      <div className="sidebar__search-btn__wrapper">
        <span className="sidebar__search-btn__icon">
          <SearchIcon />
        </span>
        <span className="sidebar__search-btn__label">Search...</span>
        <kbd className="sidebar__search-btn__kbd">/</kbd>
      </div>
    </button>
  );
};

export default SearchButton;
