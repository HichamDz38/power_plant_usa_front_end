import React, { useState, useEffect }  from 'react';
//import { MapContainer, TileLayer } from 'react-leaflet';
import axios from "axios";
import L from 'leaflet';
import {CRS} from 'leaflet';
var cities_map = {
  ""  : "All_cities",
  "AL": "Alabama",
  "AK": "Alaska",
  "AS": "American Samoa",
  "AZ": "Arizona",
  "AR": "Arkansas",
  "CA": "California",
  "CO": "Colorado",
  "CT": "Connecticut",
  "DE": "Delaware",
  "DC": "District Of Columbia",
  "FM": "Federated States Of Micronesia",
  "FL": "Florida",
  "GA": "Georgia",
  "GU": "Guam",
  "HI": "Hawaii",
  "ID": "Idaho",
  "IL": "Illinois",
  "IN": "Indiana",
  "IA": "Iowa",
  "KS": "Kansas",
  "KY": "Kentucky",
  "LA": "Louisiana",
  "ME": "Maine",
  "MH": "Marshall Islands",
  "MD": "Maryland",
  "MA": "Massachusetts",
  "MI": "Michigan",
  "MN": "Minnesota",
  "MS": "Mississippi",
  "MO": "Missouri",
  "MT": "Montana",
  "NE": "Nebraska",
  "NV": "Nevada",
  "NH": "New Hampshire",
  "NJ": "New Jersey",
  "NM": "New Mexico",
  "NY": "New York",
  "NC": "North Carolina",
  "ND": "North Dakota",
  "MP": "Northern Mariana Islands",
  "OH": "Ohio",
  "OK": "Oklahoma",
  "OR": "Oregon",
  "PW": "Palau",
  "PA": "Pennsylvania",
  "PR": "Puerto Rico",
  "RI": "Rhode Island",
  "SC": "South Carolina",
  "SD": "South Dakota",
  "TN": "Tennessee",
  "TX": "Texas",
  "UT": "Utah",
  "VT": "Vermont",
  "VI": "Virgin Islands",
  "VA": "Virginia",
  "WA": "Washington",
  "WV": "West Virginia",
  "WI": "Wisconsin",
  "WY": "Wyoming"
}
const queryParams = new URLSearchParams(window.location.search);
  const city = queryParams.get('city');
  const year = queryParams.get('year');
  var f_url = "";
  if(city && year){
    f_url = `http://127.0.0.1:8000/energies/${year}/${city}/`;
  }else{
    f_url = 'http://127.0.0.1:8000/energies/2016/';
  }

var map = L.map('map').setView([50.8, -90], 4,  false);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    crs: CRS.Simple,
}).addTo(map);
var cities_array = Object.keys(cities_map);

function App (){
    const [url, seturl] = useState(f_url);
    //const [energies, setenergies] = useState([]);
    useEffect(() => {
      axios.get(url).then(res => {
        var Data = res.data.results;
        if(res.data.next){
          seturl(res.data.next)
          //seturl(url)
        }
        //console.log(Data)
        Data.map(d =>(
          L.circle([d.plant_information.plant.latitude, d.plant_information.plant.longitude],{
            //color: 'red',
            //fillColor: '#f03',
            //  fillOpacity: 0.3,
            radius: (d.generator_anual_net==null || isNaN(Math.log10(d.generator_anual_net)))?0:Math.log10(d.generator_anual_net)*5000
          })
          .bindPopup(`name:${d.plant_information.plant.name}<br/>capacity:${d.plant_information.nameplate_capacity}MW`)
          .openPopup()
          .addTo(map)
          
        ))
        //console.log(url)
      })
    }, [url])
    return (
        <div>
            <select>
          {cities_array.map(city =>(
            <option value={city}>{cities_map[city]}</option>
          ))}
        </select>
        </div>
        
    );
}
export default App;