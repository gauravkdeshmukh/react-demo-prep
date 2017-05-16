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
                               Google Style Login Page Design Using Bootstrap</a>
                           <div className="mic-info">
                               By: <a href="#">Bhaumik Patel</a> on 2 Aug 2013
                           </div>
                       </div>
                       <div className="comment-text">
                           Awesome design
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
            <ul>
                <Comment/>
                <Comment/>
                <Comment/>
            </ul>
        )
    }
})


ReactDOM.render(<CommentBox/>, document.getElementById('app'));
