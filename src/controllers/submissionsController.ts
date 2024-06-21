import { Request, Response } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import { Submission } from '../models/submission';

const dbFilePath = './db.json';

const readDatabase = (): Submission[] => {
  const data = readFileSync(dbFilePath, 'utf8');
  return JSON.parse(data) as Submission[];
};

const writeDatabase = (data: Submission[]) => {
  writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
};

export const submitSubmission = (req: Request, res: Response) => {
  const submissions = readDatabase();
  const newSubmission: Submission = req.body;
  submissions.push(newSubmission);
  writeDatabase(submissions);
  res.status(201).send(newSubmission);
};

export const getSubmission = (req: Request, res: Response) => {
  const submissions = readDatabase();
  const index = parseInt(req.query.index as string, 10);
  if (index < 0 || index >= submissions.length) {
    res.status(404).send({ message: 'Submission not found' });
  } else {
    res.status(200).send(submissions[index]);
  }
};

export const getAllSubmissions = (req: Request, res: Response) => {
  const submissions = readDatabase();
  res.status(200).send(submissions);
};
