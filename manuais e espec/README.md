# GURPS Virtual

Plataforma de RPG de mesa 100% online com motor de regras próprio, matematicamente
equivalente ao GURPS 3ª edição (nomenclatura e textos reescritos — ver seção 12 do spec
de produto). Especificação completa em
[`especificacao_gurps_virtual.md`](especificacao_gurps_virtual.md).

## Estado do projeto

| Fase | Status |
|---|---|
| **Fase 1 — Motor de Regras isolado** | Em andamento — ver [`rules-engine/`](rules-engine/) |
| Fase 2 — Backend (Supabase) + persistência de fichas | Não iniciada |
| Fase 3 — App mobile (Flutter, Android/iOS) | Não iniciada |
| Fase 4 — Vídeo/áudio (LiveKit), sessão ao vivo | Não iniciada |
| Fase 5 — Marketplace, billing, moderação | Não iniciada |

Decisões de arquitetura tomadas até agora: **Flutter** para mobile (cross-platform
Android/iOS), **Supabase** para backend/banco de dados, motor de regras em
**TypeScript** (roda isolado hoje, migra sem reescrita para Supabase Edge Functions).

## Conteúdo mecânico (specs_*.md)

Os arquivos `specs_00_*.md` a `specs_34_*.md` na raiz contêm o conteúdo mecânico do
GURPS 3ª edição já reescrito/renomeado (estratégia de propriedade intelectual da
seção 12 do spec de produto) — são a fonte de dados usada pelo motor de regras.
Gaps conhecidos: combate à distância (`specs_16`) nunca foi escrito; a tabela de
localização de acerto em `specs_32` só existe como imagem não convertida.

## Motor de Regras

Ver [`rules-engine/README.md`](rules-engine/README.md) para escopo, decisões de
linguagem e como rodar os testes.
