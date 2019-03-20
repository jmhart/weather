const currentWeather = {
  location: "Chicago",
  description: "Mostly Sunny",
  time: "Sunday",
  temp: 40
};

const hourlyWeather = [
  {
    id: 1,
    time: "10AM",
    temp: 41
  },
  {
    id: 2,
    time: "11AM",
    temp: 41
  },
  {
    id: 3,
    time: "12PM",
    temp: 42
  },
  {
    id: 4,
    time: "1PM",
    temp: 42
  },
  {
    id: 5,
    time: "2PM",
    temp: 43
  },
  {
    id: 6,
    time: "3PM",
    temp: 43
  },
  {
    id: 7,
    time: "4PM",
    temp: 44
  },
  {
    id: 8,
    time: "5PM",
    temp: 45
  },
  {
    id: 9,
    time: "6PM",
    temp: 45
  },
  {
    id: 10,
    time: "7PM",
    temp: 46
  },
  {
    id: 11,
    time: "8PM",
    temp: 45
  },
  {
    id: 12,
    time: "9PM",
    temp: 44
  },
  {
    id: 13,
    time: "10PM",
    temp: 44
  },
  {
    id: 14,
    time: "11PM",
    temp: 43
  }
];

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

export function getHourlyWeather() {
  return hourlyWeather;
}

export function getDailyWeather() {
  return dailyWeather;
}
