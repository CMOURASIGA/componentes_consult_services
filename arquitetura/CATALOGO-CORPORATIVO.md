# 7Components | Catálogo corporativo de engenharia

Status: proposta em desenvolvimento, sujeita a homologação.
Escopo: todos os produtos Consult Services, não apenas frontend.

## Princípios
- Registrar padrões visuais, backend, APIs, integrações, IA, dados, segurança, testes, deploy, operação e Skills.
- Diferenciar **evidência implementada**, **padrão aprovado**, **proposta** e **pendência**.
- Cada ficha deve informar origem (repositório, branch, commit/arquivo), responsáveis, versão, dependências, testes, riscos e produtos consumidores.
- Não confundir demonstrações visuais do 7Components com bibliotecas executáveis compartilhadas.
- Nunca copiar dados pessoais, dados clínicos, tokens ou segredos para documentação.
- Fluxo: desenvolver em develop, homologar e só publicar em main com autorização explícita.
- Componentes transversais não substituem bancos existentes nem centralizam dados de clientes automaticamente.

## Domínios do catálogo
- `padroes/`: RT-001 a RT-016 e novos padrões funcionais.
- `frontend/`: tokens, layout, acessibilidade, feedback, formulários.
- `backend/`: APIs, contratos, validação, observabilidade, tratamento de erros.
- `seguranca/`: autenticação, autorização, RLS, auditoria e LGPD.
- `integracoes/`: adaptadores, versionamento e resiliência.
- `ia/`: provedores, modelos, limites, avaliação, rastreabilidade.
- `skills/`: procedimentos de engenharia reutilizáveis, com SKILL.md e critérios de aceite.
- `conhecimento/`: decisões técnicas e lições aprendidas, Markdown compatível com Obsidian.

## Política de incorporação
1. Localizar implementação e evidências no repositório de origem.
2. Documentar comportamento observado e limitações.
3. Definir contrato, segurança, testes e versionamento.
4. Homologar reutilização em pelo menos um consumidor.
5. Marcar como padrão aprovado somente após aceite.

## Inventário inicial
- JEV / SPEC 08: evidência de implementação no 7Commander, operação em produção não confirmada.
- Kairos: renderização de respostas e integração conversacional, pendente inventário de código.
- Whisper: tecnologia candidata, não adotada.
- Kokoro: tecnologia candidata, não adotada.
- Obsidian: ferramenta candidata para consulta/edição de documentação Markdown, não base de dados de produção.
- Skills: catálogo inicial de procedimentos, não executores automáticos.
