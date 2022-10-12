
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
//rcc

import React, { Component } from 'react'
import Spinner from '../Spinner'

export default class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 5,
        category: "general"
    }
    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    //one way to use the data of api and render it using constructor only
    articles = [
        {
            "source": { "id": null, "name": "ESPN" },
            "author": "Paul Gutierrez",
            "title": "Raiders' Davante Adams pushes person postgame, apologizes - ESPN",
            "description": "Davante Adams pushed down a credentialed person on the field carrying equipment in the aftermath of the Raiders' loss Monday night, later issuing an apology.",
            "url": "https://www.espn.com/nfl/story/_/id/34772685/raiders-davante-adams-pushes-person-postgame-apologizes",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1011%2Fr1074017_1296x729_16%2D9.jpg",
            "publishedAt": "2022-10-11T04:50:34Z",
            "content": "KANSAS CITY, Mo. -- Las Vegas Raiders receiver Davante Adams pushed down a credentialed person on the field carrying equipment in the aftermath of Monday night's 30-29 loss at the Kansas City Chiefs.… [+1625 chars]"
        },
        { "source": { "id": null, "name": "YouTube" }, "author": null, "title": "Las Vegas Raiders vs. Kansas City Chiefs | 2022 Week 5 Highlights - NFL", "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...", "url": "https://www.youtube.com/watch?v=TRsIVeqOppY", "urlToImage": "https://i.ytimg.com/vi/TRsIVeqOppY/maxresdefault.jpg", "publishedAt": "2022-10-11T03:43:32Z", "content": null }]


    //runs first
    constructor(props) {
        super(props)
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResult:0
        }
        document.title = `News Render - ${this.capitilizeToUppercase(this.props.category)}`
    }


    fetchMoreData = async() => {
        this.setState({
           page: this.state.page +1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`
       
        let data = await fetch(url)  //it gives promise and return in which we will convert in text, json etc
        let parseddata = await data.json()
        console.log(parseddata)
        this.setState({ articles: this.state.articles.concat(parseddata.articles), totalResult: parseddata.totalResults})
       
      };
    capitilizeToUppercase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    async newsupdate() {
        this.props.setprogress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setprogress(60)  //it gives promise and return in which we will convert in text, json etc
        let parseddata = await data.json()
        this.props.setprogress(80)
    
        this.setState({ articles: parseddata.articles, totalResult: parseddata.totalResults, loading: false })
        this.props.setprogress(100)

    }

    //runs third other way of directly using api url parse it and render it in website using cdm and constructor
    async componentDidMount() {
        console.log("cdm")
        this.newsupdate()
    }

    handleprevious = async () => {
        this.setState({ page: this.state.page - 1, })
        this.newsupdate()
    }

    handlenext = async () => {
        // if(!this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)){}
        this.setState({ page: this.state.page + 1, })
        this.newsupdate()

    }


    //runs second
    render() {
        console.log("render")
        return (
            <>
               <div className="my-3"></div>
                    <h2 className='text-center'>News Render - Top {this.capitilizeToUppercase(this.props.category)} News of India</h2>
                    {this.state.loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                    
                        hasMore={this.state.articles.length !== this.totalResult}
                        loader={<Spinner/>}
                        
                    >
                        <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                        imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>

                            })}
                        </div>
                        </div>
                    </InfiniteScroll>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevious}>&#8592; Previous</button>

                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &#8594;</button>
                    </div>


           
            </>
        )
    }
}
