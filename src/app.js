import express from "express"

import productsRouter from "./routes/products.js"
import cartsRouter from "./routes/carts.js"

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Server On")
})

app.use("/", productsRouter);
app.use("/", cartsRouter);

const port = 8080;

app.listen(port, () => {
    console.log('Server on PORT ' + port)
})