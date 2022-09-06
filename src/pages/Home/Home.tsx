import left from '../../images/previous.png'
import right from '../../images/next.png'

import './styles.css'


export function Home() {
    return (
        <>
            <div className="home-title">
                <h2>Check our promotions!</h2>
            </div>
            <div className="slide-area">
                <div className="slide-images">
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
                <div className="buttons">
                    <div>
                        <div className="left"  style={{ backgroundImage: `url(${left})` }}></div>
                    </div>
                    <div>
                        <div className="right" style={{ backgroundImage: `url(${right})` }}></div>
                    </div>
                </div>

                <div className="radios">
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                    <div className="radio-button"></div>
                </div>
            </div>
        </>
    )
}


/* 

https://www.youtube.com/watch?v=XHfOyhkdlgc&ab_channel=OpenSource


https://www.youtube.com/watch?v=0wvrlOyGlq0&ab_channel=CodingSnow 

https://www.youtube.com/watch?v=KcdBOoK3Pfw&ab_channel=DevEd



*/