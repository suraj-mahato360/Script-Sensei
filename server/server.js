const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const fetch = require("node-fetch");
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.post('/generate', async (req, res) => {
const prompt = req.body.message;
    const options = {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role: 'user', content:prompt}],
            temperature: 0.5,
        })
    }
    try{
       const response = await fetch('https://api.openai.com/v1/chat/completions', options)
       const data = await response.json()
       res.send(data)
       console.log(data);
    }catch (error) {
        console.error(error);
    }
})

app.listen(PORT, ()=> console.log('server running on port ' + PORT))