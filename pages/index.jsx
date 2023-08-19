//NOTE: the main fileName MUST be index.jsx/index.js
import { Fragment } from 'react'
import { MongoClient } from 'mongodb'
import Head from 'next/head'
import List from '@/widgets/meets/list'

const dummy = [
    {
        id: 'M1',
        title: 'First Link',
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Frankfurter_R%C3%B6mer_2019.jpg/1024px-Frankfurter_R%C3%B6mer_2019.jpg`,
        address: 'Frankfurt, Germany',
        details: 'Let us meet there'
    },
    
    {
        id: 'M2',
        title: 'Second Link',
        image: `https://images.pexels.com/photos/5825711/pexels-photo-5825711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        address: 'Brechin Castle',
        details: 'Second Meetup'
    }
]

const Homepage = (props) => {
  
    return (<Fragment>
                <Head>
                    <title>React | Home </title>
                    <meta name={'description'} content={'Browse a huge list of highly active React meetings'} />
                </Head>
                <h1>Homepage</h1>
                <List meetups={props.meetups} />
            </Fragment>)

}

//Must have a page to export by default nextjs does not recognize React Functional Component
export default Homepage


//Pre-rendered via getStaticProps (NOTE: can utilize export const function type structure)
 export const getStaticProps = async () => {

    const client = await  MongoClient.connect(`mongodb+srv://KEPressUser:KE_Pressltd2025@cluster0.lp345ou.mongodb.net/nextjs`)
    const database = client.db(), collection = database.collection('meets')

    const data = await collection.find().toArray()

    client.close()

    return {
        props: { meetups: data.map(item => ({
                id: item._id.toString(),
                title: item.title,
                address: item.address,
                image: item.image
            })) 
        },
        revalidate: 3600
    }
}





/***
 * 
 export const getServerSideProps = async (context) => {
    const request = context.request
    const response = context.response

    return {
        props: { meetups: dummy }
    }
}
 * 
 ***/
