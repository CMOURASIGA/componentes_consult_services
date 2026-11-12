# UX-NAV-01 | Proposta de evolução: sidebar adaptativa + tabs contextuais

**Situação:** ESPECIFICAÇÃO PARA DESENVOLVIMENTO. **NÃO ADOTADO, NÃO HOMOLOGADO**.
**Data:** 12/11/2026.
**Solicitação:** Consult Services, após aprovação conceitual da mecânica pelo responsável.
**Referências existentes:** [Sidebar do 7Service em develop](https://github.com/CMOURASIGA/7Service/blob/develop/src/components/layout/sidebar.tsx), [AppShell do 7Service](https://github.com/CMOURASIGA/7Service/blob/develop/src/components/layout/app-shell.tsx), [WorkspaceTabs](https://github.com/CMOURASIGA/7Service/blob/develop/src/components/ui/workspace-tabs.tsx), [RT-017](../padroes/RT-017-tabs-navegacao-contextual.md), [proposta do Commander](https://github.com/CMOURASIGA/7Commander/blob/work/local-kairos-operacional-20261111/docs/UX_NAV_01_SIDEBAR_TABS_FUTURO_20261112.md).

> Esta especificação é um handoff técnico, **fora do inventário de componentes adotados**. Não incrementar a contagem de componentes confirmados nem apresentar o padrão como implementado no site. Política: [Catálogo corporativo](../arquitetura/CATALOGO-CORPORATIVO.md).

## Objetivo e hipótese
Recuperar largura útil em tabelas, Kanban, relatórios e formulários. Substituir sidebar desktop fixo por modo compacto (alvo 64–72px) e expandido (alvo 240–260px). Ao alternar, o **AppShell reposiciona o conteúdo** usando grid/flex, sem painel sobreposto no desktop. Navegação primária por ícones sempre visíveis; todas as rotinas e grupos no estado expandido. Tabs contextuais organizam o interior de cada área. Não copiar efeitos de vidro ou identidade externa.

## Arquitetura proposta
- `AppShell` / `ShellClient`: dono do estado visual do sidebar e da área de conteúdo. Responsividade e permissões permanecem responsabilidades existentes do produto.
- `AdaptiveSidebar`: logo institucional e identificação do produto no topo, atalho de expandir/recolher, favoritos operacionais por ícone, grupos restantes quando expandido, usuário e saída no rodapé. Não tratar ausência de label como permissão.
- `NavigationItem`: ícone padronizado, texto no expandido, tooltip/accessible name no compacto, `aria-current` na rota ativa, badge sem depender apenas de cor.
- `ContextTabs`: evoluir `WorkspaceTabs` já implementado no 7Service (RT-017); tab visível de acordo com o contexto do produto. Preservar estado de formulários em abas ocultas, controles ARIA, setas/Home/End, foco e overflow horizontal.
- `ResponsiveContentArea`: `min-width:0`, reflow e ajuste de grades/tabelas; não criar rolagem horizontal da página por expansão da barra.

**Nomes são conceituais, não APIs finais.** Evitar criar novos componentes se adaptação dos existentes bastar. Não criar biblioteca npm compartilhada sem decisão específica.

## Comportamento esperado
1. Desktop: compacto por escolha do usuário; expandir não cobre a tela e não move a aba ativa. Animar propriedade relevante em ~160–220ms, respeitando reduced-motion. Persistir apenas preferência de apresentação, de forma segura, com valor padrão previsível para SSR/hidratação.
2. Tablets: verificar espaço disponível; permitir compacto quando a grade continuar utilizável.
3. Mobile: drawer com backdrop, Escape, foco gerenciado e fechamento ao navegar, sem comprimir a área de conteúdo.
4. Tabs: um nível contextual, nunca cadeia de tabs aninhadas. Vincular seleção à URL somente quando representa destino profundo/compartilhável; não transformar toda seção de formulário em rota se RT-017 já preserva os dados corretamente. Back/forward e refresh não podem perder rota ativa.
5. Segurança: apresentação nunca substitui checagem de permissão. Menu e tabs exibem somente operações elegíveis; o servidor mantém autorização, auditoria, isolamento por empresa e bloqueios.
6. Identidade: logo, azul institucional, botões do design system e contraste sem glassmorphism obrigatório.
7. Migração: preservar links e hierarquia de navegação existente; não rebatizar ou remover rotas para adaptar o menu.

## Sequência de implantação piloto
1. 7Service: revisar ShellClient/Sidebar/WorkspaceTabs e documentar baseline de área útil, acessibilidade e navegação.
2. Implementar reflow e toggle em ShellClient/Sidebar; verificar todas as rotas com menu compacto.
3. Preservar/expor tabs locais nas páginas existentes, começando por Ambientes (4 abas já implementadas) e Ficha do Cliente onde houver navegação coerente.
4. Testar segurança, teclado, mobile, atalhos, estado de formulário, viewer, erros e transições.
5. Só depois considerar portabilidade para 7Commander; validar ganho e registrar evidência no RT-017 e em um futuro registro de sidebar adotado.

## Métricas e gates de adoção
- Medir largura real ocupada, não presumir ganho. Exemplo **não medido**: de 250px a 68px, ganho nominal 182px.
- Validar tempo/cliques para alcançar tarefas principais versus baseline, com amostra e método identificados.
- Registrar acessibilidade e ausência de regressões de navegação.
- Links profundos, logout, troca de contexto, responsividade e testes de rotas protegidas aprovados.
- Só elevar a **padrão corporativo adotado** após implementação no produto, homologação pelo responsável, evidência de benefício e commit/ambiente rastreáveis.

## Rastreabilidade
- **Produto piloto pretendido:** 7Service (branch `develop`; produção `main` depende de autorização).
- **Outro produto interessado:** 7Commander. Sua homologação KAIROS-SKILLS-02 continua independente e prioritária.
- **Status atual:** especificado, código e homologação desta UX não executados nesta proposta.
