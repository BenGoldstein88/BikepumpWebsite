import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Avatar,
  Typography,
  IconButton
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { asyncForEach } from "../../helpers/asyncForEach";
export const PumpUpWinners = React.memo(props => {
  const [rows, setRows] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);

  const [dateInfo, setDateInfo] = React.useState({});
  const [selectedDate, setSelectedDate] = React.useState(null);
  const determineDatesToQuery = async () => {
    let startDate = new Date("11/16/2020");
    const today = new Date();
    let datesToQuery = {
      [buildDateString(startDate)]: buildDateUrl(startDate)
    };
    startDate.setDate(startDate.getDate() + 7);
    console.log("#####");
    while (startDate.getTime() < today.getTime()) {
      datesToQuery[buildDateString(startDate)] = buildDateUrl(startDate);
      startDate.setDate(startDate.getDate() + 7);
    }
    console.log("#########", datesToQuery);

    await asyncForEach(Object.keys(datesToQuery).reverse(), async key => {
      const currentValue = datesToQuery[key];
      const response = await fetch(
        `https://test-bikepump-public.s3.amazonaws.com/marketingSite/leaderboard/leaderboards/${currentValue}-mktg-leaderboard.json`
      );
      const json = await response.json();
      setDateInfo({
        ...dateInfo,
        [key]: {
          displayDate: "",
          rows: json.leaderboard || []
        }
      });
    });
  };

  const buildDateUrl = date => {
    return `https://test-bikepump-public.s3.amazonaws.com/marketingSite/leaderboard/leaderboards/${buildDateString(
      date
    )}-mktg-leaderboard.json`;
  };

  const buildDateString = date => {
    return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  };
  React.useEffect(() => {
    const loadData = async () => {
      setIsFetching(true);
      const response = await fetch(
        "https://test-bikepump-public.s3.amazonaws.com/marketingSite/leaderboard/leaderboards/20201123-mktg-leaderboard.json"
      );
      const json = await response.json();
      console.log("HERE IS RESPONSE", json);
      setRows(json.leaderboard || []);

      //   await determineDatesToQuery();
      setIsFetching(false);
    };
    loadData();
  }, []);
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.dark.main,
      paddingTop: "64px"
    },
    headerText: {
      fontWeight: "bold",
      color: "white",
      marginLeft: "14px",
      marginBotton: "16px"
    },
    table: {
      backgroundColor: theme.palette.dark.main
    },
    tableCell: {
      color: "white"
    },
    ranking: {
      fontWeight: "bold"
    },
    imageContainer: {
      display: "flex",
      //   justifyContent: "center",
      alignItems: "center"
    },
    rewardContainer: {
      display: "flex",
      alignItems: "center"
    },
    leaderboardName: {
      marginLeft: "8px",
      color: theme.palette.placeholder.main
    },
    pumpSeconds: {
      //   whiteSpace: "nowrap"
      color: theme.palette.body.main
    },
    rewardText: {
      marginLeft: "4px",
      fontWeight: "bold"
    },
    gold: {
      color: theme.palette.gold.main
    },
    silver: {
      color: theme.palette.silver.main
    },
    bronze: {
      color: theme.palette.bronze.main
    },
    interactionContainer: {
      display: "flex",
      color: "white",
      alignItems: "center"
    },
    navigationIcon: {
      color: "white"
    },
    tableContainer: {
      width: "100%",
      display: "block"
    }
  });
  const classes = useStyles();

  const parsePumpSeconds = pumpSeconds => {
    const hours = Math.floor(pumpSeconds / 3600);
    const minutes = Math.floor((pumpSeconds - hours * 3600) / 60);
    return `${hours > 0 && `${hours}h `}${minutes > 0 && `${minutes}m`}`;
  };
  return (
    <div className={classes.root}>
      <Typography variant={"h5"} className={classes.headerText}>
        Past Winners
      </Typography>
      <div className={classes.interactionContainer}>
        <IconButton>
          <ChevronLeftIcon className={classes.navigationIcon} />
        </IconButton>
        <Typography variant="h3">DATE - DATE</Typography>
        <IconButton>
          <ChevronRightIcon className={classes.navigationIcon} />
        </IconButton>
      </div>
      <div className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableBody>
            {!isFetching &&
              rows?.map((row, i) => {
                const isGold = row.rewardBadgeUrl.includes("weekly-bonus-gold");
                const isSilver = row.rewardBadgeUrl.includes(
                  "weekly-bonus-silver"
                );
                const isBronze = row.rewardBadgeUrl.includes(
                  "weekly-bonus-bronze"
                );

                return (
                  <TableRow key={i}>
                    <TableCell className={`${classes.tableCell}`}>
                      <Typography className={classes.ranking} variant="body1">
                        #{row.ranking}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <span className={classes.imageContainer}>
                        <Avatar src={row.imageUrl} />
                        <Typography
                          variant={"body1"}
                          className={classes.leaderboardName}
                        >
                          {row.leaderboardName}
                        </Typography>
                      </span>
                    </TableCell>
                    <TableCell
                      className={`${classes.tableCell} ${classes.pumpSeconds}`}
                    >
                      <Typography variant="body1">
                        {parsePumpSeconds(row.pumpSeconds)}
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <span className={classes.rewardContainer}>
                        <img src={row.rewardBadgeUrl} />
                        {row.paidAmount && (
                          <Typography
                            className={`${classes.rewardText} ${
                              isGold
                                ? classes.gold
                                : isSilver
                                ? classes.silver
                                : classes.bronze
                            }`}
                          >
                            ${row.paidAmount}
                          </Typography>
                        )}
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
            {isFetching && <CircularProgress />}
          </TableBody>
        </Table>
      </div>
    </div>
  );
});
PumpUpWinners.propTypes = {};
