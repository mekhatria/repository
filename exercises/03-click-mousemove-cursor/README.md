# Exercise 03 - Click Mousemove Cursor
Level: advanced ⭐⭐⭐

In this exercise, you will learn how to:
1. Add Interactivity to Charts:
Learn how to add interactive elements like custom cursors that follow the mouse movements on the chart.
2. Implement Click Events to Render Custom Elements:
Create custom points and text annotations on the chart based on user clicks, and dynamically calculate their positions.
3. Update Elements on Chart Redraw:
Understand how to manage and update custom elements (e.g., circles, text) on chart redraws to ensure they stay correctly positioned.
4. Handle Window Resize Events:
Learn to maintain the accuracy of element positions after window resize by recalculating their pixel positions relative to axis values.
5. Leverage Highcharts Renderer for Custom Graphics:
Use the Highcharts renderer to add custom SVG elements like circles and text annotations directly onto the chart.

In this task, you'll create an interactive line chart that displays a custom circular cursor that follows the mouse. Users can click anywhere on the chart to place custom points with coordinates. The chart will automatically update the positions of these points and labels when resized or redrawn.


![exercise.gif](exercise.gif)

## Instructions:
1. **Create a Line Chart with Custom Cursor**
* Objective
  * Set up a line chart with a custom cursor that follows the mouse movement.  Use the Highcharts SVGRenderer, renderer.circle() and renderer.text() to create custom graphical elements. Use the load event in the code initializes the custom cursor when the chart is first rendered.
* Details
  * Use Highcharts.chart to initialize a line chart.
  * Implement a custom cursor using chart.renderer.circle that follows the mouse.
* Documentation
  * Highcharts Renderer: https://api.highcharts.com/class-reference/Highcharts.Renderer#circle
  * Highcharts SVG Renderer Documentation https://www.highcharts.com/docs/advanced-chart-features/renderer
  * Highcharts SVG Renderer API https://api.highcharts.com/class-reference/Highcharts.SVGRenderer
  * Highcharts chart.events.load https://api.highcharts.com/highcharts/chart.events.load

2. **Add Click Event to Render Custom Points**
* Objective
  * Allow users to click on the chart to add custom points.
* Details
  * Use the chart’s click event to create and position circles and text at the click location.
  * Store custom points and annotations in an array for easy management.
* Documentation
  * Chart Events: https://api.highcharts.com/highcharts/chart.events.click
  * Highcharts chart.events.click https://api.highcharts.com/highcharts/chart.events.click

3. **Ensure Custom Elements are Updated on Redraw**
* Objective
  * Update the position of custom points and annotations when the chart is redrawn.
* Details
  * Use the redraw event to recalculate positions of custom elements based on axis transformations.
* Documentation
  * Redraw Event: https://api.highcharts.com/highcharts/chart.events.redraw

4. **Maintain Accuracy After Window Resize**
* Objective
  * Ensure that the custom points remain correctly positioned after a window resize.
* Details
  * Listen to window resize events and update element positions using axis pixel calculations.
* Documentation
  * Axis Methods: https://api.highcharts.com/class-reference/Highcharts.Axis#toPixels
  * Highcharts chart.events.render https://api.highcharts.com/highcharts/chart.events.render

5. **Handle Mouse Movement with Custom Cursor**
* Objective
  * Create a cursor that follows the mouse movement over the chart.
* Details
  * Attach a mousemove event listener to update the cursor’s position.
* Documentation
  * Event Handling: https://api.highcharts.com/highcharts/chart.events.mouseOver
  * Highcharts.addEvent: https://api.highcharts.com/class-reference/Highcharts#.addEvent
