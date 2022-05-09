import React from "react";
import { MenuItem, FormControl, Select, IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

const Header = ({countries, country, onCountryChange}) => {

  return (
    <div className="appHeader">
      <h1 className="title">COVID-19 Tracker App</h1>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <FormControl className="countryPicker">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
          <MenuItem value="all">Worldwide</MenuItem>
          {countries.map((country) => (
            <MenuItem
              key={`${country.name}-${country.value}`}
              value={country.value}
            >
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Header;
