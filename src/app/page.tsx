import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Berry Dash with Guns - Home'
}

export default function Home () {
  return (
    <div className='content-box text-center'>
      <p className='text-2xl'>Berry Dash with Guns</p>
      <p>we gave the bird a gun</p>
      <p className='mt-2 flex gap-2 justify-center'>
        <Link href='/download' className='button'>
          Download
        </Link>
        <Link href='/discord' className='button'>
          Discord
        </Link>
        {/* <Link href='/tutorial' className='button'>
          Tutorial
        </Link>
        <Link href='/leaderboards' className='button'>
          Online Leaderboards
        </Link>
        <Link href='/chatroom' className='button'>
          Online Chatroom
        </Link> */}
        <Link href='/github' className='button'>
          GitHub
        </Link>
      </p>
    </div>
  )
}
