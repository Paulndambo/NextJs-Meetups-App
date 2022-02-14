import { useRouter } from 'next/router';
import React from 'react';
import MeetupForm from '../components/MeetupForm';
import Head from 'next/head';

const NewMeetup = () => {

  const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch("http://127.0.0.1:8000/api/meetups/", {
          method: 'POST',
          body: JSON.stringify(enteredMeetupData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data)
        
        router.push("/")
    }

  return <>
   <Head>
      <title>New Meetup</title>
      <meta name="description" content='Bowse a huge list of NextJs Meetups' />
    </Head>
    <MeetupForm onAddMeetup={addMeetupHandler} />
  </>
  
}

export default NewMeetup;