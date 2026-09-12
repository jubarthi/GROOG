# Especificação Mecânica — Sistema Avançado de Combate, Lote 4 (final): Situações Especiais
### Fonte: GURPS 3ª Edição — Capítulo 14, conclusão (págs. físicas 118-125)
### ✅ Fecha o Capítulo 14 por completo

---

## Projétil Extraviado / Lençol / Ações de Tocaia Reflexas
- **Bloqueado/Aparado:** arma/projétil cai no chão, sem chance de atingir outra pessoa.
- **Esquivado:** o projétil continua e pode atingir outra pessoa atrás do alvo (mesmo processo de "Atingindo o Alvo Errado", já especificado, começando pelo mais próximo do outro lado).
- **Lençol (granadas/trajetória parabólica):** mirar um hex; se errar, o objeto cai a X metros do alvo (X = pontos de margem de erro, ou metade da distância ao alvo, o menor — arredondar pra cima), na direção determinada por 1d (direção #1 = a que você está olhando, sentido horário a cada +1).
- **Ação Reflexa:** manobra Aguardar pode ser usada para qualquer ação pré-planejada de 1 movimento só (ex: "se ver o inimigo, puxa a corda"). Regra usada pra situações de "faca no pescoço" (refém).

## Contar os Tiros (opcional)
Anuncia quantos tiros quer disparar + testa a perícia. CdT≤12: sucesso = exatamente os tiros pedidos. CdT>12: sucesso = tiros pedidos ±2 (mín. 1); falha = disparou CdT tiros (se houver munição).

## Atordoadores (armas sônicas não-letais, não funcionam no vácuo)
Manual: alvo testa VIG-3 (ou VIG puro se ≥12m) pra resistir; +1 no teste por cada 5 pontos de RD. Membro atingido = incapacitado por (20-VIG) minutos. Cabeça/tronco = inconsciente pelo mesmo tempo. Falha crítica = triplica a duração. Fuzil atordoador: testa VIG-6 (ou VIG-3 se >300m).

## Armas de Fogo — Regras Gerais

### Armas Tiro-a-Tiro
- Primitivas (NT4-início5): carregam por cano/câmara. Mecha=60+s; pederneira/percussão lisa=20+s; raiada=30+s. CdT expressa como "1/60+" etc. Precisa teste de perícia pra municiar corretamente.
- NT5-7 com CdT=1: só 1 disparo/turno, depois recarrega.
- CdT "3~": até 3 disparos/turno puxando o gatilho. Sem recuo (laser): sem penalidade extra. Com recuo: RCO (da Tabela de Armas) subtraído a cada tiro adicional no mesmo segundo; **dobra se ST < mínima da arma**.

### Armas Automáticas
Disparam enquanto o gatilho está apertado (rajada). Muitas (todas NT8+) trocam modo tiro-a-tiro↔automático em 1 turno.

**Cadência de Tiro (CdT):** nº de tiros/turno em automático. Ação que usa <½ Deslocamento antes de atirar: rajada completa (CdT). Ação que usa ≥½ Deslocamento: só ½ CdT.

**Tiros certeiros numa rajada:** agrupa em blocos de até 4 tiros; 1 teste de perícia por bloco (modificado pelo RCO). Tabela (linhas=tiros no grupo, colunas=margem do teste):
| Tiros no grupo | Falhou por 1+ | 0 (exato) | +1 | +2 | +3 | +4 | +5 ou mais |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 |
| 2 | 0 | 1 | 1 | 1 | 1 | 1 | 2 |
| 3 | 1 | 1 | 1 | 1 | 2 | 2 | 3 |
| 4 | 1 | 2 | 2 | 3 | 3 | 3 | 4 |

Golpe Fulminante no teste do grupo = todos os tiros acertam (dano de cada = Tabela de Golpes Fulminantes). Erro Crítico = consulta Tabela de Erros Críticos.

**Dano por rajada:** cada tiro tem chance independente, dano não cumulativo — RD/DP aplicadas por tiro separadamente. **Exceção laser automático:** soma o dano de todos os tiros que acertaram num único ataque (ex: 8 tiros de 2D, 5 acertam → 1 ataque de 10D).

**Recuo de rajada:** cada tiro da rajada causa o mesmo recuo que causaria sozinho — rajada longa = mais difícil de controlar. RCO é redutor cumulativo por grupo de 4 (ou grupo parcial) após o 1º: -1→-2→-3... (ou -2→-4→-6...). Continua acumulando mesmo em turnos seguintes da mesma rajada. NT≤7: RCO mínimo -1 melhor caso. NT8-9: algumas armas RCO=0. NT≥10: quase todas RCO=0. **RCO dobra se NH<12; dobra se ST<mínima; ambos = quadruplica.** Coronha removida/rebatida: -1 adicional ao RCO (a menos que já seja 0). Disparar com 1 mão sem apoio: dobra o redutor de RCO.

**Apontando rajadas sucessivas ("efeito mangueira"):** pode ajustar a mira olhando onde os tiros caem (teste de Visão, a critério do Mestre); após 1 grupo de 4, pode somar Precisão; +1/grupo adicional até +3. Funciona mesmo em movimento se puder ver o alvo (mas exige teste de DX ou Visão, o pior, por turno em terreno não-plano, senão cai).

### Fontes de Energia
Armas futuristas: célula tipo B ($30, 0,5kg) ou C ($100, 250g), notação "40/C" = 40 tiros por célula C.

### Escudos — Dano e Destruição (regra opcional)
Margem de sucesso na defesa ≤ DP do escudo = golpe atingiu o escudo (não você), mas pode danificá-lo.

| Escudo | DP | Dano (penetra/destrói) |
|---|---|---|
| Improvisado | 1-2 | varia |
| Broquel | 1 | 5/20 |
| Pequeno | 2 | 5/30 |
| Médio | 3 | 7/40 |
| Grande | 4 | 9/60 |

Escudo de madeira: RD inerente 3 (subtrai antes de avaliar dano ao escudo). Cortante/contundente que penetra = escudo inutilizado, você não é atingido. Perfurante que penetra = você é atingido com dano reduzido pelos pontos absorvidos pelo escudo +3 (RD). Escudo de bronze (NT2-4, raro): 4x custo, 3x peso, dobro de dano suportado, RD6. Escudos NT7 (Lexan): mesmos números do de madeira, metade do peso. Escudos de Força (NT11+): imunes a dano.

### Coquetéis Molotov / Frascos de Óleo (NT4+; frasco de óleo mágico em fantasia)
1s pra preparar (se pendurado no cinto) + acender com tocha + mira (opcional) + 1s pra arremessar. Sempre quebra ao atingir o chão; 5/6 de chance do pavio continuar aceso e inflamar. Alvo pode Bloquear ou Esquivar (nunca Aparar). Contra armadura de placas/rígida: sempre quebra. Sem armadura: 50% de ricochetear pro hex adjacente. Ao quebrar contra escudo/ser vivo: 4/6 de inflamar. Fogo dura 1 minuto. Estar em chamas: 1d-1 dano/turno (Rijeza e armadura ajudam). Escudo em chamas continua utilizável, mas descartável depois (perde 1PV/turno se usando regra de dano em escudo). Risco: garrafa no cinto tem 4/6 de quebrar se você cair, ou pode ser alvejada por inimigo (-5 no ataque dele) — nos dois casos, encharca você da cintura pra baixo (pega fogo se entrar em hex em chamas).

## Explosões
**Concussão:** dano contundente completo só no hex de impacto + adjacentes; 1/4 do valor nos 2 hexes seguintes; 1/4 disso nos 2 seguintes (assim por diante). Teste/jogada separada por alvo, dividir pelo fator (4, 16...). Dano <1 é ignorado. Armadura protege normalmente.

**Fragmentação:** raio de risco = 5m × nº de dados do dano de concussão (ex: granada 4D concussão → risco de fragmento em até 20m). DP contra fragmento: +1 por metro de distância da explosão; +1 extra ajoelhado (explosão no chão); +2 deitado; **DP máxima contra fragmento = 15**. Posição não protege contra deslocamento de ar. Dano de fragmento por terreno: 1d-4 (terra comum) a 1d (cascalho). Cargas de fragmentação dedicadas (granadas): sempre 2d, independente do terreno.

## Asfixia (nocautear/matar sem dano direto à HT)
Prender a respiração lutando: VIG turnos sem penalidade. Vítima passiva (teste de Vontade pra não resistir): 4×VIG turnos. Métodos: tapar boca/nariz, sufocar com objeto, comprimir as carótidas — **nenhum causa dano à HT** (mata o cérebro, não o corpo). Precisa vítima imobilizada, ou Disputa de ST por turno. Sem fôlego: -1 Fadiga/turno; Fadiga=ST → desmaia; morre em 4 min independente da HT. Libertar = recupera rápido. **Diferença de Estrangular (pág.112):** aquele causa dano real à HT; asfixiar não, mas os dois podem ser combinados simultaneamente (esmagar traqueia + cortar oxigênio).

## Dominando um Oponente sem Matar
Opções: Desarmar (atacar a arma dele); **Bater de Leve** (declarar dano reduzido antes de rolar, ainda rola o dado normalmente pro valor real dentro do limite); **Uso não-convencional da arma** ("de prancha"/ponta romba = perde bônus de corte/perfuração, mantém dano básico); Imobilizar+amarrar (~1min, precisa corda); Sufocar.

## Ataques de Surpresa e Iniciativa
Reflexos em Combate: nunca fica paralisado; +1 iniciativa pro grupo (+2 se líder, não cumulativo); +6 IQ pra se recuperar de surpresa. Maioria dos animais selvagens já tem essa vantagem.

**Surpresa Total** (defensores nem desconfiavam): 1d segundos paralisados (exceto quem tem Reflexos em Combate). Depois, teste de IQ básico por turno pra se recuperar (sucesso=normal pro resto do combate).

**Surpresa Parcial** (ambos ou um lado esperava problema): líderes rolam 1d pra iniciativa (+2 Reflexos em Combate do líder, ou +1 se outro membro tiver; +1 líder mais inteligente; +1 perícia tática, +2 se NH≥20; grupo sem líder = -2, exceto animais). Quem vence age normal; o outro lado fica atordoado, testando IQ/turno (+1 bônus no 2º turno, +2 no 3º, etc.). Empate = ninguém surpreendido.

## Ataque com Escudo
Teste de NH Escudo pra atacar (só contra hex frontal ou lateral esquerdo). Oponente esquiva/bloqueia normal; -2 se tentar Aparar; armas <1kg não conseguem aparar o golpe de escudo. Dano = GDP/contusão. Escudo com espigões: +1 dano (ainda não conta como perfurante); +2,5kg peso, +$20 custo.

**Arremetida com Escudo:** só com escudo médio/grande — é um Encontrão (já especificado), sucesso derruba o oponente.

## Combate em Massa (>20 combatentes)
Recomenda-se usar o Sistema Básico pra economizar tempo, ou sistemas de batalha em massa de suplementos dedicados. Ordem de ação: usar modo simples/horário. Lado que começa mais perto leva vantagem — seja realista com a distância inicial.

## Truques Sujos
Sem regra fixa — deixar funcionar 1-2x, depois "a notícia se espalhou" (deixa de funcionar). Pode exigir teste de IQ do truque, da vítima, ou Disputa de IQ. Coerência de IQ do personagem importa (IQ 8 não devia bolar truque de gênio).

## Combate em Níveis Diferentes (mesa, escada, etc.)
Arma longa (alcance>1m) "aproxima" o alvo (ex: espadão 2m de alcance, 2m abaixo do oponente = ataca como se estivesse 1m dele) — não há reciprocidade automática pro oponente com arma curta.

| Desnível | Efeito |
|---|---|
| ≤30cm | Ignorar |
| ≤60cm | Ignorar (exceto c/ Ponto de Impacto: -2 pra baixo/+1 cabeça de quem está acima; +2 pés/-2 cabeça de quem está abaixo) |
| ≤1m | Como acima + defesa: -1 pra quem está embaixo, +1 pra quem está em cima |
| ≤1,30m | Defesa -2/+2; quem está em cima não atinge pés/pernas |
| ≤1,60m | Quem está embaixo não atinge a cabeça de cima, e vice-versa (pernas); defesa -3/+3 |
| ≤2m | Só cabeça (de cima pra baixo) ou só pés/pernas (de baixo pra cima) atingíveis; defesa -3 embaixo/+3 em cima |
| >2m | Combate impossível, exceto postura especial (debruçar-se = equivale a se aproximar 1m) |

Referências de altura: escada=20cm/degrau; cadeira=50cm; mesa comum=<1m; balcão de loja=1,20m; capô de carro=1m; teto de carro=>1,20m.

## Ataque de Cima (emboscada de ponto elevado)
Disputa Furtividade vs. Visão pra funcionar. Vítima andando numa trilha: -2 na Visão pra notar tocaia acima (a menos que declare estar olhando pra cima = +2). Visão Periférica não ajuda a notar isso. Pode paralisar por surpresa (regra acima). Se percebido a tempo: pode tentar "parar-e-espetar". **Salto sobre a vítima (animais):** dano tanto no atacante quanto na vítima — vítima "amortece a queda": 1d-5/metro (saltos 1-2m), 1d-4/metro (3-4m), etc. Animais adaptados a isso (jaguar): -2/metro no próprio dano sofrido.

## Ataque a Objetos Inanimados
1. Modificadores de tamanho/distância/velocidade normais + **bônus +4** se apontar 1 turno contra objeto imóvel com arma de mão.
2. Jogada de ataque normal (objeto não tem defesa, a menos que seja robô/veículo).
3. Avalia dano normalmente (sem bônus de corte/perfuração — esses só valem contra seres vivos).
4. Subtrai RD do objeto.
5. Resultado reduz os "PV" do objeto; zero = destruído/cortado/quebrado.

Objeto complexo pode ter 2 valores de PV: primeiro inutiliza, segundo destrói de vez (ex: armário de armas RD4, PV 20/50).

### Tabela de RD/PV de Objetos Comuns
| Objeto | RD | PV | Arma ideal |
|---|---|---|---|
| Corda fina (1cm) | 1 | 2 | Qualquer |
| Corda grossa (2cm) | 3 | 6 | Com fio |
| Amarra | 4 | 10 | Com fio |
| Cabo de aço 0,6cm | 2 | 8 | Não-perfurante |
| Cabo de aço 1,2cm | 4 | 16 | Com fio |
| Cabo de aço 2,5cm | 6 | 30 | Machado |
| Haste madeira 2,5cm | 1 | 3 | Qualquer |
| Haste madeira 5cm | 3 | 8 | Não-perfurante |
| Haste madeira 7,5cm | 4 | 12 | Com fio |
| Haste madeira 10cm | 6 | 20 | Machado |
| Haste madeira 20cm | 6 | 50 | Machado |
| Barra ferro/bronze 1,2cm | 1 | 4 | Não-perfurante |
| Barra ferro/bronze 2,5cm | 3 | 20 | Machado/martelo |
| Barra de aço 1,2cm | 2 | 6 | Machado/martelo |
| Barra de aço 2,5cm | 6 | 25 | Machado |
| Barra de aço 5cm | 8 | 80 | Machado |
| Aglomerado 12mm | 1 | 5 | Não-perfurante |
| Compensado 12mm | 3 | 15 | Não-perfurante |
| Prancha 25mm | 2 | 10 | Qualquer |
| Prancha 50mm | 4 | 20 | Não-perfurante |
| Prancha 80mm | 6 | 30 | Machado/martelo/clava |
| Placa ferro/bronze 3mm | 3 | 6 | Não-perfurante |
| Placa ferro/bronze 6mm | 4 | 12 | Machado/martelo/clava |
| Placa ferro 12mm | 6 | 25 | Machado/martelo/clava |
| Muro de ferro 25mm | 8 | 50 | Machado/martelo/clava |
| Placa de aço 3mm | 4 | 10 | Não-perfurante |
| Placa de aço 6mm | 7 | 40 | Machado/martelo |
| Placa de aço 12mm | 6 | 20 | Machado/martelo/clava |
| Placa de aço 25mm | 8 | 80 | Machado |
| Muro de tijolo 8cm | 6 | 40 | Machado/martelo/clava |
| Muro de concreto 15cm | 4 | 60 | Machado/martelo |
| Muro de pedra 15cm | 8 | 90 | Machado/martelo |
| Muro de pedra 30cm | 8 | 180 | Machado/martelo |

---

## Notas de Game Design
- **Armas automáticas exigem um sistema de "grupos de tiro"** (blocos de até 4) com sua própria tabela de acerto — mais complexo que o ciclo padrão ataque/defesa/dano; merece uma função dedicada no motor.
- **RCO acumulativo por rajada, persistindo entre turnos**, precisa de estado rastreado por arma/personagem durante o combate (não é só um modificador estático).
- **Objetos inanimados usam RD/PV em vez de RD/PV+bônus de tipo de dano** — o motor de dano já existente (personagens) pode ser reaproveitado só removendo os multiplicadores de corte/perfuração.
- **Combate em níveis diferentes** é puramente geométrico (diferença de altura → tabela de bônus/penalidade) — fácil de automatizar numa implementação com mapas 3D ou elevação simples.

---

## ✅ Sistema Avançado de Combate (Capítulo 14) COMPLETO — resumo: Movimento, Ponto de Impacto, Combate de Perto, Armas de Longo Alcance, Situações Especiais.

## Próximo capítulo do livro: **Ferimentos, Doenças e Fadiga** (pág. 126+) — fecha as regras de morte, cura e recuperação que ficaram pendentes desde o Sistema Básico.
