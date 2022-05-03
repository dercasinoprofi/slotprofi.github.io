const mongo = require('mongodb').MongoClient
const objectid = require('mongodb').ObjectId
const express = require('express')
const { ObjectId } = require('mongodb')
var cors = require('cors')


const app = express()
const port = 3002
const url = 'mongodb://127.0.0.1:27017'
const including = { mainThumb: 1, tags: 1, iframeSrc: 1, localThumb: 1, germanTitle: 1, germanSlug: 1 }
const dbName = 'casinoapi'
const slotsTable = "slots"
let db
let slots
app.use(cors())

app.use(express.json())

mongo.connect(
    url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db(dbName)
        slots = db.collection(slotsTable)
    }
)

app.get('/counter', (req, res) => {
    db.collection(slotsTable).count((err, counter) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
        }
        res.status(200).json({ counter })
    })
})

app.get('/slots', (req, res) => {
    const limit = parseInt(req.query.limit)
    const skip = parseInt(req.query.skip)
    console.log(limit, skip, "limit and skip")
    const provider = req.query.provider
    const myFilter = provider ? { provider: provider } : {}
    const order = { _id: -1 }
    slots.find(myFilter).sort(order).limit(limit).skip(skip).toArray((err, slots) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
        }
        res.status(200).json({ slots })
    })
})

app.get('/slot', (req, res) => {
    let slug = req.query.slug
    slots.findOne({ slug: slug }, (err, game) => {
        if (err) {
            console.error(err)
        }
        res.status(200).json({ game })
    })
})

app.get('/videos', (req, res) => {
    const includeTags = req.query.includeTags
    const excludeTags = req.query.excludeTags
    const skip = parseInt(req.query.skip)
    const limit = parseInt(req.query.limit)
    const order = { _id: -1 }
    const myFilter = { tags: { $all: includeTags, $nin: excludeTags } }

    // console.log("\n\n", includeTags, "include")
    // console.log(excludeTags, "exclude")
    // console.log(skip, "skip")
    // console.log(limit, "limit")
    // console.log(order, "order")
    // console.log(myFilter, "myfilter")

    videos.find(myFilter).project(including).sort(order).limit(limit).skip(skip).toArray((err, items) => {
        if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
        }
        res.status(200).json({ videos: items })
    })
})

app.get('/video', (req, res) => {
    let id = req.query.id
    const video = videos.findOne({ _id: ObjectId(id) }, { projection: including }, (err, item) => {
        if (err) {
            console.error(err)
        }
        res.status(200).json({ item })
    })
})

app.get('/video/slug', (req, res) => {
    const slug = req.query.slug
    const video = videos.findOne({ germanSlug: slug }, { projection: including }, (err, item) => {
        if (err) {
            console.error(err)
        }
        res.status(200).json({ item })
    })
})

app.get('/video-count', (req, res) => {
    const result = videos.count({}, (err, item) => {
        if (err) {
            console.error(err)
        }
        res.status(200).json({ numberOfVideos: item })
    })
})

app.listen({ port, host: '0.0.0.0' }, () => console.log('api server running on port', port))