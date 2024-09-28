import React from 'react';
import "./CardsCss.css"
import data from "./Database/Database"

export default class Cards extends React.Component {
    render() {
        return(
            <>
                 <div id='cardsdiv'>
                    {data.map((x, index) => (
                        <div className='child' key={index}>
                            <img 
                                src={x.imgsrc} 
                                alt={x.alt} 
                                style={{ width: '100%' }} 
                            />
                            <h2>{x.title}</h2>
                            <p>{x.description}</p>
                            <button>{x.buttonText}</button>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}