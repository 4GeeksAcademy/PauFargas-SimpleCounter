import React, {useState, useEffect} from "react";



export const SimpleCounterBonus = ()=>{
    //Código de JS
    //Defino los estados:
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState("Simple Counter");
    const [isActive , setIsActive] = useState(false);
    const [status, setStatus] = useState({icon : "fa fa-clock",
                                          subtitle : "Clock",
                                        className : "text-center"});
    // Defininos funciones
    const handlePrincipal = () => {
        if (isActive) {
            setTitle("Simple Counter Paused");
            setIsActive (false);
            setStatus ({icon: "fas fa-stopwatch",
                    subtitle : "Chronometer Paused",
                    className : "text-center text-warning"});

        }else {

            setTitle("Simple Counter Started");
            //setCounter(0);
            setIsActive(true);
            setStatus({icon: "fas fa-stopwatch",
                    subtitle : "Chronometer on",
                    className : "text-center text-primary"});
        }

    };
    const handleReset = () => {
        setTitle("Simple Counter")
        setCounter(0);
        setIsActive(false);
        setStatus({icon : "fa fa-clock",
                    subtitle : "Clock",
                    className : "text-center bg-warning"})
        
    }; 
    //useEffect :
    useEffect(() => {
        //El código que se va a ejecutar, puede tener un return como última instrucción
        if (isActive){
            const interval = setInterval(() => {
                setCounter(counter => counter+1)
            }, 10)
            return () => clearInterval(interval);
    
        }

    }, [isActive])

    //Un solo elemento HTML:
    return (
        <div className="container">
            <h1>{title}</h1>
            <h2 className={status.className}>{status.subtitle}</h2>
            <div className="bigCounter">
                <div><i className={status.icon}></i></div>
                <div>{Math.floor(counter / 10000000) % 10}</div>
                <div>{Math.floor(counter / 1000000) % 10}</div>
                <div>{Math.floor(counter / 100000) % 10}</div>
                <div>{Math.floor(counter / 10000) % 10}</div>
                <div>{Math.floor(counter / 1000) % 10}</div>
                <div>{Math.floor(counter / 100) % 10}</div>
                <div>,</div>
                <div>{Math.floor(counter / 10) % 10}</div>
                <div>{Math.floor(counter) % 10}</div>
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group-sm">
                    <button type="button" className={"btn btn-outline-success"} onClick={handlePrincipal}>
                        {isActive ? "Pause" : "Start" }
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleReset}>
                        {"Reset"}
                    </button>

                </div>
            </div>
        </div>

)};