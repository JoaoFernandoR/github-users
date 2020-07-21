import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ExampleChart = ({data}) => {

    // STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: "column2d", // The chart type
    width: "900", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Most Used Languages",
        //Set the chart subcaption
        subCaption: "In Percentage",
        //Set the x-axis name
        xAxisName: "Country",
        //Set the y-axis name
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "%",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data: data
    }
  };

    return (<ReactFC {...chartConfigs} />);
}

export default ExampleChart