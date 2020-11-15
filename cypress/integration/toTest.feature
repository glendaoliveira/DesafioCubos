Feature: Realizar testes para o desafio da Cubos

    Utilizando BDD para a criação dos cenários e consequentemente documentação

    Background: Comum em todos os cenários
    Given estou no Campo de Treinamento
    
    
    
    Scenario: Cadastrar sem o campo Nome   
        When eu tento cadastrar sem utilizar o campo Nome
        Then eu vejo a mensagem Nome eh obrigatorio
    

    Scenario: Cadastrar sem o campo Sobrenome   
        When eu tento cadastrar sem utilizar o campo Sobrenome
        Then eu vejo a mensagem Sobrenome eh obrigatorio

        
    Scenario: Cadastrar sem o campo Sexo
        When eu tento cadastrar sem selecionar o sexo
        Then eu vejo a mensagem Sexo eh obrigatorio


    Scenario: Cadastrar a comida favorita
        When faço o cadastro até o campo Sexo
        And escolho as opções Frango e Vegetariano
        Then eu vejo a mensagem Tem certeza que voce eh vegetariano?


    Scenario: Pergunta sobre a prática de esportes
        When faço cadastro até o campo de comida favorita
        And seleciono as opções Futebol e O que eh esporte?
        Then eu vejo a mensagem Voce faz esporte ou nao?


    Scenario: Interação com a resposta voltou
        When interajo com o link voltar
        Then eu vejo a mensagem Voltou!


    Scenario: Interação com os campos de nome Doutorado
        When interajo com os campos da tabela da direita para a esquerda
        Then eu vejo a mensagem Doutorado
