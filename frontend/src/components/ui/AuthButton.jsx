import React from 'react'

const AuthButton = ({text}) => {
  return (
        <button  type="submit" className="font-Bitcount hover:cursor-pointer text-white-to-black bg-indigo-to-yellow border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <span>{text}</span>
        </button>
  )
}

export default AuthButton