// Redux
import { Provider } from "react-redux";
import store from "./assets/js/store";
import Application from "./assets/js/App";


// import bootstrap-select
require("bootstrap-sass/assets/javascripts/bootstrap/dropdown");
require("bootstrap-select");


// import styles
import "./assets/sass/app.scss";


// render
const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Application steps="3" />
  </Provider>,
  root
);
