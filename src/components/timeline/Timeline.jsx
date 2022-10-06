import React from 'react'
import { useState } from 'react'
import './timeline.css'

const Timeline = (props) => {
  function handlechange(e) {
    props.handleClick(e)
  }
 
  
  
    return (
    <div id="timeline">
        <div id="timeline-picker">
            
                <li id="time1" onClick={handlechange}className="timeline-li">2000</li>
                <li id="time2" onClick={handlechange}className="timeline-li">2004</li>
                <li id="time3" onClick={handlechange}className="timeline-li">2008</li>
                <li id="time4" onClick={handlechange}className="timeline-li">2012</li>
                <li id="time5" onClick={handlechange} className="timeline-li">2016</li>
                <li id="time6" onClick={handlechange}className="timeline-li">2020</li>
                <li id="time7" onClick={handlechange}className="timeline-li">now</li>
            
        </div>
        <div id="timeline-current">Current State = {props.time}</div>
    </div>
  )
}

export default Timeline

/*
based on what time is selected, it will show a different slide
*/