describe('DESCRIBE - testes do site iterasys', () => {

    before(() => {
        cy.log('DESCRIBE - BEFORE ALL');
    })

    beforeEach(() => {
        cy.log('DESCRIBE - BEFORE EACH')
    })

    // vai ser chamado após o ultimo teste
    after(() => {
        cy.log('DESCRIBE - AFETER ALL')
    })

    afterEach(() => {
        cy.log('DESCERIBE - AFTER EACH')
    })

    context('CONTEXT - pagina inicial', () => {
        before(() => {
            cy.log('CONTEXT 1 - BEFORE ALL')
        })


        // Eu crio testes em crypress com o it
        it('meu primeiro teste', () => {

            // cy.visit('https://iterasys.com.br/pt') 
            cy.log('primeiro teste')
        })

        // segundo teste
        it('meu segundo teste', () => {
            cy.log('segundo teste')
        });


    })

    context('CONTEXT - cursos', () => {

        before(() => {
            cy.log('CONTEXT 2 - BEFORE ALL')
        })

        beforeEach(() => {
            cy.log('CONTEXT 2 - BEFORE EACH')
        })

        it('meu quarto teste', () => {
            cy.log('quarto teste')
        })

        it('meu quinto teste', () => {
            cy.log('quinto teste')
        })

        it('meu sexto teste', () => {
            cy.log('sexto teste')
        })

        it('meu setimo teste', () => {
            cy.log('setimo teste')
        })

    })


})