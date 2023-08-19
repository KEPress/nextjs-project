import { MongoClient } from 'mongodb'

const Handler = async (request, response) => {
    if (request.method === 'POST') {
        const data = request.body
        const { title, image, address, details } = data
    
        const client = await  MongoClient.connect(`mongodb+srv://KEPressUser:KE_Pressltd2025@cluster0.lp345ou.mongodb.net/nextjs`)
        const database = client.db()

        const collection = database.collection('meets')

        const result = await collection.insertOne(data)

        console.log(result)

        client.close()

        response.status(201).json({ message: 'Meetup Added'})
    } else {
        response.status(401).json({ error: 'Method not Allowed'})
    }
}


export default Handler