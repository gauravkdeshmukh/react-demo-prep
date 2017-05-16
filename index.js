var Comment = new React.createClass({
   render : function(){
       return (
           <li className="list-group-item">
               <div className="row">
                   <div className="col-xs-2 col-md-1">
                       <img src="http://placehold.it/80" className="img-circle img-responsive" alt="" /></div>
                   <div className="col-xs-10 col-md-11">
                       <div>
                           <a href="http://www.jquery2dotnet.com/2013/10/google-style-login-page-desing-usign.html">
                               {this.props.title}</a>
                           <div className="mic-info">
                               By: <a href="#">{this.props.author}</a> on {this.props.date}
                           </div>
                       </div>
                       <div className="comment-text">
                           {this.props.comment}
                       </div>
                       <div className="action">
                           <button type="button" className="btn btn-primary btn-xs" title="Edit">
                               <span className="glyphicon glyphicon-pencil"></span>
                           </button>
                           <button type="button" className="btn btn-success btn-xs" title="Approved">
                               <span className="glyphicon glyphicon-ok"></span>
                           </button>
                           <button type="button" className="btn btn-danger btn-xs" title="Delete">
                               <span className="glyphicon glyphicon-trash"></span>
                           </button>
                       </div>
                   </div>
               </div>
           </li>
       )
   }
});

var CommentBox = React.createClass({
    render : function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="panel panel-default widget">
                        <div className="panel-heading">
                            <span className="glyphicon glyphicon-comment"></span>
                            <h3 className="panel-title">
                                Recent Comments</h3>
                            <span className="label label-info">78</span>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <Comment title="React works" comment="React works for the most part" author="MJ" date="2 Aug 2013" />
                                <Comment title="Example for props" comment="pass attributes from the element" author="AM" date="2 Sep 2013"/>
                                <Comment title="Component within component" comment="nested components" author="BN" date="2 Oct 2013"/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(<CommentBox/>, document.getElementById('app'));
