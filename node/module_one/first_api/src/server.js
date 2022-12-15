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
    db.push(account)
    return response.send(201).send()
})
const PORT = 4000;
app.listen(PORT, () => console.log(`Server run`))