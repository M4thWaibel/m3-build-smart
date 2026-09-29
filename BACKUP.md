# Backup do site m3constru.com.br até 29/09/2026

Esta branch guarda o site como esteve no ar até 29/09/2026, antes do redesenho (PR #2).

- **A raiz** é o código-fonte exato do commit `b5151f9` ("correção de erro", 16/06/2026), que gerou o site publicado. Inclui as fotos originais.
- **`site-no-ar/`** é o `dist` que estava publicado na Hostinger, conferido contra o site em 24/09/2026. Inclui o arquivo oculto `.htaccess`.

## Para voltar o site publicado

1. No Gerenciador de Arquivos da Hostinger, abra `public_html`.
2. Ative "mostrar arquivos ocultos".
3. Apague o conteúdo atual e envie todo o conteúdo de `site-no-ar/`, inclusive o `.htaccess`.

## Para voltar o código

O commit `b5151f9` é o código daquele site. Esta branch só acrescenta a pasta `site-no-ar/` e este arquivo.
