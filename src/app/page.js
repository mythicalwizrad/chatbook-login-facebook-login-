import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
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
  )
}
