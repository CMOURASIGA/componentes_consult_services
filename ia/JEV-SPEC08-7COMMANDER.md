# JEV | SPEC 08 | 7Commander

Estado: **implementação parcial comprovada por commits; homologação operacional pendente**.
Origem: https://github.com/CMOURASIGA/7Commander
Data das evidências: 2026-10-29.

## Evidências
- [Adaptador JEV Gateway e validação de escolhas](https://github.com/CMOURASIGA/7Commander/commit/178e011dcbd27531f1dee50f8ae7f64d51bbd5e1)
- [Seleção de provedor e modo observação](https://github.com/CMOURASIGA/7Commander/commit/96a2fdbed808ae5ec45e4ec5446ea18feced1fc3)
- [Avaliação apenas sintética](https://github.com/CMOURASIGA/7Commander/commit/5d66e43d3d5aa6f974877cb1ab7a8ab6ddcf2a0c)
- [Rejeição de respostas não objeto](https://github.com/CMOURASIGA/7Commander/commit/9f3553e5c69753ac51323b7897284eddf220170f)
- [Cotas atômicas e bloqueio preventivo](https://github.com/CMOURASIGA/7Commander/commit/e1e1b5428c0e651bdcd477486131b22436941601)
- [Limitações e gates pendentes](https://github.com/CMOURASIGA/7Commander/commit/0504ce4bb619ae9bcf6e4b4b05e00c21c3a43eee)

## Padrão candidato
Motor de avaliação estruturada com entradas limitadas, saídas tipadas, validação de esquema, cotas por empresa, trilha de auditoria e feature flag. O JEV não deve executar alterações de negócio sem autorização e validação de servidor.

## Antes de aprovar como componente compartilhado
- Auditar HEAD de develop e main, arquivos, dependências e configuração efetiva.
- Executar testes automatizados e validação de cotas concorrentes, isolamento por empresa e falhas do provedor.
- Confirmar ambiente de homologação, logs, custo e fallback.
- Demonstrar um fluxo gerencial real com avaliação revisável.
- Definir contrato de consumo para 7Clinic sem reutilizar dados clínicos no 7Commander.

## 7Clinic
Possíveis usos: priorização de tarefas administrativas, classificação de pendências, apoio a fluxos de trabalho. **Não** autorizar diagnóstico, prescrição ou decisão clínica autônoma. Requer análise de LGPD, consentimento e governança específica.
