require('cypress-xpath');

function generateRandomUser() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const name = `User_${randomString}`;
    const email = `user_${randomString}@test.com`;
    const password = `pass_${randomString}`;
    return { name, email, password };
}

describe.only('Cadastrar Usuário Teste Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
    });

    it('Clica no botão Cadastre-se e depois Cadastrar', () => {
        //Gerar um usuário aleatório
        const user = generateRandomUser();

        // Clica no botão Cadastre-se
        cy.xpath("//a[contains(text(),'Cadastre-se')]").click();

        // Entra com os dados do usuário
        cy.xpath('//input[@id="nome"]').type(user.name);
        cy.xpath('//input[@id="email"]').type(user.email);
        cy.xpath('//input[@id="password"]').type(user.password);
        cy.xpath('//input[@id="administrador"]').click();
        cy.xpath("//button[contains(text(),'Cadastrar')]").click();

        // Verifica se o usuário foi cadastrado com sucesso
        cy.wait(2500);
        cy.xpath("//p[@class='lead'][contains(.,'Este é seu sistema para administrar seu ecommerce.')]").should('contain', 'Este é seu sistema para administrar seu ecommerce.');

        // Sai do sistema
        cy.wait(2500);
        cy.xpath("//button[@data-testid='logout'][contains(.,'Logout')]").click();
        

    });
});