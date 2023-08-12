import { getPlaiceholder } from "plaiceholder";
import path from 'path';
import fs from "node:fs/promises";
import { imagePlaceholders } from "./image-placeholders";

const publicFolder = path.join(process.cwd(), 'public');

export async function generateImagePlaceholders(srcs: string[]) {
  for (let src of srcs) {
    let fullPath = path.join(publicFolder, src);
    const buffer = await fs.readFile(fullPath);
    imagePlaceholders[src] = (await getPlaiceholder(buffer, { size: 4 })).base64;
  }
}