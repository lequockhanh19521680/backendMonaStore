import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import React from 'react'

export default function Layout( { children } ) {
  return (
    <div className="overflow-hidden h-100%">
        <Header />
        <div>
            {children}
        </div>
        <Footer />
    </div>
  )
}
