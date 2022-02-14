import React from 'react';
 
import MeetingItem from './MeetingItem';

const MeetupList = (props) => {
  console.log(props)
  return (
    <>
        {props.meetings.map((meeting, index) => {
            return (
                <div key={index}>
                    <MeetingItem 
                        id={meeting.id} 
                        title={meeting.title} 
                        address={meeting.address} 
                        description={meeting.description} />
                </div>
            )
        })}
    </>
  )
}

export default MeetupList