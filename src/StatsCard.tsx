import React from "react";
import {
  Paper,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Divider,
  Grid,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useAxiosRequest } from "use-axios-request";
interface StatsCardProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
    },
    mainTitle: {
      fontSize: theme.typography.h6.fontSize,
      marginBottom: theme.spacing(3),
    },
    subtitle: {
      textTransform: "uppercase",
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
    },
    statsGroup: {
      marginTop: theme.spacing(3),
    },
  })
);
const StatsCard = (props: StatsCardProps) => {
  const { isFetching, error, data } = useAxiosRequest(
    `https://disease.sh/v2/all?yesterday=true`
  );

  console.log(isFetching);
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="h1" className={classes.mainTitle}>
        Worldwide
      </Typography>
      <Divider light />
      <Grid
        className={classes.statsGroup}
        container
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="wrap"
      >
        <Grid item>
          <Typography className={classes.subtitle}>Confirmed</Typography>
          <Typography>
            {isFetching && (
              <>
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
              </>
            )}
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle}>Active</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle}>Recovered</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle}>Passed</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StatsCard;
