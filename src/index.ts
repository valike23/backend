import express, { Request, Response } from 'express';
let {PORT} = process.env;
const app = express();
PORT = PORT || '3000';
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
