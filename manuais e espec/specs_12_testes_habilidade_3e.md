# Especificação Mecânica — Testes de Habilidade (motor de resolução de ações)
### Fonte: GURPS 3ª Edição — Capítulo 12 completo (págs. físicas 86-94)

---

## 1. Regra Fundamental
Teste = 3d6 ≤ **NH efetivo** (NH básico ± todos os modificadores da situação, cumulativos). NH efetivo <4 → teste impossível de tentar (exceto jogadas de Defesa, que sempre podem ser tentadas).

## 2. Sucesso Decisivo e Falha Crítica
**Sucesso Decisivo:**
- Resultado 3 ou 4 = sempre decisivo.
- Resultado 5 = decisivo se NH efetivo ≥15.
- Resultado 6 = decisivo se NH efetivo ≥16.
- Mestre decide o efeito (sempre algo bom; quanto melhor o resultado, maior o bônus). Pode dar bônus extra mesmo sem ser decisivo, se o resultado for muito abaixo do necessário.
- **Golpe Fulminante** = sucesso decisivo num ataque → usa a Tabela de Golpes Fulminantes (não decisão livre do Mestre).

**Falha Crítica:**
- Resultado 18 = sempre falha crítica.
- Resultado 17 = falha crítica se NH efetivo <16 (senão é falha comum).
- Qualquer resultado **10+ acima do NH efetivo** = falha crítica (ex: NH efetivo 6 → 16 já é crítica).
- Mestre decide o efeito (sempre algo ruim; quanto pior o resultado, pior a consequência).
- **Erro Crítico** = falha crítica num ataque → usa a Tabela de Erros Críticos (não decisão livre do Mestre).
- Exceção específica: resultado ≥14 num teste de IQ pra resistir a fobia/desvantagem mental = falha automática.

## 3. Testes com Nível Pré-definido
- Perícias condicionadas a atributo/outra perícia seguem a mesma mecânica de teste, só mudando a base do NH.
- **Múltiplos pré-definidos:** se a perícia tiver mais de um (ex: Escalada = DX-5 ou ST-5), usa-se **sempre o melhor** dos dois.
- **Sem pré-definido** = impossível tentar sem ter estudado a perícia, não importa o quão inteligente/ágil o personagem seja.
- **Teto de 20 para cálculo de pré-definido:** mesmo com atributo sobre-humano (ex: DX 25), o pré-definido usa **no máximo 20** como base (ex: Natação DX-4 com DX25 → usa 20-4=16, não 21).

## 4. Sucesso Automático
Sem rolagem quando bom senso indica que nem falha crítica nem sucesso decisivo fazem sentido (ex: achar a loja da esquina). Se houver qualquer chance real de falha (ex: atirar à queima-roupa), rola-se.

## 5. Disputa de Habilidades (testes opostos)
Dois personagens testam a perícia relevante (todos os modificadores aplicados); o Mestre define as regras específicas de cada disputa.
- **Disputa Rápida** (resolve em 1 turno — ex: disputar posse de uma arma, mira simultânea): ambos testam; se só um passa, ele vence; se os dois passam ou os dois falham, vence quem teve a **maior margem** de sucesso (ou menor margem de falha); empate = ninguém vence.
- **Disputa Normal** (dura vários turnos — ex: braço de ferro, corrida): mesma lógica por turno, mas empate = posição não muda, tenta de novo no turno seguinte. Tempo por tentativa varia (combate = 1s; pesquisa de biblioteca = dias).
- **Atalho para NH muito altos:** se ambos os NH forem >14, reduza o maior para 14 e subtraia a mesma diferença do outro antes de resolver (evita disputas "eternas" entre peritos).
- **Exemplos de perícia certa por situação:** Braço de ferro=FOR; Debate=IQ ou Lábia/Diplomacia; Jogo de dados=Jogo; Batalha mental=Telepatia; Debate público=Trovador (+bônus de reação da audiência); Sedução=Sex-Appeal; Maratona de dança=FOR vs FOR; Eleição=Política (+bônus de reação); Regatear=Comércio; Beber=Boemia (-2 se bebida não-familiar).

## 6. Quando o Mestre Rola em Segredo (não o jogador)
Duas situações:
1. **Perícias de obtenção de informação** (Detecção de Mentiras, Meteorologia, ciências, Dom Empatia): jogador pede o teste, Mestre rola oculto. Sucesso = informação correta; falha = Mestre escolhe mentir ou omitir (quanto pior a falha, maior a mentira).
2. **Testes de sentidos/Noção do Perigo:** o jogador **não deve saber que o teste está acontecendo**. O Mestre rola baseado nas fichas dos personagens sem anunciar o teste — se alguém for bem-sucedido, revela a informação; se ninguém for, o grupo é pego de surpresa sem aviso algum.

