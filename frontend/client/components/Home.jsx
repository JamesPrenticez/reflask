import React, {useState} from 'react'
import ThemeToggle from './ThemeToggle'

function Home() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <main>
        <h1>Title: {window.title}</h1>
        <nav className='flex items-center justify-between bg-gray-500 text-white font-medium'>
          <div className='space-x-2'>
            <a href="/">Home</a>
            <a href="/customers">Customers</a>
          </div>
          <ThemeToggle />
        </nav>



        {/* <button
          className='p-4 border bg-slate-400 font-bold'
          onClick={() => setCounter(counter + 1)}>Increment</button>
        <p>
          {counter}
        </p> */}
      </main>
    </>
  )
}

export default Home