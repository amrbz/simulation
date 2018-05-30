// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import axios from 'axios';
import { Modal, Button, Alert, FormGroup, FormControl, ControlLabel, InputGroup, Table, Glyphicon } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.createVote = this.createVote.bind(this);
      this.addOption = this.addOption.bind(this);
      this.deleteOption = this.deleteOption.bind(this);
      this.addVoter = this.addVoter.bind(this);
      this.deleteVoter= this.deleteVoter.bind(this);
      this.state = {
        visible: false,
        votings: {
          list: false,
        },
        voter: '',
        voters: {
          list: false,
        },
        title: '',
        description: '',
        txPending: false,
        option: '',
        options: {
          list: false
        }
      };
    }

    async componentDidMount() {
      const res = await axios.get('http://127.0.0.1:7220/api/v1.0/votings');
      console.log(res.data);
      this.setState({ 
        votings: {
          list: res.data
        } 
      });
    }

    toggleModal(e) {
      this.setState({
        visible: !this.state.visible,
      })
    }

    addOption(e) {
      let options = this.state.options.list ? this.state.options.list : [];      
      this.setState({
        options: {
          list: options.concat(this.state.option),
        },
        option: '',
      });
    }

    deleteOption(e) {
      let options = this.state.options.list;
      options.splice(e.target.dataset.optionindex, 1);
      this.setState({
        options: {
          list: options,
        },
      });
    }

    addVoter(e) {
      let voters = this.state.voters.list ? this.state.voters.list : [];      
      this.setState({
        voters: {
          list: voters.concat(this.state.voter),
        },
        voter: '',
      });
    }

    deleteVoter(e) {
      let voters = this.state.voters.list;
      voters.splice(e.target.dataset.voterindex, 1);
      this.setState({
        voters: {
          list: voters,
        },
      });
    }

    createVote(e) {
      this.setState({
        txPending: true,
      })

      axios.all([
        axios.post('http://127.0.0.1:7220/api/v1.0/voters', {
          voters: this.state.voters.list,
        }),
        axios.post('http://127.0.0.1:7220/api/v1.0/options', {
          options: this.state.options.list,
        })
      ])
      .then(axios.spread((votersRes, optionsRes) => {
        // do something with both responses
        console.log('votersRes', votersRes);
        console.log('optionsRes', optionsRes);

        const votersIds = votersRes.data.voters.map((item) => item.id);
        const optionsIds = optionsRes.data.options.map((item) => item.id);

        console.log('votersIds', votersIds);
        console.log('optionsIds', optionsIds);

        axios.post('http://127.0.0.1:7220/api/v1.0/votings', {
          votersIds: votersIds,
          optionsIds: optionsIds,
          title: this.state.title,
          description: this.state.description,
        })
        .then((votingsRes) => {
          console.log('votingsRes', votingsRes);
        })
        .catch((e) => {
          console.error(e);
        });

        this.setState({
          txPending: false,
        })
        
      }));
    }

    render() {
      return (
        <Layout>
          <h1>Run a vote</h1>
          <h2>Votings</h2>
          {
            this.state.votings.list === false ? (<Alert>Loading...</Alert>) :
              this.state.votings.list.length === 0 ? (<Alert>No votings</Alert>) :
                (
                  <Table>
                    <thead>
                      <tr>
                        <th>Titile</th>
                        <th>TxId</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.votings.list.map((item, index) => (
                          <tr key={`issue_${index}`}>
                            <td>
                              <Link href={`/voting?id=${item.id}`}>
                                <a>{item.title.text}</a>
                              </Link>
                            </td>
                            <td><a href={`https://wavesexplorer.com/tx/${item.txid}`} target="_blank">{item.txid}</a></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                )
          }

          <Button bsStyle="primary" onClick={this.toggleModal}>
              New voting
          </Button>

          <Modal show={this.state.visible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>New voting</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.title} 
                  placeholder="Enter title"
                  onChange={(e) => this.setState({title: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl 
                  componentClass="textarea" 
                  value={this.state.description} 
                  placeholder="Enter description"
                  onChange={(e) => this.setState({description: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Options</ControlLabel>
                {
                  this.state.options.list && this.state.options.list.length > 0 ? (
                    <Table>
                      <tbody>
                        {
                          this.state.options.list.map((item, index) => (
                            <tr key={`option_${index}`}>
                              <td>{item}</td>
                              <td>
                                <Button onClick={this.deleteOption} data-optionindex={index}>
                                  <Glyphicon data-optionindex={index} glyph="trash" />
                                </Button>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                  ) : (
                    <Alert bsStyle="info">No options yet</Alert> 
                  )
                }  
                             
                <InputGroup>
                  <FormControl 
                    type="text" 
                    value={this.state.option} 
                    placeholder="Enter option"
                    onChange={(e) => this.setState({option: e.target.value})}
                  />
                  <InputGroup.Button>
                    <Button 
                      onClick={this.addOption}
                      disabled={!this.state.option || this.state.option === ''}
                    >
                      Add option
                    </Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Voters</ControlLabel>
                {
                  this.state.voters.list && this.state.voters.list.length > 0 ? (
                    <Table>
                      <tbody>
                        {
                          this.state.voters.list.map((item, index) => (
                            <tr key={`voter_${index}`}>
                              <td>{item}</td>
                              <td>
                                <Button onClick={this.deleteVoter} data-voterindex={index}>
                                  <Glyphicon data-voterindex={index} glyph="trash" />
                                </Button>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                  ) : (
                    <Alert bsStyle="info">No voters yet</Alert> 
                  )
                }  
                             
                <InputGroup>
                  <FormControl 
                    type="text" 
                    value={this.state.voter} 
                    placeholder="Enter voter"
                    onChange={(e) => this.setState({voter: e.target.value})}
                  />
                  <InputGroup.Button>
                    <Button 
                      onClick={this.addVoter}
                      disabled={!this.state.voter || this.state.voter === ''}
                    >
                      Add voter
                    </Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.toggleModal}>Close</Button>
              <Button 
                bsStyle="primary" 
                onClick={this.createVote}
                disabled={
                  this.state.txPending ||
                  this.state.options.list === false ||
                  (this.state.options.list && this.state.options.list.length === 0) ||
                  this.state.voters.list === false ||
                  (this.state.voters.list && this.state.voters.list.length === 0)
                }
              >
                Create
              </Button>
            </Modal.Footer>
          </Modal>

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

