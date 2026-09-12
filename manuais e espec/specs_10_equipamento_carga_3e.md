# Especificação Mecânica — Equipamento e Carga
### Fonte: GURPS 3ª Edição — Capítulo 8 completo (págs. físicas 71-77)

---

## Dinheiro e Compra de Equipamento
- Recursos iniciais vêm do módulo de Riqueza (já especificado). Cada aventura/cenário define sua própria lista de equipamentos disponíveis (custo/peso). Itens fora da lista podem ser permitidos pelo Mestre a seu critério ("razoável").
- Recomenda-se sempre reservar uma parte do dinheiro pra despesas diárias.

## Armadura — Defesa Passiva (DP) e Resistência a Dano (RD)

Toda armadura protege de **duas formas independentes**:
- **Defesa Passiva (DP, 1-6):** soma-se à jogada de Defesa Ativa (esquiva/aparar/bloqueio) — representa golpes que "escorregam"/ricocheteiam.
- **Resistência a Dano (RD):** subtraída diretamente do dano de qualquer golpe que acertar.

**Regra de elmo:** armadura completa de placas inclui elmo — mas isso dá -3 em Visão e Audição e -1 no NH efetivo de qualquer perícia de combate enquanto usado. Capacetes de NT≥7 evitam essa penalidade. Luvas/manoplas dão -8 na DX efetiva para trabalho delicado (ex: Arrombamento), mesmo em NT alto.

### Tabela de Armaduras Comuns
| Tipo | NT | DP | RD | Custo | Peso |
|---|---|---|---|---|---|
| Roupa de verão | qualquer | 0 | 0 | $20 | 1 kg |
| Roupa de inverno | qualquer | 0 | 1 | $60 | 2,5 kg |
| Laudel (gambesão) | 1-4 | 1 | 1 | $180 | 7 kg |
| Coura | 1-4 | 1 | 1 | $210 | 5 kg |
| Loriga de couro | 1-4 | 2 | 2 | $350 | 10 kg |
| Cota de malha | 3-4 | 3¹ | 4² | $550 | 22,5 kg |
| Loriga de escamas | 2-4 | 3 | 4 | $750 | 25 kg |
| Armadura mista placa/cota³ | 2-4 | 4 | 5 | $2.000 | 35 kg |
| Armadura de placas³ | 3-4 | 4 | 6 | $4.000 | 45 kg |
| Armadura de placas reforçada³ | 3-4 | 4 | 7 | $6.000 | 55 kg |
| Colete de campanha⁴ | 6 | 2 | 3 | $220 | 8,5 kg |
| Kevlar leve⁴ | 7 | 2¹ | 4² | $220 | 2,5 kg |
| Kevlar pesado⁴ | 7 | 2¹ | 12² | $420 | 4,5 kg |
| Colete à prova de balas | 7+ | 4 | 15 | $270 | 11 kg |
| Reflec⁵ | 8-9 | 6 | 2 | $320 | 2 kg |
| Blindagem individual | 8+ | 6 | 25 | $1.520 | 16 kg |
| Armadura de combate reforçada | 9+ | 6 | 50 | $2.520 | 36 kg |

¹DP 1 vs. perfuração (menor que o valor normal). ²RD 2 (ou 12, no kevlar pesado) vs. perfuração. ³Todas as perícias de combate -1 (elmo); Visão/Audição -3. ⁴Protege só o tronco. ⁵Só protege contra laser (DP3/RD0 vs. armas sônicas; nenhuma proteção contra outros tipos).

**Sobreposição de armaduras:**
- Cota de malha exige laudel por baixo (já incluso no preço da cota completa); sem o laudel, DP/RD ficam em 3/1 (mas RD1 vs. perfurante).
- Armadura de placas/loriga de couro/colete de campanha podem usar laudel/coura por baixo: +peso, RD +1, **sem alterar a DP**.
- Cota de malha por baixo de armadura de placas: RD +2, mas peso proibitivo pra maioria dos personagens.
- "Reflec" (NT8-9) usa-se por cima de tudo; qualquer ataque atravessa o Reflec antes de afetar a armadura de baixo.
- **Regra geral:** a camada mais interna de armaduras sobrepostas aumenta a RD, nunca a DP.
- Cada armadura "completa" já inclui roupas leves por baixo (não soma peso/custo à parte).

