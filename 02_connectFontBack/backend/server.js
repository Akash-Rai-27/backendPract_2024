import 'dotenv/config'

import express from 'express'

const app = express();

app.get('/',(req,res)=>{
  res.send("Home")  
});

app.get('/api/jokes',(req,res)=> {
    const jokes = [
        {
            id:1,
            title :'A joke',
            content : 'This is a joke'
        },
        {
            id:2,
            title:'another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title:'another joke',
            content : 'This is another jokee'
        },
        {
            id:4,
            title:'another joke',
            content:'this is our joke'
        },
        {
            id:5,
            title:'Last joke',
            content:'life is joke'
        }
    ]
    res.send(jokes);
});

const port = process.env.PORT || 4000;
app.listen(port, ()=> {
    console.log(`Server running at ${port}`);

})