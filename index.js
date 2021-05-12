import React from "react";
import ReactDOM from "react-dom";
import { Dashboard, useUppy } from "@uppy/react";
import Uppy from "@uppy/core";

const uppy = useUppy(() => {
  return new Uppy();
});

uppy.on("complete", (result) => {
  console.log(
    "Upload complete! We’ve uploaded these files:",
    result.successful
  );
});

ReactDOM.render(
  <>
    <Dashboard uppy={uppy} />
  </>,
  document.getElementById("root")
);
