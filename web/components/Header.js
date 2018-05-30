import Link from 'next/link'

const linkStyle = {
  marginRight: '3em'
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/run">
          <a style={linkStyle}>Run emulation</a>
        </Link>
    </div>
)

export default Header