# Especificação Mecânica — Apêndice "Quadros e Tabelas", Parte A: Tabelas Críticas de Combate + Reações
### Fonte: GURPS 3ª Edição — Apêndice de Referência (págs. físicas 201-205)
### Preenche pendências deixadas em aberto nos capítulos de Combate (já especificados)

---

## Tabela de Parâmetro Velocidade/Distância e Tamanho

Usada em qualquer ataque de longo alcance (arma ou magia de Projétil). Combina **3 fatores** num único modificador:
1. **Tamanho do alvo:** meça o comprimento (ou largura, se menor que metade do comprimento); arredonde para o menor "tamanho" tabelado que seja ≥ esse valor; use o modificador da coluna correspondente.
2. **Distância + Velocidade combinadas:** some distância (m) + velocidade do alvo (m/s) — quanto mais rápido o alvo, menos importa a distância exata (e vice-versa). Se o atirador também se move, use a **velocidade relativa** entre os dois. Arredonde para o menor valor tabelado ≥ a soma.
3. Aplicar os dois modificadores (tamanho + distância/velocidade) juntos, então somar a Precisão da arma (se apontou) e outros modificadores situacionais.

**Conversão rápida:** 1 m/s ≈ 4 km/h (ex: 60km/h = 15m/s).

### Tabela (modificador | tamanho equiv. | dist./vel. equiv.)
| Mod. | Tamanho | Dist./Vel. |
|---|---|---|
| +15 | -15 (3mm) | — |
| ... | *(progressão geométrica contínua de +15 a -25, dobrando a cada poucos níveis — ver exemplos abaixo para pontos de referência)* | |
| -9 | — | 70m |
| -10 | — | 80m |
| -17 | — | ~1.005m (equivalente) |
| -18 | +18 | 2.000m / 2,0km / 8.000km/h |
| -19 | +19 | 3.000m / 3,0km / 12.000km/h |
| -20 | +20 | 4.500m / 4,5km / 18.000km/h |
| -21 | +21 | 7.000m / 7,0km / 28.000km/h |
| -22 | +22 | 10.000m / 10km / 40.000km/h |
| -23 | +23 | 16km / 64.000km/h |
| -24 | +24 | 24km / 96.000km/h |
| -25 | +25 | 32km (32km/s) / 144.000km/h |
| -31 | +31 | 320km (320km/s) |
| -37 | +37 | 3.200km (3.200km/s) |
| -43 | +43 | 32.000km (32.000km/s) |
| -49 | +49 | 320.000km (320.000km/s) |

*(A tabela completa de +15 a -17 segue a mesma progressão geométrica — dobra a cada ~2 níveis, como já usado nos exemplos resolvidos das especificações de Combate Avançado e Magia. Os valores acima cobrem os extremos e os pontos usados nos exemplos do livro; para uso em produção, a faixa intermediária pode ser gerada por interpolação geométrica ou, se precisão exata for necessária, recomenda-se conferência visual da tabela completa na pág. física 201.)*

**Exemplo do livro:** carro de 5m (+3 tamanho), 40m de distância, 48km/h=15m/s → soma=55 → menor valor tabelado ≥55 é 70 → mod -9. Total combinado: -6 (antes de considerar a arma em si).

## Modificadores para Ataques a Longa Distância (referência condensada)
| Situação | Modificador |
|---|---|
| Tiro rápido (sem apontar) | -4, a menos que NH ajustado ≥ TR da arma |
| 1 turno apontando | 0 + modificador de Precisão |
| 2 turnos apontando | +1 |
| 3 turnos apontando | +2 |
| 4+ turnos apontando | +3 |
| Apoio (besta/rifle/pistola) | +1, se houve tempo de apontar |
| Alvo mais alto | +1m à distância por metro de altura |
| Longa distância + míope | dobra os redutores de distância |
| Tocaia — avaliando antes de disparar | -2 |
| Tocaia — 1-2 hex observados | -4 |
| Tocaia — 3-4 hex | -5 |
| Tocaia — linha inteira observada | -5 |
| Tocaia — 5-6 hex | -6 |
| Tocaia — 7-10 hex | -7 |
| Tocaia — >10 hex | -8 |
| Ataque relâmpago | -2 (+ -4 tiro rápido = -6 total) |
| Teste pra ver se atinge o alvo errado | Teste normal, máx. 9 |
| Atirando às cegas | -10, ou ≤9 (o pior) |
| Arma de fogo/feixe de tipo desconhecido | -2 |
| Tipo de arma totalmente desconhecido | -4 |
| Sistema de mira do veículo desconhecido | -2 |
| Arma malconservada | -4 ou mais |
| Mirar a arma do oponente (maioria) | -4 |
| Mirar arma de haste/lança/rifle/espadão | -3 |
| Mirar faca/pistola | -5 |
| **Posição do alvo:** deitado c/ cobertura mínima, cabeça baixa | -7 |
| Só cabeça exposta | -5 |
| Cabeça+ombros | -4 |
| Atrás de alguém | -4/pessoa no caminho |
| Deitado/rastejando sem proteção | -4 |
| Corpo meio exposto | -3 |
| Cobertura leve | -2 |
| Agachado/sentado/ajoelhado sem cobertura | -2 |

