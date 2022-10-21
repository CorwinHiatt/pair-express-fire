import express from 'express'
import { createClothing, getClothing } from './src/clothing.js'

const app = express()
app.use(express.json())

app.post('/clothing', createClothing)
app.listen(3035, () => console.log('Listening on http://localhost:3035... '))

app.get('/clothing', getClothing)
