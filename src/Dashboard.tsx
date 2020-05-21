import React from "react";
import { IntlProvider } from "react-intl";
import enUS from "../translations/en-US.json";
import srLatnRS from "../translations/sr-latn-RS.json";
import de from "../translations/de-DE.json";

import Header from "./MainHeader";
import MainContent from "./MainContent";

const message = {
  enUS,
  srLatnRS,
  de,
};
const Dashboard = () => {
  const browserLanguage: string = navigator.language;
  return (
    <IntlProvider
      locale={browserLanguage}
      defaultLocale="en-US"
      messages={message[browserLanguage] || message.enUS}
    >
      <Header />
      <MainContent />
    </IntlProvider>
  );
};

export default Dashboard;
