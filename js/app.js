// 500+ FLASHCARDS PARA 1 ANO DE ESTUDO (PROGRESSÃO COMPLETA)
const initialDeck = [
    // ========== NÍVEL INICIANTE (100 cards) ==========
    // Apresentações e cumprimentos (20)
    { level: "Iniciante", front: "Hello, how are you?", back: "Olá, como você está?" },
    { level: "Iniciante", front: "I am fine, thank you.", back: "Eu estou bem, obrigado." },
    { level: "Iniciante", front: "What is your name?", back: "Qual é o seu nome?" },
    { level: "Iniciante", front: "My name is John.", back: "Meu nome é John." },
    { level: "Iniciante", front: "Nice to meet you.", back: "Prazer em conhecê-lo." },
    { level: "Iniciante", front: "Where are you from?", back: "De onde você é?" },
    { level: "Iniciante", front: "I am from Brazil.", back: "Eu sou do Brasil." },
    { level: "Iniciante", front: "How old are you?", back: "Quantos anos você tem?" },
    { level: "Iniciante", front: "I am twenty years old.", back: "Eu tenho vinte anos." },
    { level: "Iniciante", front: "Do you speak English?", back: "Você fala inglês?" },
    { level: "Iniciante", front: "Yes, a little.", back: "Sim, um pouco." },
    { level: "Iniciante", front: "I am learning English.", back: "Eu estou aprendendo inglês." },
    { level: "Iniciante", front: "Thank you very much.", back: "Muito obrigado." },
    { level: "Iniciante", front: "You are welcome.", back: "De nada." },
    { level: "Iniciante", front: "Excuse me, please.", back: "Com licença, por favor." },
    { level: "Iniciante", front: "I am sorry.", back: "Desculpe." },
    { level: "Iniciante", front: "No problem.", back: "Sem problema." },
    { level: "Iniciante", front: "See you later.", back: "Até mais." },
    { level: "Iniciante", front: "Have a good day.", back: "Tenha um bom dia." },
    { level: "Iniciante", front: "Goodbye.", back: "Adeus." },

    // Verbo TO BE - presente (20)
    { level: "Iniciante", front: "I am a student.", back: "Eu sou um estudante." },
    { level: "Iniciante", front: "You are my friend.", back: "Você é meu amigo." },
    { level: "Iniciante", front: "He is very tall.", back: "Ele é muito alto." },
    { level: "Iniciante", front: "She is a teacher.", back: "Ela é uma professora." },
    { level: "Iniciante", front: "It is a beautiful day.", back: "É um dia bonito." },
    { level: "Iniciante", front: "We are happy.", back: "Nós estamos felizes." },
    { level: "Iniciante", front: "They are at home.", back: "Eles estão em casa." },
    { level: "Iniciante", front: "I am not tired.", back: "Eu não estou cansado." },
    { level: "Iniciante", front: "Are you ready?", back: "Você está pronto?" },
    { level: "Iniciante", front: "Is he your brother?", back: "Ele é seu irmão?" },
    { level: "Iniciante", front: "We are not late.", back: "Nós não estamos atrasados." },
    { level: "Iniciante", front: "They are from Japan.", back: "Eles são do Japão." },
    { level: "Iniciante", front: "It is cold today.", back: "Está frio hoje." },
    { level: "Iniciante", front: "I am hungry.", back: "Eu estou com fome." },
    { level: "Iniciante", front: "She is not here.", back: "Ela não está aqui." },
    { level: "Iniciante", front: "Where are you?", back: "Onde você está?" },
    { level: "Iniciante", front: "I am at work.", back: "Eu estou no trabalho." },
    { level: "Iniciante", front: "He is busy now.", back: "Ele está ocupado agora." },
    { level: "Iniciante", front: "We are learning together.", back: "Estamos aprendendo juntos." },
    { level: "Iniciante", front: "They are my parents.", back: "Eles são meus pais." },

    // Verbo TO HAVE (15)
    { level: "Iniciante", front: "I have a car.", back: "Eu tenho um carro." },
    { level: "Iniciante", front: "You have a dog.", back: "Você tem um cachorro." },
    { level: "Iniciante", front: "He has two brothers.", back: "Ele tem dois irmãos." },
    { level: "Iniciante", front: "She has beautiful eyes.", back: "Ela tem olhos bonitos." },
    { level: "Iniciante", front: "We have a meeting today.", back: "Nós temos uma reunião hoje." },
    { level: "Iniciante", front: "They have a big house.", back: "Eles têm uma casa grande." },
    { level: "Iniciante", front: "I do not have time.", back: "Eu não tenho tempo." },
    { level: "Iniciante", front: "Do you have a pen?", back: "Você tem uma caneta?" },
    { level: "Iniciante", front: "Does he have a job?", back: "Ele tem um emprego?" },
    { level: "Iniciante", front: "We have to go now.", back: "Nós temos que ir agora." },
    { level: "Iniciante", front: "I have three sisters.", back: "Eu tenho três irmãs." },
    { level: "Iniciante", front: "She has a new phone.", back: "Ela tem um telefone novo." },
    { level: "Iniciante", front: "Do they have children?", back: "Eles têm filhos?" },
    { level: "Iniciante", front: "I have a question.", back: "Eu tenho uma pergunta." },
    { level: "Iniciante", front: "We have enough money.", back: "Nós temos dinheiro suficiente." },

    // Presente Simples (25)
    { level: "Iniciante", front: "I live in São Paulo.", back: "Eu moro em São Paulo." },
    { level: "Iniciante", front: "She works every day.", back: "Ela trabalha todos os dias." },
    { level: "Iniciante", front: "We study English.", back: "Nós estudamos inglês." },
    { level: "Iniciante", front: "They like pizza.", back: "Eles gostam de pizza." },
    { level: "Iniciante", front: "He wants to travel.", back: "Ele quer viajar." },
    { level: "Iniciante", front: "I need help.", back: "Eu preciso de ajuda." },
    { level: "Iniciante", front: "Do you understand?", back: "Você entende?" },
    { level: "Iniciante", front: "She speaks Spanish.", back: "Ela fala espanhol." },
    { level: "Iniciante", front: "We love music.", back: "Nós amamos música." },
    { level: "Iniciante", front: "He plays soccer.", back: "Ele joga futebol." },
    { level: "Iniciante", front: "I go to school.", back: "Eu vou para a escola." },
    { level: "Iniciante", front: "They eat breakfast.", back: "Eles tomam café da manhã." },
    { level: "Iniciante", front: "She reads books.", back: "Ela lê livros." },
    { level: "Iniciante", front: "I drink water.", back: "Eu bebo água." },
    { level: "Iniciante", front: "We watch TV.", back: "Nós assistimos TV." },
    { level: "Iniciante", front: "He writes emails.", back: "Ele escreve emails." },
    { level: "Iniciante", front: "I cook dinner.", back: "Eu faço o jantar." },
    { level: "Iniciante", front: "She listens to music.", back: "Ela ouve música." },
    { level: "Iniciante", front: "We travel often.", back: "Nós viajamos frequentemente." },
    { level: "Iniciante", front: "They know the answer.", back: "Eles sabem a resposta." },
    { level: "Iniciante", front: "I walk to work.", back: "Eu vou a pé para o trabalho." },
    { level: "Iniciante", front: "She teaches children.", back: "Ela ensina crianças." },
    { level: "Iniciante", front: "We visit our family.", back: "Nós visitamos nossa família." },
    { level: "Iniciante", front: "He drives carefully.", back: "Ele dirige com cuidado." },
    { level: "Iniciante", front: "I sleep early.", back: "Eu durmo cedo." },

    // Perguntas WH- (20)
    { level: "Iniciante", front: "What do you do?", back: "O que você faz?" },
    { level: "Iniciante", front: "Where do you live?", back: "Onde você mora?" },
    { level: "Iniciante", front: "When do you work?", back: "Quando você trabalha?" },
    { level: "Iniciante", front: "Why are you here?", back: "Por que você está aqui?" },
    { level: "Iniciante", front: "How do you know?", back: "Como você sabe?" },
    { level: "Iniciante", front: "Who is that person?", back: "Quem é aquela pessoa?" },
    { level: "Iniciante", front: "Which one do you want?", back: "Qual você quer?" },
    { level: "Iniciante", front: "What time is it?", back: "Que horas são?" },
    { level: "Iniciante", front: "Where is the bathroom?", back: "Onde fica o banheiro?" },
    { level: "Iniciante", front: "When does it start?", back: "Quando começa?" },
    { level: "Iniciante", front: "Why do you think so?", back: "Por que você acha isso?" },
    { level: "Iniciante", front: "How much does it cost?", back: "Quanto custa?" },
    { level: "Iniciante", front: "Who are they?", back: "Quem são eles?" },
    { level: "Iniciante", front: "What does she want?", back: "O que ela quer?" },
    { level: "Iniciante", front: "Where can I find it?", back: "Onde posso encontrar?" },
    { level: "Iniciante", front: "When will you come?", back: "Quando você virá?" },
    { level: "Iniciante", front: "Why is it important?", back: "Por que é importante?" },
    { level: "Iniciante", front: "How does it work?", back: "Como funciona?" },
    { level: "Iniciante", front: "Whose book is this?", back: "De quem é este livro?" },
    { level: "Iniciante", front: "How many people are there?", back: "Quantas pessoas há?" },

    // ========== NÍVEL BÁSICO (120 cards) ==========
    // Presente Contínuo (20)
    { level: "Básico", front: "I am working now.", back: "Eu estou trabalhando agora." },
    { level: "Básico", front: "She is studying English.", back: "Ela está estudando inglês." },
    { level: "Básico", front: "We are eating lunch.", back: "Estamos almoçando." },
    { level: "Básico", front: "They are watching a movie.", back: "Eles estão assistindo um filme." },
    { level: "Básico", front: "He is reading a book.", back: "Ele está lendo um livro." },
    { level: "Básico", front: "I am not sleeping.", back: "Eu não estou dormindo." },
    { level: "Básico", front: "Are you listening?", back: "Você está ouvindo?" },
    { level: "Básico", front: "What are you doing?", back: "O que você está fazendo?" },
    { level: "Básico", front: "She is cooking dinner.", back: "Ela está fazendo o jantar." },
    { level: "Básico", front: "We are learning quickly.", back: "Estamos aprendendo rápido." },
    { level: "Básico", front: "They are playing outside.", back: "Eles estão brincando lá fora." },
    { level: "Básico", front: "I am waiting for you.", back: "Estou esperando por você." },
    { level: "Básico", front: "He is talking on the phone.", back: "Ele está falando ao telefone." },
    { level: "Básico", front: "Are they coming today?", back: "Eles estão vindo hoje?" },
    { level: "Básico", front: "I am trying my best.", back: "Estou fazendo o meu melhor." },
    { level: "Básico", front: "She is wearing a blue dress.", back: "Ela está usando um vestido azul." },
    { level: "Básico", front: "We are having fun.", back: "Estamos nos divertindo." },
    { level: "Básico", front: "It is raining outside.", back: "Está chovendo lá fora." },
    { level: "Básico", front: "They are building a house.", back: "Eles estão construindo uma casa." },
    { level: "Básico", front: "I am thinking about it.", back: "Estou pensando sobre isso." },

    // Passado Simples - verbos regulares (25)
    { level: "Básico", front: "I worked yesterday.", back: "Eu trabalhei ontem." },
    { level: "Básico", front: "She studied last night.", back: "Ela estudou ontem à noite." },
    { level: "Básico", front: "We watched that movie.", back: "Nós assistimos aquele filme." },
    { level: "Básico", front: "They played soccer.", back: "Eles jogaram futebol." },
    { level: "Básico", front: "He visited his parents.", back: "Ele visitou seus pais." },
    { level: "Básico", front: "I liked the food.", back: "Eu gostei da comida." },
    { level: "Básico", front: "She called me.", back: "Ela me ligou." },
    { level: "Básico", front: "We lived there.", back: "Nós morávamos lá." },
    { level: "Básico", front: "They arrived late.", back: "Eles chegaram tarde." },
    { level: "Básico", front: "I walked home.", back: "Eu andei até em casa." },
    { level: "Básico", front: "She cleaned the house.", back: "Ela limpou a casa." },
    { level: "Básico", front: "We needed help.", back: "Nós precisávamos de ajuda." },
    { level: "Básico", front: "He asked a question.", back: "Ele fez uma pergunta." },
    { level: "Básico", front: "I started learning English.", back: "Eu comecei a aprender inglês." },
    { level: "Básico", front: "She finished her work.", back: "Ela terminou seu trabalho." },
    { level: "Básico", front: "We talked for hours.", back: "Conversamos por horas." },
    { level: "Básico", front: "They moved to another city.", back: "Eles se mudaram para outra cidade." },
    { level: "Básico", front: "I loved that place.", back: "Eu amei aquele lugar." },
    { level: "Básico", front: "She looked tired.", back: "Ela parecia cansada." },
    { level: "Básico", front: "We listened carefully.", back: "Nós ouvimos com atenção." },
    { level: "Básico", front: "He opened the door.", back: "Ele abriu a porta." },
    { level: "Básico", front: "They showed me the way.", back: "Eles me mostraram o caminho." },
    { level: "Básico", front: "I tried to help.", back: "Eu tentei ajudar." },
    { level: "Básico", front: "She waited for me.", back: "Ela esperou por mim." },
    { level: "Básico", front: "We enjoyed the party.", back: "Nós aproveitamos a festa." },

    // Passado Simples - verbos irregulares (25)
    { level: "Básico", front: "I went to the beach.", back: "Eu fui para a praia." },
    { level: "Básico", front: "She saw a movie.", back: "Ela viu um filme." },
    { level: "Básico", front: "We had dinner together.", back: "Nós jantamos juntos." },
    { level: "Básico", front: "They came yesterday.", back: "Eles vieram ontem." },
    { level: "Básico", front: "He did his homework.", back: "Ele fez sua lição de casa." },
    { level: "Básico", front: "I made a mistake.", back: "Eu cometi um erro." },
    { level: "Básico", front: "She took a taxi.", back: "Ela pegou um táxi." },
    { level: "Básico", front: "We got good news.", back: "Nós recebemos boas notícias." },
    { level: "Básico", front: "They said nothing.", back: "Eles não disseram nada." },
    { level: "Básico", front: "I felt happy.", back: "Eu me senti feliz." },
    { level: "Básico", front: "He gave me a gift.", back: "Ele me deu um presente." },
    { level: "Básico", front: "She left early.", back: "Ela saiu cedo." },
    { level: "Básico", front: "We met new people.", back: "Nós conhecemos pessoas novas." },
    { level: "Básico", front: "I wrote a letter.", back: "Eu escrevi uma carta." },
    { level: "Básico", front: "They brought food.", back: "Eles trouxeram comida." },
    { level: "Básico", front: "He bought a car.", back: "Ele comprou um carro." },
    { level: "Básico", front: "She told me the truth.", back: "Ela me contou a verdade." },
    { level: "Básico", front: "We thought about it.", back: "Nós pensamos sobre isso." },
    { level: "Básico", front: "I found my keys.", back: "Eu encontrei minhas chaves." },
    { level: "Básico", front: "He knew the answer.", back: "Ele sabia a resposta." },
    { level: "Básico", front: "She became a doctor.", back: "Ela se tornou médica." },
    { level: "Básico", front: "We understood the lesson.", back: "Nós entendemos a lição." },
    { level: "Básico", front: "They heard the news.", back: "Eles ouviram a notícia." },
    { level: "Básico", front: "I ran very fast.", back: "Eu corri muito rápido." },
    { level: "Básico", front: "She won the competition.", back: "Ela ganhou a competição." },

    // Futuro com WILL (15)
    { level: "Básico", front: "I will help you.", back: "Eu vou ajudar você." },
    { level: "Básico", front: "She will arrive soon.", back: "Ela chegará em breve." },
    { level: "Básico", front: "We will see you tomorrow.", back: "Nós veremos você amanhã." },
    { level: "Básico", front: "They will be here.", back: "Eles estarão aqui." },
    { level: "Básico", front: "It will rain today.", back: "Vai chover hoje." },
    { level: "Básico", front: "I will not forget.", back: "Eu não vou esquecer." },
    { level: "Básico", front: "Will you come with me?", back: "Você virá comigo?" },
    { level: "Básico", front: "He will call you.", back: "Ele vai te ligar." },
    { level: "Básico", front: "We will win this game.", back: "Nós vamos ganhar este jogo." },
    { level: "Básico", front: "I will try again.", back: "Eu vou tentar de novo." },
    { level: "Básico", front: "She will finish soon.", back: "Ela vai terminar logo." },
    { level: "Básico", front: "Will they understand?", back: "Eles vão entender?" },
    { level: "Básico", front: "I will never give up.", back: "Eu nunca vou desistir." },
    { level: "Básico", front: "We will wait for you.", back: "Nós vamos esperar por você." },
    { level: "Básico", front: "It will be okay.", back: "Vai ficar tudo bem." },

    // Futuro com GOING TO (15)
    { level: "Básico", front: "I am going to study.", back: "Eu vou estudar." },
    { level: "Básico", front: "She is going to travel.", back: "Ela vai viajar." },
    { level: "Básico", front: "We are going to eat out.", back: "Nós vamos comer fora." },
    { level: "Básico", front: "They are going to move.", back: "Eles vão se mudar." },
    { level: "Básico", front: "He is going to be late.", back: "Ele vai se atrasar." },
    { level: "Básico", front: "I am not going to lie.", back: "Eu não vou mentir." },
    { level: "Básico", front: "Are you going to help?", back: "Você vai ajudar?" },
    { level: "Básico", front: "What are you going to do?", back: "O que você vai fazer?" },
    { level: "Básico", front: "She is going to buy a house.", back: "Ela vai comprar uma casa." },
    { level: "Básico", front: "We are going to learn French.", back: "Nós vamos aprender francês." },
    { level: "Básico", front: "It is going to be difficult.", back: "Vai ser difícil." },
    { level: "Básico", front: "They are going to visit us.", back: "Eles vão nos visitar." },
    { level: "Básico", front: "I am going to change my job.", back: "Vou mudar de emprego." },
    { level: "Básico", front: "He is going to start tomorrow.", back: "Ele vai começar amanhã." },
    { level: "Básico", front: "We are going to have a party.", back: "Vamos fazer uma festa." },

    // Modais CAN/COULD (20)
    { level: "Básico", front: "I can speak English.", back: "Eu consigo falar inglês." },
    { level: "Básico", front: "She can drive.", back: "Ela sabe dirigir." },
    { level: "Básico", front: "We can help you.", back: "Nós podemos ajudar você." },
    { level: "Básico", front: "Can you hear me?", back: "Você consegue me ouvir?" },
    { level: "Básico", front: "He cannot swim.", back: "Ele não sabe nadar." },
    { level: "Básico", front: "I could run faster before.", back: "Eu conseguia correr mais rápido antes." },
    { level: "Básico", front: "Could you help me?", back: "Você poderia me ajudar?" },
    { level: "Básico", front: "She can play the piano.", back: "Ela sabe tocar piano." },
    { level: "Básico", front: "We can meet tomorrow.", back: "Nós podemos nos encontrar amanhã." },
    { level: "Básico", front: "Can I ask you something?", back: "Posso te perguntar algo?" },
    { level: "Básico", front: "They can solve this problem.", back: "Eles conseguem resolver este problema." },
    { level: "Básico", front: "I could not believe it.", back: "Eu não conseguia acreditar." },
    { level: "Básico", front: "Could you repeat that?", back: "Você poderia repetir isso?" },
    { level: "Básico", front: "He can speak three languages.", back: "Ele sabe falar três idiomas." },
    { level: "Básico", front: "We cannot go there.", back: "Nós não podemos ir lá." },
    { level: "Básico", front: "Can she come with us?", back: "Ela pode vir conosco?" },
    { level: "Básico", front: "I can see you clearly.", back: "Eu consigo te ver claramente." },
    { level: "Básico", front: "Could I have some water?", back: "Eu poderia tomar um pouco de água?" },
    { level: "Básico", front: "They can finish today.", back: "Eles conseguem terminar hoje." },
    { level: "Básico", front: "Can you call me later?", back: "Você pode me ligar mais tarde?" },

    // ========== NÍVEL INTERMEDIÁRIO (160 cards) ==========
    // Present Perfect (30)
    { level: "Intermediário", front: "I have lived here for five years.", back: "Eu moro aqui há cinco anos." },
    { level: "Intermediário", front: "She has finished her work.", back: "Ela terminou seu trabalho." },
    { level: "Intermediário", front: "We have seen that movie.", back: "Nós já vimos aquele filme." },
    { level: "Intermediário", front: "They have been to Paris.", back: "Eles já estiveram em Paris." },
    { level: "Intermediário", front: "Have you eaten lunch?", back: "Você já almoçou?" },
    { level: "Intermediário", front: "He has never traveled abroad.", back: "Ele nunca viajou para o exterior." },
    { level: "Intermediário", front: "I have just arrived.", back: "Eu acabei de chegar." },
    { level: "Intermediário", front: "She has not called me yet.", back: "Ela ainda não me ligou." },
    { level: "Intermediário", front: "We have known each other since childhood.", back: "Nos conhecemos desde a infância." },
    { level: "Intermediário", front: "How long have you worked here?", back: "Há quanto tempo você trabalha aqui?" },
    { level: "Intermediário", front: "I have lost my wallet.", back: "Eu perdi minha carteira." },
    { level: "Intermediário", front: "They have moved to a new house.", back: "Eles se mudaram para uma casa nova." },
    { level: "Intermediário", front: "Has he done his homework?", back: "Ele fez a lição de casa?" },
    { level: "Intermediário", front: "She has already left.", back: "Ela já saiu." },
    { level: "Intermediário", front: "We have had this car for ten years.", back: "Temos este carro há dez anos." },
    { level: "Intermediário", front: "I have never met him.", back: "Eu nunca o conheci." },
    { level: "Intermediário", front: "Have you ever been to Japan?", back: "Você já esteve no Japão?" },
    { level: "Intermediário", front: "He has made a lot of progress.", back: "Ele fez muito progresso." },
    { level: "Intermediário", front: "We have not decided yet.", back: "Nós ainda não decidimos." },
    { level: "Intermediário", front: "She has written three books.", back: "Ela escreveu três livros." },
    { level: "Intermediário", front: "I have seen this before.", back: "Eu já vi isso antes." },
    { level: "Intermediário", front: "They have just gotten married.", back: "Eles acabaram de se casar." },
    { level: "Intermediário", front: "Have you found your keys?", back: "Você encontrou suas chaves?" },
    { level: "Intermediário", front: "He has forgotten my name.", back: "Ele esqueceu meu nome." },
    { level: "Intermediário", front: "We have tried everything.", back: "Nós tentamos de tudo." },
    { level: "Intermediário", front: "I have been waiting for hours.", back: "Estou esperando há horas." },
    { level: "Intermediário", front: "She has not answered yet.", back: "Ela ainda não respondeu." },
    { level: "Intermediário", front: "They have improved a lot.", back: "Eles melhoraram muito." },
    { level: "Intermediário", front: "Has it stopped raining?", back: "Parou de chover?" },
    { level: "Intermediário", front: "I have changed my mind.", back: "Eu mudei de ideia." },

    // Phrasal Verbs comuns (30)
    { level: "Intermediário", front: "I need to wake up early.", back: "Preciso acordar cedo." },
    { level: "Intermediário", front: "She gave up smoking.", back: "Ela parou de fumar." },
    { level: "Intermediário", front: "We will figure it out.", back: "Nós vamos descobrir." },
    { level: "Intermediário", front: "He turned down the offer.", back: "Ele recusou a oferta." },
    { level: "Intermediário", front: "I ran into an old friend.", back: "Eu encontrei um velho amigo." },
    { level: "Intermediário", front: "She looks after her children.", back: "Ela cuida dos filhos dela." },
    { level: "Intermediário", front: "We need to work out more.", back: "Precisamos nos exercitar mais." },
    { level: "Intermediário", front: "They broke up last month.", back: "Eles terminaram mês passado." },
    { level: "Intermediário", front: "I will call you back later.", back: "Vou te ligar de volta mais tarde." },
    { level: "Intermediário", front: "She came across an old photo.", back: "Ela encontrou uma foto antiga." },
    { level: "Intermediário", front: "We get along very well.", back: "Nós nos damos muito bem." },
    { level: "Intermediário", front: "He filled out the form.", back: "Ele preencheu o formulário." },
    { level: "Intermediário", front: "I need to look up this word.", back: "Preciso procurar esta palavra." },
    { level: "Intermediário", front: "She put off the meeting.", back: "Ela adiou a reunião." },
    { level: "Intermediário", front: "We should set up a time.", back: "Devemos marcar um horário." },
    { level: "Intermediário", front: "They showed up late.", back: "Eles apareceram atrasados." },
    { level: "Intermediário", front: "I take after my mother.", back: "Eu puxei minha mãe." },
    { level: "Intermediário", front: "She threw away the trash.", back: "Ela jogou o lixo fora." },
    { level: "Intermediário", front: "We need to think it over.", back: "Precisamos pensar sobre isso." },
    { level: "Intermediário", front: "He turned off the lights.", back: "Ele apagou as luzes." },
    { level: "Intermediário", front: "I will pick you up at eight.", back: "Vou te buscar às oito." },
    { level: "Intermediário", front: "She brought up a good point.", back: "Ela levantou um bom ponto." },
    { level: "Intermediário", front: "We need to carry on.", back: "Precisamos continuar." },
    { level: "Intermediário", front: "They came up with an idea.", back: "Eles tiveram uma ideia." },
    { level: "Intermediário", front: "I need to cut down on sugar.", back: "Preciso reduzir o açúcar." },
    { level: "Intermediário", front: "She fell for his lies.", back: "Ela caiu nas mentiras dele." },
    { level: "Intermediário", front: "We get by with what we have.", back: "Nós nos viramos com o que temos." },
    { level: "Intermediário", front: "He grew up in the countryside.", back: "Ele cresceu no interior." },
    { level: "Intermediário", front: "I need to hold on to this.", back: "Preciso segurar isso." },
    { level: "Intermediário", front: "She let me down.", back: "Ela me decepcionou." },

    // Condicionais (30)
    { level: "Intermediário", front: "If it rains, I will stay home.", back: "Se chover, ficarei em casa." },
    { level: "Intermediário", front: "If I had money, I would travel.", back: "Se eu tivesse dinheiro, viajaria." },
    { level: "Intermediário", front: "If I see her, I will tell her.", back: "Se eu a vir, direi a ela." },
    { level: "Intermediário", front: "If you study hard, you will pass.", back: "Se você estudar muito, passará." },
    { level: "Intermediário", front: "If I were you, I would apologize.", back: "Se eu fosse você, me desculparia." },
    { level: "Intermediário", front: "If we leave now, we will arrive on time.", back: "Se sairmos agora, chegaremos na hora." },
    { level: "Intermediário", front: "If he had studied, he would have passed.", back: "Se ele tivesse estudado, teria passado." },
    { level: "Intermediário", front: "If she calls, please let me know.", back: "Se ela ligar, por favor me avise." },
    { level: "Intermediário", front: "If I had known, I would have come.", back: "Se eu soubesse, teria vindo." },
    { level: "Intermediário", front: "If you need help, just ask.", back: "Se precisar de ajuda, apenas peça." },
    { level: "Intermediário", front: "If it were possible, I would do it.", back: "Se fosse possível, eu faria." },
    { level: "Intermediário", front: "If we had more time, we could finish.", back: "Se tivéssemos mais tempo, poderíamos terminar." },
    { level: "Intermediário", front: "If you heat water, it boils.", back: "Se você esquentar água, ela ferve." },
    { level: "Intermediário", front: "If I win the lottery, I will buy a house.", back: "Se eu ganhar na loteria, comprarei uma casa." },
    { level: "Intermediário", front: "If she had listened, she would understand.", back: "Se ela tivesse ouvido, entenderia." },
    { level: "Intermediário", front: "If you mix red and blue, you get purple.", back: "Se você misturar vermelho e azul, obtém roxo." },
    { level: "Intermediário", front: "If I could fly, I would visit every country.", back: "Se eu pudesse voar, visitaria cada país." },
    { level: "Intermediário", front: "If they invite us, we will go.", back: "Se eles nos convidarem, iremos." },
    { level: "Intermediário", front: "If you had told me, I would have helped.", back: "Se você tivesse me contado, eu teria ajudado." },
    { level: "Intermediário", front: "If it is sunny tomorrow, we will go to the beach.", back: "Se estiver ensolarado amanhã, iremos à praia." },
    { level: "Intermediário", front: "If I were rich, I would donate to charity.", back: "Se eu fosse rico, doaria para caridade." },
    { level: "Intermediário", front: "If you practice every day, you will improve.", back: "Se você praticar todo dia, melhorará." },
    { level: "Intermediário", front: "If he had been careful, the accident would not have happened.", back: "Se ele tivesse sido cuidadoso, o acidente não teria acontecido." },
    { level: "Intermediário", front: "If I finish early, I will call you.", back: "Se eu terminar cedo, te ligo." },
    { level: "Intermediário", front: "If you touch fire, you get burned.", back: "Se você tocar fogo, se queima." },
    { level: "Intermediário", front: "If I had more courage, I would ask her out.", back: "Se eu tivesse mais coragem, a convidaria para sair." },
    { level: "Intermediário", front: "If they had arrived earlier, they would have seen it.", back: "Se eles tivessem chegado mais cedo, teriam visto." },
    { level: "Intermediário", front: "If you feel sick, you should see a doctor.", back: "Se você se sentir doente, deveria ver um médico." },
    { level: "Intermediário", front: "If I had a car, I would drive you home.", back: "Se eu tivesse um carro, te levaria para casa." },
    { level: "Intermediário", front: "If it were not for you, I would have given up.", back: "Se não fosse por você, eu teria desistido." },

    // Voz Passiva (20)
    { level: "Intermediário", front: "The book was written by Shakespeare.", back: "O livro foi escrito por Shakespeare." },
    { level: "Intermediário", front: "English is spoken all over the world.", back: "Inglês é falado no mundo todo." },
    { level: "Intermediário", front: "The house was built in 1990.", back: "A casa foi construída em 1990." },
    { level: "Intermediário", front: "The letter will be sent tomorrow.", back: "A carta será enviada amanhã." },
    { level: "Intermediário", front: "The problem has been solved.", back: "O problema foi resolvido." },
    { level: "Intermediário", front: "The car is being repaired.", back: "O carro está sendo consertado." },
    { level: "Intermediário", front: "The meeting was canceled.", back: "A reunião foi cancelada." },
    { level: "Intermediário", front: "These shoes were made in Italy.", back: "Estes sapatos foram feitos na Itália." },
    { level: "Intermediário", front: "The window was broken by the storm.", back: "A janela foi quebrada pela tempestade." },
    { level: "Intermediário", front: "The report must be finished by Friday.", back: "O relatório deve ser terminado até sexta." },
    { level: "Intermediário", front: "The documents were signed yesterday.", back: "Os documentos foram assinados ontem." },
    { level: "Intermediário", front: "The computer is being used right now.", back: "O computador está sendo usado agora." },
    { level: "Intermediário", front: "The painting was sold for millions.", back: "A pintura foi vendida por milhões." },
    { level: "Intermediário", front: "The project will be completed next month.", back: "O projeto será concluído mês que vem." },
    { level: "Intermediário", front: "The food is being prepared.", back: "A comida está sendo preparada." },
    { level: "Intermediário", front: "The decision has been made.", back: "A decisão foi tomada." },
    { level: "Intermediário", front: "The bridge was designed by a famous architect.", back: "A ponte foi projetada por um arquiteto famoso." },
    { level: "Intermediário", front: "The results were announced yesterday.", back: "Os resultados foram anunciados ontem." },
    { level: "Intermediário", front: "The concert was attended by thousands.", back: "O show foi assistido por milhares." },
    { level: "Intermediário", front: "The error can be corrected easily.", back: "O erro pode ser corrigido facilmente." },

    // Discurso Indireto (20)
    { level: "Intermediário", front: "She said that she was tired.", back: "Ela disse que estava cansada." },
    { level: "Intermediário", front: "He told me that he would come.", back: "Ele me disse que viria." },
    { level: "Intermediário", front: "They said they had finished.", back: "Eles disseram que tinham terminado." },
    { level: "Intermediário", front: "She asked if I was okay.", back: "Ela perguntou se eu estava bem." },
    { level: "Intermediário", front: "He told me to wait.", back: "Ele me disse para esperar." },
    { level: "Intermediário", front: "She said she could help.", back: "Ela disse que poderia ajudar." },
    { level: "Intermediário", front: "They told us they were leaving.", back: "Eles nos disseram que estavam saindo." },
    { level: "Intermediário", front: "He asked where I lived.", back: "Ele perguntou onde eu morava." },
    { level: "Intermediário", front: "She said she had seen it before.", back: "Ela disse que tinha visto antes." },
    { level: "Intermediário", front: "He told me not to worry.", back: "Ele me disse para não me preocupar." },
    { level: "Intermediário", front: "They asked if we wanted to join.", back: "Eles perguntaram se queríamos participar." },
    { level: "Intermediário", front: "She said she would call me.", back: "Ela disse que me ligaria." },
    { level: "Intermediário", front: "He told me that he was sorry.", back: "Ele me disse que estava arrependido." },
    { level: "Intermediário", front: "They asked what time it was.", back: "Eles perguntaram que horas eram." },
    { level: "Intermediário", front: "She said she needed help.", back: "Ela disse que precisava de ajuda." },
    { level: "Intermediário", front: "He told us to be careful.", back: "Ele nos disse para termos cuidado." },
    { level: "Intermediário", front: "She asked if I had eaten.", back: "Ela perguntou se eu tinha comido." },
    { level: "Intermediário", front: "They said they were happy.", back: "Eles disseram que estavam felizes." },
    { level: "Intermediário", front: "He told me he had been there.", back: "Ele me disse que tinha estado lá." },
    { level: "Intermediário", front: "She asked me to close the door.", back: "Ela me pediu para fechar a porta." },

    // Expressões Idiomáticas (30)
    { level: "Intermediário", front: "It is raining cats and dogs.", back: "Está chovendo muito." },
    { level: "Intermediário", front: "Break a leg!", back: "Boa sorte!" },
    { level: "Intermediário", front: "It costs an arm and a leg.", back: "Custa muito caro." },
    { level: "Intermediário", front: "Piece of cake.", back: "Muito fácil." },
    { level: "Intermediário", front: "Hit the nail on the head.", back: "Acertar em cheio." },
    { level: "Intermediário", front: "Once in a blue moon.", back: "Muito raramente." },
    { level: "Intermediário", front: "Under the weather.", back: "Doente, indisposto." },
    { level: "Intermediário", front: "Let the cat out of the bag.", back: "Revelar um segredo." },
    { level: "Intermediário", front: "Bite the bullet.", back: "Enfrentar uma situação difícil." },
    { level: "Intermediário", front: "The ball is in your court.", back: "A decisão é sua." },
    { level: "Intermediário", front: "Spill the beans.", back: "Contar o segredo." },
    { level: "Intermediário", front: "It is not rocket science.", back: "Não é complicado." },
    { level: "Intermediário", front: "Call it a day.", back: "Dar por encerrado." },
    { level: "Intermediário", front: "On cloud nine.", back: "Muito feliz." },
    { level: "Intermediário", front: "Kill two birds with one stone.", back: "Matar dois coelhos com uma cajadada." },
    { level: "Intermediário", front: "The early bird catches the worm.", back: "Deus ajuda quem cedo madruga." },
    { level: "Intermediário", front: "Better late than never.", back: "Antes tarde do que nunca." },
    { level: "Intermediário", front: "Actions speak louder than words.", back: "Ações falam mais alto que palavras." },
    { level: "Intermediário", front: "Don't judge a book by its cover.", back: "Não julgue um livro pela capa." },
    { level: "Intermediário", front: "Every cloud has a silver lining.", back: "Há sempre um lado positivo." },
    { level: "Intermediário", front: "When pigs fly.", back: "Quando porcos voarem (nunca)." },
    { level: "Intermediário", front: "The ball is in your court.", back: "A decisão é sua." },
    { level: "Intermediário", front: "Bite the bullet.", back: "Enfrentar uma situação difícil." },
    { level: "Intermediário", front: "Break the ice.", back: "Quebrar o gelo." },
    { level: "Intermediário", front: "Hit the books.", back: "Estudar muito." },
    { level: "Intermediário", front: "Let sleeping dogs lie.", back: "Não mexa em vespeiro." },
    { level: "Intermediário", front: "The best of both worlds.", back: "O melhor dos dois mundos." },
    { level: "Intermediário", front: "Speak of the devil.", back: "Falando do diabo." },
    { level: "Intermediário", front: "A picture is worth a thousand words.", back: "Uma imagem vale mais que mil palavras." },

    // ========== NÍVEL AVANÇADO (185 cards) ==========
    // Present Perfect Continuous (25)
    { level: "Avançado", front: "I have been studying for three hours.", back: "Estou estudando há três horas." },
    { level: "Avançado", front: "She has been working here since 2020.", back: "Ela trabalha aqui desde 2020." },
    { level: "Avançado", front: "We have been waiting for you.", back: "Estamos esperando por você." },
    { level: "Avançado", front: "They have been living in London for five years.", back: "Eles moram em Londres há cinco anos." },
    { level: "Avançado", front: "How long have you been learning English?", back: "Há quanto tempo você está aprendendo inglês?" },
    { level: "Avançado", front: "He has been trying to contact you.", back: "Ele está tentando entrar em contato com você." },
    { level: "Avançado", front: "I have been thinking about this problem.", back: "Estou pensando sobre este problema." },
    { level: "Avançado", front: "She has been teaching for ten years.", back: "Ela ensina há dez anos." },
    { level: "Avançado", front: "We have been discussing this all day.", back: "Estamos discutindo isso o dia todo." },
    { level: "Avançado", front: "They have been traveling around the world.", back: "Eles estão viajando pelo mundo." },
    { level: "Avançado", front: "I have been reading this book for weeks.", back: "Estou lendo este livro há semanas." },
    { level: "Avançado", front: "He has been improving his skills.", back: "Ele está melhorando suas habilidades." },
    { level: "Avançado", front: "She has been practicing the piano.", back: "Ela está praticando piano." },
    { level: "Avançado", front: "We have been planning this trip.", back: "Estamos planejando esta viagem." },
    { level: "Avançado", front: "They have been working on this project.", back: "Eles estão trabalhando neste projeto." },
    { level: "Avançado", front: "I have been looking for my keys.", back: "Estou procurando minhas chaves." },
    { level: "Avançado", front: "He has been sleeping all morning.", back: "Ele está dormindo a manhã toda." },
    { level: "Avançado", front: "She has been cooking since early morning.", back: "Ela está cozinhando desde cedo." },
    { level: "Avançado", front: "We have been watching TV for hours.", back: "Estamos assistindo TV há horas." },
    { level: "Avançado", front: "They have been building this house for months.", back: "Eles estão construindo esta casa há meses." },
    { level: "Avançado", front: "I have been feeling tired lately.", back: "Tenho me sentido cansado ultimamente." },
    { level: "Avançado", front: "He has been avoiding me.", back: "Ele está me evitando." },
    { level: "Avançado", front: "She has been saving money for a car.", back: "Ela está juntando dinheiro para um carro." },
    { level: "Avançado", front: "We have been learning Spanish together.", back: "Estamos aprendendo espanhol juntos." },
    { level: "Avançado", front: "They have been dating for two years.", back: "Eles estão namorando há dois anos." },

    // Past Perfect (25)
    { level: "Avançado", front: "I had finished my homework before dinner.", back: "Eu tinha terminado minha lição antes do jantar." },
    { level: "Avançado", front: "She had already left when I arrived.", back: "Ela já tinha saído quando eu cheguei." },
    { level: "Avançado", front: "We had seen that movie before.", back: "Nós já tínhamos visto aquele filme." },
    { level: "Avançado", front: "They had been waiting for an hour.", back: "Eles estavam esperando há uma hora." },
    { level: "Avançado", front: "He had never been to Paris before.", back: "Ele nunca tinha estado em Paris antes." },
    { level: "Avançado", front: "I had just finished when you called.", back: "Eu tinha acabado de terminar quando você ligou." },
    { level: "Avançado", front: "She had studied English for years.", back: "Ela tinha estudado inglês por anos." },
    { level: "Avançado", front: "We had decided to leave early.", back: "Nós tínhamos decidido sair cedo." },
    { level: "Avançado", front: "They had completed the project.", back: "Eles tinham completado o projeto." },
    { level: "Avançado", front: "He had forgotten his keys at home.", back: "Ele tinha esquecido suas chaves em casa." },
    { level: "Avançado", front: "I had never met him before that day.", back: "Eu nunca o tinha conhecido antes daquele dia." },
    { level: "Avançado", front: "She had worked there for ten years.", back: "Ela tinha trabalhado lá por dez anos." },
    { level: "Avançado", front: "We had been friends since childhood.", back: "Éramos amigos desde a infância." },
    { level: "Avançado", front: "They had moved to a new city.", back: "Eles tinham se mudado para uma cidade nova." },
    { level: "Avançado", front: "He had lost his wallet.", back: "Ele tinha perdido sua carteira." },
    { level: "Avançado", front: "I had already eaten when she arrived.", back: "Eu já tinha comido quando ela chegou." },
    { level: "Avançado", front: "She had written three books by then.", back: "Ela tinha escrito três livros até então." },
    { level: "Avançado", front: "We had never been so happy.", back: "Nunca tínhamos sido tão felizes." },
    { level: "Avançado", front: "They had prepared everything in advance.", back: "Eles tinham preparado tudo com antecedência." },
    { level: "Avançado", front: "He had changed his mind.", back: "Ele tinha mudado de ideia." },
    { level: "Avançado", front: "I had been there many times.", back: "Eu tinha estado lá muitas vezes." },
    { level: "Avançado", front: "She had made a mistake.", back: "Ela tinha cometido um erro." },
    { level: "Avançado", front: "We had known each other for years.", back: "Nos conhecíamos há anos." },
    { level: "Avançado", front: "They had sold their house.", back: "Eles tinham vendido sua casa." },
    { level: "Avançado", front: "He had broken the window.", back: "Ele tinha quebrado a janela." },

    // Future Perfect (20)
    { level: "Avançado", front: "I will have finished by tomorrow.", back: "Eu terei terminado até amanhã." },
    { level: "Avançado", front: "She will have arrived by then.", back: "Ela terá chegado até então." },
    { level: "Avançado", front: "We will have completed the course.", back: "Nós teremos completado o curso." },
    { level: "Avançado", front: "They will have moved by next month.", back: "Eles terão se mudado até o próximo mês." },
    { level: "Avançado", front: "He will have graduated by June.", back: "Ele terá se formado até junho." },
    { level: "Avançado", front: "I will have been working here for five years.", back: "Eu terei trabalhado aqui por cinco anos." },
    { level: "Avançado", front: "She will have learned English by then.", back: "Ela terá aprendido inglês até então." },
    { level: "Avançado", front: "We will have saved enough money.", back: "Nós teremos juntado dinheiro suficiente." },
    { level: "Avançado", front: "They will have finished the project.", back: "Eles terão terminado o projeto." },
    { level: "Avançado", front: "He will have read all the books.", back: "Ele terá lido todos os livros." },
    { level: "Avançado", front: "I will have visited ten countries.", back: "Eu terei visitado dez países." },
    { level: "Avançado", front: "She will have become a doctor.", back: "Ela terá se tornado médica." },
    { level: "Avançado", front: "We will have been married for ten years.", back: "Teremos sido casados por dez anos." },
    { level: "Avançado", front: "They will have built the house.", back: "Eles terão construído a casa." },
    { level: "Avançado", front: "He will have written the report.", back: "Ele terá escrito o relatório." },
    { level: "Avançado", front: "I will have improved my skills.", back: "Eu terei melhorado minhas habilidades." },
    { level: "Avançado", front: "She will have made a decision.", back: "Ela terá tomado uma decisão." },
    { level: "Avançado", front: "We will have achieved our goals.", back: "Teremos alcançado nossos objetivos." },
    { level: "Avançado", front: "They will have solved the problem.", back: "Eles terão resolvido o problema." },
    { level: "Avançado", front: "He will have learned from his mistakes.", back: "Ele terá aprendido com seus erros." },

    // Modal Verbs Avançados (25)
    { level: "Avançado", front: "You should have studied more.", back: "Você deveria ter estudado mais." },
    { level: "Avançado", front: "I might have forgotten about it.", back: "Eu posso ter esquecido disso." },
    { level: "Avançado", front: "She must have left early.", back: "Ela deve ter saído cedo." },
    { level: "Avançado", front: "We could have done better.", back: "Nós poderíamos ter feito melhor." },
    { level: "Avançado", front: "They would have helped if they could.", back: "Eles teriam ajudado se pudessem." },
    { level: "Avançado", front: "He may have already finished.", back: "Ele pode já ter terminado." },
    { level: "Avançado", front: "I ought to have called you.", back: "Eu deveria ter te ligado." },
    { level: "Avançado", front: "She needn't have worried.", back: "Ela não precisava ter se preocupado." },
    { level: "Avançado", front: "We must have taken a wrong turn.", back: "Devemos ter virado errado." },
    { level: "Avançado", front: "They should have arrived by now.", back: "Eles deveriam ter chegado agora." },
    { level: "Avançado", front: "He might not have understood.", back: "Ele pode não ter entendido." },
    { level: "Avançado", front: "I could have been more careful.", back: "Eu poderia ter sido mais cuidadoso." },
    { level: "Avançado", front: "She would have come if invited.", back: "Ela teria vindo se convidada." },
    { level: "Avançado", front: "We must have missed the train.", back: "Devemos ter perdido o trem." },
    { level: "Avançado", front: "They may have already left.", back: "Eles podem já ter saído." },
    { level: "Avançado", front: "He should have known better.", back: "Ele deveria ter sabido melhor." },
    { level: "Avançado", front: "I might have made a mistake.", back: "Eu posso ter cometido um erro." },
    { level: "Avançado", front: "She could have told me earlier.", back: "Ela poderia ter me contado antes." },
    { level: "Avançado", front: "We would have won if we tried harder.", back: "Teríamos ganho se tentássemos mais." },
    { level: "Avançado", front: "They must have been very tired.", back: "Eles devem ter estado muito cansados." },
    { level: "Avançado", front: "He may not have received the message.", back: "Ele pode não ter recebido a mensagem." },
    { level: "Avançado", front: "I should have listened to you.", back: "Eu deveria ter te ouvido." },
    { level: "Avançado", front: "She might have been waiting for us.", back: "Ela pode ter estado esperando por nós." },
    { level: "Avançado", front: "We could have avoided this problem.", back: "Poderíamos ter evitado este problema." },
    { level: "Avançado", front: "They would have succeeded with more time.", back: "Eles teriam conseguido com mais tempo." },

    // Reported Speech Avançado (25)
    { level: "Avançado", front: "He said he had been working all day.", back: "Ele disse que tinha estado trabalhando o dia todo." },
    { level: "Avançado", front: "She told me she would be late.", back: "Ela me disse que chegaria atrasada." },
    { level: "Avançado", front: "They said they had never seen such a thing.", back: "Eles disseram que nunca tinham visto tal coisa." },
    { level: "Avançado", front: "He asked if I had finished my work.", back: "Ele perguntou se eu tinha terminado meu trabalho." },
    { level: "Avançado", front: "She told us not to worry about it.", back: "Ela nos disse para não nos preocuparmos com isso." },
    { level: "Avançado", front: "They said they would help us tomorrow.", back: "Eles disseram que nos ajudariam amanhã." },
    { level: "Avançado", front: "He told me he had been waiting for hours.", back: "Ele me disse que tinha estado esperando por horas." },
    { level: "Avançado", front: "She said she couldn't come to the party.", back: "Ela disse que não poderia vir à festa." },
    { level: "Avançado", front: "They asked where we had been.", back: "Eles perguntaram onde tínhamos estado." },
    { level: "Avançado", front: "He told me he would call me back.", back: "Ele me disse que me ligaria de volta." },
    { level: "Avançado", front: "She said she had already eaten.", back: "Ela disse que já tinha comido." },
    { level: "Avançado", front: "They told us they were moving to London.", back: "Eles nos disseram que estavam se mudando para Londres." },
    { level: "Avançado", front: "He asked if we had seen the movie.", back: "Ele perguntou se tínhamos visto o filme." },
    { level: "Avançado", front: "She said she would never forget that day.", back: "Ela disse que nunca esqueceria aquele dia." },
    { level: "Avançado", front: "They told me they had been planning this for months.", back: "Eles me disseram que tinham estado planejando isso há meses." },
    { level: "Avançado", front: "He said he couldn't believe what had happened.", back: "Ele disse que não conseguia acreditar no que tinha acontecido." },
    { level: "Avançado", front: "She told us she had been studying all night.", back: "Ela nos disse que tinha estado estudando a noite toda." },
    { level: "Avançado", front: "They asked if we would join them.", back: "Eles perguntaram se nos juntaríamos a eles." },
    { level: "Avançado", front: "He said he had never been so happy.", back: "Ele disse que nunca tinha sido tão feliz." },
    { level: "Avançado", front: "She told me she would think about it.", back: "Ela me disse que pensaria sobre isso." },
    { level: "Avançado", front: "They said they had already made a decision.", back: "Eles disseram que já tinham tomado uma decisão." },
    { level: "Avançado", front: "He asked why we hadn't called him.", back: "Ele perguntou por que não tínhamos ligado para ele." },
    { level: "Avançado", front: "She told us she had been working there for years.", back: "Ela nos disse que tinha trabalhado lá por anos." },
    { level: "Avançado", front: "They said they would never give up.", back: "Eles disseram que nunca desistiriam." },
    { level: "Avançado", front: "He told me he had been trying to reach me.", back: "Ele me disse que tinha estado tentando me contatar." },

    // Phrasal Verbs Avançados (30)
    { level: "Avançado", front: "I need to catch up on my reading.", back: "Preciso me atualizar na minha leitura." },
    { level: "Avançado", front: "She put up with his behavior for years.", back: "Ela aguentou o comportamento dele por anos." },
    { level: "Avançado", front: "We need to look into this matter.", back: "Precisamos investigar este assunto." },
    { level: "Avançado", front: "He turned out to be a great friend.", back: "Ele acabou sendo um grande amigo." },
    { level: "Avançado", front: "They ran out of time.", back: "Eles ficaram sem tempo." },
    { level: "Avançado", front: "I will get back to you tomorrow.", back: "Vou te responder amanhã." },
    { level: "Avançado", front: "She came up with a brilliant solution.", back: "Ela teve uma solução brilhante." },
    { level: "Avançado", front: "We need to cut back on expenses.", back: "Precisamos reduzir gastos." },
    { level: "Avançado", front: "He ended up staying longer than planned.", back: "Ele acabou ficando mais tempo do que planejado." },
    { level: "Avançado", front: "They broke down in tears.", back: "Eles se desmancharam em lágrimas." },
    { level: "Avançado", front: "I need to brush up on my French.", back: "Preciso revisar meu francês." },
    { level: "Avançado", front: "She stood up for her beliefs.", back: "Ela defendeu suas crenças." },
    { level: "Avançado", front: "We need to make up for lost time.", back: "Precisamos compensar o tempo perdido." },
    { level: "Avançado", front: "He backed out of the deal.", back: "Ele desistiu do acordo." },
    { level: "Avançado", front: "They fell behind on their payments.", back: "Eles ficaram atrasados nos pagamentos." },
    { level: "Avançado", front: "I need to look forward to the weekend.", back: "Preciso aguardar o fim de semana." },
    { level: "Avançado", front: "She got away with it.", back: "Ela se safou." },
    { level: "Avançado", front: "We need to stick to the plan.", back: "Precisamos seguir o plano." },
    { level: "Avançado", front: "He gave in to their demands.", back: "Ele cedeu às exigências deles." },
    { level: "Avançado", front: "They put off the meeting until next week.", back: "Eles adiaram a reunião para a próxima semana." },
    { level: "Avançado", front: "I need to keep up with the news.", back: "Preciso me manter atualizado com as notícias." },
    { level: "Avançado", front: "She turned up unexpectedly.", back: "Ela apareceu inesperadamente." },
    { level: "Avançado", front: "We need to work out a solution.", back: "Precisamos encontrar uma solução." },
    { level: "Avançado", front: "He made up a story.", back: "Ele inventou uma história." },
    { level: "Avançado", front: "They got along well from the start.", back: "Eles se deram bem desde o início." },
    { level: "Avançado", front: "I need to look after my health.", back: "Preciso cuidar da minha saúde." },
    { level: "Avançado", front: "She put forward a new proposal.", back: "Ela apresentou uma nova proposta." },
    { level: "Avançado", front: "We need to bring about change.", back: "Precisamos causar mudança." },
    { level: "Avançado", front: "He took over the company.", back: "Ele assumiu a empresa." },
    { level: "Avançado", front: "They went through a difficult time.", back: "Eles passaram por um momento difícil." },

    // Expressões Avançadas e Coloquialismos (35)
    { level: "Avançado", front: "It's a piece of cake for me.", back: "É muito fácil para mim." },
    { level: "Avançado", front: "I'm feeling under the weather today.", back: "Estou me sentindo indisposto hoje." },
    { level: "Avançado", front: "Let's call it a day.", back: "Vamos dar por encerrado." },
    { level: "Avançado", front: "She's on cloud nine.", back: "Ela está muito feliz." },
    { level: "Avançado", front: "We need to think outside the box.", back: "Precisamos pensar fora da caixa." },
    { level: "Avançado", front: "He's pulling my leg.", back: "Ele está me enganando/brincando." },
    { level: "Avançado", front: "It's raining cats and dogs outside.", back: "Está chovendo muito lá fora." },
    { level: "Avançado", front: "I'll keep my fingers crossed.", back: "Vou torcer por você." },
    { level: "Avançado", front: "She's the apple of my eye.", back: "Ela é a menina dos meus olhos." },
    { level: "Avançado", front: "We're in the same boat.", back: "Estamos na mesma situação." },
    { level: "Avançado", front: "He's a wolf in sheep's clothing.", back: "Ele é um lobo em pele de cordeiro." },
    { level: "Avançado", front: "It's time to face the music.", back: "É hora de enfrentar as consequências." },
    { level: "Avançado", front: "She's burning the midnight oil.", back: "Ela está estudando/trabalhando até tarde." },
    { level: "Avançado", front: "We need to hit the nail on the head.", back: "Precisamos acertar em cheio." },
    { level: "Avançado", front: "He's beating around the bush.", back: "Ele está enrolando/fugindo do assunto." },
    { level: "Avançado", front: "It's a blessing in disguise.", back: "É uma bênção disfarçada." },
    { level: "Avançado", front: "She's on the ball.", back: "Ela está atenta/competente." },
    { level: "Avançado", front: "We're back to square one.", back: "Estamos de volta ao ponto inicial." },
    { level: "Avançado", front: "He's got a chip on his shoulder.", back: "Ele está ressentido/irritado." },
    { level: "Avançado", front: "It's the tip of the iceberg.", back: "É só a ponta do iceberg." },
    { level: "Avançado", front: "She's walking on air.", back: "Ela está muito feliz." },
    { level: "Avançado", front: "We need to get our act together.", back: "Precisamos nos organizar." },
    { level: "Avançado", front: "He's playing it by ear.", back: "Ele está improvisando." },
    { level: "Avançado", front: "It's a drop in the bucket.", back: "É uma gota no oceano." },
    { level: "Avançado", front: "She's sitting on the fence.", back: "Ela está em cima do muro." },
    { level: "Avançado", front: "We're on the same page.", back: "Estamos de acordo." },
    { level: "Avançado", front: "He's throwing in the towel.", back: "Ele está desistindo." },
    { level: "Avançado", front: "It's a shot in the dark.", back: "É um tiro no escuro." },
    { level: "Avançado", front: "She's turning over a new leaf.", back: "Ela está mudando de vida." },
    { level: "Avançado", front: "We're in hot water.", back: "Estamos em apuros." },
    { level: "Avançado", front: "He's got a lot on his plate.", back: "Ele tem muito trabalho/responsabilidades." },
    { level: "Avançado", front: "It's a double-edged sword.", back: "É uma faca de dois gumes." },
    { level: "Avançado", front: "She's going the extra mile.", back: "Ela está fazendo um esforço extra." },
    { level: "Avançado", front: "We're cutting corners.", back: "Estamos fazendo de qualquer jeito." },
    { level: "Avançado", front: "He's on thin ice.", back: "Ele está em situação delicada." },

    // ========== CARDS ADICIONAIS PARA COMPLETAR O ANO ==========
    // Vocabulário do Dia a Dia - Iniciante (50)
    { level: "Iniciante", front: "What time do you wake up?", back: "Que horas você acorda?" },
    { level: "Iniciante", front: "I wake up at seven o'clock.", back: "Eu acordo às sete horas." },
    { level: "Iniciante", front: "I brush my teeth every morning.", back: "Eu escovo os dentes toda manhã." },
    { level: "Iniciante", front: "I take a shower before breakfast.", back: "Eu tomo banho antes do café da manhã." },
    { level: "Iniciante", front: "I have breakfast at eight.", back: "Eu tomo café da manhã às oito." },
    { level: "Iniciante", front: "I go to work by bus.", back: "Eu vou ao trabalho de ônibus." },
    { level: "Iniciante", front: "I arrive at work at nine.", back: "Eu chego ao trabalho às nove." },
    { level: "Iniciante", front: "I have lunch at noon.", back: "Eu almoço ao meio-dia." },
    { level: "Iniciante", front: "I finish work at six.", back: "Eu termino o trabalho às seis." },
    { level: "Iniciante", front: "I go home after work.", back: "Eu vou para casa depois do trabalho." },
    { level: "Iniciante", front: "I watch TV in the evening.", back: "Eu assisto TV à noite." },
    { level: "Iniciante", front: "I go to bed at ten.", back: "Eu vou para a cama às dez." },
    { level: "Iniciante", front: "I sleep for eight hours.", back: "Eu durmo por oito horas." },
    { level: "Iniciante", front: "What do you do on weekends?", back: "O que você faz nos fins de semana?" },
    { level: "Iniciante", front: "I relax on weekends.", back: "Eu relaxo nos fins de semana." },
    { level: "Iniciante", front: "I visit my family on Sundays.", back: "Eu visito minha família aos domingos." },
    { level: "Iniciante", front: "I like to read books.", back: "Eu gosto de ler livros." },
    { level: "Iniciante", front: "I enjoy listening to music.", back: "Eu gosto de ouvir música." },
    { level: "Iniciante", front: "I love playing sports.", back: "Eu adoro praticar esportes." },
    { level: "Iniciante", front: "I prefer coffee to tea.", back: "Eu prefiro café a chá." },
    { level: "Iniciante", front: "I don't like vegetables.", back: "Eu não gosto de vegetais." },
    { level: "Iniciante", front: "I hate being late.", back: "Eu odeio estar atrasado." },
    { level: "Iniciante", front: "I enjoy cooking.", back: "Eu gosto de cozinhar." },
    { level: "Iniciante", front: "I can't swim.", back: "Eu não sei nadar." },
    { level: "Iniciante", front: "I want to learn how to drive.", back: "Eu quero aprender a dirigir." },
    { level: "Iniciante", front: "I need to buy groceries.", back: "Eu preciso comprar mantimentos." },
    { level: "Iniciante", front: "I have to clean my room.", back: "Eu tenho que limpar meu quarto." },
    { level: "Iniciante", front: "I should exercise more.", back: "Eu deveria me exercitar mais." },
    { level: "Iniciante", front: "I must finish this today.", back: "Eu devo terminar isso hoje." },
    { level: "Iniciante", front: "I would like some water.", back: "Eu gostaria de um pouco de água." },
    { level: "Iniciante", front: "I feel tired today.", back: "Eu me sinto cansado hoje." },
    { level: "Iniciante", front: "I am feeling better now.", back: "Eu estou me sentindo melhor agora." },
    { level: "Iniciante", front: "I look forward to the weekend.", back: "Eu espero ansiosamente pelo fim de semana." },
    { level: "Iniciante", front: "I hope to see you soon.", back: "Eu espero te ver em breve." },
    { level: "Iniciante", front: "I plan to travel next year.", back: "Eu planejo viajar no próximo ano." },
    { level: "Iniciante", front: "I try to exercise every day.", back: "Eu tento me exercitar todo dia." },
    { level: "Iniciante", front: "I remember your name.", back: "Eu lembro do seu nome." },
    { level: "Iniciante", front: "I forget things easily.", back: "Eu esqueço as coisas facilmente." },
    { level: "Iniciante", front: "I believe in you.", back: "Eu acredito em você." },
    { level: "Iniciante", front: "I think it's a good idea.", back: "Eu acho que é uma boa ideia." },
    { level: "Iniciante", front: "I agree with you.", back: "Eu concordo com você." },
    { level: "Iniciante", front: "I disagree with that.", back: "Eu discordo disso." },
    { level: "Iniciante", front: "I understand what you mean.", back: "Eu entendo o que você quer dizer." },
    { level: "Iniciante", front: "I don't understand this word.", back: "Eu não entendo esta palavra." },
    { level: "Iniciante", front: "I speak three languages.", back: "Eu falo três idiomas." },
    { level: "Iniciante", front: "I learn something new every day.", back: "Eu aprendo algo novo todo dia." },
    { level: "Iniciante", front: "I practice English daily.", back: "Eu pratico inglês diariamente." },
    { level: "Iniciante", front: "I improve my skills constantly.", back: "Eu melhoro minhas habilidades constantemente." },
    { level: "Iniciante", front: "I make mistakes sometimes.", back: "Eu cometo erros às vezes." },
    { level: "Iniciante", front: "I learn from my mistakes.", back: "Eu aprendo com meus erros." },
    { level: "Iniciante", front: "I am proud of my progress.", back: "Eu estou orgulhoso do meu progresso." },

    // Vocabulário do Dia a Dia - Básico (50)
    { level: "Básico", front: "I was working when you called.", back: "Eu estava trabalhando quando você ligou." },
    { level: "Básico", front: "She was studying while I was cooking.", back: "Ela estava estudando enquanto eu estava cozinhando." },
    { level: "Básico", front: "They were playing when it started raining.", back: "Eles estavam brincando quando começou a chover." },
    { level: "Básico", front: "I used to live in the city.", back: "Eu costumava morar na cidade." },
    { level: "Básico", front: "She used to smoke, but she quit.", back: "Ela costumava fumar, mas parou." },
    { level: "Básico", front: "We used to go to the beach every summer.", back: "Nós costumávamos ir à praia todo verão." },
    { level: "Básico", front: "I would visit my grandmother every Sunday.", back: "Eu visitava minha avó todo domingo." },
    { level: "Básico", front: "When I was young, I would play outside all day.", back: "Quando eu era jovem, eu brincava lá fora o dia todo." },
    { level: "Básico", front: "I am going to start a new job next month.", back: "Vou começar um novo emprego mês que vem." },
    { level: "Básico", front: "She is going to move to another country.", back: "Ela vai se mudar para outro país." },
    { level: "Básico", front: "We are going to celebrate your birthday.", back: "Vamos celebrar seu aniversário." },
    { level: "Básico", front: "I will be there in ten minutes.", back: "Eu estarei lá em dez minutos." },
    { level: "Básico", front: "She will probably arrive late.", back: "Ela provavelmente chegará atrasada." },
    { level: "Básico", front: "They will definitely come to the party.", back: "Eles definitivamente virão à festa." },
    { level: "Básico", front: "I might go to the movies tonight.", back: "Eu posso ir ao cinema hoje à noite." },
    { level: "Básico", front: "She may not be able to come.", back: "Ela pode não conseguir vir." },
    { level: "Básico", front: "We should leave early to avoid traffic.", back: "Devemos sair cedo para evitar o trânsito." },
    { level: "Básico", front: "You must finish this by Friday.", back: "Você deve terminar isso até sexta." },
    { level: "Básico", front: "He has to work on weekends.", back: "Ele tem que trabalhar nos fins de semana." },
    { level: "Básico", front: "I need to improve my English.", back: "Eu preciso melhorar meu inglês." },
    { level: "Básico", front: "She wants to learn how to cook.", back: "Ela quer aprender a cozinhar." },
    { level: "Básico", front: "We like to travel during holidays.", back: "Nós gostamos de viajar durante as férias." },
    { level: "Básico", front: "They enjoy watching movies together.", back: "Eles gostam de assistir filmes juntos." },
    { level: "Básico", front: "I prefer staying home on rainy days.", back: "Eu prefiro ficar em casa em dias chuvosos." },
    { level: "Básico", front: "She loves reading mystery novels.", back: "Ela adora ler romances policiais." },
    { level: "Básico", front: "We hate waiting in long lines.", back: "Nós odiamos esperar em filas longas." },
    { level: "Básico", front: "I can't stand loud noises.", back: "Eu não suporto barulhos altos." },
    { level: "Básico", front: "She is good at playing the piano.", back: "Ela é boa em tocar piano." },
    { level: "Básico", front: "He is bad at remembering names.", back: "Ele é ruim em lembrar nomes." },
    { level: "Básico", front: "I am interested in learning languages.", back: "Eu estou interessado em aprender idiomas." },
    { level: "Básico", front: "She is afraid of spiders.", back: "Ela tem medo de aranhas." },
    { level: "Básico", front: "We are excited about the trip.", back: "Estamos animados com a viagem." },
    { level: "Básico", front: "They are worried about the exam.", back: "Eles estão preocupados com a prova." },
    { level: "Básico", front: "I am surprised by the news.", back: "Eu estou surpreso com a notícia." },
    { level: "Básico", front: "She is disappointed with the results.", back: "Ela está decepcionada com os resultados." },
    { level: "Básico", front: "We are proud of our achievements.", back: "Estamos orgulhosos das nossas conquistas." },
    { level: "Básico", front: "I am grateful for your help.", back: "Eu sou grato pela sua ajuda." },
    { level: "Básico", front: "She is confident about her presentation.", back: "Ela está confiante sobre sua apresentação." },
    { level: "Básico", front: "He is nervous about the interview.", back: "Ele está nervoso com a entrevista." },
    { level: "Básico", front: "I am curious about other cultures.", back: "Eu sou curioso sobre outras culturas." },
    { level: "Básico", front: "We are ready to start.", back: "Estamos prontos para começar." },
    { level: "Básico", front: "They are prepared for the test.", back: "Eles estão preparados para o teste." },
    { level: "Básico", front: "I am used to waking up early.", back: "Eu estou acostumado a acordar cedo." },
    { level: "Básico", front: "She is getting used to the new job.", back: "Ela está se acostumando com o novo emprego." },
    { level: "Básico", front: "We are looking forward to the holidays.", back: "Estamos ansiosos pelas férias." },
    { level: "Básico", front: "I am tired of working late.", back: "Eu estou cansado de trabalhar até tarde." },
    { level: "Básico", front: "She is capable of doing great things.", back: "Ela é capaz de fazer grandes coisas." },
    { level: "Básico", front: "He is responsible for the project.", back: "Ele é responsável pelo projeto." },
    { level: "Básico", front: "I am aware of the problem.", back: "Eu estou ciente do problema." },
    { level: "Básico", front: "We are familiar with this area.", back: "Estamos familiarizados com esta área." },

    // Vocabulário Avançado - Intermediário (50)
    { level: "Intermediário", front: "I have been working here for three years.", back: "Eu trabalho aqui há três anos." },
    { level: "Intermediário", front: "She has been studying English since January.", back: "Ela está estudando inglês desde janeiro." },
    { level: "Intermediário", front: "We have been waiting for over an hour.", back: "Estamos esperando há mais de uma hora." },
    { level: "Intermediário", front: "I had been living there before I moved.", back: "Eu tinha estado morando lá antes de me mudar." },
    { level: "Intermediário", front: "She had been working all night.", back: "Ela tinha estado trabalhando a noite toda." },
    { level: "Intermediário", front: "By next year, I will have been here for five years.", back: "Até o próximo ano, eu terei estado aqui por cinco anos." },
    { level: "Intermediário", front: "I wish I had studied harder.", back: "Eu gostaria de ter estudado mais." },
    { level: "Intermediário", front: "I wish I could speak fluently.", back: "Eu gostaria de poder falar fluentemente." },
    { level: "Intermediário", front: "If only I had more time.", back: "Se ao menos eu tivesse mais tempo." },
    { level: "Intermediário", front: "I'd rather stay home than go out.", back: "Eu prefiro ficar em casa do que sair." },
    { level: "Intermediário", front: "She'd better hurry or she'll be late.", back: "É melhor ela se apressar ou vai se atrasar." },
    { level: "Intermediário", front: "I'd prefer to go by train.", back: "Eu preferiria ir de trem." },
    { level: "Intermediário", front: "It's high time we left.", back: "Já passou da hora de irmos." },
    { level: "Intermediário", front: "I'd sooner walk than take the bus.", back: "Eu preferiria andar do que pegar o ônibus." },
    { level: "Intermediário", front: "The sooner, the better.", back: "Quanto mais cedo, melhor." },
    { level: "Intermediário", front: "The more you practice, the better you get.", back: "Quanto mais você pratica, melhor você fica." },
    { level: "Intermediário", front: "I'd just as soon stay home.", back: "Eu preferiria ficar em casa." },
    { level: "Intermediário", front: "I might as well go now.", back: "É melhor eu ir agora." },
    { level: "Intermediário", front: "You may as well tell me the truth.", back: "É melhor você me contar a verdade." },
    { level: "Intermediário", front: "I can't help but laugh.", back: "Eu não consigo evitar rir." },
    { level: "Intermediário", front: "She can't help feeling nervous.", back: "Ela não consegue evitar se sentir nervosa." },
    { level: "Intermediário", front: "I can't wait to see you.", back: "Mal posso esperar para te ver." },
    { level: "Intermediário", front: "I can't stand waiting in line.", back: "Eu não suporto esperar na fila." },
    { level: "Intermediário", front: "I can't bear to see you sad.", back: "Eu não consigo suportar te ver triste." },
    { level: "Intermediário", front: "I'd rather not talk about it.", back: "Eu preferiria não falar sobre isso." },
    { level: "Intermediário", front: "I'd better not be late.", back: "É melhor eu não me atrasar." },
    { level: "Intermediário", front: "You'd better not forget.", back: "É melhor você não esquecer." },
    { level: "Intermediário", front: "I'd just as soon not go.", back: "Eu preferiria não ir." },
    { level: "Intermediário", front: "I might as well not bother.", back: "É melhor eu nem me incomodar." },
    { level: "Intermediário", front: "I can't help wondering about it.", back: "Eu não consigo evitar me perguntar sobre isso." },
    { level: "Intermediário", front: "I can't help thinking about you.", back: "Eu não consigo evitar pensar em você." },
    { level: "Intermediário", front: "I can't wait for the weekend.", back: "Mal posso esperar pelo fim de semana." },
    { level: "Intermediário", front: "I can't stand the heat.", back: "Eu não suporto o calor." },
    { level: "Intermediário", front: "I can't bear the thought of leaving.", back: "Eu não consigo suportar a ideia de partir." },
    { level: "Intermediário", front: "I'd rather be alone right now.", back: "Eu preferiria estar sozinho agora." },
    { level: "Intermediário", front: "I'd better get going.", back: "É melhor eu ir embora." },
    { level: "Intermediário", front: "You'd better watch out.", back: "É melhor você tomar cuidado." },
    { level: "Intermediário", front: "I'd just as soon leave early.", back: "Eu preferiria sair cedo." },
    { level: "Intermediário", front: "I might as well finish it now.", back: "É melhor eu terminar agora." },
    { level: "Intermediário", front: "You may as well give up.", back: "É melhor você desistir." },
    { level: "Intermediário", front: "I can't help but smile.", back: "Eu não consigo evitar sorrir." },
    { level: "Intermediário", front: "She can't help being worried.", back: "Ela não consegue evitar se preocupar." },
    { level: "Intermediário", front: "I can't wait to start.", back: "Mal posso esperar para começar." },
    { level: "Intermediário", front: "I can't stand being ignored.", back: "Eu não suporto ser ignorado." },
    { level: "Intermediário", front: "I can't bear the silence.", back: "Eu não consigo suportar o silêncio." },
    { level: "Intermediário", front: "I'd rather not discuss it.", back: "Eu preferiria não discutir isso." },
    { level: "Intermediário", front: "I'd better not make a mistake.", back: "É melhor eu não cometer um erro." },
    { level: "Intermediário", front: "You'd better not be late again.", back: "É melhor você não se atrasar de novo." },
    { level: "Intermediário", front: "I'd just as soon not mention it.", back: "Eu preferiria não mencionar isso." },
    { level: "Intermediário", front: "I might as well not even try.", back: "É melhor eu nem tentar." },

    // Vocabulário Avançado - Avançado (50)
    { level: "Avançado", front: "I would have gone if I had known.", back: "Eu teria ido se soubesse." },
    { level: "Avançado", front: "She would have called if she had time.", back: "Ela teria ligado se tivesse tempo." },
    { level: "Avançado", front: "We would have finished earlier if we had started on time.", back: "Teríamos terminado mais cedo se tivéssemos começado na hora." },
    { level: "Avançado", front: "I should have studied more for the exam.", back: "Eu deveria ter estudado mais para a prova." },
    { level: "Avançado", front: "She should have told me about it.", back: "Ela deveria ter me contado sobre isso." },
    { level: "Avançado", front: "We should have left earlier.", back: "Deveríamos ter saído mais cedo." },
    { level: "Avançado", front: "I could have done better.", back: "Eu poderia ter feito melhor." },
    { level: "Avançado", front: "She could have helped if she wanted.", back: "Ela poderia ter ajudado se quisesse." },
    { level: "Avançado", front: "We could have avoided this problem.", back: "Poderíamos ter evitado este problema." },
    { level: "Avançado", front: "I might have forgotten about it.", back: "Eu posso ter esquecido disso." },
    { level: "Avançado", front: "She might have already left.", back: "Ela pode já ter saído." },
    { level: "Avançado", front: "They might have been waiting for us.", back: "Eles podem ter estado esperando por nós." },
    { level: "Avançado", front: "I must have made a mistake.", back: "Eu devo ter cometido um erro." },
    { level: "Avançado", front: "She must have been very tired.", back: "Ela deve ter estado muito cansada." },
    { level: "Avançado", front: "We must have taken the wrong turn.", back: "Devemos ter virado errado." },
    { level: "Avançado", front: "I needn't have worried about it.", back: "Eu não precisava ter me preocupado com isso." },
    { level: "Avançado", front: "She needn't have come so early.", back: "Ela não precisava ter vindo tão cedo." },
    { level: "Avançado", front: "We needn't have brought so much food.", back: "Não precisávamos ter trazido tanta comida." },
    { level: "Avançado", front: "I ought to have called you earlier.", back: "Eu deveria ter te ligado mais cedo." },
    { level: "Avançado", front: "She ought to have been more careful.", back: "Ela deveria ter sido mais cuidadosa." },
    { level: "Avançado", front: "We ought to have planned better.", back: "Deveríamos ter planejado melhor." },
    { level: "Avançado", front: "I'd rather have stayed home.", back: "Eu preferiria ter ficado em casa." },
    { level: "Avançado", front: "She'd rather have gone alone.", back: "Ela preferiria ter ido sozinha." },
    { level: "Avançado", front: "We'd rather have waited a bit longer.", back: "Preferiríamos ter esperado um pouco mais." },
    { level: "Avançado", front: "I'd better have finished by now.", back: "Seria melhor eu ter terminado agora." },
    { level: "Avançado", front: "She'd better have called by now.", back: "Seria melhor ela ter ligado agora." },
    { level: "Avançado", front: "We'd better have left earlier.", back: "Seria melhor termos saído mais cedo." },
    { level: "Avançado", front: "I wish I had known about it.", back: "Eu gostaria de ter sabido sobre isso." },
    { level: "Avançado", front: "She wishes she had studied more.", back: "Ela gostaria de ter estudado mais." },
    { level: "Avançado", front: "We wish we had arrived earlier.", back: "Gostaríamos de ter chegado mais cedo." },
    { level: "Avançado", front: "I wish I could have helped.", back: "Eu gostaria de ter podido ajudar." },
    { level: "Avançado", front: "She wishes she could have been there.", back: "Ela gostaria de ter podido estar lá." },
    { level: "Avançado", front: "We wish we could have done more.", back: "Gostaríamos de ter podido fazer mais." },
    { level: "Avançado", front: "If only I had listened to you.", back: "Se ao menos eu tivesse te ouvido." },
    { level: "Avançado", front: "If only she had been more careful.", back: "Se ao menos ela tivesse sido mais cuidadosa." },
    { level: "Avançado", front: "If only we had known the truth.", back: "Se ao menos tivéssemos sabido a verdade." },
    { level: "Avançado", front: "I'd just as soon have stayed home.", back: "Eu preferiria ter ficado em casa." },
    { level: "Avançado", front: "She'd just as soon have left early.", back: "Ela preferiria ter saído cedo." },
    { level: "Avançado", front: "We'd just as soon have waited.", back: "Preferiríamos ter esperado." },
    { level: "Avançado", front: "I might as well have not gone.", back: "É melhor eu não ter ido." },
    { level: "Avançado", front: "She might as well have stayed home.", back: "É melhor ela ter ficado em casa." },
    { level: "Avançado", front: "We might as well have given up.", back: "É melhor termos desistido." },
    { level: "Avançado", front: "I can't have forgotten about it.", back: "Eu não posso ter esquecido disso." },
    { level: "Avançado", front: "She can't have left already.", back: "Ela não pode ter saído já." },
    { level: "Avançado", front: "We can't have been that wrong.", back: "Não podemos ter estado tão errados." },
    { level: "Avançado", front: "I may not have understood correctly.", back: "Eu posso não ter entendido corretamente." },
    { level: "Avançado", front: "She may not have received the message.", back: "Ela pode não ter recebido a mensagem." },
    { level: "Avançado", front: "We may not have been clear enough.", back: "Podemos não ter sido claros o suficiente." },
    { level: "Avançado", front: "I shouldn't have said that.", back: "Eu não deveria ter dito isso." },
    { level: "Avançado", front: "She shouldn't have gone alone.", back: "Ela não deveria ter ido sozinha." },
    { level: "Avançado", front: "We shouldn't have waited so long.", back: "Não deveríamos ter esperado tanto tempo." },

    // Frases de Conversação - Todos os Níveis (100)
    { level: "Iniciante", front: "How was your day?", back: "Como foi seu dia?" },
    { level: "Iniciante", front: "My day was great, thank you.", back: "Meu dia foi ótimo, obrigado." },
    { level: "Iniciante", front: "What did you do today?", back: "O que você fez hoje?" },
    { level: "Iniciante", front: "I went to the store.", back: "Eu fui à loja." },
    { level: "Iniciante", front: "What are you doing this weekend?", back: "O que você vai fazer neste fim de semana?" },
    { level: "Iniciante", front: "I'm planning to visit my family.", back: "Estou planejando visitar minha família." },
    { level: "Básico", front: "How have you been?", back: "Como você tem estado?" },
    { level: "Básico", front: "I've been doing well, thanks.", back: "Tenho estado bem, obrigado." },
    { level: "Básico", front: "What have you been up to?", back: "O que você tem feito?" },
    { level: "Básico", front: "I've been working on a new project.", back: "Tenho trabalhado em um novo projeto." },
    { level: "Básico", front: "How's everything going?", back: "Como está tudo indo?" },
    { level: "Básico", front: "Everything is going well.", back: "Tudo está indo bem." },
    { level: "Intermediário", front: "I've been meaning to call you.", back: "Eu estava querendo te ligar." },
    { level: "Intermediário", front: "I've been thinking about you.", back: "Tenho pensado em você." },
    { level: "Intermediário", front: "I've been looking forward to this.", back: "Tenho esperado ansiosamente por isso." },
    { level: "Intermediário", front: "I've been wondering about that.", back: "Tenho me perguntado sobre isso." },
    { level: "Intermediário", front: "I've been trying to reach you.", back: "Tenho tentado entrar em contato com você." },
    { level: "Intermediário", front: "I've been working on improving myself.", back: "Tenho trabalhado em me melhorar." },
    { level: "Avançado", front: "I'd been hoping to see you again.", back: "Eu tinha estado esperando te ver de novo." },
    { level: "Avançado", front: "I'd been planning this for months.", back: "Eu tinha estado planejando isso há meses." },
    { level: "Avançado", front: "I'd been looking forward to meeting you.", back: "Eu tinha estado esperando ansiosamente para te conhecer." },
    { level: "Avançado", front: "I'd been wondering when you'd call.", back: "Eu tinha estado me perguntando quando você ligaria." },
    { level: "Avançado", front: "I'd been trying to get in touch.", back: "Eu tinha estado tentando entrar em contato." },
    { level: "Avançado", front: "I'd been working on this project for weeks.", back: "Eu tinha estado trabalhando neste projeto há semanas." },
    { level: "Iniciante", front: "Can you help me?", back: "Você pode me ajudar?" },
    { level: "Iniciante", front: "Of course, I'd be happy to help.", back: "Claro, ficaria feliz em ajudar." },
    { level: "Iniciante", front: "Could you please repeat that?", back: "Você poderia repetir isso, por favor?" },
    { level: "Iniciante", front: "I didn't catch that.", back: "Eu não entendi isso." },
    { level: "Iniciante", front: "Could you speak more slowly?", back: "Você poderia falar mais devagar?" },
    { level: "Básico", front: "I'm sorry, I didn't understand.", back: "Desculpe, eu não entendi." },
    { level: "Básico", front: "Could you explain that again?", back: "Você poderia explicar isso de novo?" },
    { level: "Básico", front: "I'm not sure I follow you.", back: "Não tenho certeza se entendi você." },
    { level: "Básico", front: "What do you mean by that?", back: "O que você quer dizer com isso?" },
    { level: "Básico", front: "Could you give me an example?", back: "Você poderia me dar um exemplo?" },
    { level: "Intermediário", front: "I'm afraid I don't quite understand.", back: "Receio que não entendo muito bem." },
    { level: "Intermediário", front: "Could you clarify what you mean?", back: "Você poderia esclarecer o que quer dizer?" },
    { level: "Intermediário", front: "I'm not entirely sure what you're getting at.", back: "Não tenho certeza absoluta do que você está querendo dizer." },
    { level: "Intermediário", front: "Could you elaborate on that point?", back: "Você poderia elaborar sobre esse ponto?" },
    { level: "Intermediário", front: "I'd appreciate it if you could explain further.", back: "Eu apreciaria se você pudesse explicar mais." },
    { level: "Avançado", front: "I'm not entirely certain I've grasped your meaning.", back: "Não tenho certeza absoluta de que entendi seu significado." },
    { level: "Avançado", front: "Could you perhaps provide more context?", back: "Você poderia talvez fornecer mais contexto?" },
    { level: "Avançado", front: "I'm struggling to comprehend the full implications.", back: "Estou tendo dificuldade para compreender todas as implicações." },
    { level: "Avançado", front: "Would you mind elaborating on that concept?", back: "Você se importaria de elaborar sobre esse conceito?" },
    { level: "Avançado", front: "I'd be grateful if you could shed some light on this.", back: "Eu ficaria grato se você pudesse esclarecer isso." },
    { level: "Iniciante", front: "What's your favorite color?", back: "Qual é sua cor favorita?" },
    { level: "Iniciante", front: "My favorite color is blue.", back: "Minha cor favorita é azul." },
    { level: "Iniciante", front: "What kind of music do you like?", back: "Que tipo de música você gosta?" },
    { level: "Iniciante", front: "I like rock music.", back: "Eu gosto de música rock." },
    { level: "Iniciante", front: "What's your favorite food?", back: "Qual é sua comida favorita?" },
    { level: "Iniciante", front: "I love Italian food.", back: "Eu adoro comida italiana." },
    { level: "Básico", front: "What are your hobbies?", back: "Quais são seus hobbies?" },
    { level: "Básico", front: "I enjoy reading and traveling.", back: "Eu gosto de ler e viajar." },
    { level: "Básico", front: "What do you do in your free time?", back: "O que você faz no seu tempo livre?" },
    { level: "Básico", front: "I usually watch movies or go for a walk.", back: "Eu geralmente assisto filmes ou dou uma caminhada." },
    { level: "Básico", front: "What's your favorite movie?", back: "Qual é seu filme favorito?" },
    { level: "Básico", front: "I don't have a single favorite, but I love action movies.", back: "Eu não tenho um favorito único, mas adoro filmes de ação." },
    { level: "Intermediário", front: "What are your thoughts on this matter?", back: "Quais são seus pensamentos sobre este assunto?" },
    { level: "Intermediário", front: "I think we should consider all options.", back: "Eu acho que devemos considerar todas as opções." },
    { level: "Intermediário", front: "What's your opinion about this?", back: "Qual é sua opinião sobre isso?" },
    { level: "Intermediário", front: "I believe we need to take action soon.", back: "Eu acredito que precisamos agir logo." },
    { level: "Intermediário", front: "How do you feel about this situation?", back: "Como você se sente sobre esta situação?" },
    { level: "Intermediário", front: "I feel we should be more cautious.", back: "Eu sinto que devemos ser mais cautelosos." },
    { level: "Avançado", front: "What's your perspective on this issue?", back: "Qual é sua perspectiva sobre esta questão?" },
    { level: "Avançado", front: "From my perspective, we need to approach this differently.", back: "Da minha perspectiva, precisamos abordar isso de forma diferente." },
    { level: "Avançado", front: "What's your take on this development?", back: "Qual é sua opinião sobre este desenvolvimento?" },
    { level: "Avançado", front: "My take is that we should proceed with caution.", back: "Minha opinião é que devemos proceder com cautela." },
    { level: "Avançado", front: "How do you interpret these findings?", back: "Como você interpreta essas descobertas?" },
    { level: "Avançado", front: "I interpret them as a sign of progress.", back: "Eu as interpreto como um sinal de progresso." },
    { level: "Iniciante", front: "Nice weather today, isn't it?", back: "Bom tempo hoje, não é?" },
    { level: "Iniciante", front: "Yes, it's a beautiful day.", back: "Sim, é um dia bonito." },
    { level: "Iniciante", front: "It's really hot today.", back: "Está muito quente hoje." },
    { level: "Iniciante", front: "I hope it doesn't rain.", back: "Espero que não chova." },
    { level: "Iniciante", front: "The weather is perfect for a picnic.", back: "O tempo está perfeito para um piquenique." },
    { level: "Básico", front: "How's the weather where you are?", back: "Como está o tempo onde você está?" },
    { level: "Básico", front: "It's been raining all day here.", back: "Tem chovido o dia todo aqui." },
    { level: "Básico", front: "We've been having beautiful weather lately.", back: "Temos tido um tempo lindo ultimamente." },
    { level: "Básico", front: "I can't stand this heat.", back: "Eu não suporto este calor." },
    { level: "Básico", front: "I love this cool weather.", back: "Eu adoro este tempo fresco." },
    { level: "Intermediário", front: "The weather has been quite unpredictable lately.", back: "O tempo tem estado bastante imprevisível ultimamente." },
    { level: "Intermediário", front: "I'm looking forward to the warmer months.", back: "Estou ansioso pelos meses mais quentes." },
    { level: "Intermediário", front: "This weather is perfect for staying indoors.", back: "Este tempo está perfeito para ficar em casa." },
    { level: "Intermediário", front: "I've never seen weather like this before.", back: "Nunca vi um tempo assim antes." },
    { level: "Intermediário", front: "The weather forecast says it will be sunny tomorrow.", back: "A previsão do tempo diz que estará ensolarado amanhã." },
    { level: "Avançado", front: "The weather patterns have been quite unusual this season.", back: "Os padrões climáticos têm estado bastante incomuns nesta temporada." },
    { level: "Avançado", front: "I'm anticipating a change in the weather conditions.", back: "Estou antecipando uma mudança nas condições climáticas." },
    { level: "Avançado", front: "The meteorological conditions are favorable for our plans.", back: "As condições meteorológicas são favoráveis para nossos planos." },
    { level: "Avançado", front: "I've been monitoring the weather patterns closely.", back: "Tenho monitorado os padrões climáticos de perto." },
    { level: "Avançado", front: "The climatic conditions are ideal for this time of year.", back: "As condições climáticas são ideais para esta época do ano." },
    { level: "Iniciante", front: "How much does this cost?", back: "Quanto custa isso?" },
    { level: "Iniciante", front: "It costs twenty dollars.", back: "Custa vinte dólares." },
    { level: "Iniciante", front: "That's too expensive for me.", back: "Isso é muito caro para mim." },
    { level: "Iniciante", front: "Do you have anything cheaper?", back: "Você tem algo mais barato?" },
    { level: "Iniciante", front: "I'll take it.", back: "Eu levo." },
    { level: "Básico", front: "What's the price of this item?", back: "Qual é o preço deste item?" },
    { level: "Básico", front: "Is there a discount available?", back: "Há algum desconto disponível?" },
    { level: "Básico", front: "Can you give me a better price?", back: "Você pode me dar um preço melhor?" },
    { level: "Básico", front: "I think that's a fair price.", back: "Eu acho que é um preço justo." },
    { level: "Básico", front: "I'm looking for something in my budget.", back: "Estou procurando algo no meu orçamento." },
    { level: "Intermediário", front: "What's the total cost including taxes?", back: "Qual é o custo total incluindo impostos?" },
    { level: "Intermediário", front: "Are there any additional fees I should be aware of?", back: "Há alguma taxa adicional que eu deveria saber?" },
    { level: "Intermediário", front: "I'd like to negotiate the price.", back: "Eu gostaria de negociar o preço." },
    { level: "Intermediário", front: "The price seems reasonable given the quality.", back: "O preço parece razoável considerando a qualidade." },
    { level: "Intermediário", front: "I need to consider the value for money.", back: "Preciso considerar o custo-benefício." },
    { level: "Avançado", front: "What's the breakdown of the costs?", back: "Qual é a divisão dos custos?" },
    { level: "Avançado", front: "I'd like to discuss the pricing structure.", back: "Eu gostaria de discutir a estrutura de preços." },
    { level: "Avançado", front: "The cost-benefit analysis suggests this is worthwhile.", back: "A análise de custo-benefício sugere que vale a pena." },
    { level: "Avançado", front: "I'm evaluating the total cost of ownership.", back: "Estou avaliando o custo total de propriedade." },
    { level: "Avançado", front: "The pricing seems competitive in the current market.", back: "O preço parece competitivo no mercado atual." }
];

