const currentWeather = {
  location: "Chicago",
  description: "Mostly Sunny",
  time: "Sunday",
  icon: "cloud",
  temp: 40
};

const hourlyWeather = [
  {
    id: 1,
    time: "10AM",
    icon: "cloud-sun-rain",
    temp: 41
  },
  {
    id: 2,
    time: "11AM",
    icon: "cloud-showers-heavy",
    temp: 41
  },
  {
    id: 3,
    time: "12PM",
    icon: "snowflake",
    temp: 42
  },
  {
    id: 4,
    time: "1PM",
    icon: "sun",
    temp: 42
  },
  {
    id: 5,
    time: "2PM",
    icon: "sun",
    temp: 43
  },
  {
    id: 6,
    time: "3PM",
    icon: "sun",
    temp: 43
  },
  {
    id: 7,
    time: "4PM",
    icon: "cloud-sun",
    temp: 44
  },
  {
    id: 8,
    time: "5PM",
    icon: "cloud-sun",
    temp: 45
  },
  {
    id: 9,
    time: "6PM",
    icon: "cloud-sun",
    temp: 45
  },
  {
    id: 10,
    time: "7PM",
    icon: "cloud",
    temp: 46
  },
  {
    id: 11,
    time: "8PM",
    icon: "cloud",
    temp: 45
  },
  {
    id: 12,
    time: "9PM",
    icon: "cloud-sun-rain",
    temp: 44
  },
  {
    id: 13,
    time: "10PM",
    icon: "cloud-sun-rain",
    temp: 44
  },
  {
    id: 14,
    time: "11PM",
    icon: "cloud",
    temp: 43
  }
];

const dailyWeather = [
  {
    id: 1,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Sunday",
    icon: "cloud-sun-rain",
    temp: 47
  },
  {
    id: 2,
    location: "Chicago",
    description: "Cloudy",
    time: "Monday",
    icon: "cloud-sun-rain",
    temp: 65
  },
  {
    id: 3,
    location: "Chicago",
    description: "Sunny",
    time: "Tuesday",
    icon: "cloud",
    temp: 66
  },
  {
    id: 4,
    location: "Chicago",
    description: "Rain",
    time: "Wednesday",
    icon: "cloud",
    temp: 53
  },
  {
    id: 5,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Thursday",
    icon: "cloud-sun",
    temp: 32
  },
  {
    id: 6,
    location: "Chicago",
    description: "Snow",
    time: "Friday",
    icon: "cloud-sun",
    temp: 31
  },
  {
    id: 7,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Saturday",
    icon: "snowflake",
    temp: 48
  },
  {
    id: 8,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Sunday",
    icon: "snowflake",
    temp: 33
  }
];

export function getCurrentWeather() {
  return currentWeather;
}

export function getHourlyWeather() {
  return hourlyWeather;
}

export function getDailyWeather() {
  return dailyWeather;
}
