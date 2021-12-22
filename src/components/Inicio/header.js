import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';
import Navi from './nav';
import './styles/index.css'

const Header = () => {

    /* const [move, setMove] = useState(500)

    const onCopy=()=>{
        navigator.clipboard.writeText("+57 321 7289 009")
        .then(()=>{
            setMove(0);
            setTimeout(()=>{
                setMove(500)
            },3000)
        })
        .catch((e)=>console.log(e))
    }  */



    return(
        <header style={{minHeight:`45vh`,overflow:'hidden'}} >
            {/* <div className="sup">
             <div className="left">
                <BsPhone color="rgb(255,200,0)" style={{fontSize:'1em'}} onClick={onCopy}/>
                <p>+57 321 7289 009<br/>+57 310 0987 908</p>
                <div className="modalCopy" style={{right:move}}><BsClipboard/>  Copy to clipboard</div>
            </div> 

          <div className="right">
                <div className="count"></div>
                <AiFillShop color="rgb(255,200,0)" style={{fontSize:'2em'}}/>
            </div> 
            </div> */}
            <div className="center">
                <div className="text">
                    <span className="linea"></span>
                        <h1>Welcome<br/>to<br/>Food World</h1>
                    <span className="linea" ></span>
                </div>
                <div className="stars">
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                    <AiOutlineStar color="rgb(255,250,0)" style={{fontSize:'2em'}}/>
                </div>
            </div>
            <div className="nav-principal">
                <Navi/>
            </div>
        </header>
    )    
}

export default Header