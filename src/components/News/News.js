//rcc
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'

const News = (props) => {



    const [articles, setarticle] = useState([])
    const [loading, setloding] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResult, settotalResult] = useState(0)
    //    
    const capitilizeToUppercase = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    const fetchMoreData = async () => {


        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page + 1}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`
        setpage(page + 1)
        let data = await fetch(url)  //it gives promise and return in which we will convert in text, json etc
        let parseddata = await data.json()
        console.log(parseddata)
        setarticle(articles.concat(parseddata.articles))
        settotalResult(parseddata.totalResults)


    };


    const newsupdate = async () => {
        props.setprogress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${page}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}`
        setloding(true)
        let data = await fetch(url)
        props.setprogress(60)  //it gives promise and return in which we will convert in text, json etc
        let parseddata = await data.json()
        props.setprogress(80)
        setarticle(parseddata.articles)
        settotalResult(parseddata.totalResults)
        setloding(false)


        props.setprogress(100)

    }


    useEffect(() => {
        document.title = `News Render - ${capitilizeToUppercase(props.category)}`
        newsupdate()
        //eslint-disable-next-line
    }, [])


    const handleprevious = async () => {

        setpage(page + 1)

        newsupdate()
    }

    const handlenext = async () => {
        // if(!state.page + 1 > Math.ceil(state.totalResult/props.pageSize)){}

        setpage(page - 1)
        newsupdate()

    }


    //runs second

    console.log("render")
    return (
        <>
            <div className="my-3"></div>
            <h2 className='text-center' style={{marginTop: '90px'}}>News Render - Top {capitilizeToUppercase(props.category)} News of India</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}

                hasMore={articles.length !== totalResult}
                loader={<Spinner />}

            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 88) : ""}
                                    imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} /></div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handleprevious}>&#8592; Previous</button>

                <button disabled={page + 1 > Math.ceil(totalResult / props.pageSize)} type="button" className="btn btn-dark" onClick={handlenext}>Next &#8594;</button>
            </div>



        </>
    )
}



News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
}
News.propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}




export default News