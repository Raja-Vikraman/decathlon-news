import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNewsMiddleWare} from '../redux/actions.js'
import '../App.css'
class AppContent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.propsGetNews(this.props.showpage)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.showpage != this.props.showpage) {
            this.props.propsGetNews(this.props.showpage)    
        }
    }

    render() {
        return (
            <div className="container text-center"> <span> {this.props.showpage.toUpperCase()} </span>
                {
                    this.props.propsNewsContent.map((item, index)=> {
                        return (
                            <div className="card bg-light" key={index}>
                                <img className="card-img-top rounded-circle img-fluid" src={item.urlToImage} alt={item.title}/>
                                <div className="card-body">
                                    <h4 className="card-title"> {item.title} </h4>
                                    <p className="card-text"> {item.description} </p>
                                    <div>
                                        <a className="card-link" href={`#moreInfo${index}`} data-toggle="collapse"> More Info </a> 
                                    </div>
                                    <div className="collapse" id={`moreInfo${index}`}>
                                        <div className="more-info-flt-left">
                                            <div>
                                                <span> Author: </span>
                                                <span> {item.author} </span> 
                                            </div>
                                            <div>
                                                <span> Published@: </span>
                                                <span> {item.publishedAt} </span> 
                                            </div>                                            
                                        </div>
                                        <div className="more-info-flt-right"> 
                                            <div>
                                                <span> <i className="fa fa-facebook-square more-info-icons"></i> </span>
                                                <span> <i className="fa fa-twitter-square more-info-icons"></i> </span>
                                                <span> <i className="fa fa-google-plus-square more-info-icons"></i> </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        propsNewsContent: state.newsStore.newsContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        propsGetNews: (showpage) => { dispatch(getNewsMiddleWare(showpage))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContent)
