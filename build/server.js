"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app = (0, fastify_1.default)();
app.get("/", (req, res) => {
    res.redirect("/episodes");
});
app.get("/episodes", (req, res) => {
    const episodes = [
        {
            id: "a-importancia-da-contribuicao-em-open-source",
            title: "Faladev #30 | A importância da contribuição em Open Source",
            members: "Diego Fernandes, João Pedro, Diego Haz e Bruno Lemos",
            published_at: "2021-01-22 16:35:40",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/opensource.jpg",
            description: "<p>Nesse episódio do Faladev, Diego Fernandes se reúne com João Pedro Schmitz, Bruno Lemos e Diego Haz, para discutir sobre a importância da contribuição open source e quais desafios circulam na comunidade.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat.</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/opensource.m4a",
                type: "audio/x-m4a",
                duration: 3981,
            },
        },
        {
            id: "uma-conversa-sobre-programacao-funcional-e-orientacao-a-objetos",
            title: "Faladev #29 | Duas perspectivas diferentes na mesa: uma conversa sobre PF e OOP",
            members: "Diego Fernandes, Dani Leão, Laura Beatris e Rafael Camarda",
            published_at: "2021-01-15 13:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg",
            description: "<p>Diego e Dani receberam Laura Beatris e Rafael Camarda na mesa do Faladev para conversarem sobre programação funcional e programação orientada a objetos.</p><p>Análises de mercado, conceitos na prática e desafios na adoção de qualquer método de desenvolvimento. Tudo isso numa conversa dinâmica e relevante para nosso público.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat.</p>\n",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/funcional.m4a",
                type: "audio/x-m4a",
                duration: 4237,
            },
        },
        {
            id: "barreiras-e-solucoes-propostas-por-micro-servicos",
            title: "Faladev #28 | Por trás de barreiras e soluções propostas por micro-serviços",
            members: "Diego Fernandes, Dani Leão, Wesley Williams e Lucas Santos",
            published_at: "2021-01-08 13:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/microservicos.jpg",
            description: "<p>Os desenvolvedores Wesley Willians e Lucas Santos foram convidados para este Faladev para ter uma conversa sobre o que são micro-serviços e quais são os desafios e as barreiras de sua aplicação.</p><p>Nessa edição, Diego Fernandes e Daniele Evangelista guiam a conversa levantando tópicos e questionamentos relevantes sobre o assunto.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat.  #programação #rocketseat #programador #programador</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/microservicos.m4a",
                type: "audio/x-m4a",
                duration: 5506,
            },
        },
        {
            id: "aplicacao-de-arquiteturas-mvc-e-clean-architecture-na-pratica",
            title: "Faladev #27 | Aplicação de arquiteturas MVC e CA na prática",
            members: "Diego Fernandes, Dani Leão, Otávio Lemos e Rodrigo Branas",
            published_at: "2020-12-18 14:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/clean.jpg",
            description: "<p>Diego Fernandes e Daniele Evangelista receberam Otávio Lemos e Rodrigo Branas para bater um papo sobre arquiteturas modernas de desenvolvimento, aplicadas na indústria da tecnologia.</p><p>Quais são os fundamentos, os princípios e a importância de debater arquiteturas neste ecossistema?</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat.  Ficha técnica Hosts: Diego Fernandes e Daniele Leão Evangelista Convidados: Otávio Lemos  e Rodrigo Branas Roteiro: Felipe Buzzi, Beatriz Clasen e Thiago Marinho Edição: Thiago Santana Produção: Leonardo Minatti</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/clean.m4a",
                type: "audio/x-m4a",
                duration: 5044,
            },
        },
        {
            id: "entrevista-jose-valim-criador-do-elixir",
            title: "Faladev #26 | Especial: entrevista exclusiva com José Valim, criador da linguagem Elixir",
            members: "Diego Fernandes e José Valim",
            published_at: "2020-12-04 15:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/josevalim.jpg",
            description: "<p>Nesta edição especial de final de temporada tivemos a oportunidade de ter uma conversa com José Valim, dev brasileiro que criou a linguagem de programação Elixir — utilizada internacionalmente em diversas tecnologias, incluindo Discord e Pinterest.</p><p>O assunto da semana girou em diversos processos envolvidos na criação de uma linguagem nova, que propõe ser uma alternativa eficiente no mercado da tecnologia.</p><p>Além de tudo isso, Valim pôde falar de muito código e sobre a sua jornada e experiência em criar uma comunidade ativa por trás do open source.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos três profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original da Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev.</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/jose-valim.m4a",
                type: "audio/x-m4a",
                duration: 4396,
            },
        },
        {
            id: "o-que-e-ui-ux",
            title: "Faladev #25 | O que é UX/UI?",
            members: "Diego Fernandes, Tiago Luchtenberg e Thainan Librelon",
            published_at: "2020-10-30 14:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/design.jpg",
            description: "<p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos três profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev.</p><p>Nesse episódio, Diego Fernandes se reúne com Thainan Librelon e Tiago Luchtenberg para discutir sobre: Desenvolvedor pode fazer o trabalho do UI/UX, qual impacto? Qual é o momento ideal pra ter pessoas especializadas em UX e UI? E afinal, o que é UI e o que é UX?</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/design.m4a",
                type: "audio/x-m4a",
                duration: 2715,
            },
        },
        {
            id: "como-virar-lider-desenvolvimento",
            title: "Faladev #24 | Como virar líder de desenvolvimento?",
            members: "Diego Fernandes, João Paulo e Cleiton Souza",
            published_at: "2020-10-23 14:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/lider-desenvolvimento.jpg",
            description: "<p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos três profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev. Nesse episódio, Diego Fernandes se reúne com Cleiton Souza e João Paulo de Magalhães para discutir sobre liderança, considerando aspectos profissionais, técnicos e até mesmo emocionais, o que envolve ser um líder de desenvolvimento? Afinal, o que é um líder de desenvolvimento?</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/lider-desenvolvimento.m4a",
                type: "audio/x-m4a",
                duration: 2917,
            },
        },
        {
            id: "comunidades-e-tecnologia",
            title: "FalaDev #23 | O que comunidades têm a ver com tecnologia?",
            members: "Diego Fernandes, Isabela Castilho e João Inácio",
            published_at: "2020-10-16 13:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/comunidade.jpg",
            description: "<p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso. Toda semana reunimos três profissionais da tecnologia para discutir sobre tudo que circula na órbita da programação.</p><p>O Faladev é um podcast original Rocketseat onde conversamos sobre diversos assuntos que importam para a sua carreira dev.</p><p>Nesse primeiro episódio da nova temporada, Diego Fernandes se reúne com Isabela Castilho e João Inácio Neto (Biro) para discutir sobre comunidades e o impacto que elas exercem na carreira de devs em busca do próximo nível. Afinal, O que é uma comunidade e o que tem a ver com tecnologia?</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/comunidade.m4a",
                type: "audio/x-m4a",
                duration: 2677,
            },
        },
        {
            id: "typescript-vale-a-pena",
            title: "FalaDev #22 - TypeScript vale a pena? JavaScript perde sentido?",
            members: "Diego Fernandes, Mayk Brito e João Pedro",
            published_at: "2020-05-04 14:49:35",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/typescript.jpg",
            description: "<p>Três programadores conversam sobre TypeScript.</p><p>Vamos discutir a usabilidade e as previsões da linguagem no cenário da programação.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso.</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/typescript.m4a",
                type: "audio/x-m4a",
                duration: 1772,
            },
        },
        {
            id: "estrategias-de-autenticacao-jwt-oauth",
            title: "FalaDev #21 - Estratégias de autenticação, JWT, OAuth, qual usar?",
            members: "Diego Fernandes, Higo Ribeiro e Guilherme Pellizzetti",
            published_at: "2020-04-09 20:00:00",
            thumbnail: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/autenticacao.jpg",
            description: "<p>Três programadores conversam sobre estratégia de autenticação.</p><p>Vamos discutir quais aspectos você deve considerar na hora de fazer a sua escolha.</p><p>A gente passa a maior parte do tempo escrevendo código. Agora chegou o momento de falar sobre isso.</p>",
            file: {
                url: "https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/audios/autenticacao.m4a",
                type: "audio/x-m4a",
                duration: 1463,
            },
        },
    ];
    return episodes;
});
app.listen({ port: 8080 }).then(() => {
    console.log("Ok");
});
