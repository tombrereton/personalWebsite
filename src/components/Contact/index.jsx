import React from 'react';
import Layout from '../Layout';
import './style.scss';

const Contact = () => (
  <Layout>
    <div className="contactContainer">
      <form method="post">
        <input type="hidden" name="form-name" value="contact" />
          <label><p>Your Name: </p><input type="text" name="name" /></label>
          <label><p>Your Email: </p><input type="email" name="email" /></label>
          <label><p>What Is Your Project: </p><textarea name="message"></textarea></label>
          <button type="submit">SEND</button>
      </form>
    </div>
  </Layout>
);

export default Contact;
