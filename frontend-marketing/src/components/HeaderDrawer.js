import React from "react";
import PropTypes from "prop-types";
import { Drawer } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
export const HeaderDrawer = React.memo(props => {
  const { isOpen, toggleDrawer } = props;
  const theme = useTheme();
  const useStyles = makeStyles({
    drawerContent: {
      width: "90vw"
    }
  });
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        open={isOpen}
        anchor={"right"}
        onClose={toggleDrawer}
      >
        <div className={classes.drawerContent}>Some Stuff</div>
      </Drawer>
    </React.Fragment>
  );
});
HeaderDrawer.propTypes = {};
