import React from "react";
import PropTypes from "prop-types";
import { PrizeTier } from "./PrizeTier";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
export const PumpUpChallenge = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    fineprint: {}
  });
  const classes = useStyles();
  return (
    <div>
      <div>BIG IMAGE OF TROPHIES</div>
      <PrizeTier
        name="Champion"
        icon={null}
        value={200}
        number={1}
        description={
          "The rider with the most hours at the end of the week will earn $200 and prove to be one of New York's top riders."
        }
      />
      <PrizeTier
        name="Sprinters"
        icon={null}
        value={100}
        number={9}
        description={"Be in the Top 10 at the end of the week and earn $100."}
      />
      <PrizeTier
        name="Lucky Ducks"
        icon={null}
        value={50}
        number={10}
        description={
          "10 lucky ducks will be randomly chosen every Sunday to win $50 each."
        }
      />
      <Typography variant="body2" className={classes.fineprint}>
        A minimum of 3h ride time is required to be eligible for a Lucky Duck
        prize.
      </Typography>
    </div>
  );
});
PumpUpChallenge.propTypes = {};
