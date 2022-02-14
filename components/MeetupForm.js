import React, { useRef } from 'react';

const MeetupForm = (props) => {

  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
  
    const meetupData = {
        title: enteredTitle,
        address: enteredAddress,
        description: enteredDescription
    };

    props.onAddMeetup(meetupData);

   }

    
  return (
    <div>
        <h3>Add A New Meetup</h3>
        <hr/>
        <form onSubmit={submitHandler}>
            <label htmlFor='title'>Title</label>
            <input 
                type='text'
                required
                id='title'
                ref={titleInputRef}
            />
             <label htmlFor='address'>Address</label>
            <input 
                type='text'
                required
                id='address'
                ref={addressInputRef}
            />
             <label htmlFor='description'>Description</label>
            <textarea 
                rows='5'
                required
                id='description'
                ref={descriptionInputRef}
            ></textarea>
            <button>Submit Meetup</button>
        </form>
    </div>
  )
}

export default MeetupForm