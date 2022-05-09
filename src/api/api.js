import * as types from "../utils/constants";
import axios from "axios";
import { sortData } from "../utils/Utilities";

export const fetchDailyDataAPI = async () => {
  try {
    const { data } = await axios.get(`${types.API_URL}/all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountriesAPI = async () => {
  try {
    const { data } = await axios.get(`${types.API_URL}/countries`);
    const countries = data.map((country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    }));
    let sortedData = sortData(data);
    return {
      countries,
      sortedData,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountryDataAPI = async (countryCode) => {
  try {
    const { data } = await axios.get(`${types.API_URL}/countries/${countryCode}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchChartDataAPI = async (countryCode, day) => {
  try {
    const { data } = await axios.get(`${types.API_URL}/historical/${countryCode}?lastdays=${day}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
