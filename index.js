var Comment = new React.createClass({
    delete: function(){
        event.preventDefault();
        var commentId = this.props.index
        this.props.removeMe(commentId)
    },
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
                           <button type="button" className="btn btn-danger btn-xs" title="Delete" onClick={this.delete}>
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
	getInitialState : function() {
			return {
			comments: [
				{title: "title 1", comment: "React works for the most part", author: "MJ", date: "2 Aug 2013"},
				{title: "title 2", comment: "React works for the most part", author: "MJ", date: "2 Aug 2013"},
				{title: "title 3", comment: "React works for the most part", author: "MJ", date: "2 Aug 2013"},
				{title: "title 4", comment: "React works for the most part", author: "MJ", date: "2 Aug 2013"},
			]
		}
	},
    handleDelete: function(commentId){
	    var newComments = this.state.comments
        newComments.splice(commentId,1);
        this.setState({
            comments : newComments
        });
    },
    handleSubmit : function(event){
		event.preventDefault();
		let newCommentAdded = this.newCommentAdded.value;
		var commentObj = {title: "title "+ (this.state.comments.length + 1), comment: newCommentAdded, author: "MJ", date: "2 Aug 2013"} ;
		var newComments = this.state.comments.concat(commentObj);
		this.setState({
			comments : newComments
		});
	},



    render : function(){

	    var commentNodes = this.state.comments.map((c,index) => {
	        return <Comment index={index} key={c.title} title={c.title} comment={c.comment} author={c.author} date={c.date} removeMe={this.handleDelete}/>
		});

        return (
            <div className="container">
                <div className="row">
                    <div className="panel panel-default widget">
						<div className="panel-heading">
                            <span className="glyphicon glyphicon-comment"></span>
                            <h3 className="panel-title">
                                Recent Comments</h3>
                            <span className="label label-info">{commentNodes.length}</span>
                        </div>
						<div className="panel-heading">
							<form onSubmit={this.handleSubmit}>
								<textarea ref={ (comment) => {this.newCommentAdded = comment} } name="addComments" id="addComments" cols="30" rows="10"></textarea>
								<button type="submit">Add Comment</button>
							</form>
						</div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {commentNodes}
                            </ul>
							<a href="#" className="btn btn-primary btn-sm btn-block" role="button"><span className="glyphicon glyphicon-refresh"></span> More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(<CommentBox/>, document.getElementById('app'));
