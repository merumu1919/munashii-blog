import { NextApiRequest, NextApiResponse } from 'next';
import { generatePost } from '../../lib/generator';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const post = await generatePost();
  const filePath = path.join(process.cwd(), 'data/posts.json');
  const posts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  posts.unshift(post);
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  res.status(200).json({ status: 'success', post });
}