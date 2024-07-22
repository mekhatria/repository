describe('01-simple-column', () => {
  beforeEach('passes', () => {
    cy.visit('../../exercises/01-simple-column/index.html');
  });

  it('should check if there are 3 series and that max points have proper data labels', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      const dataMax = chart.yAxis[0].dataMax;

      expect(chart.series).to.have.length(3);

      for (const series of chart.series) {
        for (const point of series.points) {
          if (point.y === dataMax) {
            expect(point.dataLabel.text.textStr).to.equal('max');
          } else if (point.dataLabel) {
            expect(point.dataLabel.text.textStr).to.equal('');
          }
        }
      }
    });
  });

  it('should check if yAxis has proper max', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      const dataMax = chart.yAxis[0].dataMax;

      expect(chart.yAxis[0].max).to.equal(dataMax * 2);
    });
  });

  it('should check if plot line is dashed and has proper value', () => {
    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      const dataMax = chart.yAxis[0].dataMax;

      expect(chart.yAxis[0].plotLinesAndBands[0].options.value).to.equal(dataMax * 1.5);
      expect(chart.yAxis[0].plotLinesAndBands[0].options.dashStyle).to.equal('dash');
    });
  });
});
