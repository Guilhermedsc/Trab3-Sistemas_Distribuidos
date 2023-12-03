# Trab3-Sistemas_Distribuidos

## Dupla: `Guilherme Santos` e `Carlos Samuel`

Relatório do Projeto: Sistema de Gerenciamento de Animais para Clínica Veterinária

## Introdução:
O objetivo deste projeto é desenvolver um sistema de gerenciamento para uma clínica veterinária. A aplicação é construída com Node.js, Express para o backend, e Axios para realizar chamadas de API a partir do cliente. O sistema permite a adição, edição, exclusão e visualização de animais cadastrados.
O servidor é construído usando o framework Express.js, e o cliente é implementado como uma interface de linha de comando utilizando Node.js.

## Funcionalidades:

**Adicionar Animal:** Permite ao usuário adicionar um novo animal à base de dados da clínica, fornecendo informações como ID, nome, espécie e idade.

**Editar Animal:** Possibilita a edição dos dados de um animal existente com base no ID fornecido pelo usuário.

**Excluir Animal:** Permite a exclusão de um animal a partir do seu ID.

**Imprimir Animais:** Exibe todos os animais cadastrados na clínica com detalhes como nome, espécie e idade.


## Tecnologias Utilizadas:

**Node.js:** Utilizado como ambiente de execução para o servidor e cliente.

**Express.js:** Framework para construção do servidor backend.

**Insomia:** Utilizado para testar as rotas.


## Persistência de Dados:

A persistência de dados é realizada por meio de um arquivo JSON (data.json) onde as informações dos animais são armazenadas.

