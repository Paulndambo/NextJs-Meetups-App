import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const MeetupDetails = (props) => {
  return (
    <>
       <Head>
          <title>Meetup Details</title>
          <meta name="description" content='Bowse a huge list of NextJs Meetups' />
        </Head>
        <h3>{props.meetup.title}</h3>
        <p>{props.meetup.address}</p>
        <p>{props.meetup.description}</p>
    </>
  )
}

export async function getStaticPaths(){
  const res = await fetch("http://127.0.0.1:8000/api/activities")
  const meetups = await res.json()
  const ids = meetups.map(meetup => meetup.id)
  const paths = ids.map(id => ({
    params: {meetupId: id.toString()}
  }))

  return {
    fallback: false,
    paths
  }
}

export async function getStaticProps(context) {
  //fetch data for single meetup
  const meetupId = context.params.meetupId;
  
  const meeting = await fetch(`http://127.0.0.1:8000/api/meetups/${meetupId}`)
  const meetup = await meeting.json()
  console.log(`Current Meeting: ${meetup}`)

  return {
    props: {
      meetup
    }
  }
}

export default MeetupDetails