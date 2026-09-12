# PADRÃO TÉCNICO GROOG — MÓDULO BÁSICO OFICIAL
### Especificação Técnica de Regras, Biomecânica e Simulação Tática Universal

---

```
===============================================================================
                         SISTEMA OPERACIONAL GROOG
                    Compêndio Técnico e Manual de Regras
===============================================================================
  Versão: 1.0.0-PROD
  Unidade de Tempo Tático: 1 Segundo por Turno
  Unidade de Distância Tática: 1 Metro (1 Jarda) por Hexágono
  Motor de Resolução: 3d6 (Curva Gaussiana de Probabilidade)
  Papéis: Criador (Creator / Árbitro) e Jogadores (Players)
===============================================================================
```

---

# SEÇÃO 1: ESTRUTURAÇÃO DE PAPÉIS E DINÂMICA OPERACIONAL

### 1.1. O Criador (*Creator*)
*   **Função:** Árbitro absoluto das leis físicas e causais do mundo, arquiteto de cenários, administrador de entidades não-jogadoras (NPCs) e gestor do fluxo temporal.
*   **Imparcialidade:** Não joga contra os jogadores; aplica as consequências lógicas das ações dos personagens de acordo com as fórmulas e tabelas deste padrão.
*   **Gestão de Informação:** Conduz rolagens secretas de Percepção e Furtividade para preservar o suspense e a tensão causal.

### 1.2. Os Jogadores (*Players*)
*   **Função:** Agentes livres com agência total sobre seus respectivos personagens.
*   **Ciclo de Ação:** O Criador contextualiza o ambiente sensorialmente $\rightarrow$ O Jogador declara a intenção livremente $\rightarrow$ O sistema/Criador resolve as mecânicas $\rightarrow$ O mundo sofre o impacto causal.

---

# SEÇÃO 2: MOTOR MATEMÁTICO CENTRAL E PROBABILIDADE

```
                             DISTRIBUIÇÃO DE 3d6
  Valor (3d6):  3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
  Prob. (%):  0.5 1.4 2.8 4.6 6.9 9.7 11.6 12.5 12.5 11.6 9.7 6.9 4.6 2.8 1.4 0.5
```

### 2.1. O Teste de Resolução Universal
Toda ação de desfecho incerto é resolvida pela fórmula:

$$\mathbf{3d6 \le NE}$$

Onde o **Nível Efetivo ($\text{NE}$)** é definido por:

$$\mathbf{NE} = \text{Habilidade ou Atributo Base} \pm \text{Modificador de Tarefa} \pm \text{Modificador de Situação/Ambiente} \pm \text{Modificador de Equipamento}$$

### 2.2. Tabela de Probabilidade Cumulativa

| Resultado (3d6) | Chance Exata | Chance Acumulada ($\le X$) | Classificação de Desempenho |
| :--- | :--- | :--- | :--- |
| **3** | 0.46% | 0.46% | Sucesso Crítico Absoluto |
| **4** | 1.39% | 1.85% | Sucesso Crítico Automático |
| **5** | 2.78% | 4.63% | Sucesso Crítico se $\text{NE} \ge 15$ |
| **6** | 4.63% | 9.26% | Sucesso Crítico se $\text{NE} \ge 16$ |
| **7** | 6.94% | 16.20% | Sucesso Ordinário |
| **8** | 9.72% | 25.93% | Sucesso Ordinário |
| **9** | 11.57% | 37.50% | Sucesso Ordinário |
| **10** | 12.50% | 50.00% | Mediana da Capacidade Humana |
| **11** | 12.50% | 62.50% | Limiar de Falha Comum |
| **12** | 11.57% | 74.07% | Falha Ordinária |
| **13** | 9.72% | 83.80% | Falha Ordinária |
| **14** | 6.94% | 90.74% | Falha Ordinária |
| **15** | 4.63% | 95.37% | Falha Ordinária |
| **16** | 2.78% | 98.15% | Falha Ordinária |
| **17** | 1.39% | 99.54% | Falha Crítica se $\text{NE} \le 15$ |
| **18** | 0.46% | 100.00% | Falha Crítica Absoluta |

