describe('Testing TopSongs', () => {
  it('Finds my app', () => {
    cy.visit('http://localhost:3000')
    cy.get('#topFiveSongs')
  })
  it('Finds song wrapper', () => {
    cy.get('#song-wrapper-test')
  })
});
describe('Testing Song Wrapper', () => {
  it('Renders the show options button when clicked', () => {
    cy.get('#song-wrapper-test')
    cy.get('#song-wrapper-test').click().contains('...')
  })
})