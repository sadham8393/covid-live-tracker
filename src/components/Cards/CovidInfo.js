import React from "react";
import InfoBox from "./InfoBox";
import numeral from "numeral";
import { convertPretty } from '../../utils/Utilities'

const CovidInfo = ({ countryInfo }) => {
  return (
    <div className="covidStats">
      <InfoBox
        title="Active Cases"
        infoCls="totalCase"
        cases={convertPretty(countryInfo.todayCases) || 0}
        total={numeral(countryInfo.cases).format("0.0a") || 0}
      />
      <InfoBox
        title="Recovered"
        infoCls="recoveredCase"
        cases={convertPretty(countryInfo.todayRecovered) || 0}
        total={numeral(countryInfo.recovered).format("0.0a") || 0}
      />
      <InfoBox
        title="Deaths"
        infoCls="deathCase"
        cases={convertPretty(countryInfo.todayDeaths) || 0}
        total={numeral(countryInfo.deaths).format("0.0a") || 0}
      />
    </div>
  );
};

export default CovidInfo;
