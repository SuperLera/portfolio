import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import navmobilePopup from "./scripts/navmobilePopup";
import formInput from "./scripts/formInput";

formInput();
navmobilePopup();