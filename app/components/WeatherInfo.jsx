var React = require('react');

var WeatherInfo = React.createClass({
  render: function(){
    return (
      <h3>Current temperature in {this.props.city} is {this.props.temp}</h3>
    )
  }
});

module.exports = WeatherInfo;
