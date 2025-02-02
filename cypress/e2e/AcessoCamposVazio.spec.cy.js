require('cypress-xpath');

describe('Página Inicial Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
    });

    it('Página inicial.', () => {
        // Verifica se é a página inicial
        cy.xpath('//h1[contains(text(), "Login")]').should('contain', 'Login');
    
        //Verifica os campos de entrada de dados
        cy.xpath('//input[@name="email"]').should('be.visible');
        cy.xpath('//input[@name="password"]').should('be.visible');
      
        //Verifica mensagens após clicar em Entrar
        cy.xpath('//button[@type="submit"]').click();
        cy.wait(1000);        
        cy.xpath('//span[contains(text(),"Email é obrigatório")]').should('be.visible').and('contain', 'Email é obrigatório');
        cy.wait(1000);
        cy.xpath('//span[contains(text(),"Password é obrigatório")]').should('be.visible').and('contain', 'Password é obrigatório');
        cy.wait(1000);
        
        //Fecha a mensagem de erro
        cy.xpath("//body/div[@id='root']//form[1]/div[1]/button[1]/span[1]").click();
        cy.wait(1000);
        cy.xpath("//body/div[@id='root']//form[1]/div[1]/button[1]/span[1]").click();       
    });
}) 