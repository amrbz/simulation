import Header from './Header'
import Head from 'next/head'


const layoutStyle = {
  margin: 0,
  padding: '4em 8em',
  border: '0px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title>Blockchain Emulation</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
      {/* <link rel="stylesheet" href="https://unpkg.com/react-rangeslider/umd/rangeslider.min.css" /> */}
    </Head>
    <Header />
    {props.children}
  </div>
)

export default Layout