## Sistema de Dano de Armas

### Tipos de Golpe
Dois tipos principais: **Golpe de Ponta (GDP)** e **Golpe em Balanço**. Balanço multiplica a força (efeito alavanca) e por isso causa mais dano que ponta com a mesma arma.

### Tabela de Dano Básico por Força (ST)
| ST | Golpe de Ponta | Balanço |
|---|---|---|
| ≤4 | 0 | 0 |
| 5 | 1D-5 | 1D-5 |
| 6 | 1D-4 | 1D-4 |
| 7 | 1D-3 | 1D-3 |
| 8 | 1D-3 | 1D-2 |
| 9 | 1D-2 | 1D-1 |
| 10 | 1D-2 | 1D |
| 11 | 1D-1 | 1D+1 |
| 12 | 1D-1 | 1D+2 |
| 13 | 1D | 2D-1 |
| 14 | 1D | 2D |
| 15 | 1D+1 | 2D+1 |
| 16 | 1D+1 | 2D+2 |
| 17 | 1D+2 | 3D-1 |
| 18 | 1D+2 | 3D |
| 19 | 2D-1 | 3D+1 |
| 20 | 2D-1 | 3D+2 |
*(progressão continua no mesmo padrão acima de 20)*

**Regras de arredondamento/mínimo:** dano com arma cortante/perfurante/bala = **mínimo 1 ponto**, mesmo que o cálculo dê zero ou negativo. Dano de arma contundente **pode ser 0**.

Cada arma soma/subtrai um modificador fixo ao dano básico do tipo de golpe correspondente (ex: Montante = Balanço+1). Algumas armas têm **Dano Máximo (DM)** — teto que não é superado nem com ST maior.

### Tipos de Dano e Bônus (só se o dano ultrapassar a armadura/RD)
| Tipo | Exemplos | Bônus |
|---|---|---|
| Contusão | punho, clava | Sem bônus |
| Corte | espada, machado | **+50%** (arred. baixo) no dano que passar da armadura |
| Perfuração | lança, flecha, faca | **Dobra** o dano que passar da armadura |

Balas: dano dividido por dois ao invés de multiplicado (atravessam sem deformar); balas Dum-Dum tratadas como munição perfurante (dano básico muito alto).

### Qualidade da Arma (multiplicadores de preço/dano)
| Qualidade | Espadas/lâminas | Machados/hastes/perfurantes | Maças/contusão | Custo |
|---|---|---|---|---|
| Barata | -0 dano, 2/3 chance de quebrar aparando golpe pesado | rara nessa qualidade | — | 40% do preço |
| Boa (padrão) | 1/3 chance de quebrar | preço normal | preço normal | 100% |
| Superior | +1 dano, 1/6 chance de quebrar | +1 dano | maior resistência, sem dano extra | 4x (lâminas) / 10x (haste/perf.) / 3x (contusão) |
| Altíssima | +2 dano, nunca quebra | rara nessa qualidade | — | 20x+ |

Arcos/bestas de qualidade superior: alcance +20%, custo 4x. Armas de fogo/feixe de qualidade superior: mais precisas/bonitas, sem dano/alcance extra. Armas de fogo baratas: 60% do preço, -1 a -10 em Precisão, mais chance de defeito.

### Força Mínima
Muitas armas de baixo NT (e algumas de alto) têm ST mínima. Usar abaixo do mínimo: -1 no NH por ponto de ST faltante + 1 Fadiga extra ao fim de cada luta.

### Armas Improvisadas
Mestre escolhe a arma "real" mais parecida pra servir de modelo; se a improvisada for pior, reduz o NH efetivo e/ou o dano.

## Escudos
| Tipo | DP | Custo | Peso | Dano (aguenta antes de quebrar) |
|---|---|---|---|---|
| Improvisado | 1 ou 2 | — | varia | varia |
| Broquel | 1 | $25 | 1 kg | 5/20 |
| Pequeno | 2 | $40 | 4 kg | 5/30 |
| Médio | 3 | $60 | 7 kg | 7/40 |
| Grande | 4 | $90 | 12 kg | 9/60 |
| De Força (NT11+) | 4 | $1.500 | 200g | — |

