// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import axios from 'axios';
import { Modal, Button, Alert, FormGroup, FormControl, ControlLabel, InputGroup, Table, Glyphicon, SplitButton, MenuItem } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.createEmulation = this.createEmulation.bind(this);
      this.deleteEmulation = this.deleteEmulation.bind(this);

      this.state = {
        visible: false,
        txPending: false,
        emulations: {
          list: false,
        },
        nodesQty: 5,
        ping: 0.00002,
        validationTime: 0.25,
        blockSize: 1,
        blockFreq: 60,
        description: '',
        bandwidth: 1,
        iterations: 3,
        withForks: true,
        colors: [
          'F44336',
          'E91E63',
          '9C27B0',
          '673AB7',
          '3F51B5',
          '2196F3',
          '03A9F4',
          '00BCD4',
          '009688',
          '4CAF50',
          '8BC34A',
          'CDDC39',
          'FFEB3B',
          'FFC107',
          'FF9800',
          'FF5722',
          '795548',
          '9E9E9E',
          '607D8B'
        ]
      };
    }

    async componentDidMount() {
      const res = await axios.get('http://127.0.0.1:7500/api/v1.0/emulations');
      this.setState({ 
        emulations: {
          list: res.data
        } 
      });
    }

    
    toggleModal(e) {
      this.setState({
        visible: !this.state.visible,
      })
    }

    createEmulation(e) {
      this.setState({
        txPending: true,
      })

      axios.post('http://127.0.0.1:7500/api/v1.0/emulations', {
        nodesQty: this.state.nodesQty,
        ping: this.state.ping,
        validationTime: this.state.validationTime,
        blockSize: this.state.blockSize,
        blockFreq: this.state.blockFreq,
        bandwidth: this.state.bandwidth,
        description: this.state.description,
        iterations: this.state.iterations,
        withForks: this.state.withForks
      })
      .then((res) => {
        this.setState({
          txPending: false,
          visible: false,
          emulations: {
            list: this.state.emulations.list.length === 0 ? 
              new Array(res.data) : [res.data].concat(this.state.emulations.list)
          }
        })
      });
    }

    deleteEmulation(e) {
      const emulationId = e.target.dataset.emulationid;
      console.log(emulationId);
      
      axios.delete(`http://127.0.0.1:7500/api/v1.0/emulations/${emulationId}`, {
        
      })
      .then((res) => {
        const emultions = this.state.emulations.list;
        let index = 0;
        for (let i = 0; i < emultions.length; i += 1) {
          if (emultions[i].id === emulationId) {
            index = i;
            break;
          }
        }

        emultions.splice(index, 1);
        this.setState({
          emulations: {
            list: emultions
          }
        })
      });
    }

    render() {
      return (
        <Layout>
          <h1>Run emulation</h1>
          <h2>Emulations</h2>
          {
            this.state.emulations.list === false ? (<Alert>Loading...</Alert>) :
              this.state.emulations.list.length === 0 ? (<Alert>No emulations</Alert>) :
                (
                  <Table>
                    <thead>
                      <tr>
                        <th>Nodes qty</th>
                        <th>Ping, sec/km</th>
                        <th>Validation time, sec</th>
                        <th>Block size, MB</th>
                        <th>Block freq, sec</th>
                        <th>Iterations</th>
                        <th>With forks</th>
                        <th>Bandwidth, MB/sec</th>
                        <th>Description</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.emulations.list.map((item, index) => (
                          <tr key={`emulation_${index}`}>
                            <td>{item.nodesQty}</td>
                            <td>{item.ping}</td>
                            <td>{item.validationTime}</td>
                            <td>{item.blockSize}</td>
                            <td>{item.blockFreq}</td>
                            <td>{item.iterations}</td>
                            <td>{item.withForks === true ? 'Yes' : 'No'}</td>
                            <td>{item.bandwidth}</td>
                            <td>{item.description === '' ? '-' : item.description}</td>
                            <td style={{ textAlign: 'center'}}>
                              <Link href={`/emulation?id=${item.id}`}>
                                <SplitButton
                                  bsStyle={'default'}
                                  title={'Inspect'}
                                  key={'1'}
                                  id={`split-button-basic-1`}
                                  
                                > 
                                  <MenuItem header>Actions</MenuItem>
                                  <MenuItem eventKey="1" data-emulationid={item.id} onClick={this.deleteEmulation}><Glyphicon glyph="trash" className={'asd'} /> Delete</MenuItem>
                                </SplitButton>
                              </Link>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                )
          }

          <Button bsStyle="primary" onClick={this.toggleModal}>
            New emulation
          </Button>

          <Modal show={this.state.visible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>New emulation</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormGroup>
                <ControlLabel>Nodes qty</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.nodesQty} 
                  placeholder="Enter nodes quantity"
                  onChange={(e) => this.setState({nodesQty: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Iterations</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.iterations} 
                  placeholder="Enter iterations quantity"
                  onChange={(e) => this.setState({iterations: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Block size, MB</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.blockSize} 
                  placeholder="Enter block size"
                  onChange={(e) => this.setState({blockSize: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Block generation frequency, sec</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.blockFreq} 
                  placeholder="Enter block generation frequeny"
                  onChange={(e) => this.setState({blockFreq: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Ping, sec/1km</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.ping} 
                  placeholder="Enter ping"
                  onChange={(e) => this.setState({ping: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Validation time, sec</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.validationTime} 
                  placeholder="Enter average validation time"
                  onChange={(e) => this.setState({validationTime: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Bandwidth, MB/sec</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.bandwidth} 
                  placeholder="Enter bandwidth"
                  onChange={(e) => this.setState({bandwidth: e.target.value})}
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
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.toggleModal}>Close</Button>
              <Button 
                bsStyle="primary" 
                onClick={this.createEmulation}
                disabled={
                  this.state.txPending === true 
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

