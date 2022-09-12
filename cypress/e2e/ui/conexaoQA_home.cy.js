describe('home page', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('valida o título e o subtítulo da aplicação', () => {

        // cy.get('.x-large')
        cy.get('[data-test=landing-title]')
            .should('exist')
            .and('have.class', 'x-large')

        cy.contains('Crie um perfil/portfolio, compartilhe posts e obtenha ajuda da comunidade de QA')
            .should('exist')

        cy.contains('.x-large', 'QAs')
            .should('exist')
    })

    it('seleciona mais de um elemento', () => {
        cy.get('a')
            .eq(5)
            .should('have.text', 'Cadastrar')

        cy.get('a')
            .eq(6)
            .should('have.text', 'Login')
    })

    it('seleciona elementos com o find', () => {

        cy.get('.landing')
            .find('h1')
            .should('have.text', 'Conectando QAs ...')
    })

    it('seleciona elementos com o next', () => {
        
        cy.get('li')
            .eq('0')
            .next()
            .prev()
    })
})