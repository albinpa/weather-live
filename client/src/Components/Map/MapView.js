import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './Map.css'

function MapView() {
  const [redZone, setRedzone] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/getExtreme").then((response) => {

      setRedzone(response.data)
    })

  }, [])

  return (
    <div className='map-container'>
      <Map

        initialViewState={{
          longitude: 76,
          latitude: 9,
          zoom: 7,
          bearing: 0,
          pitch: 0
        }}
        style={{ width: 850, height: 500 }}
        mapboxAccessToken='pk.eyJ1IjoiYWxiaW4tZGV2ZWxlcGVyIiwiYSI6ImNsNjdlaGl2YzBodTYzY281ZGJsdDkwY3UifQ.AbQj0MOBwXQ9Sx6I1lAm1A'
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {redZone.map(({ lat, lon, id, deviation, cityname }) => {
          return (
            <Marker key={id} latitude={lat} longitude={lon} anchor="bottom">
              <button className='marker-btn' >

              </button>
              <div className='hide'>
                {cityname} {deviation} dev
              </div>

            </Marker>

          )
        })}
      </Map>
    </div>

  )
}

export default MapView;