---

## 7. Proezas Físicas

### Corrida
- Em combate: velocidade de corrida = Velocidade Básica + bônus da perícia Corrida + 1 m/s (bônus de curta distância, só em linha reta).
- Distâncias 10-500m: cada ponto de Velocidade = 1 m/s (+1 bônus curta distância se terreno bom). Não arredondar a Velocidade Básica pra baixo nesse cálculo.
- Distâncias >500m: metade da velocidade calculada acima.
- Carga reduz a velocidade: divide por 2 (Leve), 3 (Média), 4 (Pesada), 5 (Muito Pesada).
- **Fadiga:** teste de VIG a cada 100m (velocidade máxima) ou 200m (longa distância); falha = -1 Fadiga.
- FOR≤3 → Velocidade cai à metade; FOR=1 → não pode mais correr.

### Saltos
- **Altura sem impulso:** `7,5 × ST - 25cm` (+60cm se houver 4m de espaço pra impulso).
- **Distância sem impulso:** `(ST - 3) × 33cm`.
- **Distância com impulso:** como acima + 33cm por metro de espaço disponível, até o dobro da distância sem impulso.
- **Esforço extra:** custa 1 Fadiga (sucesso ou falha). Altura: `(altura extra ÷ 2,5)` subtraído de ST ou DX (o melhor), testa contra o resultado. Distância: `ceil(distância extra ÷ 10)` subtraído de ST/DX (÷15 se com espaço de impulso).
- Com a perícia Salto: usa o NH da perícia no lugar de ST/DX em qualquer cálculo acima.
- Saltar sobre obstáculo comum: custa +1 de Movimento (conta como 2 hexes), sucesso automático a menos que seja um obstáculo "de verdade" (aí usa as fórmulas acima com DX, -1 a -5 conforme dificuldade).
- Regra opcional de Carga no salto: subtrai o nível de Carga da ST antes de calcular.
- Falha num salto significativo = queda (1d-2 dano/metro caído) + 2 turnos pra se levantar. Resultado 17/18 = cai do objeto saltado.

### Escalada
Pré-definido DX-5 ou ST-5. Teste no início + a cada 5min. Falha = queda (se preso por corda, fica suspenso, a menos que falha crítica). Nível de Carga reduz o NH.

| Tipo de superfície | Modificador | Escalada Curta (combate) | Escalada Longa |
|---|---|---|---|
| Subir/descer escada | sem jogada | 3/2 degraus por segundo | 1 degrau/s |
| Árvore comum | +5 | 30 cm/s | 10 cm/s |
| Montanha comum | 0 | 15 cm/s | 3 m/min |
| Parede vertical de pedra | -3 | 6 cm/s | 1,2 m/min |
| Edifício moderno | -3 | 3 cm/s | 60 cm/min |
| Corda, subindo | -2 | 30 cm/s | 6 m/min |
| Corda, descendo sem equip. | -1 | 60 cm/s | 9 m/min |
| Corda, descendo com equip. | -1 | 3,6 m/s | 3,6 m/s |

### Levantamento e Movimentação de Objetos
| Ação | Peso máximo |
|---|---|
| Uma mão | 3 × ST kg |
| Duas mãos | 13 × ST kg |
| Carregar nas costas | 15 × ST kg (perde 1 Fadiga/turno se Carga >10×ST) |
| Empurrar/Deslocar | 13×ST (25×ST com impulso) |
| Deslocar levemente (balançar) | 50×ST ou mais |
| Arrastar (superfície áspera) | = peso que consegue carregar |
| Arrastar (superfície lisa) | dobro do peso que consegue carregar (÷2 de novo se for trenó na neve) |
| Puxar sobre rodas (carroça 2 rodas) | ÷10 do peso efetivo de arrastar (÷20 carroção 4 rodas; ÷2 de novo se estrada boa) |

**Esforço extra:** teste de ST, -1 no teste por +10% de peso adicional (-2 por +20%, etc.); 1 teste/minuto se contínuo; 17-18 sempre falha. Sucesso = moveu; falha = não moveu e perde 1 ST (Fadiga); falha crítica = perde também 1 HT (só cura com descanso, não com Primeiros Socorros).

