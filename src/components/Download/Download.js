import './download.css'
import React from 'react'
import { UploadOutlined } from "@ant-design/icons";
import model1 from '../Assets/a1 (2).png'
import model2 from '../Assets/a1 (6).png'
import box from '../Assets/Rectangle 13.png'

import model from '../Assets/Rectangle 49.png'
import {DeleteOutlined} from '@ant-design/icons'
import { useState } from 'react';
const Download = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);
  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };
  const handleChange1 = (event) => {
    setValue1(parseInt(event.target.value));
  };
  const handleChange2 = (event) => {
    setValue2(parseInt(event.target.value));
  };
  return (
    <div className='container download'>
      <div className='row upload-btn'>
    <div className='btn-upload'>
    <label for='actual-btn'><UploadOutlined/> Upload an outfit image</label> <input type="file" hidden id='actual-btn' multiple accept="image/jpg,image/jpeg,image/png" />

    </div>
    <div className='upload-item'>
        <img src={model}/>
        <div className='display'><span>File name</span>
        <span>02/02/2024</span></div>
        <DeleteOutlined style={{color:"red",fontSize:"25px"}}/>
    </div>
    </div>
    <div className='row'>
    <div className='col col-md-12 col-sm-12'>
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
    </div>
    <div className='row download-container g-4' >
    <div className='row row-md-12 row-sm-12 d-flex ms-auto g-10 '>
      <button className='btn btn-light' style={{border:"1px solid #54BD95",color:"#54BD95",width:"250px",height:"40px",marginTop:"20px"}}>Generate with new models</button>
      <button className='btn btn-success' style={{background:"#54BD95",marginLeft:"20px",width:"190px",height:"40px",marginTop:"20px"}}>Download All images</button>
    </div>
      <div className='col col-md-12 col-sm-12 column'>
      
      <img src={model1} style={{width:"50px",height:"50px",textAlign:"left"}} className='small-img'/><label for='img'>Name</label>
         <div className='g-5'>
          <img src={box} />
          <img src={box} />
          <img src={box} />
          <img src={box} />
         </div>
         <div >
         <div className="auto-header1">
                  
                  <div className="slider-container2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value1}
                      onChange={handleChange1}
                      className="slider2"
                    />
                  </div>
                  <h6 style={{ color: "gray" ,marginLeft:"20px"}}>Keep Original Background</h6>
                  <button className='btn btn-light' style={{border:"1px solid #54BD95",color:"#54BD95",width:"100px",height:"40px",marginLeft:"20px"}}>Delete</button>
                  <button className='btn btn-success' style={{background:"#54BD95",marginLeft:"20px",width:"100px",height:"40px"}}>Download</button>
                </div>
         </div>

      </div>
      <div className='col col-md-12 col-sm-12 column'>
      <img src={model2} style={{width:"50px",height:"50px",textAlign:"left"}} className='small-img'/><label for='img'>Name</label>
         <div >
          <img src={box}/>
          <img src={box}/>
          <img src={box}/>
          <img src={box}/>
         </div>
         <div>
         <div className="auto-header1">
                  
                  <div className="slider-container2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value2}
                      onChange={handleChange2}
                      className="slider2"
                    />
                  </div>
                  <h6 style={{ color: "gray" ,marginLeft:"20px"}}>Keep Original Background</h6>
                  <button className='btn btn-light' style={{border:"1px solid #54BD95",color:"#54BD95",width:"100px",height:"40px",marginLeft:"20px"}}>Delete</button>
                  <button className='btn btn-success' style={{background:"#54BD95",marginLeft:"20px",width:"100px",height:"40px"}}>Download</button>
                </div>
         </div>
      </div>
    </div>
    </div>
  )
}

export default Download
