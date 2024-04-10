const express = require('express');

const app = express();
app.use(express.json());

const database = {
    proximo_id : 2,
    tasks: [
    {
        id: 1,
        title: "Tarefa inicial",
        description: "Faremos nossa primeira implmentação API REST"
    }
    ]
}

app.get('/tasks', (req, res)=>{
    res.status(200).json(database.tasks);
})

app.post('/tasks', (req, res) => {
    const tarefa = req.body;
    tarefa.id = database.proximo_id;
    database.proximo_id++;
    console.log(tarefa);
    database.tasks.push(tarefa);

    res.status(201).send('tarefa criada', tarefa);

});

app.delete('/tasks/id:', (req, res) => {

});

app.listen(5555, ()=>{
    console.log('Executando servidor...')
})