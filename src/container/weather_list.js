import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="blue" units="ºc" /></td>
        <td><Chart data={pressure} color="orange" units="hPa" /></td>
        <td><Chart data={humidities} color="red" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover" >
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºc)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);