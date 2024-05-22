import React, { useContext, useState } from 'react'
import { SettingsContext } from '../Context/SettingContext'

const SetPromodor = () => {
    const [newTimer,setNewTimer] = useState({
     work:0.2,
     short:0.1,
     long:0.5,
     active:'work'
    })
    const {updateExecute} = useContext(SettingsContext)
    const handleChange = (input)=>{
        const {name,value} = input.target
        switch(name){
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work:parseInt(value)
                })
                break;
                case 'shortBreak':
                    setNewTimer({
                        ...newTimer,
                        short:parseInt(value)
                    })
                    break;
                    case 'longBreak':
                        setNewTimer({
                            ...newTimer,
                            long:parseInt(value)
                        });
                        break;

        }

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        updateExecute(newTimer)

    }


  return (
    <div className='form-container'>
    <form action="" onSubmit={handleSubmit}>
        <div className="input-wrapper">
            <input className='input'
            value={newTimer.work}
            onChange={handleChange}
            type="number" name='work' />
            <input
            value={newTimer.short}
               onChange={handleChange}
            className='input' type="number" name='shortBreak' />
            <input 
            value={newTimer.long}
               onChange={handleChange}
            className='input' type="number" name='longBreak' />

        </div>
        <button type='submit'>Set Timer</button>
        </form>      
    </div>
  )
}

export default SetPromodor
