# RT-001 | Whitelabel do cliente

**Origem verificada:** 7Commander / main. **Classificação:** rotina existente no 7Commander + proposta de padrão corporativo para projetos futuros. **Homologação corporativa:** pendente.

## Objetivo
Permitir a personalização da identidade exibida no sistema sem alterar a identidade estrutural do produto Consult Services.

## Comportamento comprovado no código do 7Commander

1. O tipo `ClientBrandSettings` contém `clientName`, `logoUrl`, `primaryColor` e `highlightColor`.
2. Os valores padrão são nome `Consult Services Tecnologia`, logotipo `https://i.imgur.com/gxXnYsA.png`, cor principal `#003B73` e destaque `#00AEEF`.
3. O upload do logo lê o arquivo usando `FileReader`; a imagem é amostrada em canvas de 48x48 para sugerir até duas cores predominantes. As cores podem ser alteradas antes de salvar.
4. Ao salvar, grava `7commander-client-brand` no LocalStorage, aplica variáveis CSS e dispara o evento `client-brand-updated`.
5. A sidebar escuta o evento, recarrega a configuração e exibe o logo do cliente ou o padrão Consult Services. O nome e subtítulo do produto vêm de `lib/brand.ts`.
6. Restaurar remove a configuração local e reaplica os valores padrão.

**Limitações verificadas:** a configuração é local ao navegador e não comprova isolamento por empresa, persistência remota, permissões administrativas, validação do arquivo, auditoria ou aplicação a todos os usuários.

## Padrão corporativo proposto (não confundir com implementação atual)

- A marca do cliente deve ocupar a área de identidade da navegação; nome e identificação do produto devem permanecer reconhecíveis.
- A configuração deve incluir fallback caso a marca personalizada esteja ausente, corrompida ou indisponível.
- Em aplicações SaaS com múltiplas empresas, persistir no servidor por `tenant_id` com controle de acesso e isolamento de dados; nunca utilizar o LocalStorage como fonte de verdade corporativa.
- Restringir alteração a usuários autorizados, registrar auditoria e evitar que a configuração de uma empresa afete outra.
- Definir limites e formatos seguros para a imagem, contraste mínimo e legibilidade dos itens ativos.
- Manter ação de restaurar padrão para administradores autorizados.
- Prever comportamento de login, refresh, mobile, estados de carregamento e fallback.

## Checklist para homologação

- [ ] Logo do cliente visível na área de marca, sem distorção, em desktop e mobile.
- [ ] Identificação do produto permanece visível após personalização.
- [ ] Cor principal e destaque aplicadas com contraste e legibilidade adequados.
- [ ] Salvar e restaurar funcionam com persistência conforme arquitetura do produto.
- [ ] Usuário sem permissão não consegue modificar a identidade.
- [ ] Tenants não compartilham a configuração uns dos outros.
- [ ] Sem imagem ou configuração válida, a marca Consult Services é exibida.
- [ ] Não há vazamento de configuração para páginas públicas ou login de outro cliente.

## Referências de origem

- [lib/brand-settings.ts](https://github.com/CMOURASIGA/7Commander/blob/main/lib/brand-settings.ts)
- [components/settings/client-brand-config.tsx](https://github.com/CMOURASIGA/7Commander/blob/main/components/settings/client-brand-config.tsx)
- [components/layout/sidebar.tsx](https://github.com/CMOURASIGA/7Commander/blob/main/components/layout/sidebar.tsx)
- [lib/brand.ts](https://github.com/CMOURASIGA/7Commander/blob/main/lib/brand.ts)

**Demonstração no 7Components:** isolada, sem salvar dados, e não representa a rotina de produção.
