import React, { Fragment } from 'react';
import Link from 'next/link';

const News = () => {
  return (
    <Fragment>
      <h2>The News Page</h2>
      <ul>
        <li>
          <Link href="/news/test-page">Test Page</Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default News