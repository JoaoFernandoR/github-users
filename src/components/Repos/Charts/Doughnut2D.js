import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ExampleChart = ({data}) => {

const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "100%", // Width of the chart - 400
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Stars Per Language",
        doughnutRadius: '45%',
        showPercentValues: 0,
        theme: 'candy'
      },
      // Chart Data
      data: data
    }
  };

    return <ReactFC {...chartConfigs} />;
}

export default ExampleChart