### 2.3. Margens e Críticos
*   **Margem de Sucesso ($\text{MS}$):** $\text{MS} = \text{NE} - \text{Resultado}$ (se $\text{Resultado} \le \text{NE}$).
*   **Margem de Fracasso ($\text{MF}$):** $\text{MF} = \text{Resultado} - \text{NE}$ (se $\text{Resultado} > \text{NE}$).
*   **Falha Crítica por Margem:** Se $\text{MF} \ge 10$, a falha é considerada **Falha Crítica** independentemente do valor rolado.

### 2.4. Disputas de Habilidade
*   **Disputa Rápida (*Quick Contest*):** Ambos os personagens rolam seus testes simultaneamente. Quem obtiver maior $\text{MS}$ vence. Se ambos falharem, vence quem tiver menor $\text{MF}$.
*   **Disputa Contestada (*Regular Contest*):** Cada participante rola por turno. O confronto prossegue até que um obtenha sucesso e o oponente falhe.

---

# SEÇÃO 3: BIOMECÂNICA E CONSTRUÇÃO DE PERSONAGENS

```
+-------------------------------------------------------------------------------+
|                       ORÇAMENTO DE PONTOS DE PERSONAGEM                       |
+-------------------------------------------------------------------------------+
| Humano Médio / Cidadão Comum  :   25 a 50 pontos                              |
| Aventureiro Iniciante / Recruta:  75 a 100 pontos                             |
| Operador Experiente / Herói   :  150 a 200 pontos                             |
| Elite Lendária / Sobre-humano :  300 a 500+ pontos                            |
+-------------------------------------------------------------------------------+
```

### 3.1. Parâmetros Primários

```
+-----------------------+-------------------+-----------------------------------+
| Parâmetro Primário    | Custo por Ponto   | Impacto Biomecânico               |
+-----------------------+-------------------+-----------------------------------+
| FOR (Força Física)    | +/- 10 pontos     | Dano, Carga, Levantamento, PVs    |
| DES (Destreza Motora) | +/- 20 pontos     | Coordenação, Habilidades, Esquiva |
| INT (Cognição e Razão)| +/- 20 pontos     | Raciocínio, Percepção, Vontade    |
| VIT (Vitalidade/Vigor)| +/- 10 pontos     | Resistência, Cura, Fadiga (PF)    |
+-----------------------+-------------------+-----------------------------------+
```
*Valor base gratuito universal para todos os parâmetros: 10.*

### 3.2. Parâmetros Secundários Derivados (Fórmulas Físicas)

$$\text{Pontos de Vida (PV)} = \text{FOR} \quad (\text{Ajuste: } \pm 2 \text{ pts por PV})$$
$$\text{Pontos de Fadiga (PF)} = \text{VIT} \quad (\text{Ajuste: } \pm 3 \text{ pts por PF})$$
$$\text{Vontade (VON)} = \text{INT} \quad (\text{Ajuste: } \pm 5 \text{ pts por VON})$$
$$\text{Percepção (PER)} = \text{INT} \quad (\text{Ajuste: } \pm 5 \text{ pts por PER})$$
$$\text{Velocidade Básica (VB)} = \frac{\text{DES} + \text{VIT}}{4} \quad (\text{Ajuste: } \pm 5 \text{ pts por } +0.25)$$
$$\text{Deslocamento Básico (DB)} = \lfloor \text{VB} \rfloor \text{ metros/segundo}$$
$$\text{Esquiva Base} = \lfloor \text{VB} \rfloor + 3$$
$$\text{Levantamento Básico (LB)} = \frac{\text{FOR}^2}{2} \text{ kg}$$
$$\text{Erguer com 2 Mãos} = 2 \times \text{LB} \text{ kg}$$
$$\text{Erguer sobre a Cabeça} = 8 \times \text{LB} \text{ kg (Requer 4 segundos de esforço + 1 PF)}$$

