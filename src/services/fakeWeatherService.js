const currentWeather = {
  location: "Chicago",
  description: "Mostly Sunny",
  time: "Sunday",
  temp: 40
};

const dailyWeather = [
  {
    id: 1,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Sunday",
    temp: 47
  },
  {
    id: 2,
    location: "Chicago",
    description: "Cloudy",
    time: "Monday",
    temp: 65
  },
  {
    id: 3,
    location: "Chicago",
    description: "Sunny",
    time: "Tuesday",
    temp: 66
  },
  {
    id: 4,
    location: "Chicago",
    description: "Rain",
    time: "Wednesday",
    temp: 53
  },
  {
    id: 5,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Thursday",
    temp: 32
  },
  {
    id: 6,
    location: "Chicago",
    description: "Snow",
    time: "Friday",
    temp: 31
  },
  {
    id: 7,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Saturday",
    temp: 48
  },
  {
    id: 8,
    location: "Chicago",
    description: "Mostly Sunny",
    time: "Sunday",
    temp: 33
  }
];

export function getCurrentWeather() {
  return currentWeather;
}

export function getDailyWeather() {
  return dailyWeather;
}