**Empurrar/derrubar objetos** (tratado como ataque): peso máximo derrubável = 13×ST (26×ST com impulso/velocidade total no turno).

**Apanhar objeto em combate:** leve = manobra Preparar (1s); pesado (>ST/2 em kg) = 2s.

### Arremessando Objetos
Qualquer coisa até 13×ST pode ser arremessada (teste de DX-3 ou perícia Arremesso pra acertar alvo).

**Distância de arremesso:** consultar peso na tabela abaixo → multiplicar pela ST (some 1/6 do NH em Arremesso à ST antes de multiplicar, se tiver a perícia):

| Peso | Distância base (m) | Peso | Distância base (m) |
|---|---|---|---|
| ≤500g | 3,5 | 7,5kg | 0,7 |
| 750g | 3,0 | 10kg | 0,6 |
| 1,0kg | 2,5 | 12,5kg | 0,5 |
| 1,5kg | 1,9 | 15kg | 0,4 |
| 2,0kg | 1,5 | 20kg | 0,3 |
| 2,5kg | 1,2 | 25kg | 0,25 |
| 3,75kg | 1,0 | 30kg | 0,2 |
| 5,0kg | 0,8 | 40kg | 0,15 |
| — | — | 50kg | 0,1 |
| — | — | 100kg | 0,05 |

**Dano de objeto arremessado (contundente, não usar pra armas):**
| ST | 0,25-5kg | 5-25kg | 25-50kg | >50kg |
|---|---|---|---|---|
| 5-6 | 1D-5 | 1D-4 | 1D-5 | — |
| 7-8 | 1D-4 | 1D-3 | 1D-3 | — |
| 9-10 | 1D-3 | 1D-2 | 1D-2 | 1D-3 |
| 11-12 | 1D-2 | 1D-1 | 1D-1 | 1D-2 |
| 13-14 | 1D-1 | 1D | 1D | 1D |
| 15-16 | 1D | 1D+1 | 1D+2 | 1D+2 |
| 17-18 | 1D+1 | 1D+2 | 2D-2 | 2D-1 |
| 19-20 | 1D+2 | 2D-2 | 2D-1 | 2D |

Projétil frágil (ou pessoa arremessada) sofre o mesmo dano que causa (calcular em separado).

### Cavar
| Ferramenta/situação | Taxa |
|---|---|
| Pá de ferro, solo normal | 0,053 × ST m³/h |
| Picareta de ferro, solo duro→fofo | 0,23 × ST m³/h |
| Pá, remover terra já fofa | 0,11 × ST m³/h |
| Alternando picareta+pá sozinho | 0,038 × ST m³/h |
| Pedra dura (picareta) | 1/4 da taxa normal (ou menos) |
| Ferramenta de madeira (NT≤5) | metade da velocidade |
| Ferramenta improvisada (mãos, utensílios) | no máximo 1/4 |

Fadiga: 1 ponto/hora em terra fofa, 2 em terreno normal, 3 em terra dura, 4 em pedra.

### Natação
Pré-definido: ST-5 ou DX-4. Teste ao entrar em água funda + a cada 5min. +3 se entrou intencionalmente; -2×nível de Carga; +5 com Fardo Obesidade (Carga da gordura não conta contra o nado).
- Falha = engole água, -1 Fadiga, novo teste em 5s (repete até afogar, ser salvo, ou suceder).
- Livrar-se de equipamento após 1º sucesso: teste de DX por item (-4 escudo/elmo/couraça).
- **Deslocamento nadando (curta distância):** 1/10 do NH em Natação (arred. baixo), a cada 10s. Máximo ~2m/s pros melhores nadadores; a maioria tem Deslocamento 1 nadando.
- Longa distância: teste de VIG a cada 100m (nado veloz); falha = -1 Fadiga. FOR≤3 → velocidade cai à metade. Nadando devagar/boiando: teste a cada 30min.
- Combate na água: teste de Natação a cada 5s (submerso: a cada 2s); falha = -1 Fadiga.
- Dano de armas embaixo d'água: corpo-a-corpo -2 NH; alcance 1 hex -4; -4 adicional por hex extra de alcance; -nível de Carga adicional. Dano final sempre dividido por 2 (mesmo dano máximo). Lutando dentro (não submerso): redutores ÷2, dano ×2/3.
- **Salvar alguém se afogando:** teste de Natação -5 ± diferença de ST entre salvador e vítima. Falha = engoliu água (-1 ST); falha crítica = quase se afogou também (-6 ST), desiste do salvamento.
- **Prender a respiração:** sem esforço = VIG×10s; esforço leve = VIG×4s; esforço pesado (combate) = VIG×1s. Dobra com hiperoxigenação prévia; quadruplica com oxigênio puro; divide por 2 se não teve tempo de respirar fundo antes. Sem fôlego: -1 Fadiga/turno; FOR=0 → desmaia; morre em 4min sem ar (afogamento também exige sucesso em Primeiros Socorros pra salvar). >2min sem ar: teste de VIG ou sequela permanente de -1 IQ.

