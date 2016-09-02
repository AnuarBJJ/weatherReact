var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    this.setState({isLoading: true})

    var that = this;
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function(err){
      that.setState({isLoading: false})
      alert(err)
    })
  },
  render: function(){
    var that = this;

    function renderInfo(){

      if (that.state.isLoading){
        return <h3> Fetching data ... </h3>
      } else if (that.state.temp && that.state.location){
        return <WeatherInfo city = {that.state.location} temp={that.state.temp}></WeatherInfo>
      }
    };

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        {renderInfo()}
      </div>
    )
  }
});

module.exports = Weather;
