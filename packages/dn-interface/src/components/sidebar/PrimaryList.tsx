import { useMemo } from "react";
import { NoteIcon, CalendarIcon, MapIcon, TrashIcon } from "../icons";
import {
  SidebarItemBadge,
  SidebarItemIcon,
  SidebarItemLabel,
  SidebarItemLink,
  SidebarList,
  SidebarSection,
} from "./sidebar.styles";

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
    <SidebarSection>
      <SidebarList>
        {primaryLinks.map((item) => (
          <li key={item.to}>
            <SidebarItemLink to={item.to}>
              <SidebarItemIcon>{item.icon}</SidebarItemIcon>
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

export default PrimaryList;
