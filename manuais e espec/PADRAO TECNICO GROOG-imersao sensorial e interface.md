# PADRÃO TÉCNICO GROOG — IMERSÃO SENSORIAL, FISIOLOGIA DIGITAL E INTERFACE
### Arquitetura de Interações Reais, Filtros Audiovisuais e HUD Dinâmico

---

```
===============================================================================
                         SISTEMA OPERACIONAL GROOG
              Manual de Engenharia de Imersão e Interface Tática
===============================================================================
  Objetivo: Tradução Fisiológica em Tempo Real para Áudio, Vídeo e HUD
  Princípio: "O que o corpo sofre, a tela e o fone reproduzem."
  Controle: Motor Automático de Regras + Painel de Intervenção do Criador
===============================================================================
```

---

# SEÇÃO 1: FILOSOFIA DA FISIOLOGIA DIGITAL NO GROOG

No jogo clássico analógico, os estados fisiológicos (sono, dor, surdez, enjoo) dependiam puramente da boa vontade do jogador em interpretar e lembrar das penalidades. 

No **GROOG**, a tecnologia da plataforma assume a **Fisiologia Real do Personagem**:
1. **Zero Metajogo por Isolamento Físico:** Se dois personagens estão em salas diferentes, eles não se ouvem. Se um personagem desmaia, o jogador é isolado sensorialmente do mundo.
2. **Processamento Digital de Sinal (DSP) em Tempo Real:** O áudio dos outros jogadores e os sons do ambiente passam por filtros de áudio dinâmicos (abafamento, corte de frequências, eco, intermitência).
3. **Renderização de Shaders Visuais:** A tela do jogador sofre distorções visuais paramétricas (vinhetas, aberração cromática, tremores, túnel de visão, perda de contraste).
4. **HUD Contextual Reativo:** Botões de ação tremem, demoram para responder ou ficam bloqueados conforme a condição neuromuscular do personagem.

---

# SEÇÃO 2: CATÁLOGO DE ESTADOS FISIOLÓGICOS E SENSORIAIS

---

### 1. ESTADO: TONTEIRA E CONCUSSÃO LEVE (*DIZZINESS / CONCUSSION*)
*   **Gatilhos:** Soco no queixo/rosto, pancada na cabeça sem perda de consciência, explosão próxima sem trauma perfurante.
*   **Botão do Criador:** `[APLICAR: TONTEIRA (Duração em Segundos)]`.
*   **Efeito de Áudio (Voz e Ambiente):**
    *   Áudio dos outros jogadores fica **cortado e intermitente** (como um rádio com sinal oscilando a cada 0.5s).
    *   Zumbido agudo contínuo em volume moderado (*Tinnitus leve*).
*   **Efeito Visual (Tela):**
    *   Leve rotação oscilatória da câmera (sensação de desequilíbrio).
    *   Bordas da tela levemente desfocadas (Blur periférico).
*   **Impacto no HUD:**
    *   O cursor do mouse ou retícula de mira sofre uma deriva lenta e oscilatória.
    *   Todas as rolagens de combate sofrem penalidade de $-2$ aplicada automaticamente pelo sistema.

---

### 2. ESTADO: DOR AGUDA E AGONIA FÍSICA (*EXTREME PAIN / AGONY*)
*   **Gatilhos:** Fratura óssea exposta, queimadura severa de 2º/3º grau, membro perfurado, tortura física.
*   **Botão do Criador:** `[ESTADO: AGONIA / DOR SEVERA]`.
*   **Efeito de Áudio:**
    *   Respiração ofegante alta e gemidos do próprio personagem no fone do jogador.
    *   Vozes dos outros jogadores sofrem filtro passa-baixa (*Low-Pass Filter*), soando abafadas e distantes.
*   **Efeito Visual:**
    *   Vinheta vermelha pulsante sincronizada com o ritmo cardíaco.
    *   A cada pulso de dor, a tela dá um micro-flash avermelhado.
