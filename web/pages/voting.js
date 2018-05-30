// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import axios from 'axios';
import { Modal, Button, Alert, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);     
      this.state = {
        votingId: props.url.query.id,
        voting: false,
        voters: {
          list: false,
        },
        options: {
          list: false,
        }
      };
    }

    async componentDidMount() {
      const res = await axios.get(`http://127.0.0.1:7220/api/v1.0/votings/${this.state.votingId}`);
      console.log(res);
      
      this.setState({
        voting: res.data,
        voters: {
          list: res.data.voters
        },
        options: {
          list: res.data.options
        }
      })
    }

    
    render() {
      return (
        <Layout>
          {
            this.state.voting === false ? null : (
              <div>
                <h1>{this.state.voting.title.text}</h1>
                <h2>{this.state.voting.description.text}</h2>
                
                <h3>Voters:</h3>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Voter</th>
                      <th>Address</th>
                      <th>Private key</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.voters.list === false ? null : 
                      this.state.voters.list.map((item, index) => (
                        <tr key={`row_${index}`}>
                          <td>{`#${index + 1}`}</td>
                          <td>{item.title.text}</td>
                          <td>{item.address}</td>
                          <td>{item.privKey}</td>
                        </tr>
                      ))
                  }
                  </tbody>
                </Table>

                  <Link href={`/vote?id=${this.state.votingId}`}>
                    <a>Voting page</a>
                  </Link>

              </div>
            )
          }
          

          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700');
            font-family: 'IBM Plex Sans', sans-serif;

            h1 {
              font-size: 4em;
              font-weight: 300;
              margin: 1.4em 0 0.4em 0;
              display: block;
              border-radius: 4px;
            }

            h2 {
              font-weight: 300;
              font-size: 2.8em;
              margin-bottom: 2em;
            }
          `}</style>
        </Layout>
      )
    }
}

