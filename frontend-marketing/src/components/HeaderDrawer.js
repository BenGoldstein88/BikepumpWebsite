import React from "react";
import PropTypes from "prop-types";
import { Drawer, IconButton, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import bikepumpIcon from "../assets/bikepump-icon.svg";
import { Link } from "react-router-dom";
export const HeaderDrawer = React.memo(props => {
  const { isOpen, toggleDrawer } = props;
  const theme = useTheme();
  const useStyles = makeStyles({
    drawer: {
      //   backgroundColor: theme.palette.purple.main
    },
    drawerContent: {
      width: "95vw",
      backgroundColor: theme.palette.purple.main,
      height: "100%",
      paddingTop: "34px",
      color: "white",
      zIndex: 999999
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "32px"
    },
    closeIcon: {
      color: "white",
      marginRight: "24px"
    },
    icon: {
      marginLeft: "32px",
      height: "54px",
      width: "54px"
    },
    closeIconInner: {
      fontSize: "40px"
    },
    link: {
      marginLeft: "32px",
      marginBottom: "32px"
    }
  });
  const classes = useStyles();

  const handleCloseButtonClick = () => {
    toggleDrawer();
  };
  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        open={isOpen}
        anchor={"right"}
        onClose={toggleDrawer}
      >
        <div className={classes.drawerContent}>
          <div className={classes.headerContainer}>
            <img className={classes.icon} src={bikepumpIcon} />
            <IconButton
              onClick={handleCloseButtonClick}
              className={classes.closeIcon}
            >
              <CloseIcon className={classes.closeIconInner} size="large" />
            </IconButton>
          </div>
          <div className={classes.contentContainer}>
            <Typography variant="h3" className={classes.link}>
              <Link to={"/advertisers"}>Advertisers</Link>
            </Typography>
            <Typography variant="h3" className={classes.link}>
              <Link to={"/riders"}>Riders</Link>
            </Typography>
            <Typography variant="h3" className={classes.link}>
              <Link to={"/privacypolicy"}>Privacy Policy</Link>
            </Typography>
            <Typography variant="h3" className={classes.link}>
              <Link to={"/contactus"}>Contact Us</Link>
            </Typography>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
});
HeaderDrawer.propTypes = {};
