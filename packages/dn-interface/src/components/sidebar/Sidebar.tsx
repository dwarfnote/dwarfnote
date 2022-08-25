import { Link } from "@tanstack/react-location";
import { useMemo, useState } from "react";
import {
  AddIcon,
  RecentIcon,
  CalendarIcon,
  ExpandMoreIcon,
  MapIcon,
  NoteIcon,
  SearchIcon,
  StarIcon,
  TrashIcon,
  NotebookIcon,
} from "../icons";
import NotebooksList from "./NotebooksList";
import PrimaryList from "./PrimaryList";
import SearchButton from "./SearchButton";
import TagsList from "./TagsList";

const Sidebar = () => {
  const [width, setWidth] = useState(220);

  return (
    <div
      className="sidebar"
      style={{
        width,
      }}
    >
      <div className="sidebar__body">
        <SearchButton />
        <PrimaryList />
        <NotebooksList />
        <TagsList />
      </div>
    </div>
  );
};

export default Sidebar;
