# Exercise 07 - Histogram Point Select
Level: advanced ⭐⭐⭐

In this exercise, you will learn how to:
1. Create Combined Histogram and Scatter Plots:
Learn to create a chart with a histogram series and a scatter series, displaying data distributions and individual data points together.
2. Configure Multiple Axes for Different Series:
Understand how to set up multiple x and y-axes to manage different data types and ensure each series is displayed correctly.
3. Implement Interactive Point Selection:
Enable user interaction with the histogram series by allowing point selection and highlighting associated scatter points.
4. Customize Series States and Behaviors:
Manage series states, such as disabling the inactive state, to ensure a clear and responsive chart interaction experience.

In this task, you will create an interactive Highcharts chart that combines a histogram and scatter plot, allowing users to select histogram columns and highlight corresponding scatter plot points. 


![exercise.gif](exercise.gif)



## Instructions:
1. **et Up Histogram and Scatter Series**
* Objective
  * Create a histogram series linked to a scatter series to represent data distribution and individual points. Use this data: [3, 4, 5, 3, 2, 3, 2, 3, 4, 5, 3, 6, 3, 2, 4, 5, 5, 6, 6, 1, 6, 6, 2, 1, 3, 5, 6]
* Details
  * Use the type: 'histogram' for the histogram series and type: 'scatter' for the scatter series.
  * Link the histogram to the scatter series using the baseSeries option.
* Documentation
  * Histogram Series: https://api.highcharts.com/highcharts/series.histogram
  * Scatter Series: https://api.highcharts.com/highcharts/series.scatter 

2. **Configure Dual x-Axes and y-Axes**
* Objective
  * Set up two x-axes and two y-axes to accommodate both series types, with each axis displaying relevant data.
* Details
  * Configure separate axes for the histogram and scatter series, ensuring correct alignment and opposite positioning for the histogram axes.
* Documentation
  * xAxis and yAxis Configuration: https://api.highcharts.com/highcharts/xAxis and https://api.highcharts.com/highcharts/yAxis 

3. **Enable Point Selection and Interaction on Histogram**
* Objective
  * Allow users to select histogram columns and highlight corresponding scatter points.
* Details
  * Set allowPointSelect to true for the histogram series to enable point selection.
  * Implement a custom click event to select points in both the histogram and scatter series.
* Documentation
  * Point Select: https://api.highcharts.com/highcharts/plotOptions.histogram.allowPointSelect
  * Point Events: https://api.highcharts.com/highcharts/plotOptions.histogram.point.events 

4. **Disable Inactive State for All Series**
* Objective
  * Ensure that the inactive state is disabled for all series to maintain focus on selected points and series.
* Details
  * Set states.inactive.enabled to false for all series in the plotOptions configuration.
* Documentation
  * Series States: https://api.highcharts.com/highcharts/plotOptions.series.states.inactive 
