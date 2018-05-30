// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import Head from 'next/head'

import axios from 'axios';
import { Modal, Button, Alert, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);  
      this.toggleModal = this.toggleModal.bind(this);
      this.doVote = this.doVote.bind(this);
      
      this.state = {
        votingId: props.url.query.id,
        voting: false,
        voters: {
          list: false,
        },
        options: {
          list: false,
        },
        optionId: false,
        privKey: ''
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
        },
      })
    }

    toggleModal(e) {
      this.setState({
        visible: !this.state.visible,
        optionId: e.target.dataset.optionid,
        option: this.state.options.list.filter((item) => item.id === e.target.dataset.optionid).map((item) => item)[0]
      })
    }
    

    doVote(e) {
      axios.post('http://127.0.0.1:7220/api/v1.0/vote', {
        privKey: this.state.privKey,
        optionId: this.state.optionId,
        votingId: this.state.votingId,
      })
      .then((voteRes) => {
        console.log('voteRes', voteRes);
      })
      .catch((e) => {
        console.error(e);
      });
    }

    render() {
      const layoutStyle = {
        margin: 20,
        padding: 20,
        border: '0px solid #DDD'
      }
      const option = this.state.options.list === false ? null : (
        this.state.options.list.filter((item) => item.id === this.state.optionId).map((item) => item)
      );

      const optionData = option && option.length > 0 ? option[0]: null;      
      console.log(optionData);
      
      return (
        <div style={layoutStyle}>
          <Head>
            <title>Blockchain Voting</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
          </Head>
          {
            this.state.voting === false ? null : (
              <div>
                <h1>{this.state.voting.title.text}</h1>
                <h2>{this.state.voting.description.text}</h2>

                <h3>Options:</h3>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Option</th>
                      <th>Address</th>
                      <th>Votes</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.options.list === false ? null : 
                      this.state.options.list.map((item, index) => (
                        <tr key={`row_${index}`}>
                          <td>{`#${index + 1}`}</td>
                          <td>{item.title.text}</td>
                          <td>{item.address}</td>
                          <td>-</td>
                          <td>
                            <Button
                              onClick={this.toggleModal}
                              bsStyle="primary"
                              data-optionid={item.id}
                            >
                              Vote
                            </Button>
                          </td>
                        </tr>
                      ))
                  }
                  </tbody>
                </Table>

                <Modal show={this.state.visible} onHide={this.toggleModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Just one step left</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>

                    <Alert style={{textAlign: 'center'}}>
                      <h4>{optionData ? optionData.title.text : null}</h4>
                    </Alert>
                    <FormGroup>
                      <ControlLabel>Private Key</ControlLabel>
                      <FormControl 
                        type="text"
                        value={this.state.privKey} 
                        placeholder="Enter private key"
                        onChange={(e) => this.setState({privKey: e.target.value})}
                      />
                    </FormGroup>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.toggleModal}>Close</Button>
                    <Button 
                      bsStyle="primary" 
                      onClick={this.doVote}
                      disabled={
                        this.state.privKey === ''
                      }
                    >
                      Vote
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            )
          }
          

          <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,700');
            font-family: 'IBM Plex Sans', sans-serif;

            h1 {
              font-size: 4em;
              font-weight: 300;
              margin: 0.4em 0 0.4em 0;
              display: block;
              border-radius: 4px;
            }

            h2 {
              font-weight: 300;
              font-size: 2.8em;
              margin-bottom: 2em;
            }

            h3 {
              margin-top: 2em;
            }

            h4 {
              margin: 1em  0;
              font-weight: 300;
              font-size: 2.8em;
            }
          `}</style>
        </div>
      )
    }
}

