import * as types from "../utils/constants";

const initialState = {
  isLoading: false,
};

export default function covidTrackerReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COUNTRIES:
      return Object.assign({}, state, {
        ...state,
        isLoading: true,
      });
    case types.FETCH_COUNTRIES_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        countries: action.data.countries,
        sortedData: action.data.sortedData

      });
    case types.FETCH_COUNTRIES_FAILED:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        countries: [],
        sortedData: []
      });
    case types.FETCH_DAILY_DATA:
      return Object.assign({}, state, {
        ...state,
        isLoading: true,
      });
    case types.FETCH_DAILY_DATA_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        dailyInfo: action.dailyInfo

      });
    case types.FETCH_DAILY_DATA_FAILED:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        dailyData: null
      });
    case types.FETCH_COUNTRY_DATA:
      return Object.assign({}, state, {
        ...state,
        isLoading: true,
      });
    case types.FETCH_COUNTRY_DATA_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        dailyInfo: action.dailyInfo

      });
    case types.FETCH_COUNTRY_DATA_FAILED:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        dailyData: null
      });
    case types.FETCH_CHART_DATA:
      return Object.assign({}, state, {
        ...state,
        isLoading: true,
      });
    case types.FETCH_CHART_DATA_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        chartData: action.chartData

      });
    case types.FETCH_CHART_DATA_FAILED:
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        chartData: null
      });
    default:
      return state;
  }
}