// Estado da aplicação
let deck = [];
let currentCardIndex = 0;
let isCardFlipped = false;
const levelOrder = ["Iniciante", "Básico", "Intermediário", "Avançado"];
const unlockThreshold = 0.7; // 70% para desbloquear próximo nível

let stats = {
    streak: 0,
    lastStudyDate: null,
    todayCount: 0,
    totalStudied: 0,
    currentLevel: "Iniciante", // Nível atual do usuário
    unlockedLevels: ["Iniciante"], // Níveis desbloqueados
    cardsPerDay: 10, // Cards por dia (padrão: 10)
    cardsByLevel: {
        "Iniciante": { studied: 0, total: 0 },
        "Básico": { studied: 0, total: 0 },
        "Intermediário": { studied: 0, total: 0 },
        "Avançado": { studied: 0, total: 0 }
    }
};

// Inicialização
function init() {
    loadData();
    updateStats();
    // Carregar valor no input de configurações se o modal existir
    if (document.getElementById('cardsPerDayInput')) {
        document.getElementById('cardsPerDayInput').value = stats.cardsPerDay || 10;
    }
    showNextCard();
}

// Carregar dados do localStorage
function loadData() {
    const savedDeck = localStorage.getItem('englishCardDeck');
    const savedStats = localStorage.getItem('englishCardStats');
    
    if (savedDeck) {
        deck = JSON.parse(savedDeck);
    } else {
        deck = initialDeck.map(card => ({
            ...card,
            studied: false,
            difficulty: null,
            nextReview: null
        }));
        saveData();
    }

    if (savedStats) {
        const loadedStats = JSON.parse(savedStats);
        stats = { ...stats, ...loadedStats };
        
        // Garantir que currentLevel e unlockedLevels existam
        if (!stats.currentLevel) {
            stats.currentLevel = "Iniciante";
        }
        if (!stats.unlockedLevels || !Array.isArray(stats.unlockedLevels)) {
            stats.unlockedLevels = ["Iniciante"];
        }
        if (!stats.cardsPerDay || stats.cardsPerDay < 1) {
            stats.cardsPerDay = 10;
        }
    }

    // Atualizar contagem de cards por nível
    stats.cardsByLevel = {
        "Iniciante": { studied: 0, total: 0 },
        "Básico": { studied: 0, total: 0 },
        "Intermediário": { studied: 0, total: 0 },
        "Avançado": { studied: 0, total: 0 }
    };
    
    deck.forEach(card => {
        if (stats.cardsByLevel[card.level]) {
            stats.cardsByLevel[card.level].total++;
            if (card.studied) {
                stats.cardsByLevel[card.level].studied++;
            }
        }
    });
    
    // Verificar e desbloquear níveis baseado no progresso
    checkAndUnlockLevels();
}

