import {
  FETCH_COUNTRIES,
  FETCH_DAILY_DATA,
  FETCH_COUNTRY_DATA,
  FETCH_CHART_DATA,
} from "../utils/constants";

export const getCountries = () => ({
  type: FETCH_COUNTRIES,
});

export const getDailyData = () => ({
  type: FETCH_DAILY_DATA,
});

export const getCountryData = (country) => ({
  type: FETCH_COUNTRY_DATA,
  country,
});

export const getChartData = (country, day) => ({
  type: FETCH_CHART_DATA,
  country,
  day,
});
