import express from "express"
import bodyParser from "body-parser"
import SelecaoController from "./app/controllers/SelecaoController.js"

const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROTAS
app.get('/selecoes', SelecaoController.index)
app.post('/selecoes', SelecaoController.store)
app.put('/selecoes/:id', SelecaoController.update)
app.delete('/selecoes/:id', SelecaoController.delete)


export default app 
