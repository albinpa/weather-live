
import React from 'react'
import './Weather.css'


function Weather(props) {
  return (
    <div>
      <div className={props.isSmall ? 'small-card' : props.isCard ? 'loop-card' : 'my-card'}
        style={props.code ? { backgroundImage: `url('/assets/images/${props.code}.jpg')` } : { backgroundImage: `url('/assets/images/1000.jpg')` }}>
        <div className='card-header'>
          <h3 className='card-title'>{props.title}</h3>
          <h4> <small>{props.country} </small> </h4>
          <div>{props.isSmall ? props.date : null}</div>
        </div>
        <div className='card-body'>
          <div className='row'>


            <div className='col-4 offset-7 city-details'>
              <div>{props.isSmall ? null : props.date}</div>
              <div>

                < ul className='w-ul'>
                  <li>{props.lat ? `${props.lat}  lat` : null}</li>
                  <li>{props.long ? `${props.long}  long` : null}</li>
                </ul>
              </div>

            </div>

          </div>
          <div className='row'>
            <div className='col-12 c-12'>
              <div className={props.icon ? 'icon' : 'no-icon'}>
                <img src={`${props.icon}`} alt="" className='icon' width={100}
                  height={100} />
              </div>
              <div>
                <span className=''>{props.text}</span>
              </div>
            </div>
          </div>

          <div className='row c-12'>
            <div className='col-4'>
              <div>
                <h3>{props.mintemp ? 'min' : null}</h3>
                <h3 className={props.mintemp ? 'h-display' : 'h-no-display'} >{props.mintemp}&#176; c</h3>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h3>{props.avgtemp ? 'avg' : null}</h3>
                <h3 className={props.avgtemp ? 'h-display' : 'h-no-display'}>{props.avgtemp}&#176; c </h3>
              </div>
            </div>
            <div className='col-4'>
              <div>
                <h3>{props.maxtemp ? 'max' : null}</h3>
                <h3 className={props.maxtemp ? 'h-display' : 'h-no-display'}>{props.maxtemp}&#176; c</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;