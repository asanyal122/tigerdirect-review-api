const express = require("express")
const app = express()
const {fetchPage} = require("./api")


app.use(express.json())




app.get('/',(req,res) => {
    res.send('Hello World');
})


app.get('/api/reviews', (req,res) => {
    res.status(405),send("Method not allowed!")
})

app.post('/api/reviews', async (req,res) => {
    
        try{
            const reviews = await fetchPage(req.body.url);
            res.status(200).send(reviews);
        }
        catch(err){
            res.send("Some Error Occured!")
        }
    
})

app.listen(3000, () => console.log("listening to port 3000..."))