import React from "react";
import { Card, Result, Row, Select } from "antd";
import { ICumulativeData, ICountry, IGlobal } from "./types";
import StatsCard from "./StatsCard";
import { FormattedMessage } from "react-intl";
import { AxiosError } from "axios";
import RelativeTime from "./RelativeTime";
import { LanguageContext } from "./App";

interface ICountrySelectCard {
  data: ICumulativeData;
  isValidating: boolean;
  error: AxiosError<Error>;
}

const CountrySelectCard = (props: ICountrySelectCard) => {
  const { data, isValidating, error } = props;
  const [selectedCountry, setSelectedCountry] = React.useState("Global");
  const [countriesObj, setCountriesObj] = React.useState<object | undefined>();
  const { lang } = React.useContext(LanguageContext);
  React.useEffect(() => {
    if (data) {
      const newData = { Global: { ...data.Global, Slug: "all" } };
      data.Countries.map((a) => (newData[a.Country] = { ...a }));
      setCountriesObj(newData);
    }
  }, [data]);

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };
  const CountriesSelect = () => {
    return (
      <Select
        showSearch
        style={{ width: "150px" }}
        value={selectedCountry}
        loading={!countriesObj}
        onChange={handleCountryChange}
      >
        {countriesObj &&
          Object.entries(countriesObj).map(([key, value]) => {
            return (
              <Select.Option key={key} value={key}>
                {key}
              </Select.Option>
            );
          })}
      </Select>
    );
  };

  const LastUpdated = () =>
    data ? (
      <RelativeTime datetime={data.Date} locale={lang} live={false} />
    ) : null;

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
    <Card
      title={<CountriesSelect />}
      loading={isValidating}
      extra={<LastUpdated />}
    >
      {error ? (
        <Result
          status="error"
          title="Oh snap!"
          subTitle="We could not get the latest data"
        />
      ) : (
        <Row gutter={[8, 8]}>
          <StatsCard
            title={
              <FormattedMessage id="confirmed" defaultMessage="Confirmed" />
            }
            {...confirmedCardProps}
          />
          <StatsCard
            title={
              <FormattedMessage id="recovered" defaultMessage="Recovered" />
            }
            {...recoveredCardProps}
          />
          <StatsCard
            title={<FormattedMessage id="passed" defaultMessage="Passed" />}
            {...passedCardProps}
          />
        </Row>
      )}
    </Card>
  );
};

export default CountrySelectCard;
