import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "./Header";
import CovidInfo from "./Cards/CovidInfo";
import CovidInfoTable from "./Table/CovidInfoTable";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRY_DATA,
  FETCH_DAILY_DATA,
} from "../utils/constants";
import { BarChart } from "./Graph/BarChart";

const Home = () => {
  const countriesList = useSelector(
    (state) => state.covidTracker.countries,
    shallowEqual
  );
  const sortedData = useSelector(
    (state) => state.covidTracker.sortedData,
    shallowEqual
  );

  const dailyInfo = useSelector(
    (state) => state.covidTracker.dailyInfo,
    shallowEqual
  );

  const dispatch = useDispatch();

  const [country, setInputCountry] = useState("all");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    dispatch({ type: FETCH_COUNTRIES });
    dispatch({ type: FETCH_DAILY_DATA });
  }, [dispatch]);

  useEffect(() => {
    countriesList?.length > 0 && setCountries(countriesList);
    sortedData?.length > 0 && setTableData(sortedData);
  }, [countriesList, sortedData]);

  useEffect(() => {
    dailyInfo && setCountryInfo(dailyInfo);
  }, [dailyInfo]);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setInputCountry(countryCode);
    countryCode === "all"
      ? dispatch({ type: FETCH_DAILY_DATA })
      : dispatch({ type: FETCH_COUNTRY_DATA, countryCode });
  };

  return (
    <div>
      <Header
        onCountryChange={onCountryChange}
        countries={countries}
        country={country}
      />
      <div className="app">
        <div className="leftContainer">
          <CovidInfo countryInfo={countryInfo} />
          <BarChart country={country} />
        </div>

        <Card className="rightContainer">
          <CardContent>
            <div className="informationContainer">
              <h3>Live Cases by Country</h3>
              <CovidInfoTable tableData={tableData} />
              <h3> Covid symptoms </h3>
              <ul>
                <li>Fever</li>
                <li>Cough</li>
                <li>Tiredness</li>
                <li>Loss of taste or smell</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
