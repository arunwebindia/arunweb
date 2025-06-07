import React from 'react'
import '../../assets/style/modal.css'
import Donate from '../../pages/project/donate/Donate.jsx'
import EmailExtractor from '../../pages/project/email_extractor/EmailExtractor.jsx'
import HtmlCompiler from '../../pages/project/htmlCompiler/HtmlCompiler.jsx'
import JavascriptCompiler from '../../pages/project/jsCompiler/JavascriptCompiler.jsx'
import MemoryGame from '../../pages/project/memoryGame/MemoryGame.jsx'
import Snake from '../../pages/project/snake/Snake.jsx'
import Tic from '../../pages/project/tictoc/Tic.jsx'
import TypingMaster from '../../pages/project/typemaster/TypingMaster.jsx'


export default function ProjectModal({name}) {
const projectComp = [{
    name:'Donate',
    component:Donate,
    
},
{
    name:'EmailExtractor',
    component:EmailExtractor,
    
},
{
    name:'HtmlCompiler',
    component:HtmlCompiler,
    
},
{
    name:'JavascriptCompiler',
    component:JavascriptCompiler,
    
},
{
    name:'MemoryGame',
    component:MemoryGame,
    
},
{
    name:'Snake',
    component:Snake,
    
},
{
    name:'Tic',
    component:Tic,
    
},
{
    name:'TypingMaster',
    component:TypingMaster,
    
}
]

const Comp = projectComp?.filter((elem=>elem?.name === name))[0]?.component;
  return (
    <div>
        <div className="modal-warpper">
        <div className="modal-container">
          <div className="modal-box">
            {Comp && <Comp/>}
            {/* {projectComp.component && <projectComp.component />} */}
          </div>
        </div>
      </div>
    </div>
  )
}
