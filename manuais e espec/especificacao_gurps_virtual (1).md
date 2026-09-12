# Especificação de Produto — "GURPS Virtual" (nome provisório)
### Plataforma de RPG de mesa online, com motor de regras próprio inspirado em GURPS

**Versão:** 0.1 (rascunho para validação)
**Status:** Documento vivo — pontos marcados como `[DECISÃO EM ABERTO]` precisam de validação da equipe antes do desenvolvimento.

---

## 1. Visão Geral

Uma plataforma comercial de RPG de mesa (tabletop) 100% online, onde:

- O **Mestre** conduz a história em uma sessão de vídeo/áudio ao vivo, apoiado por ferramentas de apresentação (mapas, avatares de NPCs, cenas pré-montadas).
- Toda a **matemática do jogo** (rolagem de dados, cálculo de combate, resolução de perícias) é feita pela própria plataforma — o Mestre não precisa calcular nada manualmente.
- O sistema de regras é **matematicamente equivalente ao GURPS 3ª edição**, mas com nomenclatura e textos descritivos próprios (ver seção 12 — Propriedade Intelectual), já que fórmulas e mecânicas de jogo não são protegidas por direito autoral, mas nomes, textos e apresentação específica são. *(Corrigido de "4ª edição": todo o conteúdo mecânico em specs_*.md foi pivotado para a 3ª edição como fonte única.)*
- Jogadores criam fichas de personagem na própria plataforma, dentro dos limites definidos pelo Mestre e pelo "mundo" escolhido.
- MVP: **1 mundo disponível (Medieval)**, plataforma **mobile Android** (iOS em seguida), **bilíngue (PT-BR / EN)** desde o início.

**Proposta de valor central:** entregar a profundidade mecânica de um RPG "GURPS-like" com o mínimo de fricção — sem precisar de planilha, sem precisar calcular dado na mão, sem precisar abrir manual — dentro de uma experiência de videochamada pensada especificamente para mesas de RPG.

---

## 2. Personas

| Persona | Necessidade principal |
|---|---|
| **Mestre casual** | Quer contar uma história sem se preocupar com cálculo de regras; usa presets oficiais ou aventuras prontas de outros Mestres. |
| **Mestre criador** | Monta suas próprias aventuras, lore e presets; potencialmente monetiza isso na plataforma. |
| **Jogador casual** | Quer jogar sem precisar entender todas as regras de GURPS; usa templates de ficha. |
| **Jogador veterano** | Quer controle fino sobre a ficha (dentro da margem de pontos permitida) e valoriza fidelidade mecânica ao sistema original. |

---

## 3. Modelo de Negócio (Free-to-Play, nunca Pay-to-Win)

| Fonte de receita | Descrição |
|---|---|
| **Ads** | Anúncios exibidos em intervalos de tempo/uso (não durante momentos críticos de jogo — ver nota abaixo). |
| **Assinatura** | Remove ads. Não dá vantagem mecânica (mantém o princípio "nunca pay-to-win"). |
| **Cosméticos para jogadores** | Avatares, skins, estética de ficha, etc. — nunca afeta números/mecânica. |
| **Marketplace de presets/aventuras** | Mestres podem vender aventuras e lore próprios para outros Mestres. Plataforma fica com um **%** de comissão `[DECISÃO EM ABERTO: definir percentual]`. |
| **Mestrar por cachê** | Um Mestre pode cobrar de jogadores para participar de suas mesas (ele "presta o serviço" de mestrar). A plataforma pode cobrar comissão sobre essa transação também. |

**Nota importante de UX:** ads não devem interromper momentos de combate ou decisão em andamento — sugerido: exibir entre sessões, na tela de "lobby" da mesa, ou em telas de gerenciamento de ficha, nunca no meio de uma cena ativa com todos os jogadores esperando.

`[DECISÃO EM ABERTO]`: modelo de comissão do marketplace e do cachê de mestrar — variam bastante no mercado (ex: 20-30% é comum em plataformas de conteúdo gerado por usuário).

