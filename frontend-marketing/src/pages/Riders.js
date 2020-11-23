import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Hero } from "../components/riders/Hero";
import { PaysToRide } from "../components/riders/PaysToRide";
import { JoinLaunchTeam } from "../components/riders/JoinLaunchTeam";
import { WinPrizes } from "../components/riders/WinPrizes";
import { PumpUpChallenge } from "../components/riders/PumpUpChallenge";
import { DownloadApp } from "../components/riders/DownloadApp";
import { PumpUpWinners } from "../components/riders/PumpUpWinners";
import { FAQ } from "../components/riders/FAQ";
import { Parallax, Background } from "react-parallax";

export const Riders = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({});
  const classes = useStyles();
  return (
    <div>
      <Hero />
      <PaysToRide />
      <JoinLaunchTeam />
      <WinPrizes />
      <PumpUpChallenge />
      <DownloadApp />
      <PumpUpWinners />
      <FAQ />
    </div>
  );
});
Riders.propTypes = {};
