import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const pasta = './imagens';
const arquivos = await readdir(pasta);

for (const arquivo of arquivos) {
  if (!arquivo.toLowerCase().endsWith('.webp')) continue;

  const origem = path.join(pasta, arquivo);
  const destino = path.join(pasta, `otimizado-${arquivo}`);

  await sharp(origem)
    .resize(1600, 1600, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(destino);

  console.log(`Otimizada: ${arquivo}`);
}