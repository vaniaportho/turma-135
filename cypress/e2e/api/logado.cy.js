describe('API - Posts', () => {

    let jwtVania = ''

    before(() => {

        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                email: 'vaniaportho@gmail.com',
                password: '123456'
            }
        }).then(({ body }) => {
            // cy.log(body.jwt)
            jwtVania = body.jwt
        })
        cy.log(Cypress.env('email'), Cypress.env('password'))

    })

    it('valida todos os posts 1', () => {

        cy.request({
            method: 'GET',
            url: '/api/posts',
            headers: {
                Cookie: `jwt=${jwtVania}`
            }
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

    it('valida todos os posts 2', () => {

        cy.request({
            method: 'GET',
            url: '/api/posts',
            headers: {
                Cookie: `jwt=${jwtVania}`
            }
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

    it('valida todos os posts 3', () => {

        cy.request({
            method: 'GET',
            url: '/api/posts',
            headers: {
                Cookie: `jwt=${jwtVania}`
            }
        }).then(({ status }) => {
            expect(status).to.eq(200)
        })
    })

})