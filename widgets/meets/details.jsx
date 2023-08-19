import React from 'react'
import classes from './details.module.scss'

const Details = (props) => {

    return (<section className={classes.details}>
                <img src={props.image} />
                <h1>{props.title}</h1>
                <address>{props.address}</address>
                <p>{props.details}</p>
           </section>)

}

export default Details
