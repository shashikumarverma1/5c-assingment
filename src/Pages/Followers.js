import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../Styles/Followers.css'
import { GlobalStore } from "../App";
const Followers = () => {

    const navigate=useNavigate()
    const Back=()=>{
        navigate(-1)
       
    }
  return (
    <div className='center'>
       <div>
       <h4>Followers data not Found</h4><br/>
        <button className='backbutton' onClick={()=>Back()}>Back</button>
       </div>
    </div>
  )
}

export default Followers