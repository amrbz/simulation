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
        issueId: null,
        recipient: null,
        title: null,
        message: null,
        response: null,
        address: props.url.query.address,
        issues: {
          list: false
        },
        txPending: false,
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

    toggleModal(e) {

      let title = null;
      let message = null;
      const issueId = e.target.dataset.issueid;
      const recipient = e.target.dataset.recipient;
      
      this.state.issues.list.map((item, index) => {
        if (item.issue.id === issueId) {
          title = item.issue.title;
          message = item.issue.message;
        }
      })

      this.setState({
        visible: !this.state.visible,
        title: title,
        message: message,
        issueId: issueId,
      })
    }

    handleOk(e) {
      this.setState({
        txPending: true,
      })
      const issueId = e.target.dataset.issueid;
      const recipient = e.target.dataset.recipient;
      console.log('ZXCZX',issueId);
      
      const req = axios.post('http://127.0.0.1:7200/api/v1.0/issue', {
        recipient: this.state.recipient,
        title: this.state.title,
        message: this.state.message,
        responseTo: e.target.dataset.issueid,
        response: this.state.response
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          
          // const arr = this.state.issues.list === false && this.state.issues.list.length === 0 ? 
          //   [response.data] : [response.data].concat(this.state.issues.list);
          // console.log('Arr', arr);
          
          this.setState({
            // issues: {
            //   list: arr
            // },
            visible: false,
            issueId: null,
            response: '',
            responseTo: null,
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
          <h1>Official's dashboard</h1>
          <h2>Issues</h2>

          <Modal show={this.state.visible} onHide={this.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Citizen's request</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <h3>{this.state.title}</h3>
              <p>{this.state.message}</p>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Reply message</ControlLabel>{' '}
                <FormControl 
                  componentClass="textarea" 
                  value={this.state.reply} 
                  placeholder="Enter message"
                  onChange={(e) => this.setState({response: e.target.value})}
                />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.toggleModal}>Close</Button>
              <Button 
                bsStyle="primary" 
                onClick={this.handleOk}
                disabled={this.state.txPending}
                data-issueid={this.state.issueId}
                data-recipient={this.state.recipient}
              >
                Reply
              </Button>
            </Modal.Footer>
          </Modal>
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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.issues.list
                          .filter(item => item.request.recipient === this.state.address)
                          .filter(item => item.issue.responseTo === '').map((item, index) => (
                          <tr key={`issue_${index}`}>
                            <td>
                              <Link href={`/issue?id=${item.issue.id}`}>
                                <a>{item.issue.title}</a>
                              </Link>
                            </td>
                            <td><a href={`http://127.0.0.1:8080/ipfs/${item.issue.ipfsHash}`} target="_blank">{item.issue.ipfsHash}</a></td>
                            <td><a href={`https://wavesexplorer.com/tx/${item.request.txid}`} target="_blank">{item.request.txid}</a></td>
                            <td>
                              <Button 
                                bsStyle="primary"
                                onClick={this.toggleModal}
                                data-issueid={item.issue.id}
                                data-recipient={item.issue.address}
                              >
                                Reply
                              </Button>
                              </td>
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

