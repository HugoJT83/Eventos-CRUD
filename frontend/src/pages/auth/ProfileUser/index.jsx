import React from 'react'
import AvatarComponent from './components/AvatarComponent'
import Details from './components/Details'

const ProfileUser = () => {
  return (
    <>
    <div className='flex flex-wrap min-h-120 min-w-full items-center justify-center'>
      <AvatarComponent/>
      <Details/>
    </div>
    </>
  )
}

export default ProfileUser