import './download.css'
import React from 'react'
import { UploadOutlined } from "@ant-design/icons";

import model from '../Assets/Rectangle 49.png'
import {DeleteOutlined} from '@ant-design/icons'
const Download = () => {
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
    <div className='row gallery'> 
     </div>
    </div>
  )
}

export default Download
