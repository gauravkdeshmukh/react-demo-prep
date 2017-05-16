var HelloClass = React.createClass({
    render : function(){
        return (
            React.DOM.div(null,
                React.DOM.h1(null, this.props.title)
            )
        )
    }
});

var HelloClassElement1 = React.createElement(HelloClass, {title : 'first title'});
var HelloClassElement2 = React.createElement(HelloClass, {title : 'second title'});


var ParentComponent = React.createClass({
    render : function(){
        return (
            React.DOM.div(null,
                HelloClassElement1,
                HelloClassElement2
            )
        )
    }
});



ReactDOM.render(React.createElement(ParentComponent), document.getElementById('app'));
