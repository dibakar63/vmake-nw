import React from 'react'
import './Home.css'
import model from '../Assets/Group 15.png'
import model1 from '../Assets/Rectangle 4.png'
import model2 from '../Assets/Rectangle 5.png'
import model3 from '../Assets/Rectangle 6.png'
import model4 from '../Assets/Rectangle 7.png'
import model5 from '../Assets/Rectangle 4 (1).png'
import model6 from '../Assets/Rectangle 5 (1).png'
import model7 from '../Assets/Rectangle 6 (1).png'
import model8 from '../Assets/Rectangle 7 (1).png'
import arrow from '../Assets/Vector (1).png'
import arrow2 from '../Assets/Vector.png'
import box from '../Assets/Rectangle 13.png'
import vector2 from '../Assets/Vector (2).png'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const [value, setValue] = useState(0);
    const [toggle,setToggle]=useState(false);
    const [toggle1,setToggle1]=useState(false);
    const [toggle2,setToggle2]=useState(false);
    const [toggle3,setToggle3]=useState(false);
    const handleClick=()=>{
        setToggle(!toggle)
    }
    const handleClick1=()=>{
        setToggle1(!toggle1)
    }
    const handleClick2=()=>{
        setToggle2(!toggle2)
    }
    const handleClick3=()=>{
        setToggle3(!toggle3)
    }
    const navigate=useNavigate();

    const handleChange = (event) => {
      setValue(parseInt(event.target.value));
    };
    const handleOnClick=(obj)=>{
        navigate(`/models`,{state:{img:obj}})
     }
  return (
    <div className='container-fluid home'>
    <div className='row title'>
    
        <h1>The Next Generation of</h1>
        <h1 className='ai-title'>AI Fashion Model</h1>
        
    </div>
    <div className='model'>
        <div className='main-model'>
          <img src={model} />
        </div>
        <div className='model-inner'>
        <div className='row model-inner-header'>
        <div className='slider-container'>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={handleChange}
        className='slider'
      />
      <div className='slider-header'>
        {/* {value < 33 && <p>Low Range</p>}
        {value >= 33 && value < 66 && <p>Mid Range</p>}
        {value >= 66 && <p>High Range</p>} */}
        <p value={33} style={{color:"#54BD95"}}>Choose Image</p>
        <p value={66}>Choose Model</p>
        <p value={100}>Download Image</p>
      </div>
    </div>
        </div>
        <div className='row inner-model-container'>
          <h5>Try one demo image for <span style={{color:"#54BD95" ,textDecoration:"underline"}}>Upload Image</span></h5>
          <div className='model-container-img'>
          <img src={"https://gcs.vmake.ai/80fd38a0ed427b22b2e476eb795fe6c0.png"}  onClick={() => handleOnClick("https://gcs.vmake.ai/80fd38a0ed427b22b2e476eb795fe6c0.png")}/>
          <img src='https://gcs.vmake.ai/d96b851ca118c8b66ba79b9288895870.png' onClick={() => handleOnClick("https://gcs.vmake.ai/d96b851ca118c8b66ba79b9288895870.png")}/>
          <img src='https://gcs.vmake.ai/77542935453397eb4bbb8c6b512e84fe.png' onClick={() => handleOnClick("https://gcs.vmake.ai/77542935453397eb4bbb8c6b512e84fe.png")}/>
          <img src='https://gcs.vmake.ai/dc1d4d0f03bb9d8cb679dc459ed430e5.png' onClick={() => handleOnClick("https://gcs.vmake.ai/dc1d4d0f03bb9d8cb679dc459ed430e5.png")}/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8n0vs_OosxglpAFs_KP4Cp8PGTx3BsIh8A&usqp=CAU' onClick={() => handleOnClick("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc8n0vs_OosxglpAFs_KP4Cp8PGTx3BsIh8A&usqp=CAU")}/>
          <img src={model6} onClick={()=>navigate('/models')}/>
          <img src={model7} onClick={()=>navigate('/models')}/>
          <img src={model8} onClick={()=>navigate('/models')}/>
          </div>
        </div>
        <button className='button'>View Models</button>

        </div>
    </div>
    <div className='row content'>
    
        <h3>How to generate <span className='ai-title'>AI Models</span> from maniquines?</h3>
        <div className='inner-content'>
            <div className='content-inner'>
                <img src={box} />
                <div className='content-inner-div'>
                    <h5>Step 1</h5>
                    <h6>Upload Image</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='arrow1'>
            <img src={arrow} />
            </div>
            <div className='content-inner'>
                
                <div className='content-inner-div'>
                    <h5>Step 2</h5>
                    <h6>Select Model</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src={box} />
                </div>
            </div>
            <div className='arrow1'>
            <img src={arrow2} />
            </div>
            <div className='content-inner'>
                <img src={box} />
                <div className='content-inner-div'>
                    <h5>Step 3</h5>
                    <h6>Generate and download models</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            
            
        </div>
    </div>
    <div className='row use-container'>
        <h3>Why Use it?</h3>
        <div className='vector1'>
        <img src={box} className='box1'/>
        <img src={box} className='box2'/>
        <img src={box} className='box3'/>
        <img src={box} className='box4'/>
       
        </div>
        
    </div>
    <div className='faq-container'>
        <div className='faq-inner'>
            <h3>FAQs</h3>
            <div className='faq-2-inner'>
            <div className='faq-2'>
                <p>What are Ai-generated Fashion Models?   </p>
               {!toggle ? <FaPlus onClick={handleClick}/> : <FaMinus onClick={handleClick}/>}
                </div>
                {toggle ? <p style={{fontSize:"10px"}}>AI-generated fashion models are virtual representations of human figures created to showcase clothing items and accessories in a realistic and customizable manner, providing an innovative and cost-effective approach to visual merchandising.</p>:""}
                <div className='faq-2' style={{marginTop:"32px"}}>
                <p>How do Ai-generated Fashion Models benefits the fashion industry?   </p>
               {!toggle1 ? <FaPlus onClick={handleClick1}/> : <FaMinus onClick={handleClick1}/>}
                </div>
                {toggle1 ? <p style={{fontSize:"10px"}}>AI-generated models offer several benefits to the fashion industry. They enhance convenience by streamlining visual merchandising processes, reduce costs associated with traditional photoshoots, and promote inclusivity by representing diverse body types and ethnicities. </p>:""}

                <div className='faq-2' style={{marginTop:"32px"}}>
                <p>How do Ai-generated Fashion Models benefits the fashion industry?   </p>
               {!toggle2 ? <FaPlus onClick={handleClick2}/> : <FaMinus onClick={handleClick2}/>}
                </div>
                {toggle2 ? <p style={{fontSize:"10px"}}>AI-generated models have the potential to leave a smaller carbon footprint compared to traditional photoshoots involving real models. The carbon footprint of a traditional photoshoot can be significant, considering the resources required for travel, set construction, lighting, and other aspects of the production process. Additionally, photoshoots often involve the use of clothing samples, which may lead to waste if not reused or repurposed.</p> : ""}
                <div className='faq-2' style={{marginTop:"32px"}}>
                <p>How will Ai-generated Fashion Models benefits the environment?   </p>
               {!toggle3 ? <FaPlus onClick={handleClick3}/> : <FaMinus onClick={handleClick3}/>}
                </div>
                {toggle3 ? <p style={{fontSize:"10px"}}>AI-generated models enhance the online shopping experience by providing a dynamic and interactive way for customers to view and try on fashion items virtually. With the integration of AR and VR technologies, customers can see how the clothing looks and fits on their personalized AI-generated avatars, fostering a more immersive and satisfying shopping experience from the comfort of their homes.</p>:""}
            </div>
            


        </div>
    </div>
      
    </div>
  )
}

export default Home
