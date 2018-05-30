import Layout from '../components/MyLayout.js'
import Header from '../components/Header.js'
import Link from 'next/link'

const layoutStyle = {
  margin: '2em 6em',
  padding: 20,
  border: '0px solid #DDD'
}

export default () => (
  <div style={layoutStyle}>
    <h1>Blockchain <span>Emulation</span></h1>
    <h2>
      Test blockchain behavior on a network level with custom configuration
    </h2>
    <Header />
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');
      font-family: 'Open Sans', sans-serif;
      color: #333;

      h1 {
        font-size: 4em;
        font-weight: 400;
        margin: 1em 0 1.4em 0 ;
      }

      span {
        padding: 0 0.4em;
        background: green;
        color: white;
        border-radius: 4px;
        font-weight: 300;
        
      }

      h2 {
        font-size: 4em;
        font-weight: 300;
      }
      
    `}</style>
  </div>
)