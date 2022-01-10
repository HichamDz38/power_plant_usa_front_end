/*
import React  from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect }  from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from "axios";
function App (){
    const [url, seturl] = useState('http://127.0.0.1:8000/energies/2016/');
    const [energies, setenergies] = useState([]);
    useEffect(() => {
      axios.get(url).then(res => {
        setenergies(energies => [...energies, ...res.data.results]);
        if (res.data.next){
          seturl(res.data.next)
        }
      })
    }, [url])
    return (
        <div>
            <MapContainer center={[37.0902, -95.7129]} zoom={4} scrollWheelZoom={false} style={{ height: '90vh', width: '100%' }}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {energies.map(energy => (
                <Marker key={`${energy.url}`} position={[energy.plant_information.plant.latitude,energy.plant_information.plant.longitude]}>
                    <Popup>
                        name:{energy.plant_information.plant.name}<br/>
                        capacity:{energy.plant_information.nameplate_capacity}MW
                    </Popup>
                </Marker>
            ))}
            
            </MapContainer>
        </div>
    );
}
export default App;

/*
import React,{useEffect, useState} from "react";
import axios from "axios";
const RestExample = () => {
  const url = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/metadata';
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get(url).then(res => {
      setCountries(res.data.countries);
    })
  }, [])
  return <div className="App">
    <h1>List of Countries</h1>
    <div>
      <ul>
        {countries.map(c => <li key={c}>{c}</li>)}
      </ul>
    </div>
  </div>
};
export default RestExample;
*/