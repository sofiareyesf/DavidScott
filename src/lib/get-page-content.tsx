import path from 'path'
import yaml from 'js-yaml'
import fs from 'fs';

const pagesFolder = path.join(process.cwd(), 'content', 'pages');

export default async function getCMSFileContent(fileName: string) {
  const file = fs.readFileSync(`${pagesFolder}/${fileName}`, 'utf8');
  return yaml.load(file) as any;
}