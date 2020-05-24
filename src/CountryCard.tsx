import React from "react";
import {
  Paper,
  TextField,
  makeStyles,
  Theme,
  createStyles,
  Grid,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useAxiosRequest } from "use-axios-request";
import { FormattedMessage } from "react-intl";
import StatsCard from "./StatsCard";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import sr from "timeago.js/lib/lang/sr";
timeago.register("sr", sr);
interface CountryCardProps {
  lang: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    statsGroup: {
      marginTop: theme.spacing(3),
    },
  })
);

const CountryCard = (props: CountryCardProps) => {
  const [selectedCountry, setSelectedCountry] = React.useState("Global");
  const [countriesObj, setCountriesObj] = React.useState<object | undefined>();
  const { isFetching, error, data } = useAxiosRequest<any>(
    `https://api.covid19api.com/summary`
  );

  console.log(countriesObj);
  const classes = useStyles();

  React.useEffect(() => {
    if (data) {
      const newData = { Global: data.Global };
      data.Countries.map((a) => (newData[a.Country] = { ...a }));
      console.log(newData);
      setCountriesObj(newData);
    }
  }, [data]);

  const handleCountryChange = (event, value) => {
    setSelectedCountry(value);
  };

  const statsCardData = countriesObj && countriesObj[selectedCountry];
  const confirmedCardProps = {
    newNumber: statsCardData && statsCardData.NewConfirmed,
    totalNumber: statsCardData && statsCardData.TotalConfirmed,
  };
  const recoveredCardProps = {
    newNumber: statsCardData && statsCardData.NewRecovered,
    totalNumber: statsCardData && statsCardData.TotalRecovered,
  };
  const passedCardProps = {
    newNumber: statsCardData && statsCardData.NewDeaths,
    totalNumber: statsCardData && statsCardData.TotalDeaths,
  };
  return (
    <Paper elevation={0} className={classes.root}>
      <Autocomplete
        loading={!countriesObj}
        disableClearable
        value={selectedCountry}
        onChange={handleCountryChange}
        style={{ width: 300 }}
        options={countriesObj ? Object.keys(countriesObj) : []}
        autoHighlight
        renderInput={(params) => (
          <TextField
            {...params}
            label={"Country"}
            helperText={
              data && <TimeAgo datetime={data.Date} locale={props.lang} />
            }
            variant="standard"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
      <Grid
        className={classes.statsGroup}
        container
        alignItems="stretch"
        spacing={1}
      >
        <StatsCard
          {...confirmedCardProps}
          title={<FormattedMessage id="confirmed" defaultMessage="Confirmed" />}
        />
        <StatsCard
          {...recoveredCardProps}
          title={<FormattedMessage id="recovered" defaultMessage="Recovered" />}
        />
        <StatsCard
          {...passedCardProps}
          title={<FormattedMessage id="passed" defaultMessage="Passed" />}
        />
      </Grid>
    </Paper>
  );
};

export default CountryCard;