---

## 4. Arquitetura Recomendada (alto nível)

> Vocês mencionaram uso de Claude Code / Antigravity para o desenvolvimento — a recomendação abaixo é pensada para reduzir peças móveis e permitir que um time pequeno com ferramentas assistidas por IA consiga entregar o MVP com boa velocidade.

### 4.1 Componentes principais

- **Motor de Regras (Rules Engine)** — serviço desacoplado, **regras como dados** (não hardcoded): perícias, vantagens, desvantagens, fórmulas e tabelas descritos em configuração (JSON/YAML), não em código fixo. Isso permite:
  - Reaproveitar o motor para outros sistemas de jogo no futuro (visão de vocês no ponto 2).
  - Adicionar novos livros/conteúdo sem reescrever o motor, só adicionando dados.
  - Manter fidelidade matemática ao GURPS (ponto 25) através da configuração das fórmulas, não da estrutura do código.
- **Backend de Aplicação** — autenticação, gestão de contas, fichas, aventuras, presets, marketplace, moderação/report, billing.
- **Vídeo/Áudio** — **LiveKit** (self-hosted ou cloud), pelas razões discutidas: maduro, com SDKs prontos, e permite não reinventar uma camada de infraestrutura que não é o diferencial do produto.
- **Sincronização em tempo real de jogo** — usar os *data channels* do próprio LiveKit para eventos de baixa latência (ex: "jogador moveu token", "Mestre revelou carta de decisão") + um banco com camada realtime (ex: Postgres com Supabase Realtime, ou similar) para persistência e histórico de estado de mesa.
- **Banco de Dados** — Postgres é uma escolha segura (relacional, maduro, com boas opções gerenciadas).
- **Mobile** — Android no MVP, com iOS em seguida. Dado o plano bilíngue e multi-plataforma, vale considerar um framework cross-platform (Flutter ou React Native) para não duplicar esforço entre Android e iOS `[DECISÃO EM ABERTO: validar com quem vai codificar, considerando familiaridade da equipe]`.

### 4.2 Diagrama conceitual (texto)

```
[App Mobile Android/iOS]
        |
        |--- Vídeo/Áudio + eventos rápidos de jogo ---> [LiveKit]
        |
        |--- API (fichas, aventuras, conta, marketplace) ---> [Backend]
                                                                  |
                                                          [Motor de Regras]
                                                                  |
                                                          [Banco de Dados / Realtime]
```

---

## 5. O "Mundo" e o Conteúdo

- MVP: **1 mundo — Medieval**, com faixa de pontos de criação de personagem própria desse mundo (equivalente ao "100 pontos" do GURPS básico, mas o valor exato é configurável pelo tipo de mundo).
- Cada tipo de mundo define sua **margem permitida de pontos** (o Mestre atribui valores dentro dessa margem). Ex: Medieval pode ter uma faixa menor; um mundo futuro "Super" (equivalente ao supers do GURPS) teria uma faixa maior.
- Dentro de um mundo existem **lugares pré-definidos** onde as aventuras acontecem (lore oficial da plataforma).
- `[BACKLOG]`: Mestres criando o próprio lore/mundo. Rico, mas decisão de monetização e curadoria em aberto — ver seção 10.3.
- **Importante:** um personagem existe **dentro de um mundo/lore específico**. Se o mundo ou o lore muda, o personagem não existe mais ali — reforça a regra de progressão (seção 9).

---

## 6. Motor de Regras — Personagem e Ficha

### 6.1 Criação de personagem
- Jogador cria a ficha na própria plataforma, usando os pontos liberados pelo Mestre (dentro da margem do mundo).
- **Templates prontos** disponíveis para iniciantes (arquétipos de ficha pré-montados).
- Avatares personalizáveis (estética), desbloqueáveis como cosméticos (fonte de receita).

