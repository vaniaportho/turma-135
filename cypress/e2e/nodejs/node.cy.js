
describe('Teste do cypress.confg.js', () => {

    it('teste de mensagem no console - browser', () => {
        console.log('teste de mensagem no browser')
    })

    it('teste de task', () => {
        cy.task('msgConsole')

    })

    it('conta o total de arquivos da pasta API', () => {
        cy.task('lerPasta', 'cypress/e2e/api')
            .then(vania => {
                cy.log(`Quantidade de arqivos: ${vania}`)
            })
    })

    it('conta o total de arquivos da pasta NODEJS', () => {
        cy.task('lerPasta', 'cypress/e2e/nodejs')
            .then(vania => {
                cy.log(`Quantidade de arqivos: ${vania}`)
            })
    })
})