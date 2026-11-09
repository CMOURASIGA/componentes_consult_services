# Skills corporativas Consult Services

## Política obrigatória
**Somente registrar como Skill adotada um procedimento efetivamente utilizado, com ganho comprovado nos produtos.**
Exceção autorizada: estudar e especificar Skills candidatas, identificando-as como **em avaliação**.
Toda adoção deve registrar evidência verificável, resultado mensurável e benefício observado; não inventar métricas.

## Inventário de candidatas derivadas de práticas existentes

| Skill candidata | Evidência identificada | Ganho a verificar | Estado |
|---|---|---|---|
| Qualidade e gates de CI | 7Commander: `.github/workflows/develop-quality.yml`; Playwright, typecheck, lint, build | Redução de regressões e falhas de build | Candidata |
| Homologação funcional e rastreabilidade | 7Commander: testes Playwright e registros de validação por funcionalidades | Menos retrabalho e evidências reproduzíveis | Candidata |
| Segurança multiempresa/RLS | 7Commander: `lib/tenant-runtime.ts`, `lib/tenant-context.ts`, migrations com RLS | Evitar vazamento entre organizações | Candidata |
| Diagnóstico de integração e saúde | 7Commander: `GET /api/health/env`, `GET /api/health/supabase`, `GET /api/integrations/health` | Diagnóstico consistente | Candidata |
| Auditoria de implementação | Procedimento documentado em `skills/auditoria-implementacao/SKILL.md` | Separar código, deploy, homologação e uso real | Em avaliação |

Referências verificadas no repositório `CMOURASIGA/7Commander` em `develop`: `README.md` e `documentacao/SPEC-08-IMPACTO.md`.
A existência dos caminhos e scripts **não demonstra por si só ganho mensurável**; é necessário reunir resultados de execução e homologação.

## Regras de criação
Cada Skill deve conter `SKILL.md` com objetivo, pré-requisitos, entradas, procedimento, validação, riscos, rollback e evidências. Não publicar credenciais, dados pessoais ou dados clínicos.

## Fluxo
1. Confirmar prática efetivamente executada.
2. Identificar resultado e benefício observado.
3. Escrever procedimento reproduzível.
4. Testar em outro contexto ou produto quando aplicável.
5. Aprovar como Skill adotada apenas após evidências.

## Gates
- Para sistemas operacionais: develop para homologação e main somente com autorização explícita.
- Testes, typecheck, lint e build devem passar quando aplicáveis.
- Documentação do 7Components pode ser atualizada diretamente na main após revisão.
