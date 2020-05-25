import React from "react";
import { makeStyles, Theme, createStyles, Container } from "@material-ui/core";
import useRequest from "./hooks/useRequest";
import CountryCard from "./CountryCard";
import CountriesTable from "./CountriesTable";
import StateSwitch from "./StateSwitch";

interface ICountry {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}
export interface ICumulativeData {
  Global: {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
  };
  Countries: ICountry[];
  Date: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: "60px",
      padding: theme.spacing(3),
    },
  })
);
const MainContent = (props) => {
  const { data, error, isValidating } = useRequest<ICumulativeData>({
    url: `https://api.covid19api.com/summary`,
  });
  const classes = useStyles();
  return (
    <Container>
      <main className={classes.content}>
        <StateSwitch
          ok={Boolean(data)}
          error={error}
          isValidating={isValidating}
        >
          <>
            <CountryCard lang={props.lang} data={data} />
            <CountriesTable data={data} />
          </>
        </StateSwitch>
      </main>
    </Container>
  );
};

export default MainContent;
