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
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export const Riders = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({});
  const classes = useStyles();
  return (
    <div>
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
      {/* <Hero />
      <Parallax pages={7}>
        <ParallaxLayer offset={0} factor={0.5}>
          <PaysToRide />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={0.5}>
          <JoinLaunchTeam />
        </ParallaxLayer>
        <ParallaxLayer offset={2} factor={0.5}>
          <WinPrizes />
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={0.5}>
          <PumpUpChallenge />
        </ParallaxLayer>
        <ParallaxLayer offset={4} factor={0.5}>
          <DownloadApp />
        </ParallaxLayer>
        <ParallaxLayer offset={5} factor={0.5}>
          <PumpUpWinners />
        </ParallaxLayer>
        <ParallaxLayer offset={6} factor={0.5}>
          <FAQ />
        </ParallaxLayer>
      </Parallax> */}
    </div>
  );
});
Riders.propTypes = {};
