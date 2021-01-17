import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNewsMiddleWare} from '../redux/actions.js'
import '../App.css'
class AppContent extends Component {
    constructor(props) {
        super(props)
        this.state = {pagedNewsContent:[], pageItemCount:4, currentPage:1}
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log(props)
    //     if(state.pagedNewsContent.length == 0) {
    //         console.log("Am in getDerivedStateFromProps")
    //         return {...state, pagedNewsContent:props.propsNewsContent.slice(0, state.pageItemCount)}
    //     }
    //     return null
    // }

    componentDidMount() {
        this.props.propsGetNews(this.props.showpage)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.showpage != this.props.showpage) {
    //         console.log("Am in componentDidUpdate")
    //         this.props.propsGetNews(this.props.showpage)
    //     }
    // }

    render() {
        let pageCount = [...new Array(Math.ceil(this.props.propsNewsContent.length/this.state.pageItemCount))]
        return (
            <div>
                <div className="container text-center"> <span> {this.props.showpage.toUpperCase()} </span>
                {
                    this.getItemsForCurrentPage().map((item, index)=> {
                        return (
                            <div className="card bg-light" key={item.id}>
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
                <div className="container">
                    <ul className="pagination justify-content-center">
                        <li id="pagePrev" className="page-item disabled"> <a className="page-link" href="#" onClick={(e) => {
                            e.preventDefault()
                            this.changeCurrentPage(this.state.currentPage-1)
                        }}> Previous </a> </li>
                        {
                            pageCount.map((item, index) => {
                                let active = ''
                                if(this.state.currentPage == index+1) {
                                    active = 'active'
                                }
                                return (<li key={index} id={`page${index+1}`} className={`page-item ${active}`}> 
                                            <a className="page-link" href="#" onClick={(e) => {
                                            e.preventDefault()
                                            this.changeCurrentPage(index+1)}}> {index+1} </a>
                                        </li>)
                            })
                        }
                        <li id="pageNext" className="page-item"> <a className="page-link" href="#" onClick={(e) => {
                            e.preventDefault()
                            this.changeCurrentPage(this.state.currentPage+1)
                        }}> Next </a></li>
                    </ul>
                </div>
            </div>
        )
    }

    changeCurrentPage(currentPage) {
        // console.log("Am in page "+currentPage)
        var li = document.querySelectorAll(".page-item.active");
        li[0].classList.remove('active')

        var cp = document.getElementById(`page${currentPage}`)
        cp.classList.add('active')

        currentPage == 1 ? document.getElementById('pagePrev').classList.add('disabled') : document.getElementById('pagePrev').classList.remove('disabled')

        let maxPage = Math.ceil(this.props.propsNewsContent.length/this.state.pageItemCount)
        currentPage == maxPage ? document.getElementById('pageNext').classList.add('disabled') :  document.getElementById('pageNext').classList.remove('disabled')
          
        this.setState({ ...this.state,
            currentPage:currentPage
        })
    }

    getItemsForCurrentPage() {
        let endIndex = (this.state.currentPage * this.state.pageItemCount) 
        let startIndex = (endIndex - this.state.pageItemCount)
        // console.log(`${startIndex}---${endIndex}`)

        return this.props.propsNewsContent.slice(startIndex, endIndex)
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