### 6.2 Escopo de conteúdo mecânico (perícias, vantagens, desvantagens)
| Fase | Escopo |
|---|---|
| MVP | Subconjunto enxuto do livro básico do GURPS (equivalente reduzido) |
| V1 (lançamento completo) | Todo o conteúdo equivalente ao GURPS Básico |
| Backlog | Avaliar inclusão de conteúdo equivalente a outros livros/expansões |

- Itens do "básico" que ficarem de fora do MVP já devem existir no banco de dados/configuração, porém **bloqueados na interface** — isso facilita o "desbloqueio" via atualização, sem precisar remodelar dados depois.

### 6.3 Fidelidade matemática
- Toda a matemática (cálculo de dano, resolução de testes, progressão de custo de pontos) deve ser **cópia funcional fiel** do GURPS — não há criatividade aqui, é reprodução de fórmula (o que é permitido).
- Nomes, textos de perícias/vantagens/desvantagens e qualquer texto descritivo devem ser **reescritos/renomeados** (ver seção 12).

---

## 7. Ferramentas do Mestre

### 7.1 Estrutura de Aventura
- Aventura dividida em **objetivos parciais + objetivo final**.
- Tamanhos de aventura (nomenclatura provisória): **Curta, Pequena, Média, Longa, Extra Longa**.
  - A estrutura pré-montada varia conforme o tamanho escolhido.
  - Limite de tempo de sessão com continuação em outra data: recurso disponível para todos os tamanhos, mas pensado como **essencial só na Extra Longa** (nos tamanhos menores, o ideal é caber numa sessão só).
- O Mestre monta a aventura inserindo **momentos/cenas** de tipos como (nomes provisórios, sujeitos a rebranding):
  - Desafio
  - Bifurcação (ramificação de decisão)
  - Combate
  - Enigma
  - Decisão (enquete)
  - *(lista extensível — o motor de aventuras deve tratar isso como "tipos de cena" configuráveis, não uma lista fixa em código)*

### 7.2 Presets vs. Aventuras Próprias
| Tipo | Quem usa | Quem pode reutilizar |
|---|---|---|
| **Preset oficial** (feito pela plataforma) | Mestres que não querem criar do zero | Qualquer Mestre, quantas vezes quiser |
| **Aventura própria do Mestre** | Mestre que criou | Só ele, quantas vezes quiser (não é um "preset" compartilhável por padrão) |
| **Aventura publicada no marketplace** | Mestre autor vende/compartilha | Outros Mestres, mediante compra/comissão (seção 3) |

### 7.3 Painel de Admin da Aventura
- O Mestre tem poder total de administração **da aventura específica** que está rodando (não da plataforma como um todo).
- Pode inserir/colocar em tela: mapas, avatares de NPCs importantes, mapa de movimento (opcional — o Mestre decide se usa).
- Pode escolher se os cálculos de resolução aparecem visíveis para os jogadores ou ficam ocultos (ex: uma rolagem de percepção que não deveria ser revelada).

### 7.4 Mapas
| Aspecto | MVP | Backlog |
|---|---|---|
| Tipo | Ilustrativo (imagem de apoio) | Interativo completo |
| Quem move token | Mestre | Jogador move o próprio token (ponto forte identificado por vocês — vale priorizar cedo pós-MVP) |
| Fog of war | Não | Sim (custo de desenvolvimento moderado, não é caro, mas não é trivial — ver conversa anterior) |

---

## 8. Sessão ao Vivo

- Modelo: chamada de vídeo (tipo reunião), com o Mestre controlando o ritmo e apresentando os momentos.
- **Câmera ligada:** vídeo normal. **Câmera desligada:** substituído por avatar do jogador (estático no MVP; no futuro, possivelmente um "bichinho" sobreposto estilo reação, similar ao recurso do WhatsApp/FaceTime).
- **Áudio:** cada jogador fala na sua vez (turno), com áudio ligado quando é a vez dele.
- **Enquetes de decisão:**
  - Modo padrão: **sequencial** — um jogador de cada vez, respeitando ordem/iniciativa (mais alinhado ao ritmo tradicional de mesa, especialmente quando ações diferentes estão acontecendo em paralelo na narrativa).
  - Modo alternativo: **simultâneo** — todos respondem ao mesmo tempo e a decisão é revelada junto, para momentos em que isso fizer sentido (ex: votação de grupo, decisão coletiva rápida).

