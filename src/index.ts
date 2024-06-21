import express from 'express';
import bodyParser from 'body-parser';
import submissionsRoutes from './routes/submissions';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.json(true);
});

app.use('/submissions', submissionsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