// Salvar dados no localStorage
function saveData() {
    localStorage.setItem('englishCardDeck', JSON.stringify(deck));
    localStorage.setItem('englishCardStats', JSON.stringify(stats));
}

// Verificar e desbloquear níveis baseado no progresso
function checkAndUnlockLevels() {
    for (let i = 0; i < levelOrder.length - 1; i++) {
        const currentLevel = levelOrder[i];
        const nextLevel = levelOrder[i + 1];
        
        // Se o próximo nível já está desbloqueado, pular
        if (stats.unlockedLevels.includes(nextLevel)) {
            continue;
        }
        
        // Calcular progresso do nível atual
        const levelStats = stats.cardsByLevel[currentLevel];
        if (levelStats.total > 0) {
            const progress = levelStats.studied / levelStats.total;
            
            // Se completou 70% do nível atual, desbloquear próximo
            if (progress >= unlockThreshold) {
                if (!stats.unlockedLevels.includes(nextLevel)) {
                    stats.unlockedLevels.push(nextLevel);
                    // Se o nível atual foi completado, avançar para o próximo
                    if (progress >= 0.8 && stats.currentLevel === currentLevel) {
                        stats.currentLevel = nextLevel;
                    }
                }
            }
        }
    }
}

// Atualizar estatísticas
function updateStats() {
    const today = new Date().toDateString();
    const lastDate = stats.lastStudyDate ? new Date(stats.lastStudyDate).toDateString() : null;

    // Atualizar streak
    if (lastDate === today) {
        // Já estudou hoje, manter streak
    } else if (lastDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
            stats.streak++;
        } else {
            stats.streak = 1;
        }
    } else {
        stats.streak = 1;
    }

    stats.lastStudyDate = today;
    stats.todayCount = deck.filter(card => {
        const cardDate = card.lastStudied ? new Date(card.lastStudied).toDateString() : null;
        return cardDate === today;
    }).length;
    
    // Atualizar stats no header
    const streakMini = document.getElementById('streakMini');
    const todayMini = document.getElementById('todayMini');
    const goalMini = document.getElementById('goalMini');
    const totalMini = document.getElementById('totalMini');
    
    if (streakMini) streakMini.textContent = stats.streak;
    if (todayMini) todayMini.textContent = stats.todayCount;
    if (goalMini) goalMini.textContent = stats.cardsPerDay || 10;
    if (totalMini) totalMini.textContent = deck.length;

    // Recalcular contagem por nível
    stats.cardsByLevel = {
        "Iniciante": { studied: 0, total: 0 },
        "Básico": { studied: 0, total: 0 },
        "Intermediário": { studied: 0, total: 0 },
        "Avançado": { studied: 0, total: 0 }
    };
    
    deck.forEach(card => {
        if (stats.cardsByLevel[card.level]) {
            stats.cardsByLevel[card.level].total++;
            if (card.studied) {
                stats.cardsByLevel[card.level].studied++;
            }
        }
    });

    // Verificar e desbloquear níveis
    checkAndUnlockLevels();

    // Calcular cards restantes apenas dos níveis desbloqueados
    const remaining = deck.filter(card => 
        stats.unlockedLevels.includes(card.level) && 
        (!card.studied || (card.nextReview && new Date(card.nextReview) <= new Date()))
    ).length;
    
    stats.totalStudied = deck.filter(card => card.studied).length;

    // Atualizar stats no header (já atualizado acima)
    // Atualizar stats no menu lateral
    const menuStreak = document.getElementById('menuStreak');
    const menuToday = document.getElementById('menuToday');
    const menuRemaining = document.getElementById('menuRemaining');
    const menuTotal = document.getElementById('menuTotal');
    
    if (menuStreak) menuStreak.textContent = stats.streak;
    if (menuToday) menuToday.textContent = stats.todayCount;
    if (menuRemaining) menuRemaining.textContent = remaining;
    if (menuTotal) menuTotal.textContent = deck.length;

    // Atualizar barra de progresso
    const currentLevelStats = stats.cardsByLevel[stats.currentLevel];
    const levelProgress = currentLevelStats.total > 0 
        ? (currentLevelStats.studied / currentLevelStats.total) * 100 
        : 0;
    
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) {
        progressFill.style.width = levelProgress + '%';
    }
    
    if (progressText) {
        progressText.textContent = `${stats.todayCount} de ${stats.cardsPerDay || 10} cards hoje`;
    }

    saveData();
}

