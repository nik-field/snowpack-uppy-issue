import React from "react";
import ReactDOM from "react-dom";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";

const uppy = new Uppy();

ReactDOM.render(
  <>
    <Dashboard uppy={uppy} />
  </>,
  document.getElementById("root")
);
