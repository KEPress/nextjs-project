import { useRouter } from 'next/router'
import Card from '@/widgets/interface/card'
import classes from  './item.module.scss'

const Item = (props) => {

    const router = useRouter()

    const detailHandle = () => {
        router.push(`/${props.id}`)
    }

    return (<li className={classes.item}>
                <Card>
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <address>{props.address}</address>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={detailHandle}>Show Details</button>
                    </div>
                </Card>
           </li>)

}

export default Item