import React, { useEffect, useState } from "react";
import { compi_data, workshop_data } from "./data.js";
import "./style.css";
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet';
import styled from "@emotion/styled";

export default function Page() {

  const [page_data, setPageData] = useState({});
  // var compi_data = {};
  // const bottomStyle = {
  //   display: "flex",
  //   flexDirection: "column-reverse",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  // }
  var choice;

  useEffect(() => {
    const link_url = window.location.href; // Get the current URL
    const slicing = link_url.split("/"); // Retrieve the hostel value from navigation param
    const index = slicing[slicing.length - 1];
    choice = slicing[slicing.length - 2];
    
    //console.log(index);
    //console.log(choice);
    const data = choice === "workshops" ? workshop_data : compi_data;

    setPageData(data[index]);
    // console.log(compi_data)
  }, [compi_data]);
    const title = choice === "workshops" ? `${page_data.title} | Workshops` : `${page_data.title} | Competitions`;

  return (
    <div className="container">
       <Helmet>
        <title>{title}</title>  
        <meta name="description" content="Competitions/Workshops" />
      </Helmet>

      <h1 className="page-title" style={page_data.companyLogo && { margin: '0' }}>{page_data.title}</h1>
      {page_data.companyLogo &&
        <div className="company-logo" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>BY</h1>
          <img src={page_data.companyLogo} alt="logo" style={{ width: '300px' }} />
        </div>
      }

      <div className="bottomContainer">
        <div className="left" >
          <p>{page_data.detail}</p>
          {page_data.highlights &&
            <div>
              <h2>Highlights</h2>
              {page_data.highlights.map((item, index) => {
                return (
                  <>
                    <h3>{item.title}</h3>

                    {item.content.map((item, index) => {
                      return (
                        <ul>
                          <li><strong>{item.subtitle}:</strong> {item.subcontent}</li>
                        </ul>
                      )
                    })}
                  </>
                )
              })
              }
            </div>}
          {page_data.learningOutcomes &&
            <div>
              <h2>Learning Outcomes</h2>
              {page_data.learningOutcomes.map((item, index) => {
                return (
                  <>
                    <ul>
                      <li><strong>{item.subtitle}:</strong> {item.subcontent}</li>
                    </ul>
                  </>
                )

              })
              }
            </div>}
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
              style={{ fontSize: '0.9rem', fontWeight: 'bold', width: '280px', marginTop: '10px' }}
              href={page_data.iitbLink}
            >
              Registration for IITB Students
            </Button>}
          {page_data.common_link &&
            <Button
              target="_blank"
              variant="contained"
              color="secondary"
              style={{ fontSize: '0.9rem', fontWeight: 'bold', width: '280px', marginTop: '10px' }}
              href={page_data.common_link}
            >
              Register
            </Button>}
        </div>
        {/* <div className="bottom-bright"> */}

          <img className="main-img" src={page_data.dataImage} style={page_data.highlights && {height: '100%'}} alt="compi" />
          {/* <p style={{ color: 'white' }}>pokemon</p> */}
        {/* </div> */}
      </div>

    </div>

  )
}