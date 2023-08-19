import { useRouter } from 'next/router'
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

    return (<Form addMeetUp={addHandle} />)
}

export default NewMeetup