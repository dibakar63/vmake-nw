import React, { useEffect } from "react";
import "./Models.css";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import model from "../Assets/Rectangle 49.png";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import arrow from "../Assets/Vector (4).png";
import arrow1 from "../Assets/Vector (5).png";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import model2 from "../Assets/Rectangle 50.png";
import a1 from "../Assets/a1 (1).png";
import a2 from "../Assets/a1 (2).png";
import a3 from "../Assets/a1 (3).png";
import a4 from "../Assets/a1 (4).png";
import a5 from "../Assets/a1 (5).png";
import a6 from "../Assets/a1 (6).png";
import a7 from "../Assets/a1 (7).png";
import a8 from "../Assets/a1 (8).png";
import b1 from "../Assets/b (1).png";
import b2 from "../Assets/b (2).png";
import b3 from "../Assets/b (3).png";
import b4 from "../Assets/b (4).png";
import b5 from "../Assets/b (5).png";
import b6 from "../Assets/b (6).png";
import b7 from "../Assets/b (7).png";
import b8 from "../Assets/b (8).png";
import { useNavigate, useLocation } from "react-router-dom";

const Models = () => {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const location = useLocation();
  const [presetsmodel, setpresetsmodel] = useState();
  const [presetbackground, setpresetbackground] = useState();
  const [presetsmodelcount, setpresetsmodelcount] = useState(10);
  const [presetscenecount, setpresetscenecount] = useState(10);
  const [backgroundTypes, setbackgroundTypes] = useState("original");
  const [presetBackgroundId, setpresetBackgroundId] = useState(null);
  const navigate = useNavigate();
  //  const [taskId,settaskId]=useState('');
  useEffect(() => {
    console.log(location.state.img);
    try {
      const res = axios
        .get(`http://localhost:8002/wrapper/presetmodels`)
        .then((response) => {
          setpresetsmodel(response.data.data.presets);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    try {
      const res = axios
        .get(`http://localhost:8002/wrapper/presetbackgrounds`)
        .then((response) => {
          setpresetbackground(response.data.data.presets);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };
  const handleChange1 = (event) => {
    setValue1(parseInt(event.target.value));
  };
  const handleChange2 = (event) => {
    setValue1(parseInt(event.target.value));
  };
  const handleModelClick = () => {
    setpresetsmodelcount(presetsmodelcount + 10);
  };
  const handleSceneClick = () => {
    setpresetscenecount(presetscenecount + 10);
  };
  const handleModelSelect = async (img) => {
    let body = {};
    body.image = location.state.img;
    body.maskColorModel = "white-black";
    body.maskType = "clothes";
    body.mask = null;
    body.count = 4;
    body.presetModelId = img.presetId;
    body.backgroundTypes = [backgroundTypes];
    body.presetBackgroundId = presetBackgroundId;
    body.callbackUrl = null;
    body.modelSize = "similar";
    body.modelExpression = "similar";
    console.log(body, img, "body");
    await axios
      .post(`http://localhost:8002/wrapper/vmake`, body)
      .then((response) => {
        if (response.status == "200") {
          handleDownload(response.data.data.taskId);
        }
      });
  };
  const handleDownload = async (taskId) => {
    try {
      const response = await axios.get(
        `http://localhost:8002/wrapper/vmakeTaskId?name=${taskId}`
      );
      const { status, data, progress } = response.data;
      console.log(status, data, progress);
      if (data.status === "success" && data.progress === 100) {
        navigate(`/`, { state: { data: data } });
      } else {
        await handleDownload(taskId);
        // Set taskId if status is neither 100 nor 40
      }
    } catch (error) {
      // Handle any errors
      console.error("Error fetching task ID:", error);
    }
  };
  const handleSceneSelect = (img) => {
    setbackgroundTypes("preset");
    setpresetBackgroundId(img.presetId);
  };
  return (
    <div className="container container-main">
      <div className="row upload-btn">
        <div className="btn-upload">
          <label for="actual-btn">
            <UploadOutlined /> Upload an outfit image
          </label>{" "}
          <input
            type="file"
            hidden
            id="actual-btn"
            multiple
            accept="image/jpg,image/jpeg,image/png"
          />
        </div>
        <div className="upload-item">
          <img src={model} />
          <div className="display">
            <span>File name</span>
            <span>02/02/2024</span>
          </div>
          <DeleteOutlined style={{ color: "red", fontSize: "25px" }} />
        </div>
      </div>
      <div className="modelpage">
        <div className="main">
          <div className="main-inner">
            <div className="main_header">
              <div>
                <div className="auto-header">
                  <h6>Auto Select</h6>
                  <div className="slider-container2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={value}
                      onChange={handleChange}
                      className="slider2"
                    />
                  </div>
                  <h6 style={{ color: "gray" }}>Manual Select</h6>
                </div>
                <div className="auto-header">
                  <div>
                    <img src={arrow} />
                    <img src={arrow1} />
                  </div>
                  <div className="slider-container1">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value1={value1}
                      onChange={handleChange1}
                      className="slider"
                    />
                  </div>
                  <div className="icons">
                    <CiCirclePlus style={{ color: "#54BD95" }} />
                    <CiCircleMinus style={{ color: "red" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="model2">
              <img src={model2} />
              <div className="btn-div">
                <button className="small_btn">CLear</button>
                <button className="small_btn">Preview Outfit Cutout</button>
                <button
                  className="small_btn2"
                  onClick={() => navigate("/download")}
                >
                  Check result
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="choose-model">
          <div className="slider-container" style={{ marginTop: "20px" }}>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value2={value2}
              onChange={handleChange2}
              className="slider"
            />
            <div className="slider-header">
              {/* {value < 33 && <p>Low Range</p>}
        {value >= 33 && value < 66 && <p>Mid Range</p>}
        {value >= 66 && <p>High Range</p>} */}
              <p value={33} style={{ color: "#54BD95" }}>
                Choose Image
              </p>
              <p value={66}>Choose Model</p>
              <p value={100}>Download Image</p>
            </div>
            <div className="ai-header">
              <h3>Ai models</h3>
              <select>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <select>
                <option value="Skintone">Skitnone</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <select>
                <option value="Age">Age</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <p style={{ fontSize: "13px", marginTop: "10px" }}>
              You can choose a variety of presents when you can choose your own
              image.
            </p>
            <div className="variety-img">
              {presetsmodel?.slice(0, presetsmodelcount).map((img) => {
                return (
                  <img
                    src={img.thumbnail}
                    onClick={() => handleModelSelect(img)}
                  />
                );
              })}
            </div>
            <button className="button" onClick={handleModelClick}>
              View More Models
            </button>
            <h3 style={{ textAlign: "left", marginTop: "20px" }}>Scenes</h3>
            <div className="scenes-img">
              {presetbackground?.slice(0, presetscenecount).map((img) => {
                return (
                  <img
                    src={img.thumbnail}
                    onClick={() => handleSceneSelect(img)}
                  />
                );
              })}
            </div>
            <button className="button" onClick={handleSceneClick}>
              View more Models
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
