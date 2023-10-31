import React from "react";
import "./style.css";
import Button from '@mui/material/Button';

export default function Register() {
    return(
        <div className="register-container">
            <h1>REGISTER NOW</h1>
            <h3>Tech Expo 2023 – Where innovation meets inspiration. Register to access insightful workshops, connect with tech pioneers, explore groundbreaking exhibits, and take your tech journey to the next level. Don't miss this opportunity; secure your spot now!</h3>
            <Button
              target="_blank"
              variant="contained"
              color="secondary"
              style={{ fontSize: '0.9rem', fontWeight: 'bold', width: '280px', marginTop: '10px' }}
              href="https://unstop.com/o/ANBi6WV?lb=WePEzs0a"
            >
              Register
            </Button>

        </div>
    )
}