import {readFile,mkdir,copyFile,access} from 'node:fs/promises';import path from 'node:path';
const folder=process.argv[2];if(!folder){console.error('Uso: npm run photos -- "C:\\caminho\\das\\fotos"');process.exit(1)}
const names=JSON.parse(await readFile(new URL('../photos.json',import.meta.url),'utf8'));await mkdir('assets',{recursive:true});let count=0;
for(let i=0;i<names.length;i++){const dest=`assets/photo-${String(i+1).padStart(2,'0')}.jpg`;try{await access(path.join(folder,names[i]));await copyFile(path.join(folder,names[i]),dest);console.log(`OK: ${names[i]} -> ${dest}`);count++}catch{console.error(`Faltando: ${names[i]}`)}}
console.log(`${count}/${names.length} fotos importadas.`);if(count!==names.length)process.exitCode=1;
