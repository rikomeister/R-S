import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { DB } from './db';

const app: Application = express();
const port = 3000;
const db = new DB();

app.use(bodyParser.json());
app.use(cors());

app.post('/register', async (req: Request, res: Response) => {
    const { firstName, email, password } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO registration (firstName, email, password) VALUES (?, ?, ?)',
            [firstName, email, password]
        );
        res.status(200).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error registering user', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
