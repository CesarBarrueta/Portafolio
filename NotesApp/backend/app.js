import express from 'express'
const app = express()

const PORT = 777

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hola mundo')
})
