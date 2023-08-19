import { useRouter } from 'next/router'
import Head from 'next/head'
import Form from "@/widgets/meets/form"

const NewMeetup = () => {

    const router = useRouter()

    const addHandle = async (data) => {
        const response = await fetch(`/api/new`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })

        const test  = await response.json()
        
        console.log(test)

        router.push(`/`)
    }

    return (<>
              <Head>
                    <title>React | Add </title>
                    <meta name={'description'} content={'Add new Meet Up'} />
              </Head>
             <Form addMeetUp={addHandle} />
          </>)
}

export default NewMeetup