*   **Impacto no HUD:**
    *   **Tremor de Mãos:** Os botões do menu vibram e tremem na tela, exigindo precisão para clicar.
    *   Ações complexas (recarregar arma, hackear, gazua) demoram o dobro do tempo em segundos.
    *   Penalidade de $-4$ em todos os testes de concentração.

---

### 3. ESTADO: SONO PROFUNDO E EXAUSTÃO EXTREMA (*DROWSINESS / SLEEP DEPRIVATION*)
*   **Gatilhos:** Mais de 24 horas acordado sem descanso, perda massiva de Pontos de Fadiga ($\text{PF} \le 0$), sedativos leves.
*   **Botão do Criador:** `[ESTADO: SONOLÊNCIA EXTREMA (Fadiga Nível X)]`.
*   **Efeito de Áudio:**
    *   Áudio com eco lento e reverberação irreal.
    *   Sons distantes desaparecem; apenas sons a menos de 2 metros são audíveis.
*   **Efeito Visual:**
    *   **O Efeito "Pálpebras Pesadas":** A tela fecha duas cortinas pretas (superior e inferior) de forma lenta a cada 5 a 10 segundos, simulando o piscar involuntário.
    *   Para manter os olhos abertos, o jogador precisa pressionar um botão de `[FORÇAR FOCO / VONTADE]`. Se falhar no teste de $\text{VON}$, a tela fecha totalmente por 3 a 6 segundos.
*   **Impacto no HUD:**
    *   Tempo de resposta atrasado: há um atraso de $0.5$ segundo entre o clique do jogador e a execução da ação pelo personagem.

---

### 4. ESTADO: INCONSCIÊNCIA, COMA E ANESTESIA (*UNCONSCIOUSNESS / BLACKOUT*)
*   **Gatilhos:** $\text{PV} \le 0$ com falha no teste de $\text{VIT}$, estrangulamento, traumatismo craniano severo.
*   **Botão do Criador:** `[ESTADO: INCONSCIENTE]`.
*   **Efeito de Áudio:**
    *   **Silêncio Absoluto.** Todo o canal de voz do grupo e os efeitos sonoros do cenário são cortados instantaneamente.
*   **Efeito Visual:**
    *   **Tela 100% Preta.** Nenhum elemento de interface ou mapa é exibido.
*   **Canal Exclusivo do Criador (*Talk To*):**
    *   O Criador possui o botão `[TALK TO: Jogador A]`. Ao ativar, apenas o Criador consegue falar no fone do jogador desmaiado (para sussurros de sonhos, delírios ou vozes misteriosas).
*   **O Despertar:**
    *   Ao recuperar a consciência, a tela faz um *Fade In* vertical lento (abrindo os olhos).
    *   O jogador não possui registro no log do que ocorreu durante o desmaio; ele precisa perguntar aos companheiros em voz alta.

---

### 5. ESTADO: SEPARAÇÃO ESPACIAL E AMBIENTES DISTINTOS (*ACOUSTIC ROOM ISOLATION*)
*   **Gatilhos:** Personagens em cômodos diferentes, atrás de portas fechadas, dentro de veículos blindados ou separados por distância.
*   **Botão do Criador:** Automático pelo Motor de Mapa (ou Override Manual).
*   **Efeito de Áudio (Voz Espacial 3D):**
    *   **Porta de Madeira Fechada:** Áudio abafado em 60%.
    *   **Porta de Aço / Parede de Concreto:** Áudio 100% bloqueado (silêncio total entre as salas).
    *   **Ação de Escuta:** O jogador pode clicar em `[SENTIDOS -> ENCOSTAR OUVIDO]`. Isso dispara um teste de $\text{PER}$; em caso de sucesso, o áudio da sala adjacente é liberado com filtro abafado.
