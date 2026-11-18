# RT-018 | Abas contextuais para formulários e rotinas com múltiplas informações

**Status:** componente e demonstração disponíveis para homologação neste repositório. **Não implica implantação automática no 7Service, Commander ou outros produtos.**

## Referência visual
- Anexo 1 (18/11/2026): skeleton de carregamento de tela com abas.
- Anexo 2 (18/11/2026): quatro abas de formulário: Informações Gerais, Detalhes & Planejamento, Reservas, Complexidade.
- Evolução complementar do [RT-017](RT-017-tabs-navegacao-contextual.md), já registrado a partir do 7Service.

## Como utilizar
1. Incluir `componentes/consult-tabs.css` e `componentes/consult-tabs.js`.
2. Declarar um contêiner com atributo `data-consult-tabs`.
3. Criar barra com `role="tablist"`, botões `role="tab"` e painel correspondente com `role="tabpanel"`.
4. Associar IDs únicos com `aria-controls` / `aria-labelledby`; definir primeira aba `aria-selected="true"`.
5. Manter todos os campos no DOM; ocultar painéis inativos com `hidden`, sem descarte dos valores.
6. Consultar [demonstração funcional](../exemplos/abas-formulario.html).

## Comportamento obrigatório
- Aba ativa destacada, foco visível, navegação por mouse, Tab, setas, Home e End.
- Faixa de abas rola horizontalmente em telas estreitas; conteúdo utiliza grid responsivo.
- Inputs persistem ao alternar abas e não ocorre reload.
- Validação deve conduzir à aba do campo inválido; o exemplo demonstra esta operação.
- Estado de carregamento usa skeleton e sinalização; não simular dados como se fossem salvos.
- Botões de ação ficam fora dos painéis, comuns ao formulário, para evitar confusão de escopo.
- Segurança, permissões e persistência continuam responsabilidade de cada aplicação.

## Casos recomendados
Cadastros com campos diversos, configuração de produtos, formulários de projetos, ambientes, contratos e eventos. Evitar abas para fluxos sequenciais que exigem etapas obrigatórias (usar stepper) ou para esconder erros e informações críticas.

## Critérios para aceite
- [ ] Conferir fidelidade visual aos anexos, incluindo skeleton.
- [ ] Teclado e leitor de tela.
- [ ] Persistência dos campos após múltiplas trocas de aba.
- [ ] Validação de campo obrigatório localizado em aba inativa.
- [ ] Responsividade e ausência de rolagem horizontal do formulário.
- [ ] Nenhuma mudança nos serviços, permissões ou banco sem demanda específica.

**Governança:** implementar em cada produto em branch de homologação, testar e obter aceite antes de liberar em produção.
