/*
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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const App = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [energies, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/energy/2016/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false} style={{ height: '90vh', width: '100%' }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {error,energies.map(energy => (
                    <Marker position={[`${energy.plant_information.plant.latitude}`, `${energy.plant_information.plant.longitude}`]}>
                        <Popup>
                            {energy.plant_information.plant.name}<br/>{energy.plant_information.nameplate_capacity}
                        </Popup>
                    </Marker>
                ))}
                </MapContainer>
        </div>
        );
    }
}
const cors = require('cors');
App.use(cors({ origin: true }));
export default App;