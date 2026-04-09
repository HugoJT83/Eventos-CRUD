import React from 'react'
import AvatarComponent from './components/AvatarComponent'
import Details from './components/Details'
import { useAccessibility } from '../../../context/AccessibilityContext'

const ProfileUser = () => {

  const {config,setConfig} = useAccessibility();

  return (
    <>
      <div className={
        `flex flex-wrap min-h-120 min-w-full items-center justify-center
        ${config.highContrast ?'bg-white-to-black' : 'bg-linear-180 from-slate-200 to-indigo-500' }
        `}>
        <AvatarComponent/>
        <Details/>
        
      </div>
    </>
  )
}

export default ProfileUser