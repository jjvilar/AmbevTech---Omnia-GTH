require('cypress-xpath');

describe('Tentar cadastrar Campos Vazios Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
    });

    it('Clica no botão Cadastre-se e depois Cadastrar', () => {
        cy.xpath("//a[contains(text(),'Cadastre-se')]").click();
        cy.wait(500);
        cy.xpath("//button[contains(text(),'Cadastrar')]").click();
        
        //Fechas as mensagens de erro
        cy.wait(1000);
        cy.xpath("//body/div[@id='root']//form[1]/div[1]/button[1]/span[1]").click();
        cy.wait(500);
        cy.xpath("//body/div[@id='root']//form[1]/div[1]/button[1]/span[1]").click();       
        cy.wait(500);
        cy.xpath("//body/div[@id='root']//form[1]/div[1]/button[1]/span[1]").click();       
        cy.wait(500);

        //Retorna para a página de login
        cy.xpath("//a[contains(text(),'Entrar')]").click();
        
        //Verifica se é a página de login
        cy.xpath('//h1[contains(text(), "Login")]').should('contain', 'Login');
        cy.xpath('//h1[contains(text(), "Login")]').should('have.text', 'Login');
    });
    
})