- **Tamanho de mesa (MVP):** recomendado **1 Mestre + até 4 jogadores (5 no total)**, adequado à visualização em tela de celular. Arquitetura pensada para permitir expansão futura (6-7) sem precisar redesenhar do zero.

---

## 9. Combate e Rolagem de Dados

- Todos os dados são rolados **pela plataforma** — nunca manualmente.
- Todo cálculo de combate é resolvido pelo motor de regras.
- Rolagens podem ser **visíveis a todos** ou **ocultas** (a critério do Mestre), igual ao GURPS original (ex: testes de percepção que não devem ser revelados ao jogador).
- Mapa de movimento tático é **opcional** — o Mestre decide se exibe grid/posicionamento ou resolve de forma mais narrativa.
- **Risco de combate:** decisão de nível de aventura x nível de personagem fica com o Mestre (o sistema pode alertar, mas não impede). Consequência de morte do personagem é permanente ("se morreu, morreu") — reforça o peso das decisões do Mestre e dos jogadores.

---

## 10. Progressão e Avaliação

### 10.1 Progressão do personagem
- O personagem **cresce ao longo do tempo** (ganha pontos por aventuras concluídas).
- Um jogador pode ter **vários personagens**.
- Um personagem é **atrelado ao mundo/lore** em que foi criado — se o mundo ou lore mudar, esse personagem deixa de existir ali (não "migra").

### 10.2 Avaliação de aventura
- A **avaliação/pontuação de desempenho dos jogadores** dentro da aventura é decidida pelo Mestre.
- A **quantidade de pontos de progressão concedida** é calculada/definida pela plataforma (regra objetiva, não arbitrária do Mestre) — evita abuso ("Mestre bonzinho dando pontos demais").
- Aventuras podem ter um **nível de dificuldade/exigência**, que sinaliza que é recomendada para personagens mais desenvolvidos (o Mestre decide se deixa entrar personagem abaixo do recomendado, mas o risco é dele/dos jogadores).

### 10.3 Lore criado por Mestres `[BACKLOG — decisão em aberto]`
- Permitir Mestres criarem lore/mundo próprio é rico, mas levanta a questão: um mundo único favorece intercâmbio entre mesas; múltiplos lores fragmentam isso. Fica registrado como decisão de produto a ser amadurecida, possivelmente ligada ao marketplace (seção 3).

---

## 11. Continuidade de Sessões Longas

- Para aventuras que ultrapassam o tempo de uma sessão (principalmente Extra Longa), o estado deve ser **congelado por completo (snapshot total)** ao pausar: iniciativa, HP, posições, condições ativas, etc.
- **Por que snapshot total e não parcial:**
  - É tecnicamente mais simples de implementar (serializar e restaurar o estado inteiro).
  - Evita ambiguidade/disputa entre jogadores sobre "o que estava acontecendo" quando a sessão para.
  - Recomendação prática: snapshot completo é obrigatório sempre que há **combate ativo**; em cenas puramente narrativas (sem grid/iniciativa em curso), um "corte de cena" mais leve é suficiente.
- Ponto de atenção técnico: mudanças de versão no motor de regras entre sessões podem exigir migração do snapshot salvo — o motor de regras "como dados" (seção 4.1) ajuda a mitigar isso, mas não elimina o cuidado necessário em versionamento.

---

## 12. Propriedade Intelectual (GURPS)

