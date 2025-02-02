require('cypress-xpath');

function generateRandomUser() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const name = `User_${randomString}`;
    const email = `user_${randomString}@test.com`;
    const password = `pass_${randomString}`;
    return { name, email, password };
}

describe('Página Inicial Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
    });

    it('Página inicial.', () => {
        //Gerar um usuário aleatório
        const user = generateRandomUser();

        // Verifica se é a página inicial
        cy.xpath('//h1[contains(text(), "Login")]').should('contain', 'Login');
    
        //Verifica os campos de entrada de dados
        cy.get('[data-testid="email"]').should('be.visible');
        cy.get('[data-testid="senha"]').should('be.visible');
        
      
        //Verifica mensagens após clicar em Entrar
        cy.get('[data-testid="email"]').type('juliano.jose.vilar@gmail.com');
        cy.get('[data-testid="senha"]').type('1q2w!Q@W');
        cy.wait(500);

        //Clica no botão Entrar
        cy.get('[data-testid="entrar"]').click();
        
        //Pausa para visualização
        cy.wait(1500);

        //Valida se o login foi realizado com sucesso
        cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.');

        //Sai do app
        cy.get('[data-testid="logout"]').click();

    });
}) 