import { useState } from "react";
import NotebooksList from "./NotebooksList";
import PrimaryList from "./PrimaryList";
import SearchButton from "./SearchButton";
import { SidebarBody, SidebarWrapper } from "./sidebar.styles";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import TagsList from "./TagsList";

const Sidebar = () => {
  const [width, setWidth] = useState(240);

  return (
    <SidebarWrapper
      style={{
        width,
      }}
    >
      <SidebarHeader />
      <SidebarBody>
        <SearchButton />
        <PrimaryList />
        <NotebooksList />
        <TagsList />
      </SidebarBody>
      <SidebarFooter />
    </SidebarWrapper>
  );
};

export default Sidebar;
