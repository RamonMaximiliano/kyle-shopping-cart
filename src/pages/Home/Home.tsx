import './styles.css'
import { useEffect, useState } from 'react'

export function Home() {
    let [timer, setTimer] = useState<number>(0)

    useEffect(
        ()=> {
            setTimeout(()=>{
                if (timer < 7200){
                setTimer(timer += 900)}
                else {
                    setTimer(0)}
           }, 4000)
        }
    )


    return (
        <>
            <div className="home-title">
                <h1>Check our promotions!</h1>
            </div>
            <div className="slide-area">
                <div className="slide-images"  style={{ marginLeft: `-${timer}px` }} >
                    <div>
                        <div className="torradeira"></div>
                    </div>
                    <div>
                        <div className="micro"></div>
                    </div>
                    <div>
                        <div className="fogao"></div>
                    </div>
                    <div>
                        <div className="liquidificador"></div>
                    </div>
                    <div>
                        <div className="geladeira"></div>
                    </div>
                    <div>
                        <div className="mesa"></div>
                    </div>
                    <div>
                        <div className="sofa"></div>
                    </div>
                    <div>
                        <div className="lavadoura"></div>
                    </div>
                    <div>
                        <div className="tv"></div>
                    </div>
                </div>

                <div className="radios">
                     <div className="radio-button" style={{ backgroundColor: `${timer == 0 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 900 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 1800 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 2700 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 3600 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 4500 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 5400 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 6300 ? "blue" : "transparent"}`}}></div>
                     <div className="radio-button" style={{ backgroundColor: `${timer == 7200 ? "blue" : "transparent"}`}}></div>
                </div>
            </div>

            <p className="home-text">This simple shopping cart is a project to practice: React, Context API, React Router, TypeScript and some CSS</p>
            <h1 className="Ramon">Created by Ramon</h1>

        </>
    )
}