// Mostrar próximo card
function showNextCard() {
    // Verificar se atingiu o limite diário
    if (stats.cardsPerDay > 0 && stats.todayCount >= stats.cardsPerDay) {
        document.getElementById('cardContainer').innerHTML = `
            <div class="completed">
                <div class="completed-icon">🎉</div>
                <h2>Meta Diária Atingida!</h2>
                <p>Você completou ${stats.todayCount} cards hoje!</p>
                <p>Volte amanhã para continuar estudando.</p>
                <button class="btn btn-confirm" onclick="openSettingsModal()" style="margin-top: 1rem;">
                    Ajustar Meta
                </button>
            </div>
        `;
        return;
    }
    
    // Filtrar apenas cards dos níveis desbloqueados
    const unlockedCards = deck.filter(card => 
        stats.unlockedLevels.includes(card.level)
    );
    
    // Separar cards em: novos do nível atual, revisões do nível atual, outros níveis
    const currentLevelNew = unlockedCards.filter(card => 
        card.level === stats.currentLevel && 
        !card.studied
    );
    
    const currentLevelReview = unlockedCards.filter(card => 
        card.level === stats.currentLevel && 
        card.studied && 
        card.nextReview && 
        new Date(card.nextReview) <= new Date()
    );
    
    const otherLevels = unlockedCards.filter(card => 
        card.level !== stats.currentLevel && 
        (!card.studied || (card.nextReview && new Date(card.nextReview) <= new Date()))
    );

    // Prioridade: 1) Novos do nível atual, 2) Revisões do nível atual, 3) Outros níveis
    let availableCards = [];
    if (currentLevelNew.length > 0) {
        availableCards = currentLevelNew;
    } else if (currentLevelReview.length > 0) {
        availableCards = currentLevelReview;
    } else {
        availableCards = otherLevels;
    }

    if (availableCards.length === 0) {
        // Se não há cards disponíveis no nível atual, verificar se pode avançar
        const currentLevelStats = stats.cardsByLevel[stats.currentLevel];
        if (currentLevelStats && currentLevelStats.studied >= currentLevelStats.total * 0.5) {
            // Se completou 50% do nível atual, mostrar cards de outros níveis desbloqueados
            availableCards = unlockedCards.filter(card => 
                !card.studied || (card.nextReview && new Date(card.nextReview) <= new Date())
            );
        }
        
        if (availableCards.length === 0) {
            showCompletedMessage();
            return;
        }
    }

    // Selecionar card aleatório do grupo prioritário
    currentCardIndex = Math.floor(Math.random() * availableCards.length);
    const card = availableCards[currentCardIndex];
    currentCardIndex = deck.indexOf(card);
    isCardFlipped = false;

    // Garantir que a estrutura do card existe
    const cardContainer = document.getElementById('cardContainer');
    if (!cardContainer) return;
    
    // Se o card foi substituído por mensagem, restaurar estrutura
    if (!cardContainer.querySelector('.card-header')) {
        cardContainer.innerHTML = `
            <div class="card-header">
                <div class="card-level" id="cardLevel"></div>
                <div class="card-count" id="cardCount"></div>
            </div>
            <div class="card-content" id="cardContent"></div>
            <div class="card-actions" id="buttons"></div>
        `;
    }
    
    // Atualizar card
    const cardLevel = document.getElementById('cardLevel');
    const cardContent = document.getElementById('cardContent');
    const cardCount = document.getElementById('cardCount');
    const buttonsDiv = document.getElementById('buttons');
    
    if (cardLevel) cardLevel.textContent = card.level;
    if (cardContent) {
        cardContent.textContent = card.front;
        cardContent.className = 'card-content';
    }
    
    // Atualizar contador de cards
    if (cardCount) {
        const currentLevelStats = stats.cardsByLevel[stats.currentLevel];
        // Contar quantos cards novos ainda faltam no nível atual
        const remainingNew = unlockedCards.filter(c => 
            c.level === stats.currentLevel && !c.studied
        ).length;
        const totalInLevel = currentLevelStats.total;
        const studiedInLevel = currentLevelStats.studied;
        cardCount.textContent = `${studiedInLevel}/${totalInLevel}`;
    }
    
    if (buttonsDiv) {
        buttonsDiv.innerHTML = '<button class="btn btn-show" onclick="flipCard()">Mostrar Resposta</button>';
    }
}

