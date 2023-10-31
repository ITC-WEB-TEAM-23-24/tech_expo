import React, { useEffect, useState } from "react";
import { compi_data, workshop_data } from "./data.js";
import "./style.css";
import Button from '@mui/material/Button';

export default function Page() {

    const [page_data, setPageData] = useState({});
    // var compi_data = {};

    useEffect(() => {
        const link_url = window.location.href; // Get the current URL
        const slicing = link_url.split("/"); // Retrieve the hostel value from navigation param
        const index = slicing[slicing.length - 1];
        const choice = slicing[slicing.length - 2];
        console.log(index);
        console.log(choice);
        const data = choice === "workshops" ? workshop_data : compi_data;
        setPageData(data[index]);
        // console.log(compi_data)
    }, [compi_data]);

    return(
        <div className="container">

        <h1 className="page-title">{page_data.title}</h1>
        <div className="bottomContainer">
          <div className="left">
            <p>{page_data.detail}</p>
            {page_data.link && 
            <Button
              target="_blank"
              variant="contained"
              color="secondary"
              style={{ fontSize: '0.9rem', fontWeight: 'bold', width: '290px' }}
              href={page_data.link}
            >
              Registration for Outsiders 
            </Button>}
            {page_data.iitbLink &&
            <Button
              target="_blank"
              variant="contained"
              color="secondary"
              style={{ fontSize: '0.9rem', fontWeight: 'bold', width: '280px', marginTop: '10px'}}
              href={page_data.iitbLink}
            >
              Registration for IITB Students
            </Button>}
            {page_data.common_link &&
            <Button
              target="_blank"
              variant="contained"
              color="secondary"
              style={{ fontSize: '0.9rem', fontWeight: 'bold', width: '280px', marginTop: '10px'}}
              href={page_data.iitbLink}
            >
              Register
            </Button>}
          </div>
          <img className="main-img" src={page_data.dataImage} alt="compi" />
        </div>

  </div>

    )
}