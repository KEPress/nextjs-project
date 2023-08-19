import classes from './navigate.module.scss'
import Link from 'next/link'

const Navigate = () => {

    return (<header className={classes.header}>
                <div className={classes.logo}>Meet Ups </div>
                <nav>
                    <ul>
                        <li>
                            <Link href={`/`}>All Meetups</Link>
                        </li>
                        <li>
                            <Link href={`/new`}>Add New Meetup</Link>
                        </li>
                    </ul>
                </nav>
            </header>)

}

export default Navigate