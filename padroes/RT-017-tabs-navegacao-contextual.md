# RT-017 | Abas de navegação contextual (Tabs)

**Projeto de origem:** [7Service](https://github.com/CMOURASIGA/7Service/tree/develop)  
**Evidência:** `src/components/ui/workspace-tabs.tsx` e `src/app/(admin)/ambientes/page.tsx`, branch `develop`, novembro/2026.  
**Situação:** implementado em `develop`; homologação visual e de acessibilidade pendente.  
**Classificação:** componente documentado por uso real; não declarar adoção nos demais produtos sem verificar seus códigos.

## Problema resolvido

A página Ambientes do 7Service concentrava cadastros, vínculos,
referências de deploy, versões, evidências e listagens numa única coluna
extensa. O operador precisava rolar repetidamente para acessar as tarefas.

## Padrão

Usar abas para **grupos de atividades diferentes dentro do mesmo contexto**,
quando o conteúdo prolongado prejudica encontrar uma operação.

Na página Ambientes, os grupos implementados são:

1. **Implantações:** registrar implantação, registrar ambiente e vincular empresa à instalação existente.
2. **Ambientes registrados:** visualizar estados e executar operações de ciclo de vida.
3. **Versões e evidências:** registrar versão, registrar referência de deploy e consultar evidências.
4. **Conexões Supabase:** ponto de acesso à configuração protegida de conexões existentes.

As abas organizam apresentação. **Não alteram autorizações, RLS, processos de
banco ou estado de provisionamento.** Ações de conexão continuam no fluxo
administrativo protegido. Nenhuma infraestrutura é criada pela navegação.

## Requisitos de implementação

- Um painel visível por vez e uma aba ativa visualmente identificável.
- Abas com `role="tablist"`, `role="tab"`, `role="tabpanel"`,
  `aria-selected`, `aria-controls`, `aria-labelledby`.
- Navegação por teclado: setas esquerda/direita, Home e End, foco visível.
- Layout responsivo com rolagem **horizontal somente da faixa de abas**.
- Painéis inativos devem conservar os dados já digitados nos formulários;
  alternar a aba não pode apagar entradas ou feedback.
- Sempre apresentar texto de abas que represente tarefas concretas,
  evitando apenas nomes genéricos como "Outros".
- Não usar tabs para esconder validações, mensagens de erro, autorização
  obrigatória ou consequências destrutivas.
- Preferir links/rotas para atividades extensas e protegidas, como
  a manutenção de credenciais Supabase.
- Não introduzir barras de rolagem vertical aninhadas; páginas naturalmente
  longas dentro de uma aba ainda podem precisar rolar.

## Padronização dos botões

**Evidência real no 7Service:** `src/components/ui/action-button.tsx`,
também na `develop`.

- Primário: fundo azul institucional e texto branco.
- Secundário: branco, contorno azul e texto azul.
- Crítico: contorno vermelho e texto vermelho.
- Sucesso/criação quando aplicável: verde com contraste adequado.
- Desabilitado e loading visualmente identificados.
- Tamanho mínimo de interação, foco de teclado e largura ajustada ao conteúdo
  em vez de esticar todas as ações em largura total.

O componente ainda não representa uma biblioteca npm compartilhada.
O catálogo registra o comportamento implementado e suas evidências.

## Critérios de homologação

- [ ] Aba padrão e destaque visual coerentes com o shell Consult Services.
- [ ] Alternar quatro abas sem saltos estranhos, perda de dados ou reload.
- [ ] Testar teclado, foco e leitor de tela.
- [ ] Verificar comportamento em desktop e mobile.
- [ ] Conferir botões de cadastro e ações secundárias (cor, dimensão, disabled, loading).
- [ ] Confirmar que consultas e permissões continuam sem regressão.
- [ ] Validar telas e formulários sem aplicar migrações em banco produtivo.

**Regra de adoção:** só promover a padrão corporativo validado após evidência
de homologação e ganho demonstrado, conforme política 7Components.
