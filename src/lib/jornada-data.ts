export const ZONES = [
  {id:'ganhar',     lbl:'GANHAR',      col:'#2563EB', em:'🌱', ds:'Conhecer o Evangelho'},
  {id:'consolidar', lbl:'CONSOLIDAR',  col:'#059669', em:'📖', ds:'Fortalecer a Fé'},
  {id:'treinar',    lbl:'TREINAR',     col:'#D97706', em:'🔥', ds:'Crescer em Fundamentos'},
  {id:'enviar',     lbl:'ENVIAR',      col:'#DC2626', em:'🚀', ds:'Discipular e Multiplicar'},
];
export const PCOLORS = ['#C9922A','#3B82F6','#10B981','#EF4444','#8B5CF6','#F59E0B'];

export const SQUARES = (() => {
  const L = [
    {t:'start'},{t:'q'},{t:'ch',c:'evangelismo'},{t:'q'},{t:'bl'},
    {t:'q'},{t:'ch',c:'testemunho'},{t:'q'},{t:'q'},{t:'ms'},
    {t:'q'},{t:'ch',c:'devocional'},{t:'q'},{t:'bl'},{t:'q'},
    {t:'ch',c:'pertencimento'},{t:'q'},{t:'q'},{t:'rv'},{t:'ms'},
    {t:'q'},{t:'ch',c:'servico'},{t:'q'},{t:'bl'},{t:'q'},
    {t:'ch',c:'palavra'},{t:'q'},{t:'q'},{t:'rv'},{t:'ms'},
    {t:'q'},{t:'ch',c:'lideranca'},{t:'q'},{t:'bl'},{t:'q'},
    {t:'ch',c:'discipulado'},{t:'q'},{t:'q'},{t:'q'},{t:'final'},
  ];
  return L.map((s,i) => ({...s, zone: Math.min(Math.floor(i/10),3)}));
})();

export const PATH = [
  {c:5.75,r:14.75},{c:6.75,r:13.75},{c:7.75,r:12.75},{c:8.75,r:11.75},{c:9.75,r:10.75},
  {c:10.75,r:9.75},{c:11.75,r:8.75},{c:12.75,r:7.75},{c:13.75,r:6.75},{c:14.75,r:5.75},
  {c:11.15,r:2.15},{c:10.15,r:3.15},{c:9.15,r:4.15},{c:8.15,r:5.15},{c:7.15,r:6.15},
  {c:6.15,r:7.15},{c:5.15,r:8.15},{c:4.15,r:9.15},{c:3.15,r:10.15},{c:2.15,r:11.15},
  {c:-1.15,r:7.85},{c:-0.15,r:6.85},{c:0.85,r:5.85},{c:1.85,r:4.85},{c:2.85,r:3.85},
  {c:3.85,r:2.85},{c:4.85,r:1.85},{c:5.85,r:0.85},{c:6.85,r:-0.15},{c:7.85,r:-1.15},
  {c:4.5,r:-4.5},{c:3.5,r:-3.5},{c:2.5,r:-2.5},{c:1.5,r:-1.5},{c:0.5,r:-0.5},
  {c:-0.5,r:0.5},{c:-1.5,r:1.5},{c:-2.5,r:2.5},{c:-3.5,r:3.5},{c:-4.5,r:4.5},
];

