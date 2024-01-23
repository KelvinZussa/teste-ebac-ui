/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
        cy.login(dados.usuario, dados.senha)

        })
        
    });
    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Tomas','Augusto', 'Minha Empresa', 'Brasil', 'Avenida 345','455','Curitiba','Paraná','81250000')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')


        //cadstro de endereço

    });

it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].Sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].Estado,
            dadosEndereco[1].cep)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

}); 