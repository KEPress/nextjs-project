import Item from './item'
import classes from './list.module.scss'

const List = (props) => {

    return (<ul className={classes.list}>
                {props.meetups.map((meetup) => (
                    <Item key={meetup.id} id={meetup.id} image={meetup.image} title={meetup.title} address={meetup.address} details={meetup.details} />
                ))}
           </ul>)

}

export default List