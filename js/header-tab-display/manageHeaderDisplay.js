import { favoriteTab, header, homeTab } from "../helpers/elements.js";
import manageTabDisplay from "./manageTabDisplay.js";

export default function manageHeaderDisplay() {
  manageTabDisplay();

  if (!favoriteTab.classList.contains("hide") || !homeTab.classList.contains("hide")) {
    header.classList.remove("hide");
  } else {
    header.classList.add("hide");
  }
}
