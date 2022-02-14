import Link from 'next/link'
import React from 'react'

const MainNavigation = () => {
  return (
    <>
    <h3>NextJs Meetups</h3>
    <nav>
        <ul>
            <li>
                <Link href="/">All Meetups</Link>
            </li>
            <li>
                <Link href="/new-meetup">Add New Meetup</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default MainNavigation