---

## 8. Tentativas Repetidas de Teste
Categorias (critério do Mestre):
- (a) Falha mata/destrói na hora → sem repetição possível.
- (b) Falha causa dano mas permite tentar de novo → estimar o dano e deixar repetir após um tempo razoável.
- (c) Falha não causa dano → repetir após tempo razoável, mas com **penalidade crescente por tentativa** (-1 na 2ª, -2 na 3ª, etc.) até suceder ou desistir.

---

## 9. Testes dos Sentidos (todos contra IQ, exceto onde indicado)
**Visão:** +Prontidão, +Visão Aguçada. Cego/escuridão total = nada. Escuridão total em ação que exige visão: -10 (combate) ou impossível (ler mapa). Escuridão parcial: -1 a -9. Míope sem lentes: -6 se alvo a >3m. Hipermétrope: -6 se alvo a <3m. Visão Periférica: pode testar Visão pra qualquer coisa na área (exceto direto atrás). Ciópitico: sem penalidade de escuridão (exceto total).

**Audição:** +Prontidão, +Ouvido Aguçado. -4 Duro de Ouvido. Surdo = nada. Mestre pode exigir teste de IQ adicional pra *interpretar* o som ouvido.

**Olfato/Paladar:** +Prontidão, +Olfato/Paladar Apurado. Sem penalidade padrão (só situacional). Disosmia/Ageusia = nada. Mestre pode exigir IQ adicional pra interpretar, ou perícia específica (Química/Culinária/Venefício).

Em todos os 3: personagens com Noção do Perigo fazem um **teste de IQ adicional** pra detectar perigo relacionado ao estímulo percebido.

---

## 10. Testes de Vontade
Vontade = IQ ± níveis de Força de Vontade/Vontade Fraca (Vontade Fraca usa IQ **capado em 14** antes de subtrair os níveis). Teste exigido em situação alarmante ou pra superar Fardo mental. Resultado ≥14 = sempre falha. Falha = cede ao medo/impulso. Mestre deve penalizar quem tenta evitar sistematicamente interpretar seu próprio Fardo mental via testes repetidos.

## 11. Testes de Influência
Disputa: perícia do influenciador (Diplomacia, Lábia, Trato Social ou Sex-Appeal) vs. Vontade da "vítima". NPCs tentam influenciar PCs com a mesma frequência que o contrário. Com a perícia certa, pode-se substituir um teste de reação normal por um Teste de Influência (Mestre deve tratar falha nesse teste como reação um pouco pior do que seria numa reação normal — exceto Diplomacia, que nunca piora em relação à reação normal).

## 12. Empreendimentos Longos
Mestre define horas-homem necessárias por perícia envolvida (ex: ponte de corda = 40h braçal + 24h carpintaria + 8h engenharia). 8h-homem = 1 dia de trabalho normal. Teste diário contra a perícia usada naquele dia: sucesso=8h-homem concluídas; falha=só metade; sucesso decisivo=+50% bônus; falha crítica=nada feito e 2d horas já feitas são destruídas. Horas extras (>10h/dia): teste de VIG (-1 por hora além de 10); sucesso=trabalho extra normal; falha=teste de perícia sofre redutor igual à margem de falha (mín. -2) + ganha Fadiga equivalente; falha crítica=exausto, não trabalha no dia seguinte.

## 13. Verificação de Pânico
Teste de Vontade quando algo deveria aterrorizar. +2 com Reflexos em Combate. Fobia grave: -4 adicional. **+5 no calor da batalha** (só se já estava em combate quando o evento ocorreu). Modificadores situacionais: -1 a -6 (quanto mais chocante/pessoal); +1 a +3 (à distância seguraça/aviso prévio).

