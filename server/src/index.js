import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/',(req, res) => {
    res.send('<h1>Hello Backend</h1>')
})