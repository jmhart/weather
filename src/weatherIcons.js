import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloudSunRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";

function init() {
  library.add(
    faCloudSunRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faCloudSun
  );
}

export default {
  init
};
