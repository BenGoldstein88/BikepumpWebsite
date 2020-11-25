import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Button, IconButton } from "@material-ui/core";
import { HeaderDrawer } from "./HeaderDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/Bikepump-Logo.svg";
export const Header = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "60px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "40px 0px"
    },
    icon: {
      color: "white",
      marginRight: "19px"
    },
    text: {
      color: "white"
    },
    logo: {
      marginLeft: "19px"
    }
  });
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleButtonClick = () => {
    toggleDrawer();
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleIconClick = () => {};
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} />
      <IconButton className={classes.icon} onClick={handleButtonClick}>
        <MenuIcon />
      </IconButton>
      <HeaderDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
});
Header.propTypes = {};
