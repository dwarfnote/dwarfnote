import { useMemo } from "react";
import styled, { css } from "styled-components";
import { Theme } from "../../theme";
import { AddIcon } from "../icons";
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

const TagCircle = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.75em;
`;

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
    <SidebarSection>
      <SidebarSectionHeader>
        <SidebarSectionHeaderTitle>Tags</SidebarSectionHeaderTitle>
        <SidebarSectionHeaderButton>
          <AddIcon />
        </SidebarSectionHeaderButton>
      </SidebarSectionHeader>
      <SidebarList>
        {tags.map((item) => (
          <li key={item.to}>
            <SidebarItemLink to={`tag/${item.to}`}>
              <SidebarItemIcon>
                <TagCircle style={{ backgroundColor: item.color }} />
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

export default TagsList;
