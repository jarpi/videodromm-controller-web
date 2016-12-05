var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      title: 'Uniforms',
      uniforms: [],
      show: true
    } //return
  }, //getInitialState
  componentDidMount: function() {
    this.serverRequest = $.get('./js/uniforms.json', function(result) {
      var tempUniforms = result;
      this.setState({
        uniforms: tempUniforms
      }); //setState
    }.bind(this));
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {
    var filteredUniforms = this.state.uniforms;
    filteredUniforms = filteredUniforms.map(function(item, index) {
      return (
        <li className="uniform-info media-body" key={index}>
          <div className="uniform-head">
            <span className="uniform-name">{this.state.uniforms[index].uniformName}</span>
            <span className="uniform-info pull-right">{this.state.uniforms[index].uniformInfo}</span>
          </div>
        </li>
      ) //return
    }.bind(this)); //filteredUniforms.map
    return (
      <div className="interface">
        <h1>{this.state.title}</h1>       
        <ul className="item-list media-list">{filteredUniforms}</ul>
      </div>
    ) //return
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('uniforms')
); //render