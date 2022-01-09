import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  resource: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.info(req);

  res.status(200).json({ resource: 'Hello world' });
}
