import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <IntlProvider locale="en">
    <App />
  </IntlProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
