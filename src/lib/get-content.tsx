import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const contentFolder = path.join(process.cwd(), 'content');

export default async function getContent(contentName: string) {

    let fullFilePath = path.resolve(contentFolder, contentName);
    let filesInFolder = fs.readdirSync(fullFilePath);
  
    return filesInFolder.map(filename => {
      const file = fs.readFileSync(`${contentFolder}/${contentName}/${filename}`, 'utf8');
      const matterData = matter(file);
  
      return {
        slug: filename.slice(0, filename.indexOf('.')),
        ...matterData.data
      } as any
    })
  }