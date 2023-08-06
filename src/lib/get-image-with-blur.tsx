import { getPlaiceholder } from "plaiceholder";
import path from 'path';
import fs from "node:fs/promises";

const publicFolder = path.join(process.cwd(), 'public');

export async function getImagePlaceholder(src: string) {
  src = path.join(publicFolder, src);
  const buffer = await fs.readFile(src);
  return (await getPlaiceholder(buffer, { size: 8 })).base64;
};