- **Permitido reproduzir:** fórmulas, cálculos, estrutura matemática (não protegidos por direito autoral).
- **Não permitido reproduzir:** nomes específicos de perícias/vantagens/desvantagens, textos descritivos, e qualquer expressão literária do material original.
- Abordagem definida: reformular nomes e descrições por conta própria, com ajustes mínimos posteriores caso necessário.
- `[RECOMENDAÇÃO]`: mesmo com esse cuidado, antes do lançamento comercial (não do MVP fechado/privado), vale uma **consulta jurídica pontual** especializada em propriedade intelectual de jogos — o risco jurídico de "clone de sistema de regras" é uma área com precedentes específicos (existem outros produtos comerciais que já navegaram isso), mas os detalhes de quão longe a reformulação precisa ir dependem de jurisdição e de como o produto é comercializado.

---

## 13. Segurança, Moderação e Compliance

### 13.1 Idade
- **Mesas públicas (com estrangeiros/matchmaking pela plataforma): 18+**, para reduzir o risco específico de vídeo/áudio ao vivo entre desconhecidos.
- **Mesas privadas (convite direto, grupo que já se conhece)**: pode permitir idade menor, mais próximo de como Discord/Zoom tratam isso hoje — mas o corte final de idade mínima ainda precisa ser definido.
- Verificação: **autodeclaração de data de nascimento no cadastro** no MVP (padrão de mercado), sem exigir documento. Verificação mais forte (KYC) fica como resposta reativa a exigência legal ou histórico de abuso, não como bloqueio de entrada padrão.

### 13.2 Moderação
- Sistema de **denúncia (report) e banimento** desde o MVP, cobrindo comportamento ofensivo de qualquer natureza (jogador ou Mestre).
- `[DECISÃO EM ABERTO]`: fluxo de moderação (humana, automatizada, ou híbrida) e SLA de resposta a denúncias.

### 13.3 Gravação
- **Sessões não são gravadas por padrão** (decisão tomada). Caso isso mude no futuro, será necessário consentimento explícito de todos os participantes (implicação direta de LGPD/GDPR).

### 13.4 Dados pessoais
- Cadastro, billing e dados de sessão devem seguir LGPD (Brasil) e, como o produto será bilíngue/internacional, também GDPR (Europa) desde o desenho inicial do banco de dados — mais barato resolver isso na arquitetura agora do que depois.

---

## 14. Escopo MVP x Backlog (resumo executivo)

| Área | MVP | Backlog |
|---|---|---|
| Mundo | 1 (Medieval) | Múltiplos mundos, lore criado por Mestre |
| Conteúdo mecânico | Subconjunto do básico | Livro básico completo, depois outros livros |
| Mapas | Ilustrativo, Mestre move | Interativo, fog of war, jogador move próprio token |
| Avatar (câmera off) | Estático | "Bichinho" animado sobreposto |
| NPCs em tela | Estático | Expressões/animações |
| Plataforma | Android | iOS, possivelmente Web |
| Vídeo/Áudio | LiveKit integrado | — |
| Gravação de sessão | Não | Reavaliar com consentimento explícito |
| Verificação de idade | Autodeclaração | KYC reativo se necessário |
| Marketplace | Presets oficiais | Marketplace de Mestres (lore, aventuras, cachê de mestrar) |
| Monetização | Ads + assinatura + cosméticos | Comissão de marketplace |

---

## 15. Principais Decisões em Aberto (checklist para a equipe)

1. Percentual de comissão do marketplace e do "cachê de mestrar".
2. Framework mobile (nativo Android/Kotlin vs. cross-platform Flutter/React Native) — impacta diretamente o plano de expansão para iOS.
3. Corte de idade mínima para mesas privadas (se diferente de 18+).
4. Fluxo/SLA de moderação de denúncias.
5. Momento e forma da consulta jurídica sobre reprodução de mecânicas do GURPS.
6. Se e como permitir lore/mundo criado por Mestres (e sua relação com o marketplace).
7. Tamanho máximo de mesa além do MVP (6-7 jogadores).

---

*Documento gerado a partir de discussão de escopo com o time de produto. Próximos passos sugeridos: validar as decisões em aberto, e então detalhar cada seção como especificação técnica (contratos de API, schema de dados do motor de regras, wireframes de UI).*