// Virar card
function flipCard() {
    if (isCardFlipped) return;
    
    isCardFlipped = true;
    const card = deck[currentCardIndex];
    const cardContent = document.getElementById('cardContent');
    const buttonsDiv = document.getElementById('buttons');
    
    if (cardContent) {
        cardContent.textContent = card.back;
        cardContent.className = 'card-content card-back';
    }
    
    if (buttonsDiv) {
        buttonsDiv.innerHTML = `
            <div class="btn-row">
                <button class="btn btn-wrong" onclick="rateCard('wrong')">❌ Errei</button>
                <button class="btn btn-hard" onclick="rateCard('hard')">😓 Difícil</button>
                <button class="btn btn-easy" onclick="rateCard('easy')">✅ Fácil</button>
            </div>
        `;
    }
}

// Avaliar card
function rateCard(difficulty) {
    const card = deck[currentCardIndex];
    card.difficulty = difficulty;
    card.lastStudied = new Date().toISOString();

    const wasStudied = card.studied;
    
    if (difficulty === 'wrong') {
        card.studied = false;
        card.nextReview = new Date().toISOString(); // Revisar hoje
    } else {
        card.studied = true;
        const daysToAdd = difficulty === 'hard' ? 1 : difficulty === 'easy' ? 3 : 2;
        const nextReview = new Date();
        nextReview.setDate(nextReview.getDate() + daysToAdd);
        card.nextReview = nextReview.toISOString();
    }

    saveData();
    updateStats();
    showNextCard();
}

