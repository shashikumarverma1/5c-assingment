import React, { useContext  } from "react";
import {useNavigate} from 'react-router-dom'
import { FcApproval } from "react-icons/fc";
import '../Styles/Details.css'
import { GlobalStore } from "../App";
const Details = () => {
  const navigate=useNavigate()
  const Follwers=()=>{
      
      navigate('Followers')
  }
   const {val}=useContext(GlobalStore)
   
  return (
    <div style={{ margin: 10 }}>
     
      <div style={{ display: "flex", margin: "2rem" }}>
        
        <div style={{ width: "30vw" }}>
        <div style={{marginLeft:'30%'}}> <img
                 src={val.owner.avatar_url}
                 className='profile' alt="images"
                />
                
                
                </div>
                <b style={{margin:'15%'}}>
                {" "}
                <FcApproval /> verified by Github{" "}
              </b>
                <span style={{margin:'15%',marginTop:'50%'}}>
              
            </span>
          <div style={{ display: "flex", justifyContent: "center" }}>
            
          </div>
          <div style={{ margin: "1rem", }}>
             <button onClick={()=>Follwers()}>Followers</button>
            <p>Github confirm that this app meets all requirement for verification</p>
            <h3>Catagary</h3>
            <div style={{ display: "flex" }}>
              <p
              className="Catagary"
              >
                 reviw
              </p>
              <p
             className="Catagary"
              >
                IDEs
              </p>
              <p
              className="Catagary"
              >
                Free
              </p>
              <p
             className="Catagary"
              >
                Paid
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="RightContainer">
          <b>Application</b>
          <h2>Gitpod.io</h2>
          <button className="setUpPlan">set up a plan</button>
          <br />
          <span>
            <b>Gitpod</b>
            <p><h2>Description</h2> {val.description}</p>
          </span>
          <p>
            a way of exit or entrance : a road, path, channel, or course by
            which somethrough the ice.  a way of exit or entrance : a road, path, channel, or course by
            which somethrough the ice.
           
          </p>
          <p>
            a way of exit or entrance : a road, path, channel, or course by
            which somethrough the ice.  a way of exit or entrance : a road, path, channel, or course by
            which somethrough the ice.
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
