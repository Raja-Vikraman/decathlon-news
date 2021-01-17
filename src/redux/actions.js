import axios from 'axios'
export const GET_NEWS = 'GET_NEWS'

export function getNews(payload) {
    return {
        type: GET_NEWS,
        payload: payload
    }
}

export function getNewsMiddleWare(showPage) {
    // console.log(showPage)
    return (dispatch) => {
        var url = ''
        if(showPage == 'bitcoin') {
            // url = `https://newsapi.org/v2/everything?q=bitcoin&from=2020-12-16&sortBy=publishedAt&apiKey=83700ea10f284df8bfcf4ac5cf41b0d2`
            url = `https://demo5969864.mockable.io/bitcoin`
        }
        else if(showPage == 'headlines-us') {
            // url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=83700ea10f284df8bfcf4ac5cf41b0d2`
            url = `https://demo5969864.mockable.io/headlines-us`
        }
        else if(showPage == 'tech-crunch') {
            // url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=83700ea10f284df8bfcf4ac5cf41b0d2`
            url = `https://demo5969864.mockable.io/tech-crunch`
        }
        else if(showPage == 'apple') {
            // url = `https://newsapi.org/v2/everything?q=apple&from=2021-01-15&to=2021-01-15&sortBy=popularity&apiKey=83700ea10f284df8bfcf4ac5cf41b0d2`
            url = `https://demo5969864.mockable.io/apple`
        }

        axios({
            method:'get',
            url:url
        })
        .then(res => {
            // console.log(res.data.articles)
            dispatch(getNews(res.data.articles))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

