import React from 'react';
import { useRouter } from 'next/router';

const MeetingItem = ({id, title, address, description}) => {

    const router = useRouter();

    function showDetailHandler (){
        router.push('/' +id)
    }

  return (
    <div>
        <h3>{title}</h3>
        <p>{address}</p>
        <p>{description}</p>
        <button onClick={showDetailHandler}>Meeting Details</button>
        <hr />
    </div>
  )
}

export default MeetingItem