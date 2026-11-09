# Skills corporativas Consult Services

Status: catálogo inicial, em desenvolvimento.

Uma Skill descreve um procedimento reproduzível, com entradas, ferramentas permitidas, restrições, verificações e saídas. Ela não recebe acesso irrestrito a sistemas ou segredos.

## Convenção
Cada Skill deve residir em `skills/<nome>/SKILL.md` e conter: objetivo, escopo, pré-requisitos, entradas, execução, validação, riscos, rollback e evidências.

## Skills iniciais
- `auditoria-implementacao`: localizar evidências de código e distinguir commit, deploy e execução.
- Futuras: qualidade-ci, supabase-rls, api-contract, frontend-design, homologacao-e2e, deploy-controlado, documentacao-arquitetural.

## Gates corporativos
- develop para homologação; main apenas mediante autorização explícita.
- Testes, typecheck, lint e build devem passar quando aplicáveis.
- Rastrear repositório, branch, SHA, testes, ambiente e resultado.
- Nenhuma Skill deve expor credenciais ou executar deploy de produção sem aprovação.
