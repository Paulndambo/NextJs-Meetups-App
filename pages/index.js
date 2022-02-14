import React, { useEffect, useState} from 'react';
import MeetupList from '../components/MeetupList';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';


const HomePage = (props) => {

  return <Fragment>
    <Head>
      <title>NextJs Meetup</title>
      <meta name="description" content='Bowse a huge list of NextJs Meetups' />
    </Head>
        <MeetupList meetings={props.meetups} />
    </Fragment>
}

 
export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/meetups/")
  const meetups = await res.json()
  return {
    props: {
      meetups
    },
    revalidate: 10
  }
}

export default HomePage;