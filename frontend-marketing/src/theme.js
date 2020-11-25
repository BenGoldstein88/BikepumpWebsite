export const defaultTheme = {
  typography: {
    fontFamily: ["Montserrat"].join(","),
    h1: {
      fontFamily: "Montserrat",
      fontSize: "48px"
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "32px"
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "20px"
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "14px"
    },
    h5: {
      fontFamily: "Montserrat",
      fontSize: "24px"
    },
    // subtitle1: {
    //   fontFamily: "Montserrat"
    // },
    // subtitle2: {
    //   fontFamily: "Montserrat"
    // },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "16px"
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "12px"
    }
  },
  palette: {
    primary: {
      main: "#2E30E0",
      dark: "#1517C6"
    },
    secondary: {
      main: "#dd7727"
    },
    dark: {
      main: "#0D192E",
      light: "#303E57"
    },
    teal: {
      main: "#31F2BC"
    },
    active: {
      main: "#E0E8FF",
      dark: "#D5E0FE",
      variant: "#D5E7EB"
    },
    placeholder: {
      main: "#BBC1C6"
    },
    grey: {
      main: "#f2f6f7"
    },
    footer: {
      main: "#061023"
    },
    gold: {
      main: "#E77801"
    },
    silver: {
      main: "#929EA3"
    },
    bronze: {
      main: "#AA582C"
    },
    body: {
      main: "#6E7582"
    },
    purple: {
      main: "#1C132F"
    }
  },
  overrides: {
    MuiTableCell: {
      root: {
        padding: "6px"
      }
    },
    MuiAccordionSummary: {
      root: {
        padding: "10px 19px",
        borderBottom: "1px solid #303E57",
        "&:last-of-type": {
          borderBottom: "none"
        }
      }
    },
    MuiAccordionDetails: {
      root: {
        padding: "10px 19px 50px 19px",
        borderBottom: "1px solid #303E57"
      }
    }
  }
};
