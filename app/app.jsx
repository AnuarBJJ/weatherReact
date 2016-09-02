var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About  = require('About');
var Examples = require('Examples')

ReactDOM.render(
  <Router>
    <Route path='/' component={Main}>
      <Route path='about' component={About}></Route>
      <Route path='examples' component={Examples}></Route>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
