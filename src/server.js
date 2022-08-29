

const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const url = process.env.URL
const token = process.env.ASTRA_TOKEN
// const url = 'https://7345f022-3c24-48b8-8601-cb5efc1ccb05-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
// const token = 'AstraCS:ALyaIOCPFZaRqYjtKzXjSOYH:ba568c2ae98a95938e53efe53ec19c46cd1ee6740c6305d0639bdaaa15132357'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'X-Cassandra-Token': token,
        },
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json',
        },
        data: formData,
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

// get one post
app.get('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId

    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json',
        },
    }
    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

app.put('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId
    const data = req.body.data

    const options = {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        },
        data,
    }

    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

app.delete('/tickets/:documentId', async (req, res) => {
    const id = req.params.documentId

    const options = {
        method: 'DELETE',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        },
    }

    try {
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})

app.listen(PORT, () => console.log('server running on PORT ' + PORT))