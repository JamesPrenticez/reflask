import React from 'react'

function Home() {
  return (
    <>
      <h1>Title: {window.title}</h1>
      <a className="text-green-600 underline" href="/customers">customers</a>
    </>
  )
}

export default Home