import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ExampleChart = ({data}) => {

const chartConfigs = {
    type: "pie3d", // The chart type
    width: "50%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Languages",
        theme: "fusion",
      },
      // Chart Data
      data: data
    }
  };

    return <ReactFC {...chartConfigs} />;
}

export default ExampleChart