describe('template spec', () => {
  const p1 = [500, 200]; // click position
  const p2 = [300, 250]; // mousemove position

  beforeEach(() => {
    cy.viewport(800, 600);
    cy.visit('../../exercises/05-click-mousemove-cursor/index.html');
  });

  it('task 05 should be implemented correctly', () => {
    cy.get('.highcharts-container').should('be.visible')
      .trigger('click', ...p1)
      .trigger('mousemove', ...p2);

    cy.get('.chart-circle').should('be.visible')
      .should('have.attr', 'cx', `${p1[0]}`)
      .should('have.attr', 'cy', `${p1[1]}`);

    cy.get('.mouse-circle').should('be.visible')
      .should('have.attr', 'cx', `${p2[0]}`)
      .should('have.attr', 'cy', `${p2[1]}`);

    cy.get('.chart-text').should('be.visible');

    cy.window().its('Highcharts').then(Highcharts => {
      const chart = Highcharts.charts[0];
      const xAxis = chart.xAxis[0];
      const yAxis = chart.yAxis[0];

      const x = xAxis.toValue(p1[0]);
      const y = yAxis.toValue(p1[1]);

      cy.get('.chart-text').should('contain', `x: ${x.toFixed(2)}, y: ${y.toFixed(2)}`);

      cy.viewport(300, 500);

      const pX = xAxis.toPixels(x);
      const pY = yAxis.toPixels(y);

      cy.get('.chart-circle')
        .should('have.attr', 'cx', `${pX}`,)
        .should('have.attr', 'cy', `${pY}`);
    });
  });
});
