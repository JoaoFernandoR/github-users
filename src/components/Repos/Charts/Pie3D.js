import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ExampleChart = ({data}) => {

const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart - 400
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "50%"
      },
      // Chart Data
      data: data
    }
  };

    return <ReactFC {...chartConfigs} />;
}

export default ExampleChart