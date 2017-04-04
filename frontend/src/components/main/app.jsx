import '../../common/template/dependencies';

import React from 'react';
import Routes from '../routes/routes';
import Header from '../header/header';
import Sidebar from '../menu/sidebar';
import Footer from '../footer/footer';
import Messages from '../util/messages/messages';

export default props => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
      <Routes />
    </div>
    <Footer />
    <Messages />
  </div>
);
