import Head from'next/head'
import Link from 'next/link'

import useSWR from 'swr'
import Header from './commponents/header'
import Styles from '../styles/Home.module.css'
import Content from './commponents/content'

export default function Home() {
  let title = 'ともすた'
  const {data, error} = useSWR('/api/message')
  console.log(data)
  if (error) return <div>not load</div>
  if (!data) return <div>loading now</div>

    return (
    <Content>
      <Head>
        <title>ともすた</title>
      </Head>
     <Header title={ title } />
     <p>{data.message}</p>
     <div>
       <Link href="/about"><a>About</a></Link>
     </div>
     <style jsx>{`
       h1{
         color: white;
       }
       `}</style>
    </Content>
  )
}