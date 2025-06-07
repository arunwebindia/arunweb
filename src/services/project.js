import Donate from '../pages/project/donate/Donate.jsx'
import EmailExtractor from '../pages/project/email_extractor/EmailExtractor.jsx'
import HtmlCompiler from '../pages/project/htmlCompiler/HtmlCompiler.jsx'
import JavascriptCompiler from '../pages/project/jsCompiler/JavascriptCompiler.jsx'
import MemoryGame from '../pages/project/memoryGame/MemoryGame.jsx'
import Snake from '../pages/project/snake/Snake.jsx'
import Tic from '../pages/project/tictoc/Tic.jsx'
import TypingMaster from '../pages/project/typemaster/TypingMaster.jsx'
import donate from '../assets/logo/donate.webp'
import emailExtractor from '../assets/logo/email_extractor.jpg'
import htmlCompiler from '../assets/logo/HTML-CSS-JS.png'
import javascriptCompiler from '../assets/logo/js_compiler.png'
import memoryGame from '../assets/logo/memory_game.png'
import snake from '../assets/logo/snake.jpg'
import tic from '../assets/logo/tic-tac-toe.png'
import typemaster from '../assets/logo/type.png'

export const projectObject = [{
    name:'Donate',
    component:Donate,
    description:"lorem",
    icon:donate
},
{
    name:'Email Extractor',
    component:EmailExtractor,
    description:"lorem",
    icon:emailExtractor
},
{
    name:'Html Compiler',
    component:HtmlCompiler,
    description:"lorem",
    icon:htmlCompiler
},
{
    name:'Javascript Compiler',
    component:JavascriptCompiler,
    description:"lorem",
    icon:javascriptCompiler
},
{
    name:'Memory Game',
    component:MemoryGame,
    description:"lorem",
    icon:memoryGame
},
{
    name:'Snake',
    component:Snake,
    description:"lorem",
    icon:snake
},
{
    name:'Tic',
    component:Tic,
    description:"lorem",
    icon:tic
},
{
    name:'Typing Master',
    component:TypingMaster,
    description:"lorem",
    icon:typemaster
}
]