// Mostrar mensagem de conclusão
function showCompletedMessage() {
    document.getElementById('cardContainer').innerHTML = `
        <div class="completed">
            <div class="completed-icon">🎉</div>
            <h2>Parabéns!</h2>
            <p>Você completou todos os cards disponíveis!</p>
            <p>Continue revisando para manter seu conhecimento fresco.</p>
            <button class="btn btn-confirm" onclick="openResetModal()" style="margin-top: 1rem;">
                Recomeçar
            </button>
        </div>
    `;
}

// Adicionar novo card
function addCard() {
    const level = document.getElementById('levelInput').value;
    const front = document.getElementById('frontInput').value.trim();
    const back = document.getElementById('backInput').value.trim();

    if (!front || !back) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const newCard = {
        level: level,
        front: front,
        back: back,
        studied: false,
        difficulty: null,
        nextReview: null
    };

    deck.push(newCard);
    stats.cardsByLevel[level].total++;
    saveData();
    updateStats();
    closeAddModal();
    
    // Limpar formulário
    document.getElementById('frontInput').value = '';
    document.getElementById('backInput').value = '';
}

// Exportar dados
function exportData() {
    const data = {
        deck: deck,
        stats: stats,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `english-cards-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Importar dados
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.deck && Array.isArray(data.deck)) {
                deck = data.deck;
                if (data.stats) {
                    stats = { ...stats, ...data.stats };
                }
                saveData();
                updateStats();
                showNextCard();
                alert('Dados importados com sucesso!');
            } else {
                alert('Arquivo inválido.');
            }
        } catch (error) {
            alert('Erro ao importar arquivo: ' + error.message);
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// Resetar progresso
function resetProgress() {
    // Confirmação já está no modal, então só executar

    deck = initialDeck.map(card => ({
        ...card,
        studied: false,
        difficulty: null,
        nextReview: null
    }));

    stats = {
        streak: 0,
        lastStudyDate: null,
        todayCount: 0,
        totalStudied: 0,
        currentLevel: "Iniciante",
        unlockedLevels: ["Iniciante"],
        cardsPerDay: 10,
        cardsByLevel: {
            "Iniciante": { studied: 0, total: 0 },
            "Básico": { studied: 0, total: 0 },
            "Intermediário": { studied: 0, total: 0 },
            "Avançado": { studied: 0, total: 0 }
        }
    };

    // Recontar cards por nível
    deck.forEach(card => {
        if (stats.cardsByLevel[card.level]) {
            stats.cardsByLevel[card.level].total++;
        }
    });

    saveData();
    updateStats();
    closeResetModal();
    showNextCard();
}

// Menu lateral
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    if (menu && overlay) {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        updateMenuStats();
    }
}

function updateMenuStats() {
    const menuStreak = document.getElementById('menuStreak');
    const menuToday = document.getElementById('menuToday');
    const menuRemaining = document.getElementById('menuRemaining');
    const menuTotal = document.getElementById('menuTotal');
    
    if (menuStreak) menuStreak.textContent = stats.streak;
    if (menuToday) menuToday.textContent = stats.todayCount;
    if (menuRemaining) {
        const remaining = deck.filter(card => 
            stats.unlockedLevels.includes(card.level) && 
            (!card.studied || (card.nextReview && new Date(card.nextReview) <= new Date()))
        ).length;
        menuRemaining.textContent = remaining;
    }
    if (menuTotal) menuTotal.textContent = deck.length;
}

// Modal functions
function openAddModal() {
    const modal = document.getElementById('addModal');
    if (modal) {
        modal.classList.add('active');
        toggleMenu();
    }
}

function closeAddModal() {
    const modal = document.getElementById('addModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function openResetModal() {
    const modal = document.getElementById('resetModal');
    if (modal) {
        modal.classList.add('active');
        toggleMenu();
    }
}

function closeResetModal() {
    const modal = document.getElementById('resetModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// Modal de configurações
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    const input = document.getElementById('cardsPerDayInput');
    if (modal && input) {
        input.value = stats.cardsPerDay || 10;
        modal.classList.add('active');
        toggleMenu();
    }
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function saveSettings() {
    const input = document.getElementById('cardsPerDayInput');
    if (!input) return;
    
    const cardsPerDay = parseInt(input.value);
    if (cardsPerDay > 0 && cardsPerDay <= 100) {
        stats.cardsPerDay = cardsPerDay;
        saveData();
        updateStats();
        
        // Atualizar goalMini
        const goalMini = document.getElementById('goalMini');
        if (goalMini) goalMini.textContent = cardsPerDay;
        
        closeSettingsModal();
        showNextCard();
    } else {
        alert('Por favor, insira um número entre 1 e 100.');
    }
}

// Fechar modal ao clicar fora
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
    if (e.target.classList.contains('menu-overlay')) {
        toggleMenu();
    }
});

// Inicializar quando a página carregar
init();