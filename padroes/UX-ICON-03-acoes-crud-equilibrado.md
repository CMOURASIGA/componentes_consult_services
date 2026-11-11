# UX-ICON-03 | Ações CRUD por ícones (modelo Equilibrado)

**Catálogo:** 7Components · Consult Services  
**Data:** 11/11/2026  
**Classificação:** Padrão implementado no 7Commander, **homologação visual e funcional pendente**. Ainda não classificar como componente corporativo adotado.  
**Referência de implementação:** `components/ui/icon-action-button.tsx`, `components/ui/action-icon.tsx`, `app/globals.css` na branch `work/local-kairos-operacional-20261111` do 7Commander.  
**Especificação original:** [UX_ICON_03_HANDOFF_20261111.md](https://github.com/CMOURASIGA/7Commander/blob/work/local-kairos-operacional-20261111/docs/UX_ICON_03_HANDOFF_20261111.md).

## Objetivo

Padronizar ações individuais de manutenção em listagens e cartões, sem sobrecarregar a interface com cores fortes permanentes nem modificar as operações CRUD.

## Matriz visual

| Ação | Estado normal | Hover/foco |
| --- | --- | --- |
| Visualizar, consultar, histórico | Neutro, com borda e ícone discretos | Cor `--accent` e fundo `--accent-soft` da empresa |
| Editar | Neutro, com bom contraste | Cor `--accent` da empresa |
| Excluir, revogar, suspender | Ícone vermelho, fundo discreto | `--danger-soft` e borda danger |
| Ativar, aprovar, publicar | Ícone verde, fundo discreto | `--success-soft` e borda success |

- Botão de **40 x 40 px** no desktop, **44 x 44 px** em touch; SVG **20 x 20 px**; raio **12 px**.
- Exigir `aria-label` e `title`, indicação de foco por teclado, estado disabled legível e preferência por movimento reduzido.
- A cor ajuda a interpretar a ação, mas nunca substitui o nome acessível.
- Ações principais como **Criar**, **Salvar**, **Gerar relatório** e operações em lote preservam **texto visível**.
- Ações destrutivas devem confirmar o registro e a consequência quando aplicável. Autorização deve continuar no servidor.
- A identidade de empresa altera apenas tokens de marca, não a semântica danger/success.
- As demonstrações deste site são ilustrativas, não executam CRUDs, não usam Supabase nem atestam homologação.

## Relação com a vitrine CNC

Inspeção visual da [POC CNC](https://poc-layout-ti-cnc.vercel.app/) identificou consistência de ícones compactos e contornos como referência para melhorar a demonstração. Não copiar a aparência de controles ativos que pareçam desabilitados, nem substituir a identidade do 7Components.

## Backlog de comparação, não adotado automaticamente

1. Botões: variantes, foco, disabled e loading.
2. Ícones: família de traço uniforme, tooltip e identificação acessível.
3. Campos: combobox com busca, multiseleção e erros em português.
4. Listagens: filtros recolhíveis, tabela com ordenação/paginação e estados vazios.
5. Anexos: upload, lista de arquivos e metadados.
6. Acesso: telas específicas para convite inválido, sessão expirada e permissão negada.

## Gates para promover a 'Adotado'

- TypeScript, lint, testes unitários e build sem falhas na implementação de origem.
- Homologação visual desktop/touch e whitelabel com duas empresas.
- Verificar foco, hover, contraste, ações disabled, confirmação e permissões.
- Registrar telas, capturas e indicador mensurável de consistência/retrabalho.
- Aprovação explícita do responsável antes de alterar o status do catálogo.

**Status em 11/11/2026:** documentação e prévia adicionadas ao 7Components. Homologação do 7Commander continua pendente. Não houve alteração no Commander decorrente desta atualização.
