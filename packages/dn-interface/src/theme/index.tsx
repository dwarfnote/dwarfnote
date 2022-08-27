const theme = {
  colors: {
    sidebar: {
      primaryBackground: "#202225",
      secondaryBackground: "#36393F",
      primaryBorder: "#36393F",
      secondaryBorder: "#42464D",
      primaryText: "#DCDDDE",
      secondaryText: "#96989D",
      activeBackground: "#6366F1",
      activeText: "#FFFFFF",
      headerBackground: "#202225",
      headerShadow: "0px 0px 0px #202225",
      footerBackground: "#202225",
      footerShadow: "0px 0px 0px #202225",
    },
    app: {
      background: "#2F3037",
      color: "#FFFFFF",
    },
  },
};

export default theme;

export type Theme = typeof theme;

export type StyledProps = { theme: Theme };
