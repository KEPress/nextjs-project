import React, { Fragment } from 'react'
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'
import Details from '@/widgets/meets/details'


const Meetup = (props) => {

    return (<Fragment>
                <Head>
                    <title>{props.data.title}</title>
                    <meta name={'details'} content={props.data.details } />
                </Head>
                <Details image={props.data.image} title={props.data.title} address={props.data.address} details={props.data.details} />
           </Fragment>)
}

export default Meetup

export const getStaticProps = async (context) => {

    const meetId = context.params.meetId

    const client = await MongoClient.connect(`mongodb+srv://KEPressUser:KE_Pressltd2025@cluster0.lp345ou.mongodb.net/nextjs`)
    
    const database = client.db(), collection = database.collection('meets')

    const meet = await collection.findOne({ _id: new ObjectId(meetId) })

    client.close()
  
    return { 
        props: { 
            data: {
                id: meet._id.toString(),
                title: meet.title,
                address: meet.address,
                image: meet.image,
                details: meet.details
            }
        }
    }
}

export const getStaticPaths = async () => {

    const client = await MongoClient.connect(`mongodb+srv://KEPressUser:KE_Pressltd2025@cluster0.lp345ou.mongodb.net/nextjs`)
    const database = client.db(), collection = database.collection('meets')

    const data = await collection.find(Object(), { _id: 1 }).toArray()

    client.close()

    return {
        fallback: 'blocking',
        paths: data.map((item) => ({ params: { meetId: item._id.toString()}}))

    }
}
