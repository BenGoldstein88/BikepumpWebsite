import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Button, IconButton } from "@material-ui/core";
import { HeaderDrawer } from "./HeaderDrawer";
import MenuIcon from "@material-ui/icons/Menu";
export const Header = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      minHeight: "60px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    icon: {
      color: "white"
    },
    text: {
      color: "white"
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
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>bikepump</Typography>
      <IconButton className={classes.icon} onClick={handleButtonClick}>
        <MenuIcon />
      </IconButton>
      <HeaderDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
});
Header.propTypes = {};
