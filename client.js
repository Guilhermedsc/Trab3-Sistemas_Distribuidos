const axios = require('axios');
const readline = require('readline-sync');

const apiUrl = 'http://localhost:3000';

function exibirMenu() {
    console.log('\n=== Menu ===');
    console.log('1. Adicionar Animal');
    console.log('2. Editar Animal');
    console.log('3. Excluir Animal');
    console.log('4. Imprimir Animal');
    console.log('0. Sair');
}

async function adicionarItem() {
    const id = readline.question('Digite o ID do Animal: ');
    const nome = readline.question('Digite o nome do Animal: ');
    const especie = readline.question('Digite a espécie do Animal: ');
    const idade = readline.questionInt('Digite a idade do Animal: ');

    const novoItem = { id, nome, especie, idade };

    try {
        await axios.post(`${apiUrl}/adicionar`, novoItem);
        console.log('Animal adicionado com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar Animal:', error.message);
    }
}

async function editarItem() {
    const id = readline.question('Digite o ID do Animal que deseja editar: ');
    const nome = readline.question('Digite o novo nome do Animal: ');
    const especie = readline.question('Digite a nova espécie do Animal: ');
    const idade = readline.questionInt('Digite a nova idade do Animal: ');

    const itemAtualizado = { nome, especie, idade };

    try {
        await axios.put(`${apiUrl}/editar/${id}`, itemAtualizado);
        console.log('Animal editado com sucesso!');
    } catch (error) {
        console.error('Erro ao editar Animal:', error.message);
    }
}

async function excluirItem() {
    const id = readline.question('Digite o ID do Animal que deseja excluir: ');

    try {
        await axios.delete(`${apiUrl}/excluir/${id}`);
        console.log('Animal excluído com sucesso!');
    } catch (error) {
        console.error('Erro ao excluir Animal:', error.message);
    }
}

async function imprimirItens() {
    try {
        const response = await axios.get(`${apiUrl}/imprimir`);
        const itens = response.data;
        console.log('\n=== Animais ===');
        itens.forEach(item => console.log(`${item.id}. ${item.nome}, ${item.especie}, ${item.idade} anos`));
    } catch (error) {
        console.error('Erro ao imprimir Animais:', error.message);
    }
}

async function executarOperacao() {
    let opcao;

    do {
        exibirMenu();
        opcao = readline.questionInt('Escolha uma opção (0-4): ');

        switch (opcao) {
            case 1:
                await adicionarItem();
                break;
            case 2:
                await editarItem();
                break;
            case 3:
                await excluirItem();
                break;
            case 4:
                await imprimirItens();
                break;
            case 0:
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
    } while (opcao !== 0);
}

executarOperacao();