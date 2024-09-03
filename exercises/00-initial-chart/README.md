# Exercise 00 - Initial Chart
Level: easy ⭐

In this exercise, you will learn how to:
1. Customize chart elements: adjust titles, subtitles, credits, and legends for alignment and content.
2. Configure axes and labels: set axis titles and style labels with specific formats.
3. Set global defaults: use Highcharts.setOptions to define default colors and symbols for consistency.
4. Create and manage series: add and customize different series types, ensuring proper data configuration and appearance.
5. Integrate modules: include "exporting" and "accessibility" modules to enhance chart features.


Your task is to modify the chart elements and default settings to exactly match the provided example. 
## Instructions:
1. **Titles and Credits**
* Objective
  * Align the chart title and subtitle to the left and set the text according to the example.
  * The credits should be positioned to the left with the text "Highcharts website."
* Details
  * Title: Should read "Highcharts chart" and be aligned to the left.
  * Subtitle: Should read "With modified default elements" and be aligned to the left.
  * Credits: Should be aligned to the left.
* Documentation
  * Chart Title: https://api.highcharts.com/highcharts/title
  * Chart Credits: https://api.highcharts.com/highcharts/credits

2. **Legend and Axes**
* Objective
  * Adjust the legend position and configure the x-axis and y-axis titles and labels.
* Details
  * Legend: Move to the top left corner of the chart.
  * xAxis Title: Set to "xAxis title."
  * yAxis Title: Set to "yAxis title."
  * yAxis Labels: Style labels in green (#32CD32) and format them to display "k" at the end (e.g., "100k").
* Documentation
  * Legend Configuration: https://api.highcharts.com/highcharts/legend
  * xAxis Title: https://api.highcharts.com/highcharts/xAxis.title
  * yAxis Title: https://api.highcharts.com/highcharts/yAxis.title
  * yAxis Labels: https://api.highcharts.com/highcharts/yAxis.labels

3. **Series Data**
* Objective
  * Create a column series, line series, and spline series, each with the correct number of points, types, colors, and symbols.
* Details
  * Column Series: Should have 5 points with specific color and null data point checks.
  * Line Series: Should have 6 points, the correct color, and symbol.
  * Spline Series: Should have 6 points, the correct color, and symbol.
* Documentation
  * Series Configuration: https://api.highcharts.com/highcharts/series

4.**Default Colors and Symbols**
* Objective
  * Use Highcharts.setOptions to set default colors and symbols for all series globally.
* Details
  * Colors: Set to Blue (#1E90FF), Green (#32CD32), Red (#FF4500).
  * Symbols: Set to "square," "triangle-down," and "circle."
* Documentation:
  * Highcharts.setOptions: https://api.highcharts.com/class-reference/Highcharts#.setOptions

5. **Modules**
* Objective
  * Ensure that the "exporting" and "accessibility" modules are correctly loaded.
* Details
  * Ensure that the chart has a menu in the upper right corner and that there are no console warnings.
* Documentation
  * Exporting Module: https://www.highcharts.com/docs/export-module/export-module-overview
  * Accessibility Module: https://www.highcharts.com/docs/accessibility/accessibility-module



![exercise.png](exercise.png)
