//criação das constantes para manipular os elementos HTML

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//lista de perguntas com os objetos(itens) e seus atributos:enunciado, e lista de alternativas
//com os atributos texto e afirmação.
const perguntas = [
    {
        enunciado: "Em algumas culturas africanas tradicionais, qual a principal razão para o uso ritualístico de certas plantas com propriedades psicoativas?",
        alternativas: [
            {
            texto: "a) Conexão espiritual e comunicação com ancestrais.",
            afirmacao: "Historicamente, muitas comunidades africanas utilizavam plantas em rituais para estabelecer uma ponte entre o mundo físico e o espiritual, buscando orientação e sabedoria de seus antepassados, o que não se confunde com o uso recreativo de drogas."
            },
            {
            texto: "Para fins de cura e tratamento de doenças físicas e mentais.",
            afirmacao: "O conhecimento ancestral sobre ervas medicinais na África é vasto e foi transmitido por gerações, com foco na cura e bem-estar, reconhecendo as propriedades terapêuticas de certas plantas para tratar diversas enfermidades, o que é distinto do uso de drogas."
            },
        ]
    },
    {
        enunciado: "Qual o papel das ervas medicinais na prática da medicina tradicional africana em contraste com o uso de substâncias recreativas?",
        alternativas: [
            {
            texto: "As ervas são utilizadas de forma ritualística e com propósito de cura específica, sob orientação de curandeiros.",
            afirmacao: " Na medicina tradicional africana, o uso de ervas é altamente regulamentado e feito por especialistas (curandeiros, xamãs), que prescrevem doses e rituais específicos para o tratamento de doenças, enfatizando a finalidade terapêutica e não o uso de drogas"
            },
            {
            texto: "O conhecimento sobre as ervas é transmitido oralmente e faz parte de um sistema complexo de saúde e bem-estar.",
            afirmacao: " A sabedoria sobre ervas medicinais é um pilar da cultura africana, passada de geração em geração, e integra um sistema holístico que considera a saúde física, mental e espiritual, diferenciando-se do consumo recreativo ou abusivo de substâncias."
            },
        ]
    },
    {
        enunciado: "Pergunta: Qual dos álbuns de 2Pac, lançado durante sua vida, é amplamente considerado um marco em sua carreira, apresentando sucessos como I Aint Mad at Cha?",
        alternativas: [
            {
            texto: "Me Against the World",
            afirmacao: "All Eyez on Me, lançado em 1996, não apenas marcou a história do hip-hop como o primeiro álbum duplo do gênero, mas também se tornou um dos trabalhos mais vendidos de 2Pac, solidificando seu legado como um dos maiores ícones do rap."

            
            },
            {
            texto: "All Eyez on Me.",
            afirmacao:"Com sucessos estrondosos como California Love e I Ain t Mad at Cha, All Eyez on Me é amplamente reconhecido como um divisor de águas na carreira de 2Pac, destacando sua versatilidade lírica e seu impacto duradouro na cultura musical"
            },
        ]
    },

];//criação das variáveis atual(que percorrerá os itens da lista de perguntas)
// perguntaAtual(que guardará a pergunta atual que será interagida)
//historiaFinal(que inicia vazia e depois guardará os textos da resposta selecionada)

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
//funcao que mostrará cada pergunta até que apareça encerre a lista e mostrará o resumo da I.A.

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
//execução da função que mostrará as alternativas
    mostraAlternativa();
}//funcao que mostrará as alternativas do objeto selecionado

function mostraAlternativa(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
//execução da função SETA => que após o evento de clique selecionada a resposta da alternativa
        botaoAlternativa.addEventListener("click",()=>respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
   
}
}//função que junta todas as afirmações das alternativas clicadas.

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
//execução da função que mostra a pergunta
    mostraPergunta();

}//função que mostrará o resultado final 

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}//execução da função que mostrará a pergunta e suas alternativas

mostraPergunta();