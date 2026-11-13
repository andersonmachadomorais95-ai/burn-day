import {mkdir,copyFile,cp,access} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const f of ['index.html','style.css','app.js']) await copyFile(f,`dist/${f}`);
try {await access('assets');await cp('assets','dist/assets',{recursive:true});}catch{console.warn('Adicione as fotos em assets antes de publicar. Veja README.md.');}
console.log('Build pronto em dist/');
