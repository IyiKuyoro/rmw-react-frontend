describe('THE FIRST TEST', () => {
  it('Visit the AH homepage', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Hello React from RMW');
  });
});
