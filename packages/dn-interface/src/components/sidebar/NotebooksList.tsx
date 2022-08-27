import { Link } from "@tanstack/react-location";
import { useMemo } from "react";
import { AddIcon, ExpandMoreIcon, NotebookIcon } from "../icons";
import {
  SidebarItemBadge,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarItemLink,
  SidebarList,
  SidebarSection,
  SidebarSectionHeader,
  SidebarSectionHeaderButton,
  SidebarSectionHeaderTitle,
} from "./sidebar.styles";

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
    <SidebarSection>
      <SidebarSectionHeader>
        <SidebarSectionHeaderTitle>Notebooks</SidebarSectionHeaderTitle>
        <SidebarSectionHeaderButton>
          <AddIcon />
        </SidebarSectionHeaderButton>
      </SidebarSectionHeader>
      <SidebarList>
        {notebooks.map((item) => (
          <li key={item.to} className="notebooks-list__item">
            <SidebarItemLink to={`notebook/${item.to}`}>
              <SidebarItemIcon>
                <NotebookIcon />
              </SidebarItemIcon>
              <SidebarItemLabel>{item.label}</SidebarItemLabel>
              {!!item.badge && (
                <SidebarItemBadge>{item.badge}</SidebarItemBadge>
              )}
            </SidebarItemLink>
          </li>
        ))}
      </SidebarList>
    </SidebarSection>
  );
};

export default NotebooksList;
