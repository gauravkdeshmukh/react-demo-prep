var HelloClass = React.createClass({
    render : function(){
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
});


var ParentClass = React.createClass({
    render : function(){
        return (
            <div>
                <HelloClass title="first title"/>
                <HelloClass title="second title"/>
                <HelloClass title="third title"/>
            </div>
        )
    }
})

ReactDOM.render(<ParentClass/>, document.getElementById('app'));