export const QS = {
  ganhar:{
    easy:[
      {q:'"Evangelho" significa:',opts:['Lei de Deus','Boas novas','Oração diária','Livro sagrado'],ans:1,v:'"Não me envergonho do evangelho, porque é o poder de Deus para a salvação." — Rm 1:16'},
      {q:'Por que Deus enviou Jesus ao mundo?',opts:['Para nos dar regras','Para julgar pecadores','Por amor — para nos salvar','Para fundar a Igreja'],ans:2,v:'"Porque Deus amou o mundo de tal forma que deu o seu Filho unigênito." — Jo 3:16'},
      {q:'Jesus prometeu tornar os discípulos:',opts:['Prósperos','Famosos','Pescadores de homens','Sábios'],ans:2,v:'"Sigam-me, e eu os farei pescadores de homens." — Mt 4:19'},
      {q:'Arrependimento bíblico significa:',opts:['Chorar pelos erros','Fazer penitência','Mudar de direção — mente e vida','Confessar em público'],ans:2,v:'"Arrependei-vos e convertei-vos para que sejam apagados os vossos pecados." — At 3:19'},
      {q:'O fruto do Espírito começa com:',opts:['Fé','Amor','Paz','Alegria'],ans:1,v:'"O fruto do Espírito é: amor, alegria, paz..." — Gl 5:22'},
      {q:'A salvação vem por:',opts:['Obras e méritos','Rituais religiosos','Herança familiar','Graça mediante a fé'],ans:3,v:'"Porque pela graça sois salvos, mediante a fé." — Ef 2:8'},
      {q:'Quem está em Cristo é:',opts:['Rico e próspero','Eleito para liderar','Nova criação','Isento de sofrimento'],ans:2,v:'"Se alguém está em Cristo, nova criação é; as coisas antigas passaram." — 2Co 5:17'},
      {q:'O mandamento novo de Jesus (Jo 13:34) é:',opts:['Guardar o sábado','Dízimar fielmente','Amar uns aos outros como Ele amou','Batizar a todos'],ans:2,v:'"Novo mandamento vos dou: que vos ameis uns aos outros." — Jo 13:34'},
      {q:'Confessar Jesus como Senhor (Rm 10:9) é:',opts:['Ir a todos os cultos','Declarar e crer no coração','Ser batizado formalmente','Estudar teologia'],ans:1,v:'"Se confessares com a boca que Jesus é Senhor e creres em teu coração..." — Rm 10:9'},
    ],
    hard:[
      {q:'Por que a morte de Cristo foi necessária — Deus não podia simplesmente perdoar?',opts:['Para impressionar os anjos','Porque Deus é cruel','Para satisfazer a justiça que o pecado exige','Por tradição judaica'],ans:2,v:'"Ele foi entregue por causa das nossas transgressões e ressuscitou para a nossa justificação." — Rm 4:25'},
      {q:'O que diferencia a fé bíblica de crença intelectual?',opts:['A fé dispensa evidências','Fé inclui confiança e comprometimento, não só concordância','A fé é cega e irracional','A fé prescinde de arrependimento'],ans:1,v:'"A fé é a certeza do que se espera, a convicção de coisas que não se veem." — Hb 11:1'},
      {q:'Paulo diz que o justo "viverá pela fé do princípio ao fim" (Rm 1:17). O que significa?',opts:['Que boas obras nunca importam','A vida cristã inteira é sustentada pela fé, não por méritos','Que só a fé inicial conta','Que obras validam a fé'],ans:1,v:'"Porque nele a justiça de Deus se revela de fé em fé." — Rm 1:17'},
      {q:'Justificação difere de santificação porque:',opts:['São sinônimos','Justificação é evento único; santificação é processo contínuo','Justificação vem depois','Santificação é mais importante'],ans:1,v:'"Sendo, pois, justificados pela fé, temos paz com Deus." — Rm 5:1'},
      {q:'Como reconciliar soberania de Deus na eleição com responsabilidade humana de crer?',opts:['São contraditórias','A Bíblia afirma ambas em tensão, sem resolver sistematicamente','Calvino tem razão absoluta','Armínio tem razão absoluta'],ans:1,v:'"Todos que o Pai me dá virão a mim, e quem vier, de maneira nenhuma lançarei fora." — Jo 6:37'},
      {q:'Graça versus misericórdia: a diferença fundamental é que:',opts:['São a mesma coisa','Graça dá o que não merecemos; misericórdia retém o que merecemos','Graça é do NT; misericórdia do AT','Misericórdia é mais importante'],ans:1,v:'"Por sua misericórdia nos salvou... segundo a sua graça." — Tt 3:5'},
      {q:'Por que Jesus precisava ser completamente humano E completamente divino?',opts:['Por motivos simbólicos','Humano para morrer em nosso lugar; divino para ter valor infinito e ressuscitar','Para dar bom exemplo','Para cumprir profecia'],ans:1,v:'"Há um só mediador entre Deus e os homens, Cristo Jesus, homem." — 1Tm 2:5'},
      {q:'Arrependimento bíblico difere de remorso porque:',opts:['Não há diferença','Remorso leva à morte; arrependimento leva à mudança de vida','Remorso é mais profundo','Ambos são apenas emocionais'],ans:1,v:'"A tristeza segundo Deus produz arrependimento que leva à salvação." — 2Co 7:10'},
      {q:'O "dom de fé" (1Co 12:9) comparado à fé salvadora é:',opts:['Idêntico','Capacidade sobrenatural extra para crença e ação extraordinária, além da fé salvadora comum','A fé salvadora é superior','Substitui a fé salvadora'],ans:1,v:'"A outro, o mesmo Espírito concede fé especial." — 1Co 12:9'},
    ]
  },
  consolidar:{
    easy:[
      {q:'O propósito primário do batismo é:',opts:['Lavar os pecados','Assegurar a salvação','Declarar publicamente a fé em Cristo','Entrar como membro oficial'],ans:2,v:'"Quem crer e for batizado será salvo." — Mc 16:16'},
      {q:'Tiago diz que fé sem obras é:',opts:['Suficiente','Rara mas válida','Morta','Menor, mas aceitável'],ans:2,v:'"A fé sem obras é morta." — Tg 2:26'},
      {q:'Uma célula no contexto da igreja é:',opts:['Reunião formal com liturgia','Grupo de estudo avançado','Comunidade de fé no cotidiano','Departamento administrativo'],ans:2,v:'"Dia após dia partiam o pão de casa em casa, comiam com alegria." — At 2:46'},
      {q:'Fomos criados em Cristo Jesus para (Ef 2:10):',opts:['Acumular riquezas','Fundar denominações','Boas obras que Deus preparou de antemão','Competir com outras igrejas'],ans:2,v:'"Fomos criados em Cristo Jesus para boas obras, as quais Deus preparou." — Ef 2:10'},
      {q:'O "cinto" da armadura de Deus representa:',opts:['Justiça','A Bíblia','A verdade','A fé'],ans:2,v:'"Cingindo os vossos lombos com a verdade." — Ef 6:14'},
      {q:'Koinonia significa:',opts:['Louvor coletivo','Comunhão e participação ativa na vida da comunidade','Grupo de oração fechado','Doutrina cristã primitiva'],ans:1,v:'"Eram perseverantes... na comunhão fraterna." — At 2:42'},
      {q:'"Suportai-vos uns aos outros" (Cl 3:13) significa:',opts:['Ignorar pecados','Não corrigir ninguém','Carregar fraquezas com paciência e perdão','Aceitar tudo sem discernimento'],ans:2,v:'"Suportai-vos uns aos outros e perdoai-vos mutuamente." — Cl 3:13'},
      {q:'A generosidade cristã (2Co 9:7) deve ser:',opts:['Obrigatória para salvação','Com tristeza e necessidade','Proposta no coração, sem coação','Apenas para os ricos'],ans:2,v:'"Cada um contribua segundo propôs no seu coração, não com tristeza nem por necessidade." — 2Co 9:7'},
      {q:'Em At 2:4, o sinal do batismo no Espírito foi:',opts:['Choro profundo','Falar em outras línguas','Profecia','Cura física'],ans:1,v:'"Todos foram cheios do Espírito Santo e começaram a falar em outras línguas." — At 2:4'},
    ],
    hard:[
      {q:'Qual a diferença entre Igreja universal e Igreja local?',opts:['São idênticas','Universal é invisível e abrange todos os salvos; local é comunidade com responsabilidade mútua','A local é superior','A universal não existe ainda'],ans:1,v:'"Sobre esta pedra edificarei a minha igreja." — Mt 16:18'},
      {q:'Ordenanças vs sacramentos:',opts:['Não há diferença','Ordenanças declaram — não transmitem — graça; sacramentos transmitem graça automaticamente','Sacramentos são superiores','Só a Ceia importa'],ans:1,v:'"Fazei isso em memória de mim." — Lc 22:19'},
      {q:'Uma célula pequena pode ser "igreja plena" porque:',opts:['Não pode — precisa de templo','Celebra palavra, comunhão, oração e missão — expressão plena da Igreja','Só igrejas formais são plenas','Células são apenas ferramenta de crescimento'],ans:1,v:'"Onde dois ou três estiverem reunidos em meu nome, ali estou." — Mt 18:20'},
      {q:'Discernimento de espíritos na prática é:',opts:['Identificar demônios pelos olhos','Dom exclusivo de apóstolos','Avaliar se algo é do Espírito, pelo alinhamento com a Palavra e o caráter de Cristo','Técnica de aconselhamento'],ans:2,v:'"Não creiais em todo espírito, mas provai os espíritos." — 1Jo 4:1'},
      {q:'Como lidar com conflito segundo Mt 18:15-17?',opts:['Ignorar para preservar a paz','Publicar nas redes sociais','Ir à pessoa diretamente, depois com testemunhas, depois à liderança','Retirar imediatamente da célula'],ans:2,v:'"Se teu irmão pecar contra ti, vai, e repreende-o entre ti e ele só." — Mt 18:15'},
      {q:'Edificar uns aos outros (1Ts 5:11) na célula é:',opts:['Elogios superficiais','Falar palavras que fortalecem, encorajam e corrigem com amor','Evitar qualquer conflito','Organizar eventos sociais'],ans:1,v:'"Exortai-vos uns aos outros e edificai-vos mutuamente." — 1Ts 5:11'},
      {q:'A identidade em Cristo transforma a dinâmica relacional porque:',opts:['Não afeta','Elimina hierarquias completamente','Muda a base: de performance para aceitação, criando segurança para vulnerabilidade','Cria um círculo fechado'],ans:2,v:'"Não há grego nem judeu... pois todos sois um em Cristo." — Gl 3:28'},
      {q:'Perseverança dos santos é doutrina E responsabilidade porque:',opts:['É garantia automática','É exclusivamente responsabilidade humana','Deus sustenta os seus, e essa certeza motiva obediência — não preguiça','Só os eleitos sabem que vão perseverar'],ans:2,v:'"Aquele que começou em vós a boa obra a há de completar." — Fp 1:6'},
      {q:'Os "dons de governo" (1Co 12:28) na célula servem para:',opts:['Dar ordens sem prestação de contas','Administrar finanças apenas','Guiar, organizar e pastorear a comunidade com sabedoria','Substituir o pastor principal'],ans:2,v:'"Deus designou na Igreja... os que têm dons de governo." — 1Co 12:28'},
    ]
  },
  treinar:{
    easy:[
      {q:'"Renovai-vos no espírito da vossa mente" (Ef 4:23) é:',opts:['Estudar mais teologia','Deixar o passado para trás','Transformação progressiva do pensamento pelo Espírito e Palavra','Meditar em coisas positivas'],ans:2,v:'"Renovai-vos no espírito da vossa mente." — Ef 4:23'},
      {q:'Os dons espirituais existem para:',opts:['Mostrar quem é mais espiritual','Entretenimento no culto','Edificação do corpo de Cristo','Provar que a denominação é verdadeira'],ans:2,v:'"A cada um é dada a manifestação do Espírito para o proveito comum." — 1Co 12:7'},
      {q:'Jesus ensina sobre liderança em Mt 23:11:',opts:['O maior manda nos menores','O maior recebe mais honra','O maior entre vós será servo','O maior ensina os demais'],ans:2,v:'"O maior entre vós será vosso servo." — Mt 23:11'},
      {q:'Guardar o coração (Pv 4:23) importa porque:',opts:['É o órgão mais importante','Do coração procedem as fontes da vida','O coração nunca mente','Sentimentos são sempre verdadeiros'],ans:1,v:'"Acima de tudo, guarda o teu coração, pois dele procedem as fontes da vida." — Pv 4:23'},
      {q:'O objetivo do jejum bíblico é:',opts:['Emagrecer','Punir o corpo','Demonstrar devoção publicamente','Fortalecer a dependência de Deus e aguçar a sensibilidade espiritual'],ans:3,v:'"Este gênero não sai senão por oração e jejum." — Mt 17:21'},
      {q:'Oração intercessória é:',opts:['Orar por si mesmo','Orar em voz alta no culto','Orar em favor de outros diante de Deus','Orar em línguas'],ans:2,v:'"Exorto... que se façam súplicas, orações, intercessões por todos os homens." — 1Tm 2:1'},
      {q:'"Toda Escritura é inspirada" (2Tm 3:16) e serve para:',opts:['Apenas instrução moral','Só provar doutrinas','Doutrina, repreensão, correção e instrução em justiça','Substituir a oração'],ans:2,v:'"Toda Escritura é inspirada por Deus e útil para o ensino, repreensão, correção..." — 2Tm 3:16'},
      {q:'Dons espirituais diferem de talentos naturais porque:',opts:['São idênticos','Talentos são para carreira, dons para a igreja','Dons são capacidades sobrenaturais do Espírito para servir o corpo','Dons são sempre superiores'],ans:2,v:'"Há diversidade de dons, mas o Espírito é o mesmo." — 1Co 12:4'},
      {q:'"Crucificar a carne" (Gl 5:24) significa:',opts:['Fazer penitência física','Negar emoções','Escolher não dar espaço a desejos contrários ao Espírito','Viver de forma austera'],ans:2,v:'"Os que são de Cristo crucificaram a carne com as suas paixões e concupiscências." — Gl 5:24'},
    ],
    hard:[
      {q:'"Já não sou eu que vivo, mas Cristo vive em mim" (Gl 2:20) quer dizer:',opts:['Paulo perdeu a personalidade','Entrega total e cooperação com Cristo — o ego cede e Cristo direciona','Paulo nunca mais tomou decisões','Só apóstolos vivem assim'],ans:1,v:'"Estou crucificado com Cristo; e já não sou eu que vivo, mas Cristo vive em mim." — Gl 2:20'},
      {q:'Como discernir chamado genuíno de preferência pessoal?',opts:['Chamado sempre vem com sinal sobrenatural','Preferência é suficiente','Chamado é confirmado pela comunidade, Palavra, carga interior e abertura de portas','Chamado elimina dificuldades'],ans:2,v:'"A dádiva de um homem lhe abre caminho e o leva diante dos grandes." — Pv 18:16'},
      {q:'Diferença prática entre dons e fruto do Espírito:',opts:['Dons substituem o fruto','São idênticos','Dons são capacidades para servir; fruto é caráter formado — ambos necessários','Fruto é opcional para líderes com dons'],ans:2,v:'"A manifestação do Espírito é para o proveito comum... o fruto: amor, alegria, paz..." — 1Co 12:7; Gl 5:22'},
      {q:'Accountability (responsabilidade mútua) é vital porque:',opts:['É vigilância e espionagem fraternal','É submissão ao líder sem questionar','Cria relacionamento de confiança com permissão para perguntar, corrigir e encorajar','É controle de presença em células'],ans:2,v:'"Confessai os vossos pecados uns aos outros e orai uns pelos outros." — Tg 5:16'},
      {q:'A saúde emocional do líder afeta a célula porque:',opts:['Não afeta — ministério é espiritual, não emocional','Afeta só pessoas sensíveis','O líder define o nível de segurança e vulnerabilidade que o grupo inteiro pode atingir','É responsabilidade individual de cada membro'],ans:2,v:'"Acima de tudo, guarda o teu coração, pois dele procedem as fontes da vida." — Pv 4:23'},
      {q:'A renovação da mente (Rm 12:2) é processo porque:',opts:['Exige muito esforço humano','Porque Deus age devagar','Caráter e padrões de pensamento são formados ao longo de anos — transformação real é gradual','A salvação não é completa'],ans:2,v:'"Transformai-vos pela renovação do vosso entendimento." — Rm 12:2'},
      {q:'Treinar alguém sem criar dependência exige:',opts:['Transmitir só conhecimento teórico','Manter supervisão constante sem delegar','Modelar → explicar → fazer juntos → observar → soltar, com responsabilidade progressiva','Esperar anos de treinamento formal'],ans:2,v:'"As coisas que ouviste de mim... confia-as a homens fiéis, idôneos para instruir também outros." — 2Tm 2:2'},
      {q:'Guerra espiritual no contexto celular se manifesta como:',opts:['Apenas exorcismo e confronto sobrenatural','Rejeitar o mundo físico','Resistir às estratégias do inimigo — engano, divisão, desânimo — com oração, unidade e Palavra','Vigiar só os pecados dos membros'],ans:2,v:'"Não temos que lutar contra o sangue e a carne... mas contra os principados." — Ef 6:12'},
      {q:'Como a teologia da graça molda a cultura celular saudável?',opts:['Cria permissividade','Elimina correção fraternal','Cria aceitação radical que libera crescimento — erro não é identidade e mudança é possível','Separa os maduros dos imaturos'],ans:2,v:'"Onde o pecado abundou, superabundou a graça." — Rm 5:20'},
    ]
  },
  enviar:{
    easy:[
      {q:'A Grande Comissão (Mt 28:19-20) é:',opts:['Construir igrejas grandes','Guardar tradição eclesiástica','Ir e fazer discípulos de todas as nações','Crescer numericamente a cada ano'],ans:2,v:'"Portanto ide, fazei discípulos de todas as nações." — Mt 28:19'},
      {q:'Segundo At 1:8, a missão começa:',opts:['No campo missionário estrangeiro','Só dentro da igreja','Em Jerusalém — onde você está','Em lugares de grande sofrimento'],ans:2,v:'"Sereis minhas testemunhas em Jerusalém... e até os confins da terra." — At 1:8'},
      {q:'"Fruto que permaneça" (Jo 15:16) se refere a:',opts:['Crescimento financeiro','Boas obras isoladas','Discípulos que continuam, crescem e multiplicam','Aumento de membros batizados'],ans:2,v:'"Eu vos escolhi para que vades e deis fruto, e o vosso fruto permaneça." — Jo 15:16'},
      {q:'Discipulado intencional é:',opts:['Seguir um currículo fixo','Encontros esporádicos','Acompanhamento deliberado do crescimento espiritual de alguém','Assistir sermões regularmente'],ans:2,v:'"As coisas que ouviste de mim... confia-as a homens fiéis." — 2Tm 2:2'},
      {q:'Liderar pelo exemplo é chamado de:',opts:['Carisma natural','Liderança autocrática','Liderança servidora e modelagem','Doutrinação'],ans:2,v:'"Sede imitadores de mim como eu o sou de Cristo." — 1Co 11:1'},
      {q:'Célula que se multiplica sinaliza:',opts:['Que o líder quer se ver livre','Falha em reter pessoas','Saúde espiritual e fruto real','Conflito interno'],ans:2,v:'"A palavra de Deus crescia e se multiplicava." — At 12:24'},
      {q:'"Apóstolos" (apostolos) em grego significa:',opts:['Anciãos da Igreja','Santos canonizados','Enviados com propósito e autoridade','Pregadores itinerantes'],ans:2,v:'"Como o Pai me enviou, assim eu vos envio." — Jo 20:21'},
      {q:'Plantar uma célula nova é:',opts:['Expandir a célula atual','Criar departamento administrativo','Iniciar comunidade de fé em novo contexto ou região','Mudar de nome e endereço'],ans:2,v:'"Plantei, Apolo regou, mas Deus deu o crescimento." — 1Co 3:6'},
      {q:'Missão é mais ampla que evangelização porque:',opts:['São a mesma coisa','Missão inclui proclamação, presença social e transformação comunitária','Evangelização é mais abrangente','Nenhum tem base bíblica clara'],ans:1,v:'"O Espírito do Senhor está sobre mim, porque me ungiu para pregar boas novas..." — Lc 4:18'},
    ],
    hard:[
      {q:'Evangelização cultural vs contextualizada:',opts:['São a mesma coisa','Contextualização é relativismo','Cultural impõe o formato; contextualizada adapta a forma sem comprometer o conteúdo do evangelho','Contextualização significa sincretismo'],ans:2,v:'"Fiz-me como... para por todos os meios salvar alguns." — 1Co 9:22'},
      {q:'Missio Dei muda a postura da Igreja porque:',opts:['A Igreja define sua missão','É só para missionários','A missão de Deus precede a Igreja — ela não tem uma missão; ela participa da missão de Deus','É a evangelização de Israel'],ans:2,v:'"Como o Pai me enviou, assim eu vos envio." — Jo 20:21'},
      {q:'Discipulado geracional (2Tm 2:2) é:',opts:['Evangelizar idosos','Passar fé de pais para filhos biologicamente','Discípulos que fazem discípulos que fazem discípulos — multiplicação de 4 gerações espirituais','Programa para jovens'],ans:2,v:'"O que ouviste de mim... confia a homens fiéis que sejam idôneos para instruir também outros." — 2Tm 2:2'},
      {q:'Multiplicação de células tende a ser mais saudável que crescimento sem multiplicar porque:',opts:['Células grandes ficam preguiçosas','Multiplicar aumenta o orçamento','Mantém o DNA orgânico, cria novos líderes e alcança novos contextos','Regras denominacionais exigem'],ans:2,v:'"A palavra de Deus se difundia, e o número de discípulos em Jerusalém crescia muito." — At 6:7'},
      {q:'Uma célula está pronta para multiplicar quando:',opts:['Tiver 20 membros fixos','O líder estiver cansado','Há um discípulo que aprendeu a discipular e o grupo tem visão de alcance','A liderança da igreja determinar'],ans:2,v:'"Nisso é glorificado meu Pai: em que deis muito fruto." — Jo 15:8'},
      {q:'O líder enviado mantém saúde espiritual longe da base por:',opts:['Ser autossuficiente','Retornar sempre à base central','Cultivar ritmos de palavra e oração, e construir vínculos de accountability no novo contexto','Transmissões ao vivo da célula mãe'],ans:2,v:'"E ele mesmo se retirava para lugares desertos e orava." — Lc 5:16'},
      {q:'"Enviar" difere de "transferir" membros porque:',opts:['Não há diferença','Transferência é melhor','Envio implica missão, propósito e identidade apostólica — a pessoa vai como missionária, não como frequentadora','Envio é apenas para pastores'],ans:2,v:'"Separai-me a Barnabé e a Saulo para a obra a que os chamei." — At 13:2'},
      {q:'Grande Comissão (Mt 28) se conecta ao Grande Mandamento (Mt 22:37-40) porque:',opts:['São independentes','O mandamento contradiz a comissão','O amor a Deus e ao próximo é a motivação; fazer discípulos é a expressão desse amor','O mandamento foi substituído pela comissão'],ans:2,v:'"Amarás o Senhor... e o teu próximo. Portanto ide, fazei discípulos." — Mt 22:37; 28:19'},
      {q:'Líder enviado difere de quem apenas mudou de célula porque:',opts:['Documentação formal','Distância geográfica','Tem identidade apostólica — consciência de ser enviado com propósito, responsabilidade e missão específica','Nível de formação teológica'],ans:2,v:'"Mas não rogo somente por estes, mas também por aqueles que pela sua palavra hão de crer em mim." — Jo 17:20'},
    ]
  }
};

