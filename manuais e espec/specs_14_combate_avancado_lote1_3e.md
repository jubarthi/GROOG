# Especificação Mecânica — Sistema Avançado de Combate, Lote 1: Movimento
### Fonte: GURPS 3ª Edição — Capítulo 14, primeira parte (págs. físicas 102-108)
### O capítulo tem 5 partes: Movimento, Ponto de Impacto, Combate de Perto, Armas de Longo Alcance, Situações Especiais (24 págs. no total — vai levar vários lotes)

> Nota de escopo: boa parte deste capítulo pressupõe um mapa hexagonal físico (facing, direção, hexágonos frontais/laterais). Numa implementação digital, a interface pode automatizar bastante disso (o jogador só clica pra onde quer ir/atacar) — mas os **números e regras de custo** abaixo continuam necessários pro motor calcular corretamente.

---

## Alcance de Armas de Mão
| Alcance | Hexágonos atingíveis |
|---|---|
| Curto | Só o próprio hexágono (Combate de Perto) |
| 1 metro | Os 3 hexágonos frontais |
| 2 metros | Hexágonos "2" |
| 3 metros | Hexágonos "3" |

Armas com múltiplos alcances (cassetete=curto+1m; lança=1 ou 2m; armas de haste perfurantes=1,2 ou 3m) exigem **mudar a empunhadura** (1 turno extra) pra trocar de alcance. A maioria das armas "longas" (2+ alcances) precisa ser preparada de novo ao mudar de alcance.

## Direção e Mudança de Direção
Cada personagem ocupa 1 hexágono e tem uma direção (frente/direita/esquerda/trás). Só se ataca pra frente (exceto Molinete, ver abaixo). Mudar de direção: **1 ponto de movimento por lado de hexágono** virado (180° = 3 pontos). Se usou ≤metade do Deslocamento no turno, pode virar pra qualquer direção no fim do movimento; se usou mais da metade, só pode virar 1 lado de hexágono.

## Custos em Pontos de Movimento (só na manobra Deslocamento)
| Ação | Custo |
|---|---|
| Mover pra frente | 1 ponto/hex |
| Mover lateral/pra trás | 2 pontos/hex |
| Mudar de direção (por lado de hexágono) | +1 ponto |
| Obstrução pequena (corpo/pessoa no hex) | +1 |
| Obstrução grande (vários corpos) | precisa contornar ou escalar |
| Piso ruim (lama, cascalho, etc.) | +1, +2 ou mais (critério do Mestre) |
| Escada (subir ou descer) | dobro |
| Água rasa (30cm) | dobro |
| Água funda | reduz a 1 hex/turno; teste de DX-Carga contra correnteza forte (falha=cai, arrasta 3m rio abaixo, efeitos de afogamento) |
| Agachado | +50% no custo |
| Ajoelhado | +2 |
| Rastejando | +2 |
| Deitado | só 1 hex/turno (rastejando/rolando) |
| Sentado | não pode se mover |

Hex obstruído ou piso ruim: **-2 em qualquer ataque** feito a partir dali.

**Bônus de corrida:** correndo em linha reta por 2+ turnos seguidos (terreno bom), a partir do 2º turno ganha +1m/turno (perde o bônus se desviar, retoma após 1 turno em linha reta de novo).

## Manobras (mesmas 10 do Sistema Básico, todas com componente de movimento)

