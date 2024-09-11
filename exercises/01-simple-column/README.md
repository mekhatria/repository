# Exercise 01 - Simple Column
Level: intermediate ⭐⭐

In this exercise, you will learn how to:
1. Generate and Configure Series: Learn to create multiple data series with random values and customize their properties dynamically.
2. Manipulate yAxis Properties: Understand how to set dynamic yAxis maximum values and adjust tick intervals to control chart scaling.
3. Implement Conditional Data Labels: Add data labels conditionally based on specific data values and learn to position labels accurately.
4. Add Custom Plot Lines: Practice adding custom plot lines to the yAxis with specific styles and positions based on data conditions.

In this task, you'll create a simple column chart and use the load event to set dynamic options when the chart is initially loaded.


![exercise.png](exercise.png)

## Instructions:
1. **Generate 3 Column Series with Random Data**
* Objective
  *  Create three series with random integer data ranging from 0 to 9.
* Details
  * Each series should represent a column chart.
  * Random data can be generated using JavaScript's Math.random() function and then rounded to get integers.

2. **Identify the Maximum Column and Add Data Labels**
* Objective
  * Find the highest column (or multiple columns if there are ties) and display the "max" label above it.
* Details
  * Use data labels to show "max" above columns with the maximum value.
  * Ensure no other columns have data labels unless they also share the maximum value.
* Documentation
  * Data Labels: https://api.highcharts.com/highcharts/plotOptions.series.dataLabels

3. **Set dynamic yAxis Maximum to Twice the Maximum Data Value**
* Objective
  * Set the yAxis maximum (yAxis.max) to be exactly 2 times the value of the highest column
* Details
  * Dynamically calculate yAxis.max based on the highest data value and ensure it updates correctly when the chart loads.
  * Use the chart.events.load event to perform these updates when the chart is first rendered.
  * Be aware that yAxis.max may not always be applied due to Highcharts' internal calculations. Use the tickInterval option to control this behavior and ensure the correct max is displayed.
  * Use the chart.update and axis.update methods to dynamically change the chart and axis properties when necessary.
* Documentation
  * yAxis Max: https://api.highcharts.com/highcharts/yAxis.max
  * yAxis Update Method: https://api.highcharts.com/class-reference/Highcharts.Axis#update
  * Chart Load Event: https://api.highcharts.com/highcharts/chart.events.load
  * Chart Update Method: https://api.highcharts.com/class-reference/Highcharts.Chart#update
  * Tick Interval: https://api.highcharts.com/highcharts/yAxis.tickInterval

4. **Add a Dashed Plot Line**
* Objective
  * Add a dashed plot line at a value of 1.5 times the maximum column value.
* Details
  * Use plotLines to add a line to the yAxis.
  * Ensure the line is styled as dashed and correctly positioned.
* Documentation
  * Plot Lines: https://api.highcharts.com/highcharts/yAxis.plotLines
  * Dash Style: https://api.highcharts.com/highcharts/plotOptions.series.dashStyle
