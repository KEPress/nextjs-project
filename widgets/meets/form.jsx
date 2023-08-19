import { useRef } from 'react'
import Card from '@/widgets/interface/card'
import classes from './form.module.scss'

const Form = (props) => {

    const titleRefer = useRef(), imageRefer = useRef(), addressRefer = useRef(), detailsRefer = useRef()

    const submitHandle = (event) => {
        event.preventDefault()

        const title = titleRefer.current.value
        const image = imageRefer.current.value
        const address = addressRefer.current.value
        const details = detailsRefer.current.value

        const data = {
            title: title, 
            image: image, 
            address: address, 
            details: details
        }

        props.addMeetUp(data)

    }

    return (<Card>
                <form className={classes.form} onSubmit={submitHandle}>
                    <div className={classes.control}>
                        <label htmlFor='title'>Meetup Title</label>
                        <input type={'text'} required id={'title'} ref={titleRefer} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='image'>Meetup Image</label>
                        <input type={'url'} required id={'image'} ref={imageRefer} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='address'>Address</label>
                        <input type={'text'} required id={'address'} ref={addressRefer} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='details'>Details</label>
                        <textarea id={'details'} required row={5} ref={detailsRefer} />
                    </div>
                    <div className={classes.actions}>
                        <button className={classes.button}>Add Meetup</button>
                    </div>
                </form>
           </Card>)

}

export default Form