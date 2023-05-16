import React,{Fragment} from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
function Backdrop(){
return(
<div className={classes.backdrop}>

</div>
)
}
function ModalOverlay(props){
return(
<div className={classes.modal}>
   
{props.children}
    </div>


)
}
const PortalElement=document.getElementById('overlays')
export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop></Backdrop>,PortalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </Fragment>
  )
}
