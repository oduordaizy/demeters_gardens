import React from 'react'

const Notfound = () => {
  return (
    <main className="h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold text-[#1d4d4f] mb-4">Category Not Found</h1>
        <p>The category you are looking for does not exist.</p>
      </div>
    </main>
  )
}

export default Notfound