**Tabela de Resultado de Pânico** (3d6 + margem de falha da Verificação):
| Resultado | Efeito |
|---|---|
| 4-5 | Atordoado 1 turno, recupera sozinho |
| 6-7 | Atordoado 1 turno; teste de IQ/turno depois pra recuperar |
| 8-9 | Atordoado 1 turno; teste de Vontade/turno depois pra recuperar |
| 10 | Atordoado 1d turnos; depois teste de Vontade/turno |
| 11 | Atordoado 2d turnos; depois teste de Vontade/turno |
| 12 | Vômito (atordoado 15 turnos); depois teste de VIG/turno |
| 13 | Nova Peculiaridade (único jeito de passar de 5 peculiaridades) |
| 14-15 | 1d Fadiga + 1d turnos atordoado |
| 16 | Atordoado 1d turnos + nova Peculiaridade |
| 17 | Desmaia 1d minutos; teste de VIG/minuto pra acordar |
| 18 | Desmaia (mesmo, mas testa VIG imediatamente; falha=-1PV ao desmaiar) |
| 19 | Desmaio grave 2d minutos + perde 1PV |
| 20 | Quase-choque, 4d minutos + 1 Fadiga |
| 21 | Pânico: corre/grita/chora sem sentido por 1d minutos; teste de IQ/minuto |
| 22 | Adquire Grande Fantasia |
| 23 | Adquire Fobia Suave ou Fardo mental de 10 pontos |
| 24 | Consequências físicas: 15 pontos de Fardos físicos (idade conta 3pts/ano) |
| 25 | Fobia Suave existente vira Grave; senão, nova Fobia Suave/Fardo de 10pts |
| 26 | Desmaia 1d min (#18) + nova Fantasia de 10pts |
| 27 | Desmaia 1d min (#18) + novo Fardo mental de 10pts |
| 28 | Coma leve: inconsciente, testa IQ/30min; ao acordar, -2 em tudo por 6h |
| 29 | Coma: inconsciente 1d horas, depois teste de VIG (falha=+1d horas, repete) |
| 30 | Catatonia 1d dias (teste IQ pra sair, senão +1d dias); sem cuidados médicos perde 1PV dia1, 2PV dia2... |
| 31 | Crise: convulsão 1d min, 2d Fadiga, teste de VIG (falha=+1d dano; crítica=-1HT permanente) |
| 32 | Pontada de dor: colapso, 2d dano |
| 33 | Pânico total: sem controle, Mestre rola reação aleatória a cada rodada até passar em teste de IQ |
| 34 | Adquire Fantasia Grave |
| 35 | Adquire Fobia Grave ou Fardo mental de 15 pontos |
| 36 | Consequências físicas graves: 20 pontos de Fardos físicos |
| 37 | Consequências físicas graves: 30 pontos de Fardos físicos |
| 38 | Coma (#29) + Fantasia Grave (#34) |
| 39 | Coma (#29) + Fobia Grave ou Fardo de 30 pontos |
| 40+ | Como #39 + perde 1 ponto de IQ permanente (reduz NH de toda perícia mental, inclusive mágicas/psíquicas) |

*(Todos os Fardos/Peculiaridades adquiridos por este mecanismo reduzem o valor em pontos do personagem, e devem ser tematicamente ligados ao evento que os causou.)*

---

## Notas de Game Design
- **Este capítulo é o núcleo do "motor de dados"** citado como requisito no início do projeto — toda ação do jogo (perícia, combate, sentido, vontade) resolve através da mesma primitiva (3d6 vs NH efetivo), com sucesso/falha decisivos como camada extra por cima.
- **Padrão "GM rola em segredo"** precisa virar uma flag por tipo de teste no motor (perícias de informação e testes de sentido/perigo nunca devem expor o resultado bruto ao jogador — só a informação resultante, filtrada).
- **Muitas proezas físicas usam fórmulas de ST/DX puras** (salto, arremesso, levantamento, natação) — todas paramétricas, fáceis de implementar como funções.
- **A Tabela de Verificação de Pânico é essencialmente uma segunda "tabela de dano" — só que para o estado mental**, com efeitos de curto prazo (atordoamento) e permanentes (novos Fardos). Vale tratar como sistema irmão da Tabela de Golpes Fulminantes/Erros Críticos (ainda não especificadas, ficam nos capítulos de Combate).

---

## Próximo capítulo: **Sistema Básico de Combate** (pág. 95+) — acredito que seja o mais extenso e crítico de todos até agora, já que "todo combate é calculado na plataforma" é um requisito central do produto. Talvez precise ser dividido em vários lotes. Seguimos?
