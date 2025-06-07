import React from 'react'
import Banner from '../home/components/Banner'
import Progress from './component/Progress'
import Qualification from './component/Qualification'
import Skill from './component/Skill'

export default function Index() {
  return (
    <div>
        <Banner/>
        <Qualification/>
        <Skill/>
        <Progress/>
    </div>
  )
}