### 3.3. Fórmulas de Salto
*   **Salto em Distância (Parado):** $\text{Distância} = (2 \times \text{DB} - 3) \times 0.3 \text{ metros}$ (mínimo $0.5\text{m}$).
*   **Salto em Distância (Com Corrida prévia de 4m):** $\text{Distância} = 2 \times \text{Distância Parado}$.
*   **Salto em Altura (Parado):** $\text{Altura} = \frac{\text{Salto em Distância Parado}}{4} \text{ metros}$.
*   **Salto em Altura (Com Corrida):** $\text{Altura} = \text{Altura Parado} + 0.3 \text{ metros}$.

### 3.4. Níveis de Carga e Degradação de Velocidade

$$\text{Fator de Carga} = \frac{\text{Peso Total dos Equipamentos Carregados}}{\text{LB}}$$

```
Nível de Carga       | Carga Limite Suportada | Deslocamento Efetivo | Penalidade na Esquiva
---------------------+------------------------+----------------------+----------------------
Nenhuma (Carga 0)    | Até 1x LB              | 100% DB              | 0
Leve (Carga 1)       | Até 2x LB              | 80% DB (arred. baixo)| -1
Média (Carga 2)      | Até 3x LB              | 60% DB (arred. baixo)| -2
Pesada (Carga 3)     | Até 6x LB              | 40% DB (arred. baixo)| -3
Muito Pesada (Carga 4)| Até 10x LB            | 20% DB (arred. baixo)| -4
```

### 3.5. Dano Base por Força ($\text{FOR}$)

```
FOR | Dano Golpe (Thr) | Dano Balanço (Sw) | FOR | Dano Golpe (Thr) | Dano Balanço (Sw)
 1  | 1d-6             | 1d-5              | 11  | 1d-1             | 1d+1
 2  | 1d-6             | 1d-5              | 12  | 1d-1             | 1d+2
 3  | 1d-5             | 1d-4              | 13  | 1d               | 2d-1
 4  | 1d-5             | 1d-4              | 14  | 1d               | 2d
 5  | 1d-4             | 1d-3              | 15  | 1d+1             | 2d+1
 6  | 1d-4             | 1d-3              | 16  | 1d+2             | 2d+2
 7  | 1d-3             | 1d-2              | 17  | 1d+2             | 3d-1
 8  | 1d-3             | 1d-2              | 18  | 1d+2             | 3d
 9  | 1d-2             | 1d-1              | 19  | 2d-1             | 3d+1
10  | 1d-2             | 1d                | 20  | 2d-1             | 3d+2
```
*Progressão para $\text{FOR} > 20$: $\text{Thr} = +1\text{d}$ a cada $+10$ de FOR; $\text{Sw} = +1\text{d}$ a cada $+4$ de FOR.*

---

# SEÇÃO 4: SISTEMA DE PERÍCIAS E PROGRESSÃO

```
Nível Relativo ao Atributo | Fácil (F) | Média (M) | Difícil (D) | Muito Difícil (MD)
---------------------------+-----------+-----------+-------------+-------------------
Atributo - 3               |     -     |     -     |      -      | 1 ponto
Atributo - 2               |     -     |     -     | 1 ponto     | 2 pontos
Atributo - 1               |     -     | 1 ponto   | 2 pontos    | 4 pontos
Atributo + 0               | 1 ponto   | 2 pontos  | 4 pontos    | 8 pontos
Atributo + 1               | 2 pontos  | 4 pontos  | 8 pontos    | 12 pontos
Atributo + 2               | 4 pontos  | 8 pontos  | 12 pontos   | 16 pontos
Atributo + 3               | 8 pontos  | 12 pontos | 16 pontos   | 20 pontos
Cada +1 adicional no NE    | +4 pontos | +4 pontos | +4 pontos   | +4 pontos
```

### 4.1. Degradação por Falta de Treino (*Defaults*)
*   **Perícia Fácil:** $\text{Atributo} - 4$
*   **Perícia Média:** $\text{Atributo} - 5$
*   **Perícia Difícil:** $\text{Atributo} - 6$
*   **Perícia Muito Difícil:** Não permite teste sem treinamento prévio.

---

# SEÇÃO 5: VANTAGENS, DESVANTAGENS E AUTOCONTROLE

