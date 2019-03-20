import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCloud,
  faCloudSunRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faCloudSun
} from "@fortawesome/free-solid-svg-icons";

function init() {
  library.add(
    faCloud,
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