*   **Efeito Visual:**
    *   Névoa de Guerra (*Fog of War*) dinâmica: o jogador vê apenas a sala em que está. O resto do mapa fica em escuridão completa.

---

### 6. ESTADO: ENJOO, NÁUSEA E VERTIGEM (*NAUSEA / POISONING / SEASICKNESS*)
*   **Gatilhos:** Venenos estomacais, labirintite, radiação inicial, enjoo de movimento (barco/espaçonave).
*   **Botão do Criador:** `[ESTADO: NÁUSEA SEVERA]`.
*   **Efeito de Áudio:**
    *   Som de batimento cardíaco abafado e respiração irregular.
    *   Áudio com ligeiro efeito de *Flanger / Phaser* (sensação de distorção fluida).
*   **Efeito Visual:**
    *   O horizonte da tela oscila lentamente em ondas (sensação de barco balançando).
    *   Saturação de cores esverdeada/amarelada nas bordas da tela.
*   **Impacto no HUD:**
    *   A cada 30 segundos, o personagem sofre um espasmo de vômito involuntário: o menu trava por 2 segundos e a ação atual é cancelada.
    *   $-2$ em todas as defesas ativas e ataques.

---

### 7. ESTADO: ADRENALINA EXTREMA E COMBATE CRÍTICO (*ADRENALINE RUSH / TACHYPSYCHIA*)
*   **Gatilhos:** Emboscada súbita, tiroteio intenso, vida abaixo de $30\%$.
*   **Botão do Criador:** `[ESTADO: SURTO DE ADRENALINA]`.
*   **Efeito de Áudio:**
    *   Batimento cardíaco forte e acelerado (*Thump-Thump-Thump*) no fone.
    *   Vozes do rádio e do ambiente ficam em tom mais grave e abafadas (*Efeito de Exclusão Auditiva de Combate*).
*   **Efeito Visual:**
    *   **Visão em Túnel:** As bordas da tela escurecem e o centro fica ultra-nítido e com contraste elevado.
*   **Impacto no HUD:**
    *   O personagem ignora temporariamente as penalidades de Choque por dor (não sente ferimentos leves durante os primeiros 5 turnos).

---

### 8. ESTADO: SURDEZ TEMPORÁRIA POR TRAUMA ACÚSTICO (*FLASHBANG / BLAST TINNITUS*)
*   **Gatilhos:** Granada de concussão (Flashbang), disparo de fuzil em cômodo fechado sem proteção auricular, explosão próxima.
*   **Botão do Criador:** `[DISPARAR: FLASHBANG / TRAUMA ACÚSTICO]`.
*   **Efeito de Áudio:**
    *   **Zumbido Ensurdecedor (100% Volume de Tinnitus):** Todos os canais de voz e sons de passos são substituídos por um zumbido estridente a $4000\text{ Hz}$.
    *   O zumbido diminui de volume gradualmente ao longo de $1\text{d} \times 5$ segundos até o áudio normal retornar.
*   **Efeito Visual:**
    *   Flashbang: Tela 100% branca que desvanece lentamente para uma imagem congelada residual (*Afterimage*) antes de voltar ao normal.

---

### 9. ESTADO: FRIO EXTREMO E HIPOTERMIA (*EXTREME COLD / SHIVERING*)
*   **Gatilhos:** Neve sem agasalho, imersão em água congelante, ambiente de vácuo térmico.
*   **Botão do Criador:** `[AMBIENTE: FRIO EXTREMO (Grau 1 a 3)]`.
*   **Efeito de Áudio:**
    *   Dentes do personagem batendo audivelmente no fone.
    *   Vento cortante constante.
*   **Efeito Visual:**
    *   Cristais de gelo crescem progressivamente pelas bordas da tela.
    *   Paleta de cores muda para tons azulados frios.
*   **Impacto no HUD:**
    *   **Tremores Motores Involuntários:** O cursor do mouse treme de forma rápida e espasmódica.
    *   Tentativas de atirar ou usar ferramentas finas sofrem penalidade crescente de $-1$ até $-5$.