### 5.1. Mecânica de Autocontrole para Desvantagens Psicológicas
Desvantagens mentais (ex: *Fobias*, *Ira*, *Compulsões*, *Cobiça*) possuem um Número de Autocontrole:
*   **Crítica (Autocontrole 6):** Rola $3\text{d6} \le 6$ para resistir. (Custo da Desvantagem $\times 2.0$).
*   **Severa (Autocontrole 9):** Rola $3\text{d6} \le 9$ para resistir. (Custo da Desvantagem $\times 1.5$).
*   **Padrão (Autocontrole 12):** Rola $3\text{d6} \le 12$ para resistir. (Custo da Desvantagem $\times 1.0$).
*   **Leve (Autocontrole 15):** Rola $3\text{d6} \le 15$ para resistir. (Custo da Desvantagem $\times 0.5$).

---

# SEÇÃO 6: MOTOR DE COMBATE TÁTICO SEGUNDO A SEGUNDO

```
                   FLUXO DO SEGUNDO TÁTICO NO GROOG
                   
 +-----------------------------------------------------------------+
 | 1. DECLARAÇÃO DA MANOBRA DO TURNO                               |
 |    (Ataque, Ataque Total, Defesa Total, Mover, Finta, Mira, etc)|
 +-----------------------------------------------------------------+
                                  |
                                  v
 +-----------------------------------------------------------------+
 | 2. MOVIMENTO PERMITIDO (Em metros conforme a manobra)           |
 +-----------------------------------------------------------------+
                                  |
                                  v
 +-----------------------------------------------------------------+
 | 3. TESTE DE ATAQUE / AÇÃO: 3d6 <= NE                            |
 +-----------------------------------------------------------------+
               |                                     |
           [FALHA]                               [SUCESSO]
               |                                     |
               v                                     v
          Fim do Turno             +-----------------------------------+
                                   | 4. DEFESA ATIVA DO ALVO           |
                                   |    (Esquiva, Aparar ou Bloqueio)  |
                                   |    3d6 <= Nível de Defesa         |
                                   +-----------------------------------+
                                            |                 |
                                        [SUCESSO]          [FALHA]
                                            |                 |
                                            v                 v
                                       Ataque Evitado   +---------------------+
                                                        | 5. RESOLUÇÃO DE     |
                                                        |    DANO E TRAUMA    |
                                                        +---------------------+
```

### 6.1. As 14 Manobras Oficiais de Combate

```
Manobra             | Movimento Permitido     | Ataque Permitido?      | Defesas Ativas Permitidas?
--------------------+-------------------------+------------------------+---------------------------
Ataque              | 1 passo (1 metro)       | 1 ataque com arma pronta| Sim (Todas normais)
Ataque Total        | Metade do DB (frente)   | 1 ataque com bônus:    | NÃO (Defesa = 0 até próx. turno)
                      -> Determinado: +4 no ataque
                      -> Forte: +2 no dano (+1 por dado)
                      -> Duplo: 2 ataques com armas prontas
                      -> Finta: 1 Finta seguida de 1 ataque imediato
Defesa Total        | 1 passo (ou metade DB)  | Não ataca              | Sim (+2 em 1 defesa ou 2 defesas no mesmo golpe)
Mover               | DB total                | Não ataca              | Sim (Todas normais)
Mover e Atacar      | DB total                | 1 ataque (máx NE 9, -4)| Sim (Sem recuo; Esquiva e Bloqueio apenas)
Finta               | 1 passo                 | Disputa de Habilidade  | Sim (Todas normais)
Mirar               | 1 passo                 | Não (trava a mira)     | Sim (Se defender, perde o bônus de mira acumulado)
Avaliar             | 1 passo                 | Não (+1 ataque acúmulo)| Sim (Todas normais)
Preparar            | 1 passo                 | Não (saca/recarrega)   | Sim (Todas normais)
Mudar de Postura    | 0 metros                | Não (muda postura)     | Sim (Todas normais)
Concentrar          | 1 passo                 | Não (foco mental/psi)  | Sim (Teste de VON se tomar dano para não cancelar)
Aguardar            | 1 passo (na ativação)   | Ataque por gatilho     | Sim (Conforme manobra engatilhada)
Não Fazer Nada      | 0 metros                | Não                    | Sim (-4 se atordoado)
```

### 6.2. Defesas Ativas e Fórmulas

