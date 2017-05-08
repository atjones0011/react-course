var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Get Weather</h1>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="city"/>
                    <br/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