*(Esta tabela é a versão condensada de referência rápida — os valores batem com o que já foi detalhado nas especificações de Sistema Avançado de Combate, Lote 3.)*

---

## Tabela de Golpes Fulminantes (3d6, quando o ataque acerta automaticamente por resultado 3-4, ou 5-6 com NH alto)
*(Dobros/triplos referem-se ao dado de dano básico, antes de aplicar RD/tipo.)*

| 3d6 | Efeito |
|---|---|
| 3 | Dano normal se atingiu o tronco → vítima nocauteada (teste de HT a cada 30min pra recuperar). Qualquer outro local → **triplo** do dano. |
| 4 | Golpe **ultrapassa a armadura** → dano normal (ignora RD). |
| 5 | **Triplo** do dano normal. |
| 6 | **Dobro** do dano normal. |
| 7 | Dano normal + vítima **atordoada** até passar num teste de HT. |
| 8 | Se atingiu braço/perna/mão/pé: dano normal + membro **incapacitado** independente do dano (mas cura em 6 turnos se o dano não fosse suficiente pra incapacitar de verdade). Outro local: dano normal. |
| 9,10,11 | Só dano normal. |
| 12 | Igual ao #8. |
| 13 | Golpe **ultrapassa a armadura** → dano normal. |
| 14 | Braço/perna/mão/pé: dano normal + **incapacitado** de verdade (permanente até curar). Outro local: dano normal. |
| 15 | Arma do oponente **cai** + dano normal. |
| 16 | **Dobro** do dano normal. |
| 17 | **Triplo** do dano normal. |
| 18 | Tronco: dano normal + **nocauteada** (teste HT/30min). Outro local: **triplo** do dano. |

