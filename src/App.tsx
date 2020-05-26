import React from "react";
import { IntlProvider } from "react-intl";
import { Layout } from "antd";
import TheHeader from "./TheHeader";
import TheContent from "./TheContent";
import TheFooter from "./TheFooter";
import enUS from "../translations/en-US.json";
import sr from "../translations/sr-latn-RS.json";
import de from "../translations/de-DE.json";

const message = {
  ["en"]: enUS,
  ["sr"]: sr,
  ["de"]: de,
};
export const LanguageContext = React.createContext({ lang: "en" });
const App = (props) => {
  return (
    <IntlProvider
      locale={props.lang}
      defaultLocale="en-US"
      messages={message[props.lang]}
    >
      <LanguageContext.Provider value={{ lang: props.lang }}>
        <Layout>
          <TheHeader />
          <TheContent />
          <TheFooter />
        </Layout>
      </LanguageContext.Provider>
    </IntlProvider>
  );
};

export default App;