| Manobra | Movimento + Ataque |
|---|---|
| **Mudança de Posição** | Não pode se mover nesse turno. Deitado↔em pé leva 2 turnos (passa por ajoelhado). Agachar não gasta manobra (grátis no início do turno, se não moveu; não pode agachar no fim do movimento). |
| **Apontar** | Pode mudar de direção antes de mirar; se mover, limita o bônus de mira (max 2m ou metade do Deslocamento). -4 sem apontar (a menos que NH≥TR da arma). +1/turno de mira, até +3. Deitado/apoiado: +1 extra (não com Tiro Rápido nem se movendo). |
| **Avançar e Preparar** | Move 1 hex antes ou depois de sacar/preparar arma. Pode receber arma de alguém a até 1 hex (não simultâneo). |
| **Avançar e Atacar** | Move 1 hex (qualquer direção) + ataca. Pode atacar "através" de aliado (sem penalidade, arma 2-3m) ou de inimigo (-4). Sem penalidade cruzando linha de hex desocupado. |
| **Ataque Total** | Gira no lugar ou avança até 2 hex (ou metade do Deslocamento, o maior). Ignora corpos caídos e apoio ruim. Não muda direção no fim. As 4 opções já especificadas no Sistema Básico. Sem defesa ativa até o próximo turno. |
| **Avançar e Fintar** | Move 1 hex + finta (regras do Sistema Básico, +detalhe: inválida se não puder ver o alvo; perdida se perder o alvo de vista; vale por 1 rodada, aplica-se aos 2 ataques se fintar+ataque total). |
| **Avançar e Aguardar** | Move 1 hex ou fica parado; ataca quando inimigo entrar no alcance (arma mais longa golpeia primeiro; Disputa de Habilidades se armas iguais). Não obrigado a atacar o primeiro que aparecer. Múltiplos "Aguardando": resolve um ataque por completo antes do próximo. |
| **Defesa Total** | Move 1 hex + só defende (regras do Sistema Básico). |
| **Concentrar** | Move 1 hex + concentra (magia/psi). Defender quebra a concentração a menos que passe em IQ-3. |
| **Ação Demorada** | Genérica p/ ações >1s — ver tabela de tempos abaixo. Só Esquiva é defesa legal (padrão). |

### Tabela de Tempos — Ações Comuns
| Ação | Tempo |
|---|---|
| Apanhar objeto pesado (peso>ST) | 2s |
| Abrir caixa/livro/pasta | 1s |
| Achar objeto perdido (não escondido) | 2d s |
| Achar algo no bolso | 1d s |
| Escrever bilhete curto | 5s/frase |
| Ler bilhete curto | 2s/frase |
| Engolir comprimido/poção | 2s |
| Acender fósforo/vela/tocha | 2s |
| Guardar arma na bainha / algo no bolso | 2s |
| Trocar de roupa | 1min |
| Revistar pessoa minuciosamente | 1min |
| Vestir traje de combate moderno | 5min |
| Vestir armadura completa/traje ultra-moderno | 10min |

**Preparação de arma — detalhes adicionais:**
- Arma de haste (3m alcance): 2 turnos pra preparar (ou 1 turno pra repreparar após golpe de ponta; balanço demora mais).
- Mudança de empunhadura (trocar alcance 1↔2↔3m): +1 turno.
- Queda/atordoamento desprepara armas que precisam repreparar.
- Embainhar: 2 turnos.
- **ST alta acelera a preparação:** ST 5 acima do mínimo da arma = -1 turno pra repreparar (ataca todo turno com machado, ou turnos alternados com arma de haste); ST 10 acima = ataca todo turno mesmo com arma de haste. Não vale pra bestas (só ST+5 = -1 turno de engatilhamento).
- Recarregar besta/arco = múltiplas manobras Preparar em sequência (anunciar "engatilhando, 1 segundo... 2 segundos... preparando o virote... preparando a besta" = 4 segundos, dispara no 5º).
- Pode defender (Esquiva/Aparar/Bloqueio) enquanto prepara arma de mão; **não** pode Aparar/Bloquear enquanto recarrega arma de projétil (só Esquiva, e esquivar reinicia o processo de recarga).
- Preparar escudo do chão/costas: turnos = valor da própria DP do escudo.
- Apanhar algo do chão: 2 turnos (ajoelha, pega e levanta); arma balanceada já sai preparada, desbalanceada não.

