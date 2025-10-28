import express from 'express';
import cors from 'cors';
import resourceRoutes from './routes/resourceRoutes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/resources', resourceRoutes);

app.get('/', (req, res) => {
  res.send('CloudSmart API is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
