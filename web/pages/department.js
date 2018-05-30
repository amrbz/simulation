// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import axios from 'axios';
import { Modal, Button, Alert, Table } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);
      console.log(props);
      
      this.state = {
        title: props.url.query.title,
        address: props.url.query.address,
        issues: {
          list: false
        },
      };
    }

    async componentDidMount() {
      const res = await axios.get('http://127.0.0.1:7200/api/v1.0/issues');
      console.log(res);
      this.setState({ 
        issues: {
          list: res.data
        } 
      });
    }

    render() {
      return (
        <Layout>
          <h1>{this.state.title}</h1>
          <h2>Issues</h2>
          {
            this.state.issues.list === false ? (<Alert>Loading...</Alert>) :
              this.state.issues.list.length === 0 ? (<Alert>No issues</Alert>) :
                (
                  <Table>
                    <thead>
                      <tr>
                        <th>Titile</th>
                        <th>IPFS Hash</th>
                        <th>TxId</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.issues.list.filter(item => item.request.recipient === this.state.address).map((item, index) => (
                          <tr key={`issue_${index}`}>
                            <td>
                              <Link as={`/request/${item.id}`} href={`/post?id=${item.id}`}>
                                <a>{item.issue.title}</a>
                              </Link>
                            </td>
                            <td><a href={`http://127.0.0.1:8080/ipfs/${item.issue.ipfsHash}`} target="_blank">{item.issue.ipfsHash}</a></td>
                            <td><a href={`https://wavesexplorer.com/tx/${item.request.txid}`} target="_blank">{item.request.txid}</a></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                )
            }

            <style jsx>{`
              @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700');
              font-family: 'IBM Plex Sans', sans-serif;

              h1 {
                font-size: 4em;
                font-weight: 300;
                margin: 1.4em 0;
                display: block;
                border-radius: 4px;
              }

              h2 {
                font-weight: 300;
              }
            `}</style>
        </Layout>
      )
    }
}

