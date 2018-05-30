// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import axios from 'axios';
import { Modal, Button, Alert, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.state = {
          visible: false,
          issues: {
            list: false
          },
          recipient: '3PQUkwYARzugf7YDrYpDq93mmqmmEgZJMyw',
          title: '',
          message: '',
          txPending: false,
        };
    }

    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:7200/api/v1.0/issues');
        console.log(res);
        this.setState({ 
          issues: {
            list: res.status === 204 ? [] : res.data
          } 
        });
    }

    toggleModal(e) {
      this.setState({
        visible: !this.state.visible,
      })
    }

    handleOk(e) {
      this.setState({
        txPending: true,
      })
      const req = axios.post('http://127.0.0.1:7200/api/v1.0/issue', {
        recipient: this.state.recipient,
        title: this.state.title,
        message: this.state.message,
        responseTo: '',
        response: ''
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          
          const arr = this.state.issues.list === false && this.state.issues.list.length === 0 ? 
            [response.data] : [response.data].concat(this.state.issues.list);
          console.log('Arr', arr);
          
          this.setState({
            issues: {
              list: arr
            },
            visible: false,
            recipient: '',
            title: '',
            message: '',
            txPending: false,
          })
        }
      })
      .catch((e) => {
        console.error(e);
      });
    }

    render() {
      return (
        <Layout>
          <h1>Citizen</h1>
          <h2>Issues</h2>
          {
            this.state.issues.list === false ? (<Alert>Loading...</Alert>) :
              this.state.issues.list.length === 0 ? (<Alert>No issues</Alert>) :
                (
                  <Table>
                    <thead>
                      <tr>
                        <th>Titile</th>
                        <th>IPFS Hasf</th>
                        <th>Recipient</th>
                        <th>TxId</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.issues.list.map((item, index) => (
                          <tr key={`issue_${index}`}>
                            <td>
                              <Link href={`/issue?id=${item.issue.id}`}>
                                <a>{item.issue.title}</a>
                              </Link>
                            </td>
                            <td><a href={`http://127.0.0.1:8080/ipfs/${item.issue.ipfsHash}`} target="_blank">{item.issue.ipfsHash}</a></td>
                            <td>
                              <Link href={`/department?address=${item.request.recipient}`}>
                                <a>{item.request.recipient}</a>
                              </Link>
                            </td>
                            <td><a href={`https://wavesexplorer.com/tx/${item.request.txid}`} target="_blank">{item.request.txid}</a></td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </Table>
                )
          }

          <Button bsStyle="primary" onClick={this.toggleModal}>
              New issue
          </Button>

          <Modal show={this.state.visible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>New issue</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Recipient</ControlLabel>{' '}
                <FormControl 
                  type="text" 
                  value={this.state.recipient} 
                  placeholder="Enter recipient address"
                  onChange={(e) => this.setState({recipient: e.target.value})}
                />
              </FormGroup>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Title</ControlLabel>{' '}
                <FormControl 
                  type="text" 
                  value={this.state.title} 
                  placeholder="Enter title"
                  onChange={(e) => this.setState({title: e.target.value})}
                />
              </FormGroup>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Message</ControlLabel>{' '}
                <FormControl 
                  componentClass="textarea" 
                  value={this.state.message} 
                  placeholder="Enter message"
                  onChange={(e) => this.setState({message: e.target.value})}
                />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.toggleModal}>Close</Button>
              <Button 
                bsStyle="primary" 
                onClick={this.handleOk}
                disabled={this.state.txPending}
              >
                Save changes
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

