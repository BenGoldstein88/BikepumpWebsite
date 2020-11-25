import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Avatar,
  Typography
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
export const PumpUpWinners = React.memo(props => {
  const [rows, setRows] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  React.useEffect(() => {
    const loadData = async () => {
      setIsFetching(true);
      const response = await fetch(
        "https://test-bikepump-public.s3.amazonaws.com/marketingSite/leaderboard/leaderboards/20201123-mktg-leaderboard.json"
      );
      const json = await response.json();
      console.log("HERE IS RESPONSE", json);
      setRows(json.leaderboard || []);
      setIsFetching(false);
    };
    loadData();
  }, []);
  const theme = useTheme();
  const useStyles = makeStyles({
    table: {
      backgroundColor: theme.palette.dark.main
    },
    tableCell: {
      color: "white"
    },
    imageContainer: {
      display: "flex",
      //   justifyContent: "center",
      alignItems: "center"
    },
    rewardContainer: {
      display: "flex",
      alignItems: "center"
    }
  });
  const classes = useStyles();

  const parsePumpSeconds = pumpSeconds => {
    const hours = Math.floor(pumpSeconds / 3600);
    const minutes = Math.floor((pumpSeconds - hours * 3600) / 60);
    return `${hours > 0 && `${hours}h `}${minutes > 0 && `${minutes}m`}`;
  };
  return (
    <div>
      <Table className={classes.table}>
        <TableBody>
          {!isFetching &&
            rows.map((row, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className={classes.tableCell}>
                    {row.ranking}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <span className={classes.imageContainer}>
                      <Avatar src={row.imageUrl} />
                      {row.leaderboardName}
                    </span>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {parsePumpSeconds(row.pumpSeconds)}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <span className={classes.rewardContainer}>
                      <img src={row.rewardBadgeUrl} />
                      {row.paidAmount && (
                        <Typography>${row.paidAmount}</Typography>
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
  );
});
PumpUpWinners.propTypes = {};