$$\text{Esquiva Efetiva} = \text{Esquiva Base} - \text{Penalidade de Carga}$$
$$\text{Aparar} = \lfloor \text{Nível da Habilidade com Arma} / 2 \rfloor + 3 + \text{Bônus Marcial}$$
$$\text{Bloqueio} = \lfloor \text{Nível de Escudo} / 2 \rfloor + 3 + \text{Modificador de Tamanho do Escudo}$$

*   **Manobra de Recuo (*Retreat*):** 1 vez por segundo, ao se defender, recuar 1 metro para trás concede:
    *   $+3$ na Esquiva.
    *   $+1$ no Aparar ou Bloqueio ($+3$ se usar Boxe, Judô ou Karatê).
*   **Múltiplos Aparar no Mesmo Turno:** Cada tentativa de aparar subsequente com o mesmo membro/arma sofre penalidade cumulativa de **$-4$**.

---

# SEÇÃO 7: TABELA ANATÔMICA DE LOCALIZAÇÃO E DANO

```
Local do Corpo     | Redutor NE | RD Nat. | Multiplicador de Ferimento e Efeito
-------------------+------------+---------+-------------------------------------------------------------
Tronco             |      0     |    0    | Multiplicador padrão. Centro de massa.
Braço (Dir/Esq)    |     -2     |    0    | Dano máximo = PV/2. Dano excedente quebra/amputa.
Perna (Dir/Esq)    |     -2     |    0    | Dano máximo = PV/2. Dano excedente quebra/derruba.
Mão (Dir/Esq)      |     -4     |    0    | Dano máximo = PV/3. Inutilização mecânica da mão.
Pé (Dir/Esq)       |     -4     |    0    | Dano máximo = PV/3. Inutilização do pé e queda.
Pescoço            |     -5     |    0    | Cortante: x2.0. Empalamento/Perfurante: x1.5. Asfixia.
Rosto              |     -5     |    0    | Sem RD. Sem proteção de coletes corporais. Choque severo.
Crânio (Cabeça)    |     -7     |    2    | RD 2 óssea. Todo dano penetrante é multiplicado por x4.0.
Olho               |     -9     |    0    | Acesso direto ao cérebro (x4.0). Ignora RD óssea.
Órgãos Vitais      |     -3     |    0    | Localizados no tronco. Dano imp/pi passa para multiplicador x3.0.
Artéria / Veia     |     -3     |    0    | Dano cortante ganha x2.0. Hemorragia contínua de 1 PV/seg.
Artéria do Pescoço |     -8     |    0    | Dano cortante ganha x3.0. Hemorragia massiva de 1d PV/seg.
```

---

# SEÇÃO 8: BALÍSTICA, PENETRAÇÃO E TIRO RÁPIDO

### 8.1. Fórmulas de Penetração e Dano Final

$$\text{Dano Penetrante} = \max(0, \, \text{Dano Bruto da Rolagem} - \text{RD da Armadura})$$
$$\text{Dano Final aos PV} = \lfloor \text{Dano Penetrante} \times \text{Multiplicador de Ferimento} \rfloor$$

```
Código | Tipo de Dano                 | Multiplicador | Propriedade Fisiológica
-------+------------------------------+---------------+-----------------------------------------------
cr     | Contundente (Crushing)       | x1.0          | Trauma ósseo e muscular por impacto
cut    | Cortante (Cutting)           | x1.5          | Laceramento tecidual e risco de sangramento
imp    | Empalamento (Impaling)       | x2.0          | Perfuração profunda em cavidades
pi-    | Perfurante Pequeno (Small)   | x0.5          | Baixa cavitação (dardos, projéteis .22)
pi     | Perfurante Padrão (Piercing) | x1.0          | Cavitação padrão (9mm, 5.56mm)
pi+    | Perfurante Grande (Large)    | x1.5          | Cavitação severa (.45 ACP, 7.62mm)
pi++   | Perfurante Enorme (Huge)     | x2.0          | Choque hidrostático massivo (.50 BMG)
burn   | Queimadura (Burning)         | x1.0          | Cauterização dérmica e destruição de nervos
cor    | Corrosão (Corrosion)         | x1.0          | Destrói 1 ponto de RD da armadura a cada 5 dano
tox    | Tóxico (Toxic)               | x1.0          | Afeta órgãos internos sem penetração mecânica
fat    | Fadiga (Fatigue)             | x1.0 (PF)     | Esgota fôlego/energia vital, não PV
```

