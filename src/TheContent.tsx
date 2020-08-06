import React from "react";
import dynamic from "next/dynamic";
import { Layout, Card } from "antd";
import { createUseStyles } from "react-jss";
import useRequest from "./hooks/useRequest";
import { ICumulativeData } from "./types";
import { AxiosError } from "axios";

const { Content } = Layout;
const CountrySelectCard = dynamic(() => import("./CountrySelectCard"));
const CountriesTable = dynamic(() => import("./CountriesTable"));
const useStyles = createUseStyles({
  content: {
    minHeight: "calc(100vh - 134px)",
    padding: 24,
  },
});
const TheContent = () => {
  const { data, error, isValidating } = useRequest<
    ICumulativeData,
    AxiosError<Error>
  >({
    url: `/api/cumulative`,
  });

  const styles = useStyles();
  return (
    <Content className={styles.content}>
      <CountrySelectCard
        data={data}
        error={error}
        isValidating={isValidating}
      />
      <CountriesTable
        data={data && data.Countries}
        isValidating={isValidating}
      />
    </Content>
  );
};

export default TheContent;
