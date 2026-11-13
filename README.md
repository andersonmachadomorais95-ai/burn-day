# BURN DAY 🔥

Site de aniversário do Breno (Burn), responsivo, em português, feito com HTML, CSS e JavaScript. Sem dependências de execução, banco de dados ou chaves de API.

## Atenção: fotos

O ambiente de criação não conseguiu baixar os 15 anexos. As fotos NÃO estão incluídas neste pacote. O álbum está implementado com 15 posições e os nomes originais estão em `photos.json`.

Salve todas as 15 fotos enviadas no WhatsApp numa pasta, preservando os nomes. Na pasta do projeto execute:

```powershell
npm run photos -- "C:\Users\seu-usuario\Downloads\fotos-burn"
```

O importador copia as imagens para `assets/photo-01.jpg` até `assets/photo-15.jpg`. Também é possível adicionar manualmente com esses nomes. Confira a ordem no álbum e ajuste títulos/categorias no início de `app.js`. A foto principal é a posição 3 (`data-photo="3"` em `index.html`); escolha a foto de infância desejada.

## Visualizar

Com Node.js 18 ou superior:

```sh
npm run dev
```

Abra http://127.0.0.1:4173. Não precisa executar npm install. Também funciona abrindo index.html diretamente, com possível restrição do navegador para copiar texto.

## GitHub e Vercel

1. Extraia o ZIP e adicione as fotos conforme acima.
2. Crie um repositório no GitHub e envie o conteúdo da pasta `burn-day` (index.html e package.json na raiz).
3. Importe esse repositório na Vercel. O arquivo vercel.json já define build `npm run build` e saída `dist`.
4. Publique. Não há variáveis de ambiente.

## Conteúdo

- O evento: capa editorial com foto, ingresso e selo.
- Arquivo confidencial: 15 fotos, filtros e ampliação com setas e Escape.
- Ctrl+C da mãe: mensagem fornecida, com filho substituído por irmão e assinatura adaptada.
- Central de parabéns: gerador em três estilos, copiar mensagem, vela interativa e confetes.

Edite textos em index.html; fotos e mensagens em app.js; cores e layout em style.css. Fontes Google são opcionais; há fontes locais de fallback. Respeita prefers-reduced-motion. Não coleta dados, não tem analytics nem mural compartilhado. Publicar na Vercel disponibiliza as fotos aos visitantes do site.

## Verificação

```sh
npm run check
npm run build
```

Abra as quatro abas, filtros, foto ampliada, copiar mensagem e vela antes de compartilhar.
