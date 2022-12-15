const express = require('express')
const {v4: UUIDV4} = require('uuid')

const app = express();
app.use(express.json())
const db = [];

app.post('/account', (request, response) => {
    const {cpf, name} = request.body;
    const id = UUIDV4()
    const account = {
        id,
        cpf,
        name,
        statement: []
    }
    const customerAlreadyExists = db.some(customer => customer.cpf === cpf);
    if(customerAlreadyExists){
        return response.status(400).json({error: "customer already exists"})
    }
    db.push(account)
    return response.send(201).send()

})


const PORT = 4000;
app.listen(PORT, () => console.log(`Server run`))