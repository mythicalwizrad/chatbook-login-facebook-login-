import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>My page</title>
      <link rel="icon"
        href="https://th.bing.com/th/id/R.74d28e15bc49f7788190cc0b2168002f?rik=kUEcTPal7euQrw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-oql4Eft3uvQ%2fVg1PTynBY3I%2fAAAAAAAAIvY%2fI6p92rJfAks%2fs1600%2fchatbooks.png&ehk=vHf0BJOBnyreogdtcq%2b1NE4NNe1OQe8ASwe1yklF68w%3d&risl=&pid=ImgRaw&r=0"
        type="image/icon type"></link>
      </Head>
    <main className='flex bg-[#F0F2F5] h-screen justify-evenly items-center '>
      

      <section className='  font-sans items-center justify-center m-20 '>
        <h1 className='text-[#1877F2] text-6xl font-bold'>chatbook</h1>
        <p className='font-sans text-gray-700 font-bold '>Connect with friends and the world <br/> around you on Facebook.</p>
      </section>
      <section>
      <section className='flex flex-col h-[380px] w-[400px]  bg-white rounded-lg shadow-sm shadow-gray-400 justify-center items-center'>
        <input className='p-3 m-3 caret-[#1877F2] text-black w-[350px] border-blue-200 border-x-[1px] border-y-[1px] rounded-md' type="email" placeholder='Email or Phone Number' />
        <input className='p-3 m-3 caret-[#1877F2] text-black w-[350px]  border-blue-200 border-x-[1px] border-y-[1px]  rounded' type="password" placeholder='Password' />
        <button className='bg-[#1877F2] text-white p-4 w-80 rounded-md'>Log In</button>
        <Link className='text-[#1877F2] hover:underline' href="/">Forgot Password ?</Link>
        <hr className='text-gray-600 w-80' />
        <button className='bg-[#36A420] hover:bg-green-600 text-white p-4 m-3  rounded-md '>Create a new Account</button>
      </section>
      
      <p className='text-black'>
      <Link className= ' hover:underline inline text-black font-semibold ' href="/">Create a Page</Link> for a celebrity, brand or business.</p>
      </section>
    </main>
    </>
  )
}
