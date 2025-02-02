// FILE: cypress/e2e/CadastrarProdutos.spec.cy.test.js

require('cypress-xpath');
require('cypress-file-upload');

describe('Cadastrar Produtos Test Suite', () => {
    beforeEach(() => {
        cy.visit('https://front.serverest.dev/login');
    });

    it('Deve cadastrar um produto com sucesso', () => {
        // Verifica se é a página inicial
        cy.xpath('//h1[contains(text(), "Login")]').should('contain', 'Login');
    
        // Verifica os campos de entrada de dados
        cy.get('[data-testid="email"]').should('be.visible');
        cy.get('[data-testid="senha"]').should('be.visible');
      
        // Verifica mensagens após clicar em Entrar
        cy.get('[data-testid="email"]').type('juliano.jose.vilar@gmail.com');
        cy.get('[data-testid="senha"]').type('1q2w!Q@W');
        cy.wait(500);

        // Clica no botão Entrar
        cy.get('[data-testid="entrar"]').click();
        
        // Valida se o login foi realizado com sucesso
        cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.');

        // Clica no item de menu horizontal "Cadastrar Produtos"
        cy.get('[data-testid="cadastrar-produtos"]').click();

        // Verifica se a página de cadastro de produtos foi carregada
        cy.get('h1').should('contain', 'Cadastro de Produtos');

        // Preenche os campos de cadastro de produtos
        cy.get('[data-testid="nome"]').type('Produto Teste');
        cy.get('[data-testid="preco"]').type('10');
        cy.get('[data-testid="descricao"]').type('Descrição do produto teste'); 
        cy.get('[data-testid="quantity"]').type('10');
        
        // Carrega uma imagem do produto
        cy.get('[data-testid="imagem"]').attachFile('..\\front\\Imagem Etiqueta 14.png');

        // Clica no botão Cadastrar
        cy.get('[data-testid="cadastrar"]').click();

        // Verifica se o produto foi cadastrado com sucesso
        cy.get('.success-message').should('contain', 'Produto cadastrado com sucesso');

        // Sai do app
        cy.get('[data-testid="logout"]').click();
    });
});