## Tabela de Erros Críticos (3d6, em ataques)
| 3d6 | Efeito |
|---|---|
| 3,4 | Arma **quebra** (inutilizada). Exceção: armas inquebráveis (maças/manguais/marretas/barras metálicas/armas mágicas/finamente trabalhadas) — role de novo; só quebra se sair "quebrada" de novo, senão cai da mão. |
| 5 | Acerta **a si mesmo** num braço/perna (50/50). Exceção: arma perfurante/longo alcance → role de novo. 2º resultado "atinge a si mesmo" = considera o dano; outro resultado = usa o novo. |
| 6 | Igual ao #5, mas só **metade** do dano. |
| 7 | Perde o equilíbrio — nada até o próximo turno + todas defesas ativas -2 até lá. |
| 8 | Arma gira na mão — 1 turno extra pra preparar de novo. |
| 9,10,11 | **Derruba** a arma. Exceção: arma barata **quebra**. |
| 12 | Igual ao #8. |
| 13 | Igual ao #7. |
| 14 | Arma **voa da mão**, cai a 1d metros (50/50 na frente/atrás); quem estiver lá testa DX ou sofre metade do dano da arma! Exceção: ataque perfurante = só derruba (#9). |
| 15 | **Ombro deslocado** — braço da arma inutilizado o resto do combate (30min sem atacar/defender com ele, mas não solta a arma). |
| 16 | **Cai no chão!** (arma de longo alcance: usar #7 em vez disso). |
| 17,18 | Arma **quebra** (#3). |

**Combatentes desarmados:** ignore resultados de "arma quebrada/derrubada/girou" — em vez disso, sofre 1d-3 dano na mão/pé usado pra golpear.

## Erros Críticos em Jogadas de Defesa
Resultado 17/18 = falha desastrosa: Esquiva → cai. Bloqueio → perde controle do escudo (1 turno pra preparar de novo; DP passiva continua). Aparar → consulta a Tabela de Erros Críticos acima.
Resultado 3/4 na **defesa**: oponente (o atacante) precisa consultar a Tabela de Erros Críticos imediatamente (você "iludiu" ele / derrubou a arma dele / se defendeu muito bem). **Exceção:** sem efeito especial contra ataque à distância.

## Tabela de Golpes Fulminantes na Cabeça (só quando o golpe fulminante mira a cabeça especificamente)
| 3d6 | Efeito |
|---|---|
| 3 | **Morte instantânea!** |
| 4,5 | **Nocauteado** (teste HT/30min). |
| 6 | Atingido nos **dois olhos**, cego. Regras de incapacitação (teste por olho pra saber se cura). Atordoado + DX-10 pro resto da luta. |
| 7 | Cego de **um olho** (regra de incapacitação). Atordoado + DX-2 pro resto da luta. |
| 8 | Desequilibrado — só defende no próximo turno (nada mais) + dano normal. |
| 9,10,11 | Só dano normal na cabeça. |
| 12 | Contundente: dano normal + **surdo 24h**. Cortante/perfurante: só -1 PV, mas cicatriz no rosto. |
| 13 | Contundente: dano normal + pode ficar **surdo permanente** (regra de incapacitação). Cortante/perfurante: -2 PV, cicatrizes graves. |
| 14 | Dano normal + **larga a arma** (se tinha 2, sorteia qual). |
| 15-18 | Dano normal + **atordoada**. |

## Tabela de Erros Críticos com Armas de Fogo
| 3d6 | Efeito |
|---|---|
| 3,4 | Arma **quebra**, conserta em 1d horas com Armeiro (granada simplesmente falha). |
| 5 | Acerta a própria **perna** (50/50), dano normal. |
| 6 | Acerta o próprio **pé**, dano normal. |
| 7 | Recuo desequilibra — nada até próx. turno, defesas -2 até lá (granada/feixe: ignora). |
| 8 | **Chabu** — não disparou, sem dano à arma (munição perdida). |
| 9,10,11 | **Emperrou** — teste de Armas de Fogo-4 ou Armeiro pra desemperrar (-3 se arma barata). Granada: ignora, role de novo. |
| 12 | Chabu (#8). |
| 13,14 | Arma **cai**; barata = quebra; senão só precisa pegar e preparar. Granada: cai em hex adjacente — corra! |
| 15 | Coice derruba você no chão (senta ou deita, à escolha). Teste de DX pra segurar a arma. Se ST≥(ST mín. da arma +5), ou ST≥12 pra arma sem ST mín., ignora e usa #7. Arma sem recuo: nada acontece. |
| 16,17 | Arma **quebra** (#3). |
| 18 | Arma **explode**: dano contundente igual ao normal da arma + extra. Se estava apontando: cego por 5min. Granada: explode na mão (dano máximo na mão + dano normal). Laser/feixe/lança-chamas: você **pega fogo**. |

---

## Manobras (tabela-resumo — cross-referência do que já foi detalhado nos capítulos de Combate)
| Manobra | Deslocamento máx. | Ataque | Defesa | Obs. |
|---|---|---|---|---|
| Apontar | ½ Desl. (máx 2 após 1º turno) | +1/turno além do 1º (máx +3) | Normal, perde benefício de Apontar | Armas longo alcance perdem Precisão sem 1 turno de mira |
| Mudar Posição | — | Nenhum | Normal | Ver Tabela de Posições |
| Avançar e Preparar | 1 hex | Nenhum | Normal | Sem aparar/bloquear sem arma/escudo preparado |
| Avançar e Atacar | 1 hex | Normal | Normal | |
| Ataque Total | Até metade do Deslocamento | 2 ataques, ou 1 com +4, ou fintar+atacar | Só passiva | |
| Avançar e Fintar | 1 hex | Disputa Rápida (Arma vs Escudo/Arma/DX) | Normal | Vencer = redutor na defesa do inimigo (=margem) no próximo ataque seu |
| Avançar e Concentrar | 1 hex | Nenhum | Qualquer, mas exige sucesso em IQ-3 ou perde concentração | Só magia/psiquismo |
| Avançar e Aguardar | 1 hex | Normal quando oponente entra no alcance | Normal | Sem ter se movido no turno: pode andar 1 hex pra frente e atacar |
| Defesa Total | 1 hex | Nenhum | 2 defesas diferentes | Máx. 2 aparadas/arma + 2 bloqueios |
| Deslocamento | Até o Deslocamento total | Só "Molinete" | Normal | Custo: 1/hex frente, 2/hex lateral-trás, 1/lado de virada |

## Tabela de Posições (resumo — consistente com o já especificado em Sistema Avançado de Combate)
| Posição | Ataque | Defesa | Movimentação |
|---|---|---|---|
| Em pé | Normal | Normal | Normal, pode correr |
| Agachado | -2 | -2 | +50% custo/hex |
| Ajoelhado | — | — | Não pode se mover |
| Sentado | -2 | Idem Ajoelhado | Não pode se mover |
| Rastejando | Só ataques de perto (-4 pra armas de longo alcance) | -3 em qualquer defesa ativa | +2 custo/hex |
| Deitado | -4 (exceto besta/arma de fogo +1) | Idem Rastejando | Só 1 hex/turno |

## Partes do Corpo — Tabela Completa (✅ confirmada visualmente na pág. física 203 do PDF)

| Posição Aleatória (3d) | Parte do Corpo | Redutor no NH de Ataque | Consequência do Dano Máximo |
|---|---|---|---|
| 4 ou menos | Cérebro⁴ | -7 | Veja obs. 1 e 4 |
| 5 | Cabeça⁴ | -5 | Sem RD extra; golpe fulminante aqui usa a Tabela de Golpes Fulminantes na Cabeça |
| — (só mira deliberada) | Olhos | -9 | Veja obs. 2 |
| — (só mira deliberada) | Olhos (através da viseira) | -10 | Como acima; armadura não protege — veja obs. 2 |
| 6 | Braço distante³ (lado do escudo) | -4 | Dano >HT/2 incapacita o braço; excedente é perdido |
| 7 | Mão³ (sorteia esquerda/direita) | -4 | Dano >HT/3 incapacita a mão; excedente é perdido |
| — (só mira deliberada) | Mão do lado do escudo³ | -8 | Como acima |
| 8 | Braço próximo³ (lado da arma) | -2 | Mesma regra do #6 |
| 9-11 | Corpo (tronco) | 0 | Nenhum resultado especial |
| 12 | Perna distante³ | -2 | Dano >HT/2 incapacita a perna; excedente é perdido |
| 13,14 | Perna próxima³ | -2 | Como acima |
| 15,16 | Pé (sorteia direito/esquerdo) | -4 | Dano >HT/3 incapacita o pé; excedente é perdido |
| 17 ou mais | Órgãos vitais (no tronco)⁴ | -3 a -5 | Armas/munição perfurante causam o **triplo** do dano |
| — (só mira deliberada) | Arma (ver Mods. para Ataques) | -3 a -5 | A arma pode cair ou quebrar |

**Notas de rodapé (já confirmadas):**
1. Cérebro atingido: crânio tem RD=2 natural (soma a qualquer armadura/Rijeza) — exceto tiro nos olhos (ignora essa RD) ou na viseira do elmo (ignora RD do elmo E do crânio). Dano residual após a RD do crânio = perda de PV = **4x o dano básico** (qualquer arma). Atordoada se perder >HT/3; nocauteada se >HT/2.
2. >2 dano cega o olho. Perfurante/projétil fino (<2,5cm) atinge o cérebro automaticamente (ainda com a RD do crânio). Com elmo: só perfurante/projétil acerta o olho, com -10 extra no ataque.
3. Distinção "distante/próximo" só existe **se o alvo estiver com escudo** — sem escudo, os dois braços (ou pernas) são igualmente difíceis de atingir (-2 uniforme); sorteia aleatoriamente qual foi atingido.
4. Golpe em cabeça/cérebro, ou golpe **contundente** em órgãos vitais: vítima testa HT ou fica Nocauteada. Se a falha for por exatamente 1 (mirando cabeça/cérebro com arma de balanço, ou órgãos vitais com perfurante/bala), o golpe na verdade acertou o tronco.

Notas complementares já capturadas:
- Acerto na **área do cérebro**: RD do crânio (=2) soma-se a qualquer armadura/Rijeza; olhos e viseira de elmo ignoram essa RD extra. Dano restante após RD do crânio = perda de PV igual a **4x o dano básico** (qualquer tipo de arma). Atordoado se perder >HT/3; nocauteado se >HT/2.
- **Olhos:** >2 dano cega o olho. Perfurante/projétil fino (<2,5cm) atinge o cérebro automaticamente (com a RD do crânio). Com elmo: só perfurante/projétil acerta o olho, com -10 no ataque.
- Tabela distingue braço/mão esquerdo vs direito **só se há escudo** (o braço sem escudo é mais exposto); sem escudo, sorteia aleatoriamente qual lado.
- Golpe em cabeça/cérebro, ou golpe contundente em órgãos vitais: vítima testa HT ou fica Nocauteada; falhar por só 1 nesse teste (quando mirando cabeça/cérebro com arma de balanço, ou órgãos vitais com perfurante/bala) = na verdade acertou o tronco.

---

## Reações dos NPCs — Guia de Uso (complementa a Tabela de Reações)

Teste de Reação = 3d6 + modificadores; quanto maior, melhor a reação. Deve ser feito **sem o conhecimento dos jogadores**. Usar quando a reação não estiver pré-determinada; não usar (Mestre decide direto) quando o encontro for vital pro enredo — testes de reação servem pra **dramatizar**, não controlar a história.

### Reações Pré-determinadas
O Mestre pode fixar de antemão um modificador (geralmente negativo) pra um tipo de NPC, sem precisar rolar. Ex: uma gangue de rua sempre com -5; um montanhês eremita sempre -3 com qualquer estranho, com **teto de "neutra"** (nunca pode sair melhor que isso, mesmo que o modificador levasse a um resultado melhor). Se uma reação pré-determinada calcularia algo MELHOR que o teto definido, trate como o teto mesmo — não role de novo tentando "melhorar".

### Testes de Reação em uma Segunda Tentativa
Se os jogadores não gostarem do resultado, podem mudar de abordagem e tentar de novo — **exceto se a 1ª tentativa já resultou em luta**. Formas de mudar abordagem: oferecer suborno, fazer oferta melhor, perguntar outra coisa, apresentar informação diferente, usar perícia específica (ver abaixo). Se o Mestre sentir que os PCs estão sendo inconvenientes: **-2 na 2ª tentativa, -4 na 3ª**, e assim por diante (cumulativo). Essa penalidade pode ser evitada esperando um tempo "conveniente" entre tentativas (critério do Mestre).

### Perícias Especiais (substituem o teste de reação bruto)
**Lábia, Sex-Appeal e Manha** podem ser usadas **no lugar** da rolagem de reação normal — teste a perícia em vez de 3d6+modificadores (os mesmos modificadores situacionais se aplicam, só que agora ao NH da perícia). Ver a descrição de cada perícia (já especificadas no capítulo de Perícias) pros detalhes de uso.

**Modificadores gerais:** aparência pessoal/comportamento de quem faz o contato (+); Carisma (+); status social aparente (+); perícia apropriada à situação (ex: Manha no submundo, Burocracia com funcionário público) — perícia em nível de especialista (NH≥20) = chance real de ajudar (ex: Alta Diplomacia = +2 em **qualquer** teste de reação); preconceito racial/nacional (- , varia por cenário); comportamento correto dos jogadores (+1 ou mais se bem feito, -1 a -2 se antagonizar - e o Mestre deve **mostrar** a reação do NPC, não só narrar "vocês complicaram tudo").

### Por tipo de situação:
- **Reação Geral:** usar quando nada mais específico se aplica.
- **Combate Iminente / Verificação de Moral:** usar em qualquer encontro onde luta é possível mas não certa (não em batalha campal já decidida). Também serve pra checar se um NPC perdendo a luta foge/rende-se (resultado Boa+ = fuga/rendição, nunca amizade repentina). Modificadores: +1 a +5 se o grupo parece mais forte; -1 a -5 se parece mais fraco; -2 sem idioma comum; -2 se invadindo território dos NPCs.
- **Transações Comerciais:** ao comprar/vender/empregar/contratar. Preço justo = preço normal local. Regatear: -1/+1 por cada 10% de diferença do preço justo (o pior lado, se o jogador variar a oferta). Nunca reduz abaixo de 50% do preço justo, a menos que o NPC tenha motivo oculto. +1 se o PC tem Comércio em qualquer nível.
- **Pedidos de Ajuda / Pedidos de Informação / Lealdade:** ver efeitos detalhados por faixa de resultado na Tabela de Reações abaixo.

---

## Tabela de Reações (completa — 3d6 + modificadores)

| Resultado | Nível | Reação Geral | Combate Iminente | Transações Comerciais | Pedidos de Ajuda | Pedidos de Informação | Lealdade |
|---|---|---|---|---|---|---|---|
| ≤0 | **Desastrosa** | Odeia, tenta prejudicar ao máximo | Ataca violentamente, sem pedir/dar clemência | Recusa negociar (teste "iminência de combate" -2) | Nega tudo (teste -4; NPC trabalha contra se possível) | Irritação (teste -2) | Odeia o patrão/serve inimigos, trai na 1ª chance |
| 1-3 | **Muito Ruim** | Antipatia, age contra se conveniente | Ataca; só foge se perceber que não tem chance | Pede 3x o preço ou oferece 1/3 | Nega (testa "iminência de combate") | Mentiras maliciosas | Antipatiza, abandona levando o que puder, ou trai |
| 4-6 | **Ruim** | Não se importa, age contra se lucrativo | Ataca a menos que em menor número (foge pra emboscar depois) | Pede o dobro ou oferece metade | Nega, cuida da própria vida | Nega/mente ou cobra recompensa (paga = info correta mas incompleta) | Sem respeito, abandona/trai por pouco, funcionário preguiçoso |
| 7-9 | **Fraca** | Não impressiona; hostil se lucro grande/pouco risco | Desafia/insulta, ataca a menos que em menor número | Pede 120% ou oferece 75% | Nega, mas suborno/apelo/ameaça funciona (-2 no novo teste) | Alega não saber (suborno "refresca a memória") | Acha que trabalha demais/ganha pouco; trai por boa oferta |
| 10-12 | **Neutra** | Ignora tanto quanto possível | Segue seu caminho (recua se já lutando) | Preço de mercado normal | Atende pedido simples; complexo nega (-2 pra tentar de novo) | Responde pedido simples; complexo = resposta vaga | Só mais um emprego; sai só se achar melhor, não trai por pouco |
| 13-15 | **Boa** | Gosta, prestativo dentro do razoável | Respeita/teme; ajuda/info com +1; foge se já lutando | Preço de mercado + info/ajuda voluntária | Atende se razoável, com conselhos | Responde com precisão | Leal, trabalha duro, arrisca-se com você |
| 16-18 | **Muito Boa** | Alta conta, muito gentil | Amistoso; ajuda/info +3; foge/rende-se se já lutando | Aceita oferta a menos que <80%/>150% valor | Atende quase tudo, oferece info voluntária | Detalhada + oferece info relacionada | Trabalha muito, arrisca a vida, prioriza você |
| ≥19 | **Excelente** | Extremamente impressionado, sempre no seu interesse | Extremamente amistoso, pode se juntar; ajuda/info +5; rende-se se já lutando | Aceita a menos que <50%/>200%; oferece ajuda/conselhos | Atende tudo, ajuda extra | Totalmente respondida + esforço extra pra descobrir o resto (chega a oferecer ajuda, teste +2, nunca pior que "Fraca") | Adora você/a causa, prioriza sempre, morreria por você |

---

## Notas de Game Design
- **Golpes Fulminantes, Erros Críticos (normal e arma de fogo), e Golpes na Cabeça são 4 tabelas paralelas de "consequência por resultado de dado"** — mesmo padrão estrutural (3d6 → efeito categórico), reutilizável como um tipo genérico "TabelaDeConsequência" no motor, parametrizada pelos 16 resultados possíveis.
- **A Tabela de Reações é, sem dúvida, a tabela mais referenciada em TODO o conjunto de specs already produzidas** — praticamente todo teste de reação do jogo (comércio, ajuda, combate, lealdade, perícias sociais) remete a ela. Deveria ser uma das primeiras estruturas de dados implementadas no motor.
- ✅ A distribuição de "acerto aleatório por parte do corpo" foi conferida visualmente no PDF original e está completa acima — pendência resolvida.

---

## Próximo arquivo: **Tabelas de Armas** (medievais + modernas/sci-fi) completas.
