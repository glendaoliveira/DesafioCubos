import { Given, When, Then, } from 'cypress-cucumber-preprocessor/steps';

const url = './toTest.html'





Given(/^estou no Campo de Treinamento$/, () => {
    cy.visit(url)
});



When('eu tento cadastrar sem utilizar o campo Nome', () =>{
    
})

Then('eu vejo a mensagem Nome eh obrigatorio', () =>{

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')      
      }) 
})
 

When('eu tento cadastrar sem utilizar o campo Sobrenome',     () =>{

    cy.get('input[id="elementosForm:nome"]')
        .type('Glenda')
})

Then('eu vejo a mensagem Sobrenome eh obrigatorio', () =>{

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click('bottom')
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Sobrenome eh obrigatorio')      
        })  
})
 

When('eu tento cadastrar sem selecionar o sexo', () =>{
    
    cy.get('input[id="elementosForm:nome"]')
        .type('Glenda')
    cy.get('input[id="elementosForm:sobrenome"]')
        .type('Souza de Oliveira')   
})


Then('eu vejo a mensagem Sexo eh obrigatorio', () =>{

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Sexo eh obrigatorio')      
      }) 
})
 

When('faço o cadastro até o campo Sexo', () =>{

    cy.get('input[id="elementosForm:nome"]')
        .type('Glenda')
    cy.get('input[id="elementosForm:sobrenome"]')
        .type('Souza de Oliveira')
        cy.get('input[id="elementosForm:sexo:1"]')  
        .click()      
})

And('escolho as opções Frango e Vegetariano', ()=>{

    cy.get('input[id="elementosForm:comidaFavorita:1"]')
        .click()
    cy.get('input[id="elementosForm:comidaFavorita:3"]')
        .click()   
})

Then('eu vejo a mensagem Tem certeza que voce eh vegetariano?', () =>{
    
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Tem certeza que voce eh vegetariano?')      
      }) 
})


When('faço cadastro até o campo de comida favorita', () =>{
    
    cy.get('input[id="elementosForm:nome"]')
        .type('Glenda')
    cy.get('input[id="elementosForm:sobrenome"]')
        .type('Souza de Oliveira')
    cy.get('input[id="elementosForm:sexo:1"]')  
        .click()     
    cy.get('input[id="elementosForm:comidaFavorita:2"]')
        .click()
})

And('seleciono as opções Futebol e O que eh esporte?', ()=>{

    cy.get('select[id="elementosForm:esportes"]')
        .select(['Futebol','O que eh esporte?'])
        .invoke('val')
        .should('deep.equal', ['futebol', 'nada'])
})

Then('eu vejo a mensagem Voce faz esporte ou nao?', () =>{

    const stub = cy.stub()  
    cy.on('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Voce faz esporte ou nao?')      
      }) 
})
 

When('interajo com o link voltar', () =>{
    
    cy.xpath('//body/center/a')
        .click()
})

Then('eu vejo a mensagem Voltou!', () =>{
    
   cy.get('div[id="resultado"]')
   .should('have.text', 'Voltou!')
})
 

When('interajo com os campos da tabela da direita para a esquerda', () =>{
    
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[6]/input')
        .type('Make ')
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[5]//input')
        .click()
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[4]/input')
        .click()
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[6]/input')
        .type('it happen!')
})

Then('eu vejo a mensagem Doutorado', () =>{
    
   const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[3]/input')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Doutorado')      
      })
})