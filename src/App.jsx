import { useContext, useEffect, useState } from 'react'

import './App.css'
import Button from './Components/Button'
import SetPromodor from './Components/SetPromodor'
import { SettingsContext } from './Context/SettingContext'
import CountDownAnimation from './Components/CountDownAnimation'

function App() {
  const {  pomodoro,
    executing,
    updateExecute,
    startAnimate,
    startTimer,
    pauseTimer,
    children,
    settingsBtn,
    setCurrentTimer,
    stopAnimate} = useContext(SettingsContext)
    useEffect(()=>{
      updateExecute(executing)
    },[executing,startAnimate])

  return (
    <div className='container'>
      <h1>Promodoro</h1>
      <small>Be Productive the right way</small>
   {
    pomodoro ===0 ?
    ( <SetPromodor/> ):( 
      <div>
        <ul className='labels'>
          <li>
            <Button title="work" activeClass={executing.active==="work"?"active-label":"undefined"} 
            _callback={()=>setCurrentTimer("work")}
            />
          </li>
          <li>
            <Button title="shortBreak" activeClass={executing.active==="short"?"active-label":"undefined"} 
            _callback={()=>setCurrentTimer("short")}
            />
          </li>
          <li>
            <Button title="long" activeClass={executing.active==="long"?"active-label":"undefined"} 
            _callback={()=>setCurrentTimer("long")}
            />
          </li>

        </ul>
     
            <Button title="setting" activeClass={executing.active==="work"?"active-label":"undefined"} 
            _callback={settingsBtn}
            />
            <div className="timer-container">
              <div className="timer-wrapper">
                <CountDownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
               
                >

                  {children}
                </CountDownAnimation>

              </div>

            </div>
            <div className="button-wrapper">
              <Button title='start' activeClass={!startAnimate ? "active":undefined}
              _callback={startTimer}
              />
              <Button title='Pause' activeClass={startAnimate ? "active":undefined}
               _callback={pauseTimer}
               />
            

            </div>
       
        </div>
    )
   }
    </div>
  )
}

export default App
