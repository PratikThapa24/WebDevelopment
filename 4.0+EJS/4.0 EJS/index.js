import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express()
const port = 3000;
const d = new Date();
let day = d.getDay();

app.get("/", (req, res) => {
    if (day == 0 | day == 6) { // week day
        res.render("index.ejs", 
    {description : "It's the weekend, it's time to have fun!" })
    } else {
        res.render("index.ejs", 
        {description : "It's a weekday, it's time to work hard!"})
    }    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

