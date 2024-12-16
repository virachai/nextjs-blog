import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  if (email) {
    res.status(200).json({ text: 'Hello' });
  } else {
    res.status(400).json({ error: 'Email is required' });
  }
}
