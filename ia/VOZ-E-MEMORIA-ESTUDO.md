# Estudo autorizado | Whisper e Kokoro

**Classificação: estudo técnico. Nenhum dos dois está registrado como adotado nos produtos.**
Fontes consultadas: repositórios e documentação oficial em 2026-11-09.

## Whisper | Reconhecimento de fala
- Código: https://github.com/openai/whisper
- Licença do repositório: MIT.
- Instalação documentada: `pip install -U openai-whisper`; requer `ffmpeg`.
- Base Python/PyTorch. Modelos multilíngues: tiny, base, small, medium, large e turbo.
- O README informa VRAM aproximada entre ~1 GB (tiny/base) e ~10 GB (large); turbo ~6 GB. Os valores não substituem benchmark no nosso ambiente.
- Funcionalidades: transcrição multilíngue, identificação de idioma e tradução para inglês com modelos compatíveis.
- Avaliar: precisão em português brasileiro, ruído, sotaques, termos técnicos, latência, CPU/GPU, custo, privacidade e tratamento de arquivos.

## Kokoro | Síntese de voz
- Código: https://github.com/hexgrad/kokoro
- Pesos/model card: https://huggingface.co/hexgrad/Kokoro-82M
- Licença indicada: Apache-2.0.
- Modelo TTS de 82 milhões de parâmetros; instalação `pip install kokoro`.
- O repositório oferece biblioteca Python, exemplos, testes e implementação JS; usa Misaki e pode depender de espeak-ng.
- O README documenta `KPipeline(lang_code='p')` para português brasileiro; confirmar disponibilidade e qualidade de voz específica antes de adoção.
- Avaliar: inteligibilidade pt-BR, naturalidade, pronúncia de nomes e termos clínicos, tempo de geração, CPU/GPU, licença de vozes, consumo de memória e implantação.

## Prova de conceito sugerida, ainda NÃO executada
1. Usar áudios e textos sintéticos em português brasileiro.
2. Medir WER/CER para Whisper e avaliar transcrições com revisão humana.
3. Medir latência, qualidade percebida e pronúncia do Kokoro.
4. Registrar custo, hardware, segurança, logs e possibilidade de isolamento por cliente.
5. Decidir adoção somente após resultados observáveis.

## Limites
Não armazenar áudio clínico real em repositórios ou memória compartilhada. Não afirmar economia, acurácia ou qualidade sem benchmark.
Obsidian não integra este estudo: não há uso comprovado e não está na lista de exceções.
