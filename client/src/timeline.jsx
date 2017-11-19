import React from 'react';
import DayView from './day'

const Timeline = (props) => {

  return (
    <div className="timelineContainer">
      <div className="timelineTitle">Timeline</div>
      <div className="dayContainer">
        <DayView />
      </div>
    </div>
  )
}


export default Timeline;
