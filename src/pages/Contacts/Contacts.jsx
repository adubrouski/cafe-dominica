import React from 'react';

import Phones from './Phones.jsx';
import Networks from './Networks.jsx';
import WorkTime from './WorkTime.jsx';

const Contacts = () => {
  return (
    <div className="container">
      <section className="contacts">
        <h2>Контакты</h2>
        <div className="contact-info-block">
          <div className="contact-info-block-wrapper">
            <Phones />
            <WorkTime />
            <Networks />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
