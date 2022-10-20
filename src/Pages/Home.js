import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcApproval } from "react-icons/fc";
import "../Styles/Home.css";
import { GlobalStore } from "../App";
const Home = () => {
  const {getval} =useContext(GlobalStore)
  
  const [Name, setName] = useState("mralexgray");
  const [message, setmessage] = useState("Welcome to this world");
  let url = `https://api.github.com/users/${Name}/repos`;

  let navigate = useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => {
    Getdata();
  }, [Name]);
  async function Getdata() {
    try {
      let data = await axios.get(url);

      setdata(data.data);
    } catch (err) {
      
      setmessage(`sorry i think api limit exeed "${err.message} "`);
    }
  }

  const Detail = (e, i) => {
    // console.log(e)
    navigate(`Details`);
  };

  return (
  <div className="center">
      <div className="MainContaiNer" >
      <div>
        <h3 className="Err input">{message}</h3>
        <input
          type="text"
          placeholder="please write your name"
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <button className="button input" >search</button>
      </div>
      {data.map((e, i) => {
        return (
          <div key={i} className="ChildContainer" onClick={()=>getval(e)}>
            <div
              style={{ display: "flex", marginLeft: 40 }}
              onClick={() => Detail(e, i)}
            >
              <div className="Center-30">
                <div className="profileContainer">
                  {" "}
                  <img src={e.owner.avatar_url} className="profile" alt="images" />
                </div>
              </div>
              <div style={{ marginLeft: "5vw", padding: 4 }}>
                <div>
                  {" "}
                  <b className="TitleColor">{e.name}</b>
                  <b style={{ padding: 6, marginTop: 20 }}>
                    {" "}
                    <FcApproval />
                  </b>
                </div>
                <p>{e.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Home;