Escudo **não tem RD** — só ajuda a não ser atingido (DP passiva + Bloqueio ativo). Sem perícia Escudo: pré-definido DX-4 (escudo improvisado). Não é possível usar arma de 2 mãos com escudo. Escudo grande: -2 NH da arma e -1 no Aparar. Qualquer escudo, a partir do 2º turno em combate corpo-a-corpo, subtrai sua DP de todas as jogadas de defesa/testes de DX em combate próximo.

---

## Sistema de Carga (Encumbrance)

**Carga = peso total carregado ÷ ST**, em faixas:

| Nível de Carga | Peso máximo | Penalidade no Deslocamento |
|---|---|---|
| Nenhuma (0) | até 1×ST | 0 |
| Leve (1) | até 2×ST | -1 |
| Média (2) | até 3×ST | -2 |
| Pesada (3) | até 6×ST | -3 |
| Muito Pesada (4) | até 10×ST | -4 |
| *(limite absoluto)* | 15×ST | Impossível carregar mais que isso |

*(Carregar entre 10x e 15x ST só é possível por 1-2 metros de cada vez.)*

### Tabela de Referência (kg por nível de Carga, ST 6-20)
| ST | Nenhuma | Leve | Média | Pesada | Muito Pesada |
|---|---|---|---|---|---|
| 6 | 6 | 12 | 18 | 36 | 60 |
| 7 | 7 | 14 | 21 | 42 | 70 |
| 8 | 8 | 16 | 24 | 48 | 80 |
| 9 | 9 | 18 | 27 | 54 | 90 |
| 10 | 10 | 20 | 30 | 60 | 100 |
| 11 | 11 | 22 | 33 | 66 | 110 |
| 12 | 12 | 24 | 36 | 72 | 120 |
| 13 | 13 | 26 | 39 | 78 | 130 |
| 14 | 14 | 28 | 42 | 84 | 140 |
| 15 | 15 | 30 | 45 | 90 | 150 |
| 16 | 16 | 32 | 48 | 96 | 160 |
| 17 | 17 | 34 | 51 | 102 | 170 |
| 18 | 18 | 36 | 54 | 108 | 180 |
| 19 | 19 | 38 | 57 | 114 | 190 |
| 20 | 20 | 40 | 60 | 120 | 200 |
*(fórmula linear: multiplicar ST pelo fator de cada coluna — 1x/2x/3x/6x/10x)*

### Deslocamento (Move)
`Deslocamento = floor(Velocidade Básica) - penalidade de Carga`

- Com a perícia Corrida: soma-se 1/8 do NH em Corrida à Velocidade **só pra esse cálculo** (Corrida não muda a Velocidade Básica "de verdade", só o Deslocamento).
- Deslocamento nunca chega a zero, exceto inconsciente/sem pernas/tentando erguer >15×ST.
- **Deslocamento controla:** (1) velocidade de movimento; (2) ordem de ação na sequência de combate "realista"; (3) o valor da **Esquiva** (Defesa Ativa) — quanto menos peso carregado, mais rápida a esquiva.

---

## Notas de Game Design
- **Duas fórmulas de dano por tipo de arma** (Corte +50% pós-armadura, Perfurante x2 pós-armadura, Contusão sem bônus) — motor deve calcular RD primeiro, depois aplicar o multiplicador ao resíduo, nunca ao dano bruto.
- **Carga é uma fórmula pura de ST** (múltiplos fixos: 1x/2x/3x/6x/10x/15x) — fácil de implementar como função em vez de tabela fixa (a tabela é só uma conveniência de leitura).
- **Qualidade de arma é um multiplicador modular** (custo ×0,4/×1/×4 ou ×10/×20 + bônus de dano fixo +0/+1/+2) — pode ser modelado como um enum de qualidade aplicado sobre qualquer arma-base, em vez de linhas de tabela duplicadas por qualidade.
- Este capítulo antecipa o **Sistema Básico de Combate** (cap. 13) e o **Avançado** (cap. 14), ainda não processados — vários termos aqui (Aparar, Bloqueio, Esquiva, Sequência de Combate "realista") serão detalhados lá.

---

## Próximo lote: Capítulo 9 — Completando seu Personagem (págs. 78+).
