describe('App loads', () => {
  it('shows React welcome message', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
