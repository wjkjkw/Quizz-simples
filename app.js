document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');

    // Perguntas e respostas
    const perguntas = [
        { 
            pergunta: 'Qual é a capital do Brasil?', 
            respostas: ['Brasília', 'Rio de Janeiro', 'São Paulo'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual é a soma de 5 + 7?', 
            respostas: ['10', '12', '14'], 
            correta: 1 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual é a cor do céu em um dia claro?', 
            respostas: ['Verde', 'Azul', 'Cinza'], 
            correta: 1 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual o maior planeta do sistema solar?', 
            respostas: ['Júpiter', 'Saturno', 'Terra'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Em que ano o homem pisou na Lua pela primeira vez?', 
            respostas: ['1969', '1971', '1965'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual é a capital da Austrália?', 
            respostas: ['Canberra', 'Sydney', 'Melbourne'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Quem pintou a obra "Mona Liza?', 
            respostas: ['Leonardo da Vinci', 'Michelangelo', 'Vincent van Gogh'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual o animal terrestre mais rápido', 
            respostas: ['Leopardo', 'Guepardo', 'Cavalo'], 
            correta: 1 // Índice da resposta correta
        },
        { 
            pergunta: 'Quantas cores tem o arco-íris?', 
            respostas: ['6', '7', '8'], 
            correta: 1 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual país venceu a primeira Copa do Mundo de Futebol?', 
            respostas: ['Brazil', 'Alemanha', 'Uruguai'], 
            correta: 2 // Índice da resposta correta
        },
        { 
            pergunta: 'Quantos ossos existem no corpo humano adulto?', 
            respostas: ['208', '204', '206'], 
            correta: 2 // Índice da resposta correta
        },
        { 
            pergunta: 'Quem escreveu "Dom Quixote"?', 
            respostas: ['Miguel de cervantes', 'William Shakerspeare', 'Machado de Assis'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual o menor país do mundo?', 
            respostas: ['San Marino', 'Vaticano', 'Mônaco'], 
            correta: 1 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual elemento químico tem o símbolo "O"?', 
            respostas: ['Ouro', 'Oxigênio', 'Ósmio'], 
            correta: 1 // Índice da resposta correta
        },
        { 
            pergunta: 'Em que continente está localizado o deserto do saara?', 
            respostas: ['África', 'Ásia', 'América do sul'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual é o nome do processo pelo qual as plantas produzem seu alimento??', 
            respostas: ['Fotossíntese ', 'Respiração', 'Germinação'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Quem foi o primeiro presidente do Brasil?', 
            respostas: ['Marechal Deodoro da Fonseca ', 'Getúlio Vargas', 'Dom Pedro I'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual é o maior oceano do mundo?', 
            respostas: ['Oceano Pacífico', 'Oceano Atlântico', 'Oceano Índico'], 
            correta: 0 // Índice da resposta correta
        },
        { 
            pergunta: 'Quantas notas musicais existem em uma oitava?', 
            respostas: ['7', '8', '9'], 
            correta: 1 // Índice da resposta correta
        },
        { 
            pergunta: 'Qual é a velocidade da luz no vácuo?', 
            respostas: ['300.000 km/s ', '150.000 km/s', '400.000 km/s'], 
            correta: 0 // Índice da resposta correta
        }
    ];

    let perguntaAtual = 0; // Índice da pergunta atual
    let pontuacao = 0;     // Contador de acertos

    // Carregar pergunta na tela
    function carregarPergunta() {
        const pergunta = perguntas[perguntaAtual];

        // Limpar o container e exibir a pergunta atual
        quizContainer.innerHTML = `
            <h2>${pergunta.pergunta}</h2>
            <div id="opcoes">
                ${pergunta.respostas.map((resposta, index) => `
                    <button class="opcao" data-index="${index}">${resposta}</button>
                `).join('')}
            </div>
            <p>Pergunta ${perguntaAtual + 1} de ${perguntas.length}</p>
        `;

        // Adicionar evento de clique para as opções
        document.querySelectorAll('.opcao').forEach(botao => {
            botao.addEventListener('click', () => {
                const respostaIndex = parseInt(botao.getAttribute('data-index'), 10);
                verificarResposta(respostaIndex);
            });
        });
    }

    // Função para verificar resposta
    function verificarResposta(index) {
        const pergunta = perguntas[perguntaAtual];
        if (index === pergunta.correta) {
            pontuacao++; // Incrementa a pontuação se acertar
        }

        perguntaAtual++; // Avança para a próxima pergunta

        // Verifica se ainda há perguntas
        if (perguntaAtual < perguntas.length) {
            carregarPergunta(); // Carrega a próxima pergunta
        } else {
            mostrarResultado(); // Mostra os resultados
        }
    }

    // Exibir resultado final
    function mostrarResultado() {
        quizContainer.innerHTML = `
            <h2>Você terminou o quiz!</h2>
            <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>
            <!-- O botão de reiniciar quiz é inserido aqui -->
            <button onclick="reiniciarQuiz()">Reiniciar Quiz</button>
        `;
    }

    // Função para reiniciar o quiz
    window.reiniciarQuiz = function reiniciarQuiz() {
        perguntaAtual = 0; // Reseta o índice da pergunta atual
        pontuacao = 0;     // Reseta a pontuação
        carregarPergunta(); // Carrega a primeira pergunta novamente
    };

    // Inicia o quiz com a primeira pergunta
    carregarPergunta();
});