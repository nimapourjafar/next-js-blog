import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mx-auto w-1/2 my-9">
      <header>
        <h1 className="text-6xl font-bold text-center">Skinny Origins</h1>
        <nav>
          <ul className="flex flex-row space-x-9 justify-center m-6 text-lg">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp;
