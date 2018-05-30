// pages/about.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import axios from 'axios';
import { Modal, Button, Alert, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap';

export default class extends React.Component {

    constructor(props) {
      super(props);     
      this.state = {
        issueId: props.url.query.id,
        issue: false,
        replies: {
          list: false,
        }
      };
    }

    async componentDidMount() {
      const res = await axios.get(`http://127.0.0.1:7200/api/v1.0/issues/${this.state.issueId}`);
      console.log(res);
      const issue = res.data.filter(item => item.issue.responseTo === '').map((item, index) =>{
        return item;
      })[0]

      const replies = res.data.filter(item => item.issue.responseTo !== '').map((item, index) =>{
        return item;
      })
      console.log(issue);
      
      this.setState({
        issue: issue,
        replies: {
          list: replies
        }
      })
    }

    
    render() {
      return (
        <Layout>
          {
            this.state.issue === false ? null : (
              <div>
                <h1>{this.state.issue.issue.title}</h1>
                <h2>{this.state.issue.issue.message}</h2>
                <hr />
                <h3>Replies:</h3>

                {
                  this.state.replies.list === false ? null : 
                    this.state.replies.list.map((item, index) => (
                      <Alert key={`row_${index}`}>
                        {item.issue.response}
                      </Alert>
                    ))
                }
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

