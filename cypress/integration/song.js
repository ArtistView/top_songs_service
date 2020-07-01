describe('Testing Song', () => {
  it('Finds my app', () => {
    cy.visit('http://localhost:3000')
    cy.get('#topFiveSongs')
  })
  it('Finds unselected song', () => {
    cy.get('#song')
  })
});
describe('Testing clicks on a song', () => {
  it('Should not have a selected song when rendered', () => {
    cy.get('#song')
    cy.get('#song-selected').should('not.exist')
  })
  it('Should have a selected song when clicked', () => {
    cy.get('#song').click()
    cy.get('#song-selected').should('exist')
    cy.get('.play-btn').click()
  })
  it('Should hear a click somewhere else and deselect song', () => {
    cy.get('#song').click()
    cy.get('#song-selected').should('exist')
    cy.get('.play-btn').click()
    cy.get('#song-selected').should('not.exist')
  })
  it('When a song is selected, others are not', () => {
    cy.get('#song').click()
    cy.get('#song-selected').should('exist')
    cy.get('#song').should('exist')
    cy.get('.play-btn').click()
  })
  it('Should show options ellipsis when clicked', () => {
    cy.get('#song').click()
    cy.get('.song-ellipsis').should('exist')
    cy.get('.play-btn').click()
  })
  it('Should change icon when clicked', () => {
    let selectedIcon = cy.get('#song').click().get('.test-icon')
    let unselectedIcon = cy.get('#song').get('.test-icon')
    expect(selectedIcon).to.not.equal(unselectedIcon)
    cy.get('.play-btn').click()
  })
  it('Should change icon when playing', () => {
    let selectedIcon = cy.get('#song').click().get('.test-icon-selected')
    let selectedPlayingIcon = cy.get('.test-icon-selected').click().get('.test-icon-selected-playing')
    expect(selectedIcon).to.not.equal(selectedPlayingIcon)
  })
  it('Should change icon when paused', () => {
    let selectedPlayingIcon = cy.get('.test-icon-selected-playing')
    let pausedIcon = cy.get('.test-icon-selected-playing').click().get('.test-icon-selected-paused')
    expect(selectedPlayingIcon).to.not.equal(pausedIcon)
  })
})