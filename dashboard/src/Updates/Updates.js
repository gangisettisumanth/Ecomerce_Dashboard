import React from "react";
import "./Updates.css";
import img1 from "../images/team1.jpg"
import img2 from "../images/team2.jpg"
import img3 from "../images/team3.jpg"



const Updates = () => {
    
    const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        note: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        note: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Iron Man",
        note: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
    ];


    return (
        <div className="Updates">
        {UpdatesData.map((update) => {
            return (
            <div className="update">
                <img src={update.img} alt="profile" />
                <div className="noti">
                <div  style={{marginBottom: '0.5rem'}}>
                    <span>{update.name}</span>
                    <span> {update.note}</span>
                </div>
                    <span>{update.time}</span>
                </div>
            </div>
            );
        })}
        </div>
    );
};

export default Updates;