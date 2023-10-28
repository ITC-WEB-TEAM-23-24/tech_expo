import React from "react";
import data from "./data.js";
import "./style.css";
import Button from '@mui/material/Button';

export default function Page() {
    const link_url = window.location.href; // Get the current URL
    const compi_id = link_url.split("/"); // Retrieve the hostel value from navigation param
    const compi = compi_id[compi_id.length - 1];
    const compi_data = data[compi];

    

    return(
        <div className="container">
            <h1 className="page-title">{compi_data.title}</h1>
            <div className="bottomContainer">
                <div className="left">
                    <p>{compi_data.detail}</p>
                    
                        <Button 
                            variant="contained"
                            color="secondary"
                            style={{    fontSize: '0.9rem', fontWeight: 'bold', width: '120px'}}
                            href={compi_data.link}>Register</Button>
                        {/* <Button variant="contained">Contained</Button> */}
                </div>
                    <img className="main-img" src={compi_data.dataImage} alt="compi" />
            </div>
        </div>
    )
}