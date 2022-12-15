const express = require('express')
const {v4: UUIDV4} = require('uuid')

const app = express();
app.use(express.json())
const db = [];

app.post('/account', (request, response) => {
    const {cpf, name} = request.body;
    const id = UUIDV4()
    const customer = {
        id,
        cpf,
        name,
        statement: []
    }
    const customerAlreadyExists = db.some(customer => customer.cpf === cpf);
    if(customerAlreadyExists){
        return response.status(400).json({error: "customer already exists"})
    }
    db.push(customer)
    return response.status(201).send()

})

app.get('/statement/:cpf', (request, response)=>{
    const {cpf} = request.params;
    const customer = db.find(customer => customer.cpf === cpf);
    if(customer){
        const statement = customer.statement;
        return response.json(statement)
    }else{
        return response.status(400).json({error: "customer not exists"})
    }
})
const PORT = 4000;
app.listen(PORT, () => console.log(`Server run`))