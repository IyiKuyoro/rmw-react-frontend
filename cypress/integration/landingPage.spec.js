describe('THE FIRST TEST', () => {
  it('Visit the AH homepage', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Ride My Way');
    cy.contains('Simply tag along');
    cy.contains('Harness the power in kindness');
    cy.contains('We will help you get from where you are to where you need to be.');
    cy.get('button').contains('FIND A RIDE');
  });
});
