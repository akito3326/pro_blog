const express = require("express")
const app = express()
const port= 3333
// route 
app.get("/tinta",(req,res)=>{
    var a=1
    var b=2   ;
    var c= a + b
    return res.send("hello wworld fffff")
}
)

app.listen(port,()=>console.log(`examp app listening at http://localhost:${port}`))