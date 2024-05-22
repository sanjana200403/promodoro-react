import { createContext, useState } from "react";

export const SettingsContext = createContext()
  const SettingsContextProvider = (props)=>{
    const [pomodoro,setPomodoro] = useState(0)
    const [executing,setExecuting] = useState({})
    const [startAnimate,setStartAnimate] = useState(false)
    function setCurrentTimer (active_state){
        updateExecute({
            ...executing,
            active:active_state
        })

        setTimerTime(executing)
    }
        // start animation function===
        function startTimer(){
            setStartAnimate(true)

        }
        // pause the animation function
        function pauseTimer(){
            setStartAnimate(false)
        }
        // pass time to counter
        const children = ({remainingTime})=>{
            const minutes =  Math.floor(remainingTime/60)
            const second = remainingTime%60
            return `${minutes}:${second}`
        }
        // clear session storage
        const settingsBtn =()=>{
            setExecuting({})
            setPomodoro(0)
        }
        const updateExecute = (updatedSettings)=>{
            setExecuting(updatedSettings)
            setTimerTime(updatedSettings)
        }
        const setTimerTime = (evaluate)=>{
            switch(evaluate.active){
                case 'work':
                    setPomodoro(evaluate.work)
                    break;

              case 'short':
                setPomodoro(evaluate.short)
                break;
                case 'long':
                    setPomodoro(evaluate.long)
                    break;
                default :
                setPomodoro(0)
                break;

            }
        }
        function stopAnimate (){
            setStartAnimate(false)

        }

 

    return(
        <SettingsContext.Provider
        value={{
            pomodoro,
            executing,
            updateExecute,
            startAnimate,
            startTimer,
            pauseTimer,
            children,
            setCurrentTimer,
            stopAnimate,
            settingsBtn
        }}
        >
            {props.children}

        </SettingsContext.Provider>
    )

}
export default SettingsContextProvider