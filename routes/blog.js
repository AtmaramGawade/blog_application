
import { Router } from 'express';


const router = Router();

let posts = [];


router.get('/', (req, res)=>{
    res.render('index', {posts});
})

router.get('/new',(req, res)=>{
    res.render('new-post');
});


router.post('/new', (req, res)=>{
    const {title , content} = req.body;
    posts.push({id:posts.length+1, title, content});
    res.redirect('/');
});

router.get('/edit/:id', (req, res)=>{
    const post = posts.find(p => p.id === parseInt(req.params.id) );
    if (post) {
        res.render('edit-post', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

router.post('/edit/:id', (req, res)=>{
    const post = posts.find(p => p.id === parseInt(req.params.id) );
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.redirect('/');
});

export default router;