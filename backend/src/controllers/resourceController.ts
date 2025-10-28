import type { Request, Response } from 'express';

export const getResources = async (req: Request, res: Response) => {
  const data = [
    { id: 1, name: 'EC2 Instance', cost: 120 },
    { id: 2, name: 'S3 Bucket', cost: 45 }
  ];
  res.json(data);
};
