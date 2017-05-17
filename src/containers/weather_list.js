import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {
  renderCity(cityDate){
    const name = cityDate.city.name;
    const temp = cityDate.list.map(temps=> temps.main.temp);
    const pressure = cityDate.list.map(temps=> temps.main.pressure);
    const humidity = cityDate.list.map(temps=> temps.main.humidity);
    return(
      <tr key={name}>
       <td>{name}</td>
       <td>
          <Sparklines data={temp}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
        <td>
           <Sparklines data={pressure}>
             <SparklinesLine color="orange" />
           </Sparklines>
         </td>
         <td>
            <Sparklines data={humidity}>
              <SparklinesLine color="gray" />
            </Sparklines>
          </td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderCity)}</tbody>
      </table>
    )
  }
}

function mapState(state) {
  return {weather: state.weather};
}

export default connect(mapState)(WeatherList);
