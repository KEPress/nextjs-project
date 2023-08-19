import classes from  './layout.module.scss'
import Navigate from './navigate'

const Layout = (props) => {

    return (<div>
              <Navigate />
              <main className={classes.main}>{props.children}</main>
           </div>)

}

export default Layout