import express from 'express';
import { submitSubmission, getSubmission, getAllSubmissions } from '../controllers/submissionsController';

const router = express.Router();

router.post('/submit', submitSubmission);
router.get('/read', getSubmission);
router.get('/read-all', getAllSubmissions);

export default router;
