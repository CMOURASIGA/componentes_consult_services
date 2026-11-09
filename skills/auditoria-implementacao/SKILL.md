# Skill: auditoria-implementacao

## Objetivo
Verificar se uma capacidade está apenas especificada, codificada, testada, implantada ou operacional.

## Entradas
Repositório, branches, nome da capacidade e requisitos de aceite.

## Procedimento
1. Confirmar repositório e branches.
2. Inspecionar arquivos, histórico de commits, dependências e testes.
3. Localizar feature flags e configurações sem revelar valores secretos.
4. Comparar develop e main.
5. Quando autorizado, executar testes não destrutivos em homologação.
6. Registrar evidências por URL, commit e caminho.
7. Classificar cada requisito: NÃO ENCONTRADO, ESPECIFICADO, IMPLEMENTADO, TESTADO, HOMOLOGADO, PRODUÇÃO VERIFICADA.

## Restrições
Não inferir operação em produção a partir de um commit. Não modificar main, bancos ou configurações durante auditoria. Não copiar dados pessoais.

## Saída
Tabela de evidências, riscos, lacunas e próximos gates.
