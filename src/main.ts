
import express from 'express'

import { Router, request, response } from 'express'


const app = express();

const route = Router()

app.use(express.json())
console.log('opa');
route.get('/', (Request, Response) => {
  response.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(3000, () => 'server running on port 3333')