### 8.2. Tiros Múltiplos e Recuo ($\text{Rcl}$)

$$\text{Tiros Acertados} = 1 + \left\lfloor \frac{\text{MS}}{\text{Rcl}} \right\rfloor \quad (\text{Limitado pelo total de tiros disparados})$$

### 8.3. Tabela de Modificadores de Alcance / Distância

$$\text{Penalidade de Alcance} = 6 \times \log_{10}(\text{Distância em Metros}) - 2 \quad (\text{Arredondado})$$

```
Distância (m) | Penalidade | Distância (m) | Penalidade | Distância (m) | Penalidade
      2       |     0      |      15       |     -5     |     150       |    -11
      3       |    -1      |      20       |     -6     |     200       |    -12
      5       |    -2      |      30       |     -7     |     300       |    -13
      7       |    -3      |      50       |     -8     |     500       |    -14
     10       |    -4      |     100       |    -10     |    1000       |    -16
```

---

# SEÇÃO 9: EXPLOSÕES, COLISÕES E QUEDAS

### 9.1. Concussão de Explosivo em Área
$$\text{Dano Central} = 6\text{d} \times \sqrt{2 \times \text{Massa de TNT em kg}}$$
$$\text{Dano a } R \text{ metros} = \left\lfloor \frac{\text{Dano Central}}{3 \times R} \right\rfloor$$

### 9.2. Dano de Colisão e Atropelamento
$$\text{Dano de Impacto (Dados d6)} = \frac{\text{Massa do Veículo/Objeto (kg)} \times \text{Velocidade (m/s)}}{100}$$

### 9.3. Velocidade e Dano de Queda Livre
$$\text{Velocidade Terminal (m/s)} = \sqrt{2 \times 9.8 \times \text{Altura em metros}}$$
$$\text{Dano de Queda (Dados d6 cr)} = \frac{\text{PV da Entidade} \times \text{Velocidade Terminal}}{100}$$

---

# SEÇÃO 10: FISIOLOGIA DE CHOQUE, TRAUMA E MORTE

```
PV Restante              | Estado Operacional da Entidade
-------------------------+------------------------------------------------------------------
PV > PV/3                | Operação 100% íntegra.
PV <= PV/3               | Coxeando. DB e Esquiva reduzidos a 50% (arredondado para cima).
PV <= 0                  | Colapso. Teste de 3d6 <= VIT por segundo para manter a consciência.
-1 x PV                  | Teste imediato de 3d6 <= VIT. Falha = MORTE IMEDIATA.
-2 x PV                  | Segundo teste imediato de 3d6 <= VIT contra MORTE.
-3 x PV                  | Terceiro teste imediato de 3d6 <= VIT contra MORTE.
-4 x PV                  | Quarto teste imediato de 3d6 <= VIT contra MORTE.
-5 x PV                  | MORTE BIOLÓGICA IRREVERSÍVEL. Destruição do corpo sem teste.
```

### 10.1. Penalidade de Choque
*   Ao tomar dano, a entidade sofre penalidade igual a **$-1$ por PV perdido** (máximo de $-4$) em $\text{DES}$, $\text{INT}$ e todas as Perícias no seu próximo segundo.

### 10.2. Ferimento Grave (*Major Wound*) e Concussão
*   **Gatilho:** Dano de um único golpe $> \frac{\text{PV Total}}{2}$.
*   **Teste de Resistência:** Rola imediatamente $3\text{d6} \le \text{VIT}$.
    *   *Falha:* Queda imediata e atordoamento total.
    *   *Concussão Prolongada:* Rola $1\text{d}$ para determinar a duração em turnos e $1\text{d}$ para a penalidade (ex: $3$ turnos com redutor de $-2$ nas perícias).

---

# SEÇÃO 11: NÍVEIS TECNOLÓGICOS E CONTROLE SOCIAL

