describe("Highcharts Tests", () => {
  beforeEach(() => {
    cy.visit("../../exercises/03-minimal-charts/index.html");
  });

  it("should render the spline chart correctly", () => {
    cy.get("#spline").should("exist");

    cy.window().then((win) => {
      const chart = win.Highcharts.charts.find(
        (c) => c.renderTo.id === "spline"
      );

      expect(chart, "Spline chart should exist").to.exist;
      expect(
        chart.series[0].data.length,
        "Spline chart should have 6 data points"
      ).to.equal(6);
    });
  });

  it("should render the areaspline chart correctly", () => {
    cy.get("#areaspline").should("exist");

    cy.window().then((win) => {
      const chart = win.Highcharts.charts.find(
        (c) => c.renderTo.id === "areaspline"
      );

      expect(chart, "Areaspline chart should exist").to.exist;
      expect(
        chart.series[0].data.length,
        "Areaspline chart should have 6 data points"
      ).to.equal(6);
    });
  });

  it("should render the column chart correctly", () => {
    cy.get("#column").should("exist");

    cy.window().then((win) => {
      const chart = win.Highcharts.charts.find(
        (c) => c.renderTo.id === "column"
      );
      const series = chart.series[0];

      expect(chart, "Column chart should exist").to.exist;
      expect(
        chart.series[0].data.length,
        "Column chart should have 6 data points"
      ).to.equal(6);
      assert.strictEqual(
        series.points[2].y === 0 ||
          series.points[2].y === undefined ||
          series.points[2].y === null,
        true,
        "The third point of the column series should be equal to 0, undefined, or null"
      );
    });
  });

  it("should render the pie chart correctly", () => {
    cy.get("#pie").should("exist");

    cy.window().then((win) => {
      const chart = win.Highcharts.charts.find((c) => c.renderTo.id === "pie");
      expect(chart, "Pie chart should exist").to.exist;
      expect(
        chart.series[0].data.length,
        "Pie chart should have 3 data points"
      ).to.equal(3);
      console.log(chart);
    });
  });

  it("should set global Highcharts options correctly", () => {
    cy.window().then((win) => {
      expect(
        win.Highcharts.defaultOptions.title.text,
        "Global title text should be empty"
      ).to.equal("");
      expect(
        win.Highcharts.defaultOptions.legend.enabled,
        "Global legend should be disabled"
      ).to.equal(false);
      expect(
        win.Highcharts.defaultOptions.credits.enabled,
        "Global credits should be disabled"
      ).to.equal(false);

      if (win.Highcharts.defaultOptions.yAxis.visible === false) {
        expect(
          win.Highcharts.defaultOptions.yAxis.visible,
          "Global yAxis visible should be hidden"
        ).to.equal(false);
      } else {
        expect(
          win.Highcharts.defaultOptions.yAxis.gridLineWidth,
          "Global yAxis gridLineWidth should be 0"
        ).to.equal(0);
        expect(
          win.Highcharts.defaultOptions.yAxis.title.text,
          "Global yAxis title text should be empty"
        ).to.equal("");
        expect(
          win.Highcharts.defaultOptions.yAxis.labels.enabled,
          "Global yAxis labels should be disabled"
        ).to.equal(false);
      }

      if (win.Highcharts.defaultOptions.xAxis.visible === false) {
        expect(
          win.Highcharts.defaultOptions.xAxis.visible,
          "Global xAxis visible should be hidden"
        ).to.equal(false);
      } else {
        expect(
          win.Highcharts.defaultOptions.xAxis.lineWidth,
          "Global xAxis lineWidth should be 0"
        ).to.equal(0);
        expect(
          win.Highcharts.defaultOptions.xAxis.tickLength,
          "Global xAxis tickLength should be 0"
        ).to.equal(0);
        expect(
          win.Highcharts.defaultOptions.xAxis.labels.enabled,
          "Global xAxis labels should be disabled"
        ).to.equal(false);
      }
      expect(
        win.Highcharts.defaultOptions.tooltip.outside,
        "Global tooltip should be outside"
      ).to.equal(true);

      expect(
        win.Highcharts.defaultOptions.plotOptions.series.marker.enabled,
        "Global series marker should be disabled"
      ).to.equal(false);
      expect(
        win.Highcharts.defaultOptions.plotOptions.series.dataLabels.enabled,
        "Global series dataLabels should be disabled"
      ).to.equal(false);
    });
  });
});
