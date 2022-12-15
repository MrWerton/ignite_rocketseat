const express = require('express')

const app = express();
app.use(express.json())

app.get('/courses', (request, response)=>{
   return response.json([{title: 'Course One'}, {title: 'Course Two'}])
})
app.get('/courses', (request, response)=>{
    const query = request.query;
   return response.json({title: `Course ${query}`})

})
app.post('/courses', (request, response)=>{
   const body = request.body;
   return response.json(body)
})

app.delete('/courses/:id', (request, response)=>{
    const id = request.params;
    return response.json({message: `Deleted ${id}`})
})
app.path('/courses/:id', (request, response)=>{

    const id = request.params;
    return response.json({message: `updated ${id}`})
})
app.put('/courses/:id', (request, response)=>{
    const id = request.params;
    return response.json({message: `updated ${id}`})
})
const PORT = 3000;

app.listen(PORT, ()=>console.log(`server run in http://localhost:${PORT} 🚀🚀`))