---

### 10. ESTADO: INTOXICAÇÃO ALCOÓLICA OU DROGAS PSICODÉLICAS (*INTOXICATION / HALLUCINATION*)
*   **Gatilhos:** Consumo excessivo de álcool, toxinas alucinógenas, esporos de plantas alienígenas.
*   **Botão do Criador:** `[ESTADO: INTOXICAÇÃO / ALUCINÓGENO (Grau X)]`.
*   **Efeito de Áudio:**
    *   Vozes com pitch alterado (algumas soando mais graves, outras mais agudas).
    *   Sussurros fantasma gerados proceduralmente pelo sistema no fone.
*   **Efeito Visual:**
    *   **Aberração Cromática Intensa:** As cores se separam em canais vermelho, verde e azul nas bordas dos objetos.
    *   **Tokens Fantasmas:** O jogador vê inimigos ou silhuetas no mapa que não existem para os outros jogadores.
*   **Impacto no HUD:**
    *   Os nomes dos botões podem trocar de posição ou mudar temporariamente de texto, exigindo raciocínio lento.

---

# SEÇÃO 3: O PAINEL DE CONTROLE DE ESTADOS DO CRIADOR

Na plataforma em nuvem do GROOG, o Criador gerencia todos esses estados em uma matriz de botões de disparo com 1 clique:

```
+-----------------------------------------------------------------------------+
|                     PAINEL DE BIOMETRIA E ESTADOS (CRIADOR)                 |
+-----------------------------------------------------------------------------+
| JOGADOR SELECIONADO: [ Carlos - Agente ]                                     |
+-----------------------------------------------------------------------------+
| ESTADOS RÁPIDOS:                                                            |
|  [ BOTÃO: TONTEIRA (20s) ]       [ BOTÃO: AGONIA / DOR ]                    |
|  [ BOTÃO: INCONSCIENTE (Mudo) ]  [ BOTÃO: FLASHBANG / ZUMBIDO ]             |
|  [ BOTÃO: NÁUSEA / ENJOO ]       [ BOTÃO: SONOLÊNCIA (Pesada) ]             |
|  [ BOTÃO: ISOLAR SALA (Voz OFF)] [ BOTÃO: ALUCINAÇÃO (Tokens Falsos) ]      |
+-----------------------------------------------------------------------------+
| COMUNICAÇÃO RESTRITA:                                                       |
|  [ TALK TO: CARLOS ] -> Abre canal de voz exclusivo para o jogador isolado. |
+-----------------------------------------------------------------------------+
```

---

# SEÇÃO 4: RESUMO DE IMPACTO NA JOGABILIDADE

```
+-------------------+----------------------------+----------------------------+
| Estado            | Efeito no Fone (Áudio)     | Efeito na Tela (Vídeo/HUD) |
+-------------------+----------------------------+----------------------------+
| Tonteira          | Vozes cortadas e falhadas  | Câmera oscilando e blur    |
| Dor Extrema       | Respiração pesada / abafado| Vinheta vermelha pulsante  |
| Sono / Exaustão   | Reverberação lenta / eco   | Pálpebras fechando na tela |
| Inconsciência     | Silêncio 100% total        | Tela 100% preta (apagada)  |
| Outra Sala        | Voz bloqueada por paredes  | Névoa de guerra no mapa    |
| Enjoo / Náusea    | Áudio distorcido (Phaser)  | Tela ondulando em ondas    |
| Flashbang         | Zumbido alto ensurdecedor  | Tela branca com fade lento |
| Frio Extremo      | Dentes batendo no fone     | Cursor e botões tremendo   |
| Alucinógeno       | Sussurros falsos no fone   | Inimigos falsos no mapa    |
+-------------------+----------------------------+----------------------------+
```

---
*Fim do Padrão Técnico GROOG — Imersão Sensorial e Interface.*
