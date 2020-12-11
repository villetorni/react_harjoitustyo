import React from "react";
import ReactDOM from "react-dom";
import data from "../data/asunnot.json";
import Asunnot from "./components/Asunnot";
import jooh from "./components/jooh";


ReactDOM.render(<Asunnot asunnot={data}/>, document.getElementById("root"));