```
+-------------------------------------------------------------------------------+
| NÍVEL TECNOLÓGICO (NT 0 a NT 12+)                                             |
+-------------------------------------------------------------------------------+
| NT 0: Idade da Pedra (Pederneira, lanças de madeira, fogo primitivo)         |
| NT 1: Bronze (Lâminas de bronze, agricultura irrigada, carruagens)           |
| NT 2: Ferro Clássico (Legiões romanas, cotas de malha, catapultas)           |
| NT 3: Medieval (Aço laminado, armadura de placas, bestas pesadas)             |
| NT 4: Renascença e Velas (Pólvora negra, arcabuzes, bússola)                  |
| NT 5: Vapor e Carvão (Revolução industrial, rifles de repetição, telégrafo)   |
| NT 6: Mecanização Total (Motores a combustão, aviação, metralhadoras)         |
| NT 7: Era Nuclear (Eletrônica analógica, fuzis de assalto, computadores 1ª G)|
| NT 8: Era Digital (Internet global, satélites, Kevlar, drones)                |
| NT 9: Microtecnologia (Grafeno, exoesqueletos, armas Gauss, colônias orbitais)|
| NT 10: Robótica e Fusão (Lasers de plasma, biocibernética avançada, IA forte) |
| NT 11: Antimatéria (Campos de força, naves estelares com dobra espacial)      |
| NT 12+: Singularidade (Transcendência dimensional, nanotecnologia viva pura)  |
+-------------------------------------------------------------------------------+
| NÍVEL DE CONTROLE SOCIAL (NC 0 a NC 6)                                        |
+-------------------------------------------------------------------------------+
| NC 0: Anarquia Total (Sem leis; livre porte de qualquer armamento)            |
| NC 1: Muito Baixo (Apenas crimes hediondos punidos; armas militares livres)  |
| NC 2: Baixo (Armas militares restritas; armas leves e lâminas universais)     |
| NC 3: Moderado (Sociedade civil comum; licenças e registros obrigatórios)     |
| NC 4: Alto (Armamento restrito a forças policiais; vigilância ativa)          |
| NC 5: Severo (Proibição quase total; toque de recolher e biometria obrigatória)|
| NC 6: Totalitário (Estado policial pleno; posse privada e dissidência nulas)  |
+-------------------------------------------------------------------------------+
```

---

# SEÇÃO 12: GUIA DE ARBITRAGEM E EXECUÇÃO DO CRIADOR

```
+-------------------------------------------------------------------------------+
| TABELA UNIVERSAL DE MODIFICADORES DE DIFICULDADE (CRIADOR)                    |
+-------------------------------------------------------------------------------+
|   +10   | Tarefa Automática sob condições laboratoriais ideais                |
|    +6   | Muito Fácil (rotina profissional calma sem estresse)                |
|    +4   | Fácil (ambiente seguro, ferramentas adequadas)                      |
|    +2   | Favorável (pequena vantagem contextual)                             |
|     0   | Tarefa Padrão sob Condições de Estresse ou Combate                  |
|    -2   | Desfavorável (visibilidade reduzida, pressa leve)                   |
|    -4   | Difícil (ferramental improvisado, combate ativo intenso)            |
|    -6   | Muito Difícil (condições climáticas extremas, ferimentos graves)    |
|    -8   | Quase Impossível (tentativa sob caos estrutural absoluto)           |
|   -10   | Limiar do Milagre Físico                                            |
+-------------------------------------------------------------------------------+
```

### 12.1. A Regra do Recálculo Instantâneo de Ações Improvisadas
Quando um jogador propõe uma ação não catalogada:
1. **Identificar o Atributo/Perícia:** Qual é a competência física ou mental mais próxima?
2. **Aplicar Modificadores de Contexto:** Somar bônus do ambiente (escuridão para se esconder: $+5$) e subtrair impedimentos (chão escorregadio: $-2$).
3. **Determinar Oposição:** Se houver resistência de um oponente, resolver via Disputa Rápida de Margens em $3\text{d6}$.
4. **Descrever a Consequência Física:** Narrar o impacto real e atualizar os dados da cena.

---
*Fim do Padrão Técnico GROOG — Módulo Básico.*