export const CHALLENGES = {
  evangelismo:[{ti:'Evangelho em 1 Minuto',bo:'Explique o evangelho como se fosse a primeira vez que alguém ouve sobre Jesus. O grupo vota: cumpriu → +2 casas.'}],
  testemunho:[{ti:'Testemunho de 30s',bo:'Em 30 segundos: como Deus agiu na sua vida essa semana? O grupo vota: cumpriu → +2.'}],
  devocional:[{ti:'Devoção Rápida',bo:'Leia Salmos 23 em voz alta. Em uma frase, o que ele significa pra você hoje? Cumpriu → +2.'},{ti:'Versículo Decorado',bo:'Recite de memória qualquer versículo e diga por que importa pra você. Cumpriu → +2. Não recitou → fica.'}],
  pertencimento:[{ti:'Conexão Real',bo:'Diga uma coisa concreta que você aprendeu com alguém da sua célula. Quanto mais específico, melhor. Todo o grupo avança 1.'}],
  servico:[{ti:'Ato de Serviço',bo:'Cite um ato de serviço concreto que você vai fazer essa semana. Alguém te responsabiliza por isso. Cumpriu → +2.'},{ti:'Por Quem Você Ora?',bo:'Mencione 3 pessoas fora da igreja por quem está orando. O grupo ora juntos agora mesmo. Cumpriu → +1.'}],
  palavra:[{ti:'Leitura Bíblica',bo:'Qual foi o último capítulo que você leu? Diga uma coisa que aprendeu. Leu → +1. Não leu → fica.'},{ti:'Aplicação',bo:'Leia Rm 12:1-2 em voz alta. Como você está aplicando isso na prática? Cumpriu → +2.'}],
  lideranca:[{ti:'Visão de Liderança',bo:'Em qual área você sente que Deus está te chamando a liderar? Compartilhe com vulnerabilidade. Cumpriu → +2.'},{ti:'Quem Você Discipula?',bo:'Mencione alguém em quem você está investindo intencionalmente. Se não tem ninguém, diga que vai começar. Cumpriu → +1.'}],
  discipulado:[{ti:'Reprodução',bo:'Em 2 minutos: como transmitiria a fé para alguém novo? Como seria a primeira conversa? Cumpriu → +3.'},{ti:'Legado',bo:'Se fosse plantado em uma célula nova amanhã, o que faria primeiro? Discuta em grupo. Cumpriu → +2.'}]
};

export const BLESSINGS = [
  {ic:'✨',ti:'Graça!',bo:'Deus é fiel. Avance 3 casas.'},
  {ic:'🔥',ti:'Avivamento!',bo:'O Espírito se move. Avance 2 casas.'},
  {ic:'🙌',ti:'Comunhão!',bo:'Todo o grupo avança 1 casa junto.'},
  {ic:'📖',ti:'Revelação!',bo:'Compartilhe um versículo favorito. Cumpriu → +2 casas.'},
  {ic:'🌿',ti:'Fruto!',bo:'Cite alguém a quem você falou de Jesus. Avance 2 casas.'},
];

export const SETBACKS = [
  {ic:'😴',ti:'Distração...',bo:'Perdeu o foco. Volte 2 casas. Leia Hb 12:1-2.',mv:-2},
  {ic:'🌀',ti:'Zona de Conforto',bo:'Voltou à comodidade. Volte 3 casas.',mv:-3},
  {ic:'⏳',ti:'Espere um Pouco',bo:'Deus faz a gente parar. Pule a próxima rodada. Leia Is 40:31.',mv:0},
];
