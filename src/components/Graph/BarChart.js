import React, { useState, useEffect } from "react";
import { Select, FormControl, MenuItem } from "@material-ui/core";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { FETCH_CHART_DATA } from "../../utils/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Worldwide cases",
    },
  },
};

export const BarChart = ({ country }) => {
  const chartData = useSelector(
    (state) => state.covidTracker.chartData,
    shallowEqual
  );
  const dispatch = useDispatch();
  const [casesData, setCasesData] = useState({});
  const [recoveredData, setRecoveredData] = useState({});
  const [deathsData, setDeathData] = useState({});
  const [labels, setLabels] = useState([]);
  const [day, setDay] = useState(10);
  const days = [{ "10 days" : 10}, {"30 days" : 30}, {"60 days" : 60}, {"120 days" : 120}, {"180 days" : 180}, {"365 days" : 365}];

  useEffect(() => {
    dispatch({ type: FETCH_CHART_DATA, countryCode: country, day });
  }, [dispatch, country, day]);

  useEffect(() => {
    if (chartData) {
      chartData.cases
        ? setCasesData(chartData.cases)
        : setCasesData(chartData.timeline.cases);
      chartData.cases
        ? setLabels(Object.keys(chartData.cases))
        : setLabels(Object.keys(chartData.timeline.cases));
      chartData.recovered
        ? setRecoveredData(chartData.recovered)
        : setRecoveredData(chartData.timeline.recovered);
      chartData.deaths
        ? setDeathData(chartData.deaths)
        : setDeathData(chartData.timeline.deaths);
    }
  }, [chartData]);

  const onDayChange = (e) => {
    const selectedDay = e.target.value;
    setDay(selectedDay);
  };

  return (
    <div className="chartContainer">
      <FormControl className="countryPicker">
        <Select variant="outlined" id="days" value={day} onChange={onDayChange}>
          {days.map((day) => (
            <MenuItem key={Object.keys(day)[0]} value={Object.values(day)[0]}>
              {Object.keys(day)[0]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Bar
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Active",
              data: labels.map((label) => casesData[label]),
              backgroundColor: "#0956e6",
            },
            {
              label: "Recovered",
              data: labels.map((label) => recoveredData[label]),
              backgroundColor: "#078855",
            },
            {
              label: "Death",
              data: labels.map((label) => deathsData[label]),
              backgroundColor: "#cc1034",
            },
          ],
        }}
      />
    </div>
  );
};
