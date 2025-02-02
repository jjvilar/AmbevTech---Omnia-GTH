require('cypress-xpath');

describe('Página Inicial Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
    });

    it('Página inicial.', () => {
        // Verifica se é a página inicial
        cy.xpath('//h1[contains(text(), "Login")]').should('contain', 'Login');
    
        //Verifica apresentação dos campos de entrada de dados
        cy.get('[data-testid="email"]').should('be.visible');
        cy.get('[data-testid="senha"]').should('be.visible');
    
    });
}) 