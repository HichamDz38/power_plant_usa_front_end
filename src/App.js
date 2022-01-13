import React, { useState, useEffect }  from 'react';
//import { MapContainer, TileLayer } from 'react-leaflet';
import axios from "axios";
import L from 'leaflet';
import {CRS} from 'leaflet';
const cities_map = {
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
const states = {'Alaska': [61.385, -152.2683], 'Alabama': [32.799, -86.8073], 'Arkansas': [34.9513, -92.3809], 'Arizona': [33.7712, -111.3877], 'California': [36.17, -119.7462], 'Colorado': [39.0646, -105.3272], 'Connecticut': [41.5834, -72.7622], 'Delaware': [39.3498, -75.5148], 'Florida': [27.8333, -81.717], 'Georgia': [32.9866, -83.6487], 'Hawaii': [21.1098, -157.5311], 'Iowa': [42.0046, -93.214], 'Idaho': [44.2394, -114.5103], 'Illinois': [40.3363, -89.0022], 'Indiana': [39.8647, -86.2604], 'Kansas': [38.5111, -96.8005], 'Kentucky': [37.669, -84.6514], 'Louisiana': [31.1801, -91.8749], 'Massachusetts': [42.2373, -71.5314], 'Maryland': [39.0724, -76.7902], 'Maine': [44.6074, -69.3977], 'Michigan': [43.3504, -84.5603], 'Minnesota': [45.7326, -93.9196], 'Missouri': [38.4623, -92.302], 'Mississippi': [32.7673, -89.6812], 'Montana': [46.9048, -110.3261], 'North Carolina': [35.6411, -79.8431], 'North Dakota': [47.5362, -99.793], 'Nebraska': [41.1289, -98.2883], 'New Hampshire': [43.4108, -71.5653], 'New Jersey': [40.314, -74.5089], 'New Mexico': [34.8375, -106.2371], 'Nevada': [38.4199, -117.1219], 'New York': [42.1497, -74.9384], 'Ohio': [40.3736, -82.7755], 'Oklahoma': [35.5376, -96.9247], 'Oregon': [44.5672, -122.1269], 'Pennsylvania': [40.5773, -77.264], 'Rhode Island': [41.6772, -71.5101], 'South Carolina': [33.8191, -80.9066], 'South Dakota': [44.2853, -99.4632], 'Tennessee': [35.7449, -86.7489], 'Texas': [31.106, -97.6475], 'Utah': [40.1135, -111.8535], 'Virginia': [37.768, -78.2057], 'Vermont': [44.0407, -72.7093], 'Washington': [47.3917, -121.5708], 'Wisconsin': [44.2563, -89.6385], 'West Virginia': [38.468, -80.9696], 'Wyoming': [42.7475, -107.2085]}
const queryParams = new URLSearchParams(window.location.search);
  const city = queryParams.get('city');
  const year = queryParams.get('year');
  const limit = queryParams.get('limit');
  var f_url = "https://powerplantusasqlite.herokuapp.com/";
  var center = [50.8, -90];
  var zoom =4;
  if(city && year && limit){
    f_url = `https://powerplantusasqlite.herokuapp.com/energies/${year}/${city}/${limit}/`;
    center = states[cities_map[city]]
    zoom = 6;
  }else if(city && year){
    f_url = `https://powerplantusasqlite.herokuapp.com/energies/${year}/${city}/`;
    center = states[cities_map[city]]
    zoom = 6;
  }else if (year && limit){
    f_url = `https://powerplantusasqlite.herokuapp.com/energies/${year}/${limit}`;
  }else if (year){
    f_url = `https://powerplantusasqlite.herokuapp.com/energies/${year}/`;
  }

var map = L.map('map').setView(center, zoom,  false);
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
            radius: (d.generator_anual_net==null || isNaN(Math.log10(d.generator_anual_net)))?0:Math.log10(d.generator_anual_net)*3000
          })
          .bindPopup(`name:${d.plant_information.plant.name}<br/>
          state :${d.plant_information.plant.state}<br/>
          primary fluel :${d.plant_information.primary_fluel}<br/>
          num generators :${d.plant_information.num_generator}<br/>
          num boilers :${d.plant_information.num_boilers}<br/>
          capacity :${d.plant_information.nameplate_capacity}MW<br/>
          anual_net :${d.generator_anual_net}MWh<br/>
          `)
          .addTo(map)
          
        ))
        //console.log(url)
      })
    }, [url])
    return (
        <div>
            <form action="" method='get'>
            <label>city :</label>
              <select name="city">
                {cities_array.map(city =>(
                    <option value={city}>{cities_map[city]}</option>
                ))}
              </select>
              <label>year :</label>
              <input type="number" name="year"></input>
              <label>limit :</label>
              <input type="number" name="limit"></input>
              <input type="submit"></input>
            </form>
        </div>
        
    );
}
export default App;