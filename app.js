import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import blogRoutes from './routes/blog.js';

const app = express();
const _fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_fileName);

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', blogRoutes);

const port = 3000;

app.listen( port, ()=>{
    console.log(`server is running at port ${port}`);
})