describe('Testing App', () => {
  it('Finds my app', () => {
    cy.visit('http://localhost:3000')
  })
  it('toggles follow to following', () => {
    cy.get('.follow-btn').contains('FOLLOW')
    cy.get('.follow-btn').click().contains('FOLLOWING')
    cy.get('.follow-btn').click().contains('FOLLOW')
  })
})