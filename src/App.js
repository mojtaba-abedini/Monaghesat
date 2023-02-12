import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png';
import './style.css';

import SingleUser from './components/SingleTender';
import UsersList from './components/TendersList';

export default function App() {
  const [setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((er) => console.log(er));
  }, []);



  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: '100px' }}>
        <Container>
          <Navbar href="#">
            <img
              alt=""
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />{' '}

          </Navbar>
          <div style={{ color: 'white' }}>سامانه مناقصات قرارگاه سازندگی خاتم الانبیاء (ص)</div>
          <div style={{ color: 'white', fontSize: '10px' }}>نسخه 1.3.7</div>
        </Container>
      </Navbar>
      <Container style={{ direction: 'rtl', marginTop: '30px' }}>


        <Routes>
          <Route path="/tender/:userId" exact element={<SingleUser />} />
          <Route path="/" exact element={<UsersList />} />
        </Routes>

      </Container>




    </>

  );
}