### Ataque Total — Golpe Molinete
Ataque contra hex lateral/traseiro. Pior entre: -5 no NH, teto de sucesso=9, ou penalidade de escuridão vigente. Sem alvo em parte específica do corpo (aleatório se usando Ponto de Impacto). Só contra inimigo a 1 hex. Visão Periférica: hexes laterais contam como frontais (não é Molinete); só o hex esquerdo ainda seria Molinete (a menos que arma de 2 mãos).

### Projetar (Knockback)
Todo golpe contundente/cortante/bala com **dano completo ≥8** empurra o alvo 1 hex por cada 8 pontos completos de dano (calculado ANTES de descontar RD — a RD protege da lesão, não do impacto). Alvo projetado: teste de DX pra não cair. Para se atingir obstáculo grande, para ali (avalia dano de colisão como arremesso). **Projetar com Encontrão:** se um dos lutadores cai e o outro fica em pé, Disputa Rápida de FOR; perdedor é projetado 1 hex por cada 2 pontos de margem perdida (mín. 1 hex), até parar em obstrução; quem colide precisa testar ST+3 ou DX+3 (o melhor) pra não cair também. Máximo 2 hex de "ricochete" pra quem causou o encontrão.

## Defesas Ativas (acréscimos do Sistema Avançado)
- **Esquiva** = Deslocamento (animal: metade do Deslocamento ou metade do DX, o maior, máx. 10). **Impossível esquivar ataque vindo do hex de trás.** -2 contra ataque de hex lateral. Impossível esquivar arma de longo alcance disparada por inimigo fora do campo de visão. Sem limite de usos/rodada. **Esquiva Acrobática** (com perícia Acrobacia, sem pré-definido): sucesso=+1 na Esquiva; falha=-2.
- **Bloqueio** = floor(NH Escudo ÷2). Só bloqueia ataques dos hexes frontais ou lateral do lado do escudo (esquerdo pra destros); -2 contra ataque lateral. Bloqueia arremesso de hex lateral, não projétil. 1x/rodada (2x com Defesa Total).
- **Aparar** = floor(NH arma ÷2), ou **2/3** do NH em Esgrima/Bastão.

**Defesas Passivas:** funcionam igual ao Sistema Básico, mas armadura pode variar DP por parte do corpo (ver Tabela de Armas). Escudo só protege ataques de frente/lado do escudo; deitado protege de tudo (a menos que "em cima" dele); nas costas = DP normal -1, só contra ataques de trás.

**Ataque pelas costas de verdade** (atacante começa na frente, corre pra trás da vítima só pela velocidade): sem defesa ativa nenhuma (vítima não sabe que vem). Se a vítima perceber o movimento, trata como ataque lateral (-2 na defesa).

---

## Regra Alternativa — Combates Mais Rápidos
Trata ataque/defesa como Disputa Rápida de Habilidades: se o atacante acerta, o defensor precisa de sucesso com margem **igual ou maior** pra se defender. Acelera o jogo, mas favorece muito lutadores experientes contra novatos.

---

## Notas de Game Design
- **Custos de movimento em hexágono são só aritmética simples** (1/2/+1/dobro) — fácil de modelar como função de custo por tile, reaproveitando para qualquer grid futuro.
- **A cadeia de preparação de armas (Preparar → Preparar → Atacar)** para armas complexas (besta, arma de haste) precisa de uma máquina de estados no motor (estado "preparando: X de Y segundos"), não só um flag booleano preparado/despreparado.
- **Molinete e Projetar são efeitos colaterais de geometria** (hex lateral/traseiro, distância de empurrão por dano) — dependem de saber a posição relativa de atacante/alvo, o que exige que o motor rastreie hex+direção de cada combatente, não só "quem está lutando com quem".

---

## Próximo lote: continuação do capítulo — **Ponto de Impacto** (localização de acerto) e **Combate de Perto** (págs. 109-113).
