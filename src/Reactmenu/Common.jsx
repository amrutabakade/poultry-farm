import { NavLink } from "react-router-dom"
import styles from "./Common.module.css"
export default function Common(props)
{
    return<>
    <div className="wrapper">
  <div className="box-left">
        <p className="paragraph">
         {props.name}
        <br/>
        <strong className="brand-name">EggCellent Poultry!!!</strong>
        </p>
        <div className="mt-3">
            <NavLink to= {props.visit} className="btn btn-outline-info">{props.btname} </NavLink>
        </div>
    </div>
                    
  </div>
  <div className="box-right"><img src= {props.image} alt="star" className="eggs" width={props.widths}/></div>
    </>
}