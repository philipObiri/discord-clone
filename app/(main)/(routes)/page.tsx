import Image from 'next/image'
import { UserButton } from '@clerk/nextjs/app-beta'
import { ModeToggle } from '@/components/mode-toggle'


export default function Home() {
  return (
    <div className='m-6'>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  )
}
