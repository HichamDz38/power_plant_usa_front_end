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

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function App(){
  const energies =  [
        {
            "url": "http://127.0.0.1:8000/api/energy/200541/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49194/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129989/",
                    "name": "7-Mile Ridge Wind Project",
                    "facility_code": 60814,
                    "state": "AK",
                    "latitude": "63.210689",
                    "longitude": "-143.247156"
                },
                "primary_fuel": "WND",
                "num_generator": null,
                "nameplate_capacity": "1.800",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "WT1",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200542/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "744A",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200543/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "744B",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200544/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "744C",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200545/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "744D",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200546/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "744E",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200547/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "644A",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200548/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "644B",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200549/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "644C",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200550/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "644D",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200551/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "644E",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200552/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "644F",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200553/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49195/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129990/",
                    "name": "Agrium Kenai Nitrogen Operations",
                    "facility_code": 54452,
                    "state": "AK",
                    "latitude": "60.673200",
                    "longitude": "-151.378400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "21.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "644G",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200554/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49196/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129991/",
                    "name": "Alakanuk",
                    "facility_code": 57053,
                    "state": "AK",
                    "latitude": "62.683300",
                    "longitude": "-164.654400"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "UNIT",
            "generator_anual_net": "462.095",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200555/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49196/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129991/",
                    "name": "Alakanuk",
                    "facility_code": 57053,
                    "state": "AK",
                    "latitude": "62.683300",
                    "longitude": "-164.654400"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "id",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200556/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49196/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129991/",
                    "name": "Alakanuk",
                    "facility_code": 57053,
                    "state": "AK",
                    "latitude": "62.683300",
                    "longitude": "-164.654400"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "UNIT1",
            "generator_anual_net": "231.048",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200557/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49196/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129991/",
                    "name": "Alakanuk",
                    "facility_code": 57053,
                    "state": "AK",
                    "latitude": "62.683300",
                    "longitude": "-164.654400"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "UNIT2",
            "generator_anual_net": "288.810",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200558/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49196/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129991/",
                    "name": "Alakanuk",
                    "facility_code": 57053,
                    "state": "AK",
                    "latitude": "62.683300",
                    "longitude": "-164.654400"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "UNIT3",
            "generator_anual_net": "231.048",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200559/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49197/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129992/",
                    "name": "Allison Creek Hydro",
                    "facility_code": 58982,
                    "state": "AK",
                    "latitude": "61.084444",
                    "longitude": "-146.353333"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "6.500",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "GEN1",
            "generator_anual_net": "881.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200560/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49198/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129993/",
                    "name": "Ambler",
                    "facility_code": 60243,
                    "state": "AK",
                    "latitude": "67.087980",
                    "longitude": "-157.856719"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.100",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "478.545",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200561/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49198/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129993/",
                    "name": "Ambler",
                    "facility_code": 60243,
                    "state": "AK",
                    "latitude": "67.087980",
                    "longitude": "-157.856719"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.100",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "358.909",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200562/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49198/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129993/",
                    "name": "Ambler",
                    "facility_code": 60243,
                    "state": "AK",
                    "latitude": "67.087980",
                    "longitude": "-157.856719"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.100",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "478.545",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200563/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3R",
            "generator_anual_net": "21848.462",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200564/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "4",
            "generator_anual_net": "12063.568",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200565/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "P1 BS",
            "generator_anual_net": "0.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200566/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "5584.985",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200567/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "5584.985",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200568/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200569/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "D1",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200570/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49199/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129994/",
                    "name": "Anchorage 1",
                    "facility_code": 75,
                    "state": "AK",
                    "latitude": "61.222100",
                    "longitude": "-149.866100"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "121.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "D2",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200571/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49200/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129995/",
                    "name": "Angoon",
                    "facility_code": 7462,
                    "state": "AK",
                    "latitude": "57.499166",
                    "longitude": "-134.586140"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1A",
            "generator_anual_net": "571.333",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200572/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49200/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129995/",
                    "name": "Angoon",
                    "facility_code": 7462,
                    "state": "AK",
                    "latitude": "57.499166",
                    "longitude": "-134.586140"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2A",
            "generator_anual_net": "571.333",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200573/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49200/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129995/",
                    "name": "Angoon",
                    "facility_code": 7462,
                    "state": "AK",
                    "latitude": "57.499166",
                    "longitude": "-134.586140"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "571.333",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200574/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49200/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129995/",
                    "name": "Angoon",
                    "facility_code": 7462,
                    "state": "AK",
                    "latitude": "57.499166",
                    "longitude": "-134.586140"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200575/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49201/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129996/",
                    "name": "Aniak",
                    "facility_code": 7182,
                    "state": "AK",
                    "latitude": "61.580678",
                    "longitude": "-159.535643"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "768.824",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200576/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49201/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129996/",
                    "name": "Aniak",
                    "facility_code": 7182,
                    "state": "AK",
                    "latitude": "61.580678",
                    "longitude": "-159.535643"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "10",
            "generator_anual_net": "922.588",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200577/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49201/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129996/",
                    "name": "Aniak",
                    "facility_code": 7182,
                    "state": "AK",
                    "latitude": "61.580678",
                    "longitude": "-159.535643"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "9",
            "generator_anual_net": "922.588",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200578/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49201/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129996/",
                    "name": "Aniak",
                    "facility_code": 7182,
                    "state": "AK",
                    "latitude": "61.580678",
                    "longitude": "-159.535643"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200579/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49201/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129996/",
                    "name": "Aniak",
                    "facility_code": 7182,
                    "state": "AK",
                    "latitude": "61.580678",
                    "longitude": "-159.535643"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "4",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200580/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49201/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129996/",
                    "name": "Aniak",
                    "facility_code": 7182,
                    "state": "AK",
                    "latitude": "61.580678",
                    "longitude": "-159.535643"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "5",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200581/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49202/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129997/",
                    "name": "Annex Creek",
                    "facility_code": 62,
                    "state": "AK",
                    "latitude": "58.317600",
                    "longitude": "-134.101000"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "4.000",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "5",
            "generator_anual_net": "11539.800",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200582/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49202/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129997/",
                    "name": "Annex Creek",
                    "facility_code": 62,
                    "state": "AK",
                    "latitude": "58.317600",
                    "longitude": "-134.101000"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "4.000",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "6",
            "generator_anual_net": "14104.200",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200583/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49203/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129998/",
                    "name": "Auke Bay",
                    "facility_code": 7250,
                    "state": "AK",
                    "latitude": "58.387500",
                    "longitude": "-134.644600"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "36.200",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "13",
            "generator_anual_net": "0.665",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200584/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49203/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129998/",
                    "name": "Auke Bay",
                    "facility_code": 7250,
                    "state": "AK",
                    "latitude": "58.387500",
                    "longitude": "-134.644600"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "36.200",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "14",
            "generator_anual_net": "7.335",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200585/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49203/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129998/",
                    "name": "Auke Bay",
                    "facility_code": 7250,
                    "state": "AK",
                    "latitude": "58.387500",
                    "longitude": "-134.644600"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "36.200",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "4",
            "generator_anual_net": "0.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200586/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49204/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129999/",
                    "name": "Aurora Energy LLC Chena",
                    "facility_code": 79,
                    "state": "AK",
                    "latitude": "64.847743",
                    "longitude": "-147.735063"
                },
                "primary_fuel": "SUB",
                "num_generator": 14,
                "nameplate_capacity": "31.300",
                "num_boilers": 14,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "33357.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200587/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49204/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129999/",
                    "name": "Aurora Energy LLC Chena",
                    "facility_code": 79,
                    "state": "AK",
                    "latitude": "64.847743",
                    "longitude": "-147.735063"
                },
                "primary_fuel": "SUB",
                "num_generator": 14,
                "nameplate_capacity": "31.300",
                "num_boilers": 14,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "6367.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200588/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49204/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129999/",
                    "name": "Aurora Energy LLC Chena",
                    "facility_code": 79,
                    "state": "AK",
                    "latitude": "64.847743",
                    "longitude": "-147.735063"
                },
                "primary_fuel": "SUB",
                "num_generator": 14,
                "nameplate_capacity": "31.300",
                "num_boilers": 14,
                "year": 2016
            },
            "generator_id": "5",
            "generator_anual_net": "152258.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200589/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49204/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129999/",
                    "name": "Aurora Energy LLC Chena",
                    "facility_code": 79,
                    "state": "AK",
                    "latitude": "64.847743",
                    "longitude": "-147.735063"
                },
                "primary_fuel": "SUB",
                "num_generator": 14,
                "nameplate_capacity": "31.300",
                "num_boilers": 14,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200590/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49204/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/129999/",
                    "name": "Aurora Energy LLC Chena",
                    "facility_code": 79,
                    "state": "AK",
                    "latitude": "64.847743",
                    "longitude": "-147.735063"
                },
                "primary_fuel": "SUB",
                "num_generator": 14,
                "nameplate_capacity": "31.300",
                "num_boilers": 14,
                "year": 2016
            },
            "generator_id": "7",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200591/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49205/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130000/",
                    "name": "Barrow",
                    "facility_code": 7173,
                    "state": "AK",
                    "latitude": "71.292000",
                    "longitude": "-156.778600"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "20.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "10",
            "generator_anual_net": "0.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200592/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49205/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130000/",
                    "name": "Barrow",
                    "facility_code": 7173,
                    "state": "AK",
                    "latitude": "71.292000",
                    "longitude": "-156.778600"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "20.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "11",
            "generator_anual_net": "13917.780",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200593/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49205/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130000/",
                    "name": "Barrow",
                    "facility_code": 7173,
                    "state": "AK",
                    "latitude": "71.292000",
                    "longitude": "-156.778600"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "20.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "12",
            "generator_anual_net": "14497.688",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200594/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49205/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130000/",
                    "name": "Barrow",
                    "facility_code": 7173,
                    "state": "AK",
                    "latitude": "71.292000",
                    "longitude": "-156.778600"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "20.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "6",
            "generator_anual_net": "7248.844",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200595/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49205/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130000/",
                    "name": "Barrow",
                    "facility_code": 7173,
                    "state": "AK",
                    "latitude": "71.292000",
                    "longitude": "-156.778600"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "20.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "7",
            "generator_anual_net": "7248.844",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200596/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49205/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130000/",
                    "name": "Barrow",
                    "facility_code": 7173,
                    "state": "AK",
                    "latitude": "71.292000",
                    "longitude": "-156.778600"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "20.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "8",
            "generator_anual_net": "7248.844",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200597/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49205/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130000/",
                    "name": "Barrow",
                    "facility_code": 7173,
                    "state": "AK",
                    "latitude": "71.292000",
                    "longitude": "-156.778600"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "20.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "9",
            "generator_anual_net": "0.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200598/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49206/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130001/",
                    "name": "Battery Energy Storage System",
                    "facility_code": 57583,
                    "state": "AK",
                    "latitude": "64.816700",
                    "longitude": "-147.725000"
                },
                "primary_fuel": "MWH",
                "num_generator": null,
                "nameplate_capacity": "40.000",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "BESS",
            "generator_anual_net": "-2392.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200599/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49207/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130002/",
                    "name": "Beaver Falls",
                    "facility_code": 6580,
                    "state": "AK",
                    "latitude": "55.379750",
                    "longitude": "-131.470269"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "5.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "7947.222",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200600/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49207/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130002/",
                    "name": "Beaver Falls",
                    "facility_code": 6580,
                    "state": "AK",
                    "latitude": "55.379750",
                    "longitude": "-131.470269"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "5.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "17483.889",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200601/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49207/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130002/",
                    "name": "Beaver Falls",
                    "facility_code": 6580,
                    "state": "AK",
                    "latitude": "55.379750",
                    "longitude": "-131.470269"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "5.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "4",
            "generator_anual_net": "17483.889",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200602/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49208/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130003/",
                    "name": "Beluga",
                    "facility_code": 96,
                    "state": "AK",
                    "latitude": "61.186100",
                    "longitude": "-151.035600"
                },
                "primary_fuel": "NG",
                "num_generator": 1,
                "nameplate_capacity": "374.400",
                "num_boilers": 1,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "4323.739",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200603/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49208/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130003/",
                    "name": "Beluga",
                    "facility_code": 96,
                    "state": "AK",
                    "latitude": "61.186100",
                    "longitude": "-151.035600"
                },
                "primary_fuel": "NG",
                "num_generator": 1,
                "nameplate_capacity": "374.400",
                "num_boilers": 1,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "4323.739",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200604/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49208/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130003/",
                    "name": "Beluga",
                    "facility_code": 96,
                    "state": "AK",
                    "latitude": "61.186100",
                    "longitude": "-151.035600"
                },
                "primary_fuel": "NG",
                "num_generator": 1,
                "nameplate_capacity": "374.400",
                "num_boilers": 1,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "15970.810",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200605/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49208/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130003/",
                    "name": "Beluga",
                    "facility_code": 96,
                    "state": "AK",
                    "latitude": "61.186100",
                    "longitude": "-151.035600"
                },
                "primary_fuel": "NG",
                "num_generator": 1,
                "nameplate_capacity": "374.400",
                "num_boilers": 1,
                "year": 2016
            },
            "generator_id": "5",
            "generator_anual_net": "18456.960",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200606/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49208/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130003/",
                    "name": "Beluga",
                    "facility_code": 96,
                    "state": "AK",
                    "latitude": "61.186100",
                    "longitude": "-151.035600"
                },
                "primary_fuel": "NG",
                "num_generator": 1,
                "nameplate_capacity": "374.400",
                "num_boilers": 1,
                "year": 2016
            },
            "generator_id": "6",
            "generator_anual_net": "20672.876",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200607/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49208/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130003/",
                    "name": "Beluga",
                    "facility_code": 96,
                    "state": "AK",
                    "latitude": "61.186100",
                    "longitude": "-151.035600"
                },
                "primary_fuel": "NG",
                "num_generator": 1,
                "nameplate_capacity": "374.400",
                "num_boilers": 1,
                "year": 2016
            },
            "generator_id": "7",
            "generator_anual_net": "20672.876",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200608/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49208/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130003/",
                    "name": "Beluga",
                    "facility_code": 96,
                    "state": "AK",
                    "latitude": "61.186100",
                    "longitude": "-151.035600"
                },
                "primary_fuel": "NG",
                "num_generator": 1,
                "nameplate_capacity": "374.400",
                "num_boilers": 1,
                "year": 2016
            },
            "generator_id": "8",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200609/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49209/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130004/",
                    "name": "Bernice Lake",
                    "facility_code": 6292,
                    "state": "AK",
                    "latitude": "60.693500",
                    "longitude": "-151.387400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "76.700",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "3.239",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200610/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49209/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130004/",
                    "name": "Bernice Lake",
                    "facility_code": 6292,
                    "state": "AK",
                    "latitude": "60.693500",
                    "longitude": "-151.387400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "76.700",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "4.506",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200611/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49209/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130004/",
                    "name": "Bernice Lake",
                    "facility_code": 6292,
                    "state": "AK",
                    "latitude": "60.693500",
                    "longitude": "-151.387400"
                },
                "primary_fuel": "NG",
                "num_generator": null,
                "nameplate_capacity": "76.700",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "4",
            "generator_anual_net": "4.256",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200612/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49210/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130005/",
                    "name": "Bethel",
                    "facility_code": 6566,
                    "state": "AK",
                    "latitude": "60.789700",
                    "longitude": "-161.787778"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "12.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "6836.667",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200613/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49210/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130005/",
                    "name": "Bethel",
                    "facility_code": 6566,
                    "state": "AK",
                    "latitude": "60.789700",
                    "longitude": "-161.787778"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "12.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "6836.667",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200614/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49210/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130005/",
                    "name": "Bethel",
                    "facility_code": 6566,
                    "state": "AK",
                    "latitude": "60.789700",
                    "longitude": "-161.787778"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "12.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "6836.667",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200615/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49210/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130005/",
                    "name": "Bethel",
                    "facility_code": 6566,
                    "state": "AK",
                    "latitude": "60.789700",
                    "longitude": "-161.787778"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "12.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "4",
            "generator_anual_net": "6836.667",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200616/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49210/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130005/",
                    "name": "Bethel",
                    "facility_code": 6566,
                    "state": "AK",
                    "latitude": "60.789700",
                    "longitude": "-161.787778"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "12.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "6",
            "generator_anual_net": "6836.667",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200617/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49210/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130005/",
                    "name": "Bethel",
                    "facility_code": 6566,
                    "state": "AK",
                    "latitude": "60.789700",
                    "longitude": "-161.787778"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "12.600",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "7",
            "generator_anual_net": "6836.667",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200618/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49211/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130006/",
                    "name": "Black Bear Lake",
                    "facility_code": 7752,
                    "state": "AK",
                    "latitude": "55.476472",
                    "longitude": "-133.147720"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "4.500",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "20763.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200619/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49212/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130007/",
                    "name": "Blue Lake Hydro",
                    "facility_code": 93,
                    "state": "AK",
                    "latitude": "57.051600",
                    "longitude": "-135.229700"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "22.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "23006.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200620/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49212/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130007/",
                    "name": "Blue Lake Hydro",
                    "facility_code": 93,
                    "state": "AK",
                    "latitude": "57.051600",
                    "longitude": "-135.229700"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "22.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "4",
            "generator_anual_net": "23006.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200621/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49212/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130007/",
                    "name": "Blue Lake Hydro",
                    "facility_code": 93,
                    "state": "AK",
                    "latitude": "57.051600",
                    "longitude": "-135.229700"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "22.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "5",
            "generator_anual_net": "23006.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200622/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49212/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130007/",
                    "name": "Blue Lake Hydro",
                    "facility_code": 93,
                    "state": "AK",
                    "latitude": "57.051600",
                    "longitude": "-135.229700"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "22.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200623/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49212/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130007/",
                    "name": "Blue Lake Hydro",
                    "facility_code": 93,
                    "state": "AK",
                    "latitude": "57.051600",
                    "longitude": "-135.229700"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "22.900",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200624/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49213/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130008/",
                    "name": "Bradley Lake",
                    "facility_code": 7367,
                    "state": "AK",
                    "latitude": "59.778620",
                    "longitude": "-150.940150"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "126.000",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "215254.500",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200625/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49213/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130008/",
                    "name": "Bradley Lake",
                    "facility_code": 7367,
                    "state": "AK",
                    "latitude": "59.778620",
                    "longitude": "-150.940150"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "126.000",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "215254.500",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200626/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49214/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130009/",
                    "name": "Brevig Mission",
                    "facility_code": 60260,
                    "state": "AK",
                    "latitude": "65.331716",
                    "longitude": "-166.479506"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.500",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "206.727",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200627/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49214/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130009/",
                    "name": "Brevig Mission",
                    "facility_code": 60260,
                    "state": "AK",
                    "latitude": "65.331716",
                    "longitude": "-166.479506"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.500",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "413.455",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200628/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49214/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130009/",
                    "name": "Brevig Mission",
                    "facility_code": 60260,
                    "state": "AK",
                    "latitude": "65.331716",
                    "longitude": "-166.479506"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.500",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": "516.818",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200629/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49214/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130009/",
                    "name": "Brevig Mission",
                    "facility_code": 60260,
                    "state": "AK",
                    "latitude": "65.331716",
                    "longitude": "-166.479506"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "1.500",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3A",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200630/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49215/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130010/",
                    "name": "Centennial",
                    "facility_code": 7112,
                    "state": "AK",
                    "latitude": "55.121433",
                    "longitude": "-131.560267"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "3.300",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "IC6",
            "generator_anual_net": "3046.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200631/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49216/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130011/",
                    "name": "Chester Lake",
                    "facility_code": 7168,
                    "state": "AK",
                    "latitude": "55.116879",
                    "longitude": "-131.545879"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "1.000",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "4585.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200632/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49217/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130012/",
                    "name": "Chevak",
                    "facility_code": 6311,
                    "state": "AK",
                    "latitude": "61.525297",
                    "longitude": "-165.590152"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.800",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1A",
            "generator_anual_net": "686.389",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200633/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49217/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130012/",
                    "name": "Chevak",
                    "facility_code": 6311,
                    "state": "AK",
                    "latitude": "61.525297",
                    "longitude": "-165.590152"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.800",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2A",
            "generator_anual_net": "686.389",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200634/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49217/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130012/",
                    "name": "Chevak",
                    "facility_code": 6311,
                    "state": "AK",
                    "latitude": "61.525297",
                    "longitude": "-165.590152"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.800",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3A",
            "generator_anual_net": "1098.222",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200635/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49217/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130012/",
                    "name": "Chevak",
                    "facility_code": 6311,
                    "state": "AK",
                    "latitude": "61.525297",
                    "longitude": "-165.590152"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.800",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200636/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49217/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130012/",
                    "name": "Chevak",
                    "facility_code": 6311,
                    "state": "AK",
                    "latitude": "61.525297",
                    "longitude": "-165.590152"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.800",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200637/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49217/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130012/",
                    "name": "Chevak",
                    "facility_code": 6311,
                    "state": "AK",
                    "latitude": "61.525297",
                    "longitude": "-165.590152"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "2.800",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "3",
            "generator_anual_net": null,
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200638/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49218/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130013/",
                    "name": "Cooper Lake",
                    "facility_code": 6291,
                    "state": "AK",
                    "latitude": "60.392331",
                    "longitude": "-149.665603"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "19.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "43333.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200639/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49218/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130013/",
                    "name": "Cooper Lake",
                    "facility_code": 6291,
                    "state": "AK",
                    "latitude": "60.392331",
                    "longitude": "-149.665603"
                },
                "primary_fuel": "WAT",
                "num_generator": null,
                "nameplate_capacity": "19.400",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "2",
            "generator_anual_net": "43333.000",
            "year": 2016
        },
        {
            "url": "http://127.0.0.1:8000/api/energy/200640/",
            "plant_information": {
                "url": "http://127.0.0.1:8000/api/plant_information/49219/",
                "plant": {
                    "url": "http://127.0.0.1:8000/api/plant_list/130014/",
                    "name": "Craig (AK)",
                    "facility_code": 421,
                    "state": "AK",
                    "latitude": "55.476910",
                    "longitude": "-133.148690"
                },
                "primary_fuel": "DFO",
                "num_generator": null,
                "nameplate_capacity": "6.200",
                "num_boilers": 0,
                "year": 2016
            },
            "generator_id": "1",
            "generator_anual_net": "56.217",
            "year": 2016
        }
    ]
  
  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false} style={{ height: '90vh', width: '100%' }}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {energies.map(energy => (
        <Marker position={[energy.plant_information.plant.latitude,energy.plant_information.plant.longitude]}>
          <Popup>
              {energy.plant_information.plant.name}<br/>{energy.plant_information.nameplate_capacity}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
        
}
const cors = require('cors');
App.use(cors({ origin: true }));
export default App;