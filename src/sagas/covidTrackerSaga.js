import { put, takeLatest, call, all } from "redux-saga/effects";
import * as types from "../utils/constants";
import {
  fetchCountriesAPI,
  fetchDailyDataAPI,
  fetchCountryDataAPI,
  fetchChartDataAPI,
} from "../api/api";

/*
 *
 * @param {*} action
 * Method for fetching the existing countries.
 */
export function* fetchCountries() {
  try {
    const payload = yield call(fetchCountriesAPI);
    yield put({ type: types.FETCH_COUNTRIES_SUCCESS, data: payload });
  } catch (error) {
    yield put({ type: types.FETCH_COUNTRIES_FAILED, error });
  }
}

/*
 *
 * @param {*} action
 * Method for fetching the daily covid data.
 */
export function* fetchDailyData() {
  try {
    const payload = yield call(fetchDailyDataAPI);
    yield put({ type: types.FETCH_DAILY_DATA_SUCCESS, dailyInfo: payload });
  } catch (error) {
    yield put({ type: types.FETCH_DAILY_DATA_FAILED, error });
  }
}

/*
 *
 * @param {*} action
 * Method for fetching individual country data.
 */
export function* fetchCountryData(action) {
  try {
    const payload = yield call(fetchCountryDataAPI, action.countryCode);
    yield put({ type: types.FETCH_DAILY_DATA_SUCCESS, dailyInfo: payload });
  } catch (error) {
    yield put({ type: types.FETCH_DAILY_DATA_FAILED, error });
  }
}

/*
 *
 * @param {*} action
 * Method for fetching chart data.
 */
export function* fetchChartData(action) {
  try {
    const payload = yield call(fetchChartDataAPI, action.countryCode, action.day);
    yield put({ type: types.FETCH_CHART_DATA_SUCCESS, chartData: payload });
  } catch (error) {
    yield put({ type: types.FETCH_CHART_DATA_FAILED, error });
  }
}

export function* actionWatcher() {
  yield takeLatest(types.FETCH_COUNTRIES, fetchCountries);
  yield takeLatest(types.FETCH_DAILY_DATA, fetchDailyData);
  yield takeLatest(types.FETCH_COUNTRY_DATA, fetchCountryData);
  yield takeLatest(types.FETCH_CHART_DATA, fetchChartData);
}
