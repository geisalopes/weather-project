import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="sumbit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Berlin</h1>
      <ul>
        <li>Thursday 17:32</li>
        <li>Fog</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/fog.png"
            alt="Fog"
          ></img>
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation 4%</li>
            <li>Humidity 96%</li>
            <li>Wind 5km/h</li>
          </ul>
        </div>
      </div>
      Hello from Weather
    </div>
  );
}
