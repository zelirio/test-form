import Head from 'next/head';
import React from 'react';
import { Children } from 'react/cjs/react.production.min';

export default function Layout({children}) {
  return (
    <>
        <Head>
        <title>Training Form</title>
        </Head>
        {children}
    </>);
}
