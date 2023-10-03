const express = require("express")
const app = express()
const {data} = require("./data")
const url = require("url")
app.use(express.json())
app.get ("/allproducts",(req,res) => {
    // res.writeHead(200,{"content-Type": "text/html"})
    res.send(data)
})
app.get ("/allproducts/:id",(req,res) => {
    const id = req.params.id
    const product = data.filter((prod) =>prod.id==id)
    // const product = data.filter((prod) => {
    //     if (prod.id == id) return prod
    // })
    console.log(product)
    res.send(product)
})
app.get ("/allproducts/items/:category",(req,res) => {
    const cat = req.params.category
    const product = data.filter((prod) =>prod.category===cat)
    console.log(product)
    res.send(product)
})

app.delete("/allproducts/delete/:id", (req,res) => {
    const id = Number(req.params.id);
    const product = data.filter((prod) => prod.id !== id)
    res.send(product)
    console.log(product)
})
app.post("/allproducts/additem", (req,res) => {
    const [info] = req.body
    console.log(info)
    data.push(info)
    res.send(data)
})
app.put("/allproducts/addinfo/:id", (req,res) => {
    const info = req.body
    const id = Number(req.params.id);
    const product = data.find((prod) => prod.id == id)
    // product.
    res.send({...product, ...info})
})

app.listen (8090, ()=> {
    console.log("server started")
})