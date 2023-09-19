import React from "react";
import kala from "../../image/Rectangle 8.jpg";
import King from "./King";
// import IMG from "./gandus/main.jpg";
import "./teams.scss";
const Teams = () => {
  // console.log(teamsbhai);
  return (
    <>
      <div className="kalaghoda">
        <img className="kala" src={kala} alt="" />

        <div className="containerTeams">
          <div className="theTeams">
            <h1 className="gandu">THE TEAMS</h1>
          </div>
          <p className="gandu main">Meet our main power !</p>
          <div className="gandu btns">
            <button className="btn1">FORTNITE</button>
            <button className="btn1">FIFA28</button>
            <button className="btn1">BGMI</button>
          </div>
          <div className="teams">
            {King.map((data) => {
              console.log(` ${data.img}`);
              console.log(` ${data.player1}`);
              return (
                <>
                  <div className="teamcontainer">
                    <img src={data.img} alt="" />
                    <h1>{data.name}</h1>
                    <p>BGMI</p>
                    {/* <img src={data.player1} alt="" />
                    <img src={data.player2} alt="" />
                    <img src={data.player3} alt="" />
                    <img src={data.player4} alt="" /> */}
                    <button>TEAM PAGE</button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
