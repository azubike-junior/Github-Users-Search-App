// import React from 'react';
// import ReactFC from "react-fusioncharts";
// import FusionCharts from "fusioncharts";
// import Column2D from "fusioncharts/fusioncharts.charts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// // Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// const ExampleChart = () => {

//   const chartData = [
//   {
//     label: "html",
//     value: "290"
//   },
//   {
//     label: "Css",
//     value: "260"
//   },
//   {
//     label: "javascript",
//     value: "180"
//   }
// ];

// // STEP 3 - Creating the JSON object to store the chart configurations
// const chartConfigs = {
//   type: "column2d", // The chart type
//   width: "400", // Width of the chart
//   height: "400", // Height of the chart
//   dataFormat: "json", // Data type
//   dataSource: {
//     // Chart Configuration
//     chart: {
//       //Set the chart caption
//       caption: "Languages",
//       //Set the chart subcaption
//       subCaption: "In MMbbl = One Million barrels",
      
//       xAxisName: "Country",
      
//       yAxisName: "Reserves (MMbbl)",
//       numberSuffix: "K",
//       //Set the theme for your chart
//       theme: "fusion"
//     },
//     // Chart Data
//     data: chartData
//   }
// };

//   return (
//     <ReactFC {...chartConfigs} />
//   );
// };

// export default ExampleChart;
