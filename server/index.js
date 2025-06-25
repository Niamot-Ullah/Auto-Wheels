const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();
const cors = require('cors');
var admin = require("firebase-admin");



const decoded = Buffer.from(process.env.FB_SERVICE_KEY, 'base64').toString(
    'utf-8'
)
var serviceAccount = JSON.parse(decoded)
const { getAuth } = require('firebase-admin/auth')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// middleware 

app.use(
    cors({
        origin: ['http://localhost:5173','https://ph-assaignment-11-renting-cars.web.app'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    })
)
app.use(express.json());

// MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
// jwt middlewares
const verifyJWT = async (req, res, next) => {
    const token = req?.headers?.authorization?.split(' ')[1]
    // const token = req?.cookies?.token
    console.log(token)
    if (!token) return res.status(401).send({ message: 'Unauthorized Access!' })
    try {
        const decoded = await admin.auth().verifyIdToken(token)
        req.tokenEmail = decoded.email
        console.log(decoded)
        next()
    } catch (err) {
        console.log(err)
        return res.status(401).send({ message: 'Unauthorized Access!' })
    }
    // verify token using firebase admin sdk

    // jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    //   if (err) {
    //     console.log(err)
    //     return res.status(401).send({ message: 'Unauthorized Access!' })
    //   }
    //   req.tokenEmail = decoded.email
    //   next()
    // })
}


async function run() {
    try {
        const database = client.db('auto-wheels');
        const carCollections = database.collection('cars');
        const orderCollections = database.collection('orders');
        // for all cars 
        app.get('/cars', async (req, res) => {
            const allCars = await carCollections.find().sort({ model: 1 }).toArray();
            res.send(allCars);
        })
        // for limited cars 
        app.get('/featured-cars', async (req, res) => {
            const cursor = carCollections
                .find({})
                .sort({ price: -1 }) // Sort by deadline descending (latest first)
                .limit(6);
            const result = await cursor.toArray();
            res.send(result)
        })
        // get single car by id for car details
        app.get('/car/:id', async (req, res) => {
            const id = req.params.id
            const filter = { _id: new ObjectId(id) }
            const car = await carCollections.findOne(filter);
            res.send(car);
        })
        // get cars by email for my-cars
        app.get('/my-cars/:email', async (req, res) => {
            const email = req.params.email
            const filter = { email: email }
            const cars = await carCollections.find(filter).toArray();
            res.send(cars);
        })

        //get all order by email for personal orders
        app.get('/my-orders/:email', verifyJWT, async (req, res) => {
            const decodedEmail = req.tokenEmail
            const email = req.params.email

            if (decodedEmail !== email) {
                return res.status(403).send({ message: 'Forbidden Access!' })
            }

            const filter = { customerEmail: email }
            const allOrders = await orderCollections.find(filter).toArray();
            res.send(allOrders);
        })


        //handel order post request
        app.post('/place-order/:carId', async (req, res) => {
            const id = req.params.carId;
            const orderData = req.body;
            const result = await orderCollections.insertOne(orderData);
            res.send(result);
        })

        app.post('/add-car', async (req, res) => {
            const car = req.body;
            const result = await carCollections.insertOne(car)
            res.send(result);
        })
        // update my cars 
        app.put('/update-car/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const query = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: data,
            }
            const result = await carCollections.updateOne(query, updatedDoc);
            res.send(result)
        })
        //update my bookings
         app.patch('/update-my-orders/:id', async (req, res) => {
            const id = req.params.id
            const data = req.body
           
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: data,
            }
            const allOrders = await orderCollections.updateOne(filter,updatedDoc);
            res.send(allOrders);
        })

        //delete car by id from personal cars
        app.delete('/car/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const result = await carCollections.deleteOne(filter)
            res.send(result);
        })
        // delete order by id from personal orders
        app.delete('/place-order/:carId', async (req, res) => {
            const id = req.params.carId;
            const result = await orderCollections.deleteOne({ _id: new ObjectId(id) });
            res.send(result);
        })



        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Server is running');
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
