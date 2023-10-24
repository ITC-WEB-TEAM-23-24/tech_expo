import React from 'react'
import style from './style.module.css'
import s1 from "./1.webp"
import s2 from "./spon2.png"

function Sponsor() {
  return (
    <div className={style.main}>
        <div className={style.container}>
          <div className={style.spon}>
            <div>
              <img src={s1 }alt=""/>
            </div>
            <p>
              Powered by 
            </p>
          </div>
          <div className={style.spon}>
            <div>
              <img src={s2} alt=""/>
            </div>
            <p>
              In Association with
            </p>
          </div>
        </div>
    </div>
  )
}

export default Sponsor