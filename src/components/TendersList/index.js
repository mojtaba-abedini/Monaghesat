import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import ReactLoading from 'react-loading';
import axios from 'axios';

console.log(axios.isCancel('something'));


class UsersList extends React.Component {

  // Constructor 
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false
    };
  }

  componentDidMount() {
    axios.get('http://tender.ertebatonline.net/api/custom/allactivetender', {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
      }

    })
      .then(response => console.log(response));

  }

  render() {
    const { isLoading, items } = this.state;
    return (
      <div>

        <h1>لیست مناقصات جاری</h1>
        {
          isLoading ? <ReactLoading type="spinningBubbles" color="#4e4e4e" height={'5%'} width={'5%'} /> : <Table striped bordered hover>
            <thead>
              <tr>
                <th>شناسه</th>
                <th>موضوع مورد معامله</th>
                <th>مهلت دریافت/خرید اسناد</th>
                <th>مهلت تحویل پاکت ها</th>
                <th>مناقصه گزار</th>
                <th>استان</th>
                <th>رشته</th>
                <th>گرایش</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.map((item) => (
                  <tr>
                    <td key={item.id}>{item.id}</td>
                    <td>{item.name} </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.website}</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td className="detail"><Link to={`/tender/${item.id}`}>جزئیات</Link></td>
                  </tr>
                ))}

            </tbody>
          </Table>

        }
      </div >
    );


  }
}



export default UsersList;
