/// <reference types="cypress" />

describe('Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')

    });

    it('Deve selecinar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

    });

    it('Deve selecionar ao carrinho', () => {
       var quantidade = 3

        cy.get('[class="product-block grid"]')
    .contains('Ariel Roll Sleeve Sweatshirt').click()
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Purple').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        
    });

    it('Deve adicionar no carro com comandos customizados', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'XS', 'Black', 5)

    });

    it('Deve adicionar no carro com comandos customizados', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Green', 7)

    });
    

});




