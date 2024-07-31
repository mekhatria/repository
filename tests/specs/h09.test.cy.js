describe("Line Chart Exercise", () => {
  beforeEach("passes", () => {
    cy.visit("../../exercises/09-visible-points-zoom/index.html");
  });

  it.skip('should check if the chart has 100 random integer values and "xy" zoom', () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const series = chart.series[0];

        expect(series.data.length, "Series should have 100 points").to.equal(
          100
        );
        expect(
          chart.options.chart.zoomType,
          "Zoom type should be 'xy'"
        ).to.equal("xy");
      });
  });

  it.skip("should check if the visible points label updates correctly on zoom", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];

        cy.get("text")
          .contains("Visible points:")
          .should("have.text", `Visible points: ${100}`)
          .then(() => {
            chart.xAxis[0].setExtremes(45, 50);
            cy.get("text")
              .contains("Visible points:")
              .should(
                "have.text",
                `Visible points: ${
                  chart.series[0].points.filter((point) => point.isInside)
                    .length
                }`
              );
          });
      });
  });

  it("should check if highest value points have red labels and red dots on xAxis", () => {
    cy.window()
      .its("Highcharts")
      .then((Highcharts) => {
        const chart = Highcharts.charts[0];
        const series = chart.series[0];
        const dataMax = Math.max(...series.yData);
        const maxPoints = series.points.filter((point) => point.y === dataMax);

        const customMaxPointLabels = chart.maxPointLabels;
        const customXAxisPoints = chart.xAxisPoints;

        // Check that the number of labels and dots matches the number of max points
        expect(
          customMaxPointLabels.length,
          "The number of customMaxPointLabels should match the number of max points"
        ).to.equal(maxPoints.length);

        expect(
          customXAxisPoints.length,
          "The number of customXAxisPoints should match the number of max points"
        ).to.equal(maxPoints.length);

        maxPoints.forEach((point) => {
          const matchingCustomLabels = customMaxPointLabels.filter(
            (customMaxPointLabel) =>
              customMaxPointLabel.coordinates.x === point.x &&
              customMaxPointLabel.coordinates.y === point.y
          );

          const matchingCustomDots = customXAxisPoints.filter(
            (customXAxisPoint) =>
              customXAxisPoint.coordinates.x === point.x &&
              customXAxisPoint.coordinates.y === point.y
          );

          // Check that the correct label displays the maximum y value
          matchingCustomLabels.forEach((matchingCustomLabel) => {
            const label = matchingCustomLabel.label;
            expect(
              label.textStr,
              `Max point label placed on the ${matchingCustomLabel.coordinates.x} x position should display the maximum y value`
            ).to.equal(point.y);
          });

          // Check that the custom red dot is placed on the correct x position
          matchingCustomDots.forEach((matchingCustomDot) => {
            const dotCoordinates = matchingCustomDot.coordinates;
            expect(
              dotCoordinates.x,
              `The custom red dot should be placed on the ${point.x} x position`
            ).to.equal(point.x);
          });
        });
      });
  });
});
