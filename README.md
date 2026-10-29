# 7Components · Consult Services

Catálogo visual de componentes documentados a partir do [7Commander](https://github.com/CMOURASIGA/7Commander). Não modifica o sistema original.

## Conteúdo

- 9 componentes/padrões confirmados em arquivos de origem, com links e descrição.
- 16 tokens de cores diretamente referenciados em `styles/tokens.css`.
- Busca, filtros, fichas técnicas e prévias de interação.
- Site responsivo, estático, sem autenticação, banco, segredo ou requisições a serviços externos.

## Vercel

Importe `CMOURASIGA/componentes_consult_services` como novo projeto. Framework Preset **Other**. Root Directory **/**. Build Command **vazio** (override desligado); Output Directory **./**. Não há variáveis de ambiente obrigatórias. O arquivo `vercel.json` estabelece o destino estático.

## Escopo e limites

Este é um **inventário manual inicial** (outubro de 2026), não um crawler ou uma biblioteca npm compartilhada. As prévias são reinterpretações independentes, não o código React importado do 7Commander. Não atribua uso em outros produtos sem auditoria específica de cada repositório.

**Origem verificada:** `CMOURASIGA/7Commander`, `main`: `components/ui/workspace-primitives.tsx`, `components/ui/confirm-dialog.tsx`, `components/ui/toast.tsx`, `components/layout/sidebar.tsx`, `components/brand/brand-lockup.tsx`, `styles/tokens.css`.

## Padrões funcionais

- [RT-001: Whitelabel do cliente](padroes/RT-001-whitelabel.md), com análise do comportamento real, requisitos sugeridos, checklist de homologação e demonstração visual isolada no catálogo.

- [RT-009: Identidade de produto e ícone do sistema](padroes/RT-009.md) — padrão do símbolo **C de circuitos** nas abas web e nos atalhos de smartphone, com separação entre identidade do produto e whitelabel da empresa. Implementação na `develop` do 7Commander; homologação visual pendente.

## Rotinas transversais RT-002 a RT-010

Inventário de login/autenticação, sessões e RBAC, notificações, auditoria, erros/confirmações, navegação mobile, configurações, identidade de produto e variáveis/segredos. Cada ficha separa evidência do 7Commander de norma proposta. Gestão específica dos produtos fica fora do catálogo.

## Regras de interação RT-011 a RT-016

Labels/mensagens, drawer, modal, feedback toast, formulários/validação e estados da interface. Em cada caso, a evidência no 7Commander é separada da proposta corporativa, ainda pendente de homologação.
