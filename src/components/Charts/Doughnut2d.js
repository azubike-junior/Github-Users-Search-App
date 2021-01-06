import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const ChartComponent = ({data}) => {
  const chartConfigs = {
    type: "doughnut3D",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        decimals: 0,
        doughnutRadius: '45%',
        showPercentValues: 0,
        theme:'candy'
      },
      data,
    }
  };

  return (
    <ReactFC {...chartConfigs} />
  );
};

export default ChartComponent;
