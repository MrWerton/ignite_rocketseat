const express = require('express')
const {v4: UUIDV4} = require('uuid')

const app = express();
app.use(express.json())
const db = [];

function verifyIfExistsAccountCPF(request, response, next) {
    const { cpf } = request.headers;
  
    const customer = db.find(customer => customer.cpf === cpf);
  
    if(!customer)
      return response.status(400).json({ error: 'Customer not found!' });
  
    request.customer = customer;
    return next();
  
  }
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

app.get('/statement/',verifyIfExistsAccountCPF, (request, response)=>{
    const {customer} = request;
    const statement = customer.statement
    return response.json(statement)
})
app.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
    const { description, amount } = request.body;
    const { customer } = request;
    const statementOperation = {
      description,
      amount,
      created_at: new Date(),
      type: 'credit'
    };
  
    customer.statement.push(statementOperation);
  
    return response.status(201).send();
  });
const PORT = 4000;
app.listen(PORT, () => console.log(`Server run`))