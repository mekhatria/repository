# Exercise 05 - Separate Axes
Level: advanced ⭐⭐⭐

In this exercise, you will learn how to:
1. Create Dual-Axis Charts:
Learn how to set up a bar chart with two y-axes, each representing different data sets (managerial and non-managerial positions).
2. Customize Axis Labels and Positions:
Understand how to customize axis labels and ensure they are correctly positioned relative to each axis for clear data representation.
3. Manage Series Grouping and Data Labels:
Configure series to control data labels, grouping behavior, and visibility, ensuring that each series is correctly displayed according to its axis.
4. Implement Custom Rendering Logic:
Use custom rendering functions to dynamically center labels on axes and update them during chart events like rendering.
5. Optimize Chart Layout for Clarity and Precision:
Learn to balance multiple series and axes within a single chart layout to maintain clarity and precision in data presentation.

In this task, you will create a dual-axis bar chart with separate y axes (for managerial and non-managerial data). You will configure each axis and series independently to display different data sets, ensuring each axis is correctly aligned and all data points and labels are rendered as expected. Additionally, you will use a trick involving a "fake series" to create background bars, enhancing the visual clarity of the chart.


![exercise.png](exercise.png)


## Instructions:
1. **Set Up Dual y-Axes for Different Data Sets**
* Objective
  * Create two y-axes.
* Details
  * Left y-axis: Reversed, displaying managerial data.
  * Right y-axis: Displaying non-managerial data.
  * Both axes should have the same range (0 to 100) and tick intervals for consistent scaling.
  * x-axis (interpreted as a vertical axis in this context) should be hidden.
* Documentation
  * yAxis Configuration: https://api.highcharts.com/highcharts/yAxis
  * yAxis offset: https://api.highcharts.com/highcharts/xAxis.offset
  * Link managerial series to the left axis and non-managerial series to the right axis:
  * https://api.highcharts.com/highcharts/series.column.yAxis
  * xAxis Configuration: https://api.highcharts.com/highcharts/xAxis.visible 

2. **Customize and Position Axis Labels**
* Objective
  * Position axis labels in the center of each axis and ensure they update correctly when the chart is rendered.
* Details
  * Use a custom function centerLabelOnAxis to dynamically center the labels for each y-axis.
  * Update the labels during the chart’s render event to keep them aligned.
* Documentation
  * Renderer Text: https://api.highcharts.com/class-reference/Highcharts.SVGRenderer#text
  * Label alignment left or right: https://api.highcharts.com/highcharts/series.column.dataLabels.align 

3. **Manage Series Configuration and Grouping**
* Objective
  * Configure the series to manage grouping, data labels, and hover behaviors correctly.
* Details
  * Set grouping to false for both series to display them independently.
  * Enable data labels for real series and disable them for mock/fake series. For real series, data labels should be positioned inside the bars, and aligned to the opposite side of the chart.
  * Each series should have exactly 5 data points.
* Documentation
  * Series Configuration: https://api.highcharts.com/highcharts/series
  * Data Labels: https://api.highcharts.com/highcharts/plotOptions.series.dataLabels
  * Disable grouping: https://api.highcharts.com/highcharts/plotOptions.column.grouping
  * Axes width: https://api.highcharts.com/highcharts/xAxis.width 

4. **Ensure Proper Alignment and Visibility of Axes and Series**
* Objective
  * Validate that all axes and series are correctly aligned and visible according to their configurations.
* Details
  * Verify the positioning of left and right y-axes and ensure they are less than half the viewport width for clarity.
  * Check that series data points are correctly set and that mock/fake series are visible but not interactive.
  * Be sure that all data points in the mock series have a value of 100, as they are intended to serve as a static background.
  * Be sure that the mock series is drawn below (has a lower index) than the real series.
* Documentation
  * Series Configuration: https://api.highcharts.com/highcharts/series
  * zIndex:  https://api.highcharts.com/highcharts/series.line.zIndex 

5. **Implement and Validate Custom Rendering Logic**
* Objective
  * Use a custom rendering function to dynamically adjust element positions and ensure they respond correctly to chart events.
* Details
  * Implement the render event to adjust label positioning dynamically.
* Documentation
  * Event render: https://api.highcharts.com/highcharts/chart.events.render 
