import 'cypress-file-upload';
require('cypress-xpath');
require('cypress-file-upload');

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
        
        //Valida se o login foi realizado com sucesso
        cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.');

        //Clica no item de menu horizontal "Cadastrar Produtos"
        cy.get('[data-testid="cadastrar-produtos"]').click();

        //Verifica se a página de cadastro de produtos foi carregada
        cy.get('h1').should('contain', 'Cadastro de Produtos');

        //Preenche os campos de cadastro de produtos
        cy.get('[data-testid="nome"]').type('Produto Teste do Vilar');
        cy.get('[data-testid="preco"]').type('10');
        cy.get('[data-testid="descricao"]').type('Descrição do produto teste do Vilar'); 
        cy.get('[data-testid="quantity"]').type('10');

        //Carrega uma imagem do produto
        //cy.get('[data-testid="imagem"]').attachFile('../cypress/fixtures/ImagemProduto.png');
        //cy.get('[data-testid="imagem"]').attachFile('..\\cypress\\fixtures\\ImagemProduto.png');
        cy.get('[data-testid="imagem"]').attachFile('ImagemProduto.png');

        //Clica no botão Cadastrar
        cy.get('[data-testid="cadastarProdutos"]').click();
        

        //Sai do app
        cy.get('[data-testid="logout"]').click();

    });
})