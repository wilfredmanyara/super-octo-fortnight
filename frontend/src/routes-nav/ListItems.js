import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/home-list">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Search Homes" />
    </ListItem>
    <ListItem button component={Link} to="/search-trials">
      <ListItemIcon>
        <HealthAndSafetyIcon />
      </ListItemIcon>
      <ListItemText primary="Search Trials" />
    </ListItem>
  </div>
);
