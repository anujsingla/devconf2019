import React, {useState, useRef} from 'react';
import { useFetch } from './useFetch'

export default function TopNewsWithCustomHook () {
    const inputEl = useRef();
    const [newsType, setNewType] = useState('Cricket');
    const [topNews, setTopNews] = useFetch(`https://newsapi.org/v2/everything?q=Cricket&from=2019-06-04&sortBy=publishedAt&apiKey=f02b2a0ecd7a4e41977d296648ad94b7`, {});

    const updateNewsType = () => {
        setNewType(inputEl.current.value);
    }

    const loadData = async () => {
        setTopNews(`https://newsapi.org/v2/everything?q=${newsType}&from=2019-06-04&sortBy=publishedAt&apiKey=f02b2a0ecd7a4e41977d296648ad94b7`)
    }

    return (
        <div className="form-group m-b-20">
            <label className="form-group mx-sm-3 mb-2">Top News</label>
            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input className="form-control form-control-sm" value={newsType} type="text" ref={inputEl} onChange={updateNewsType} />
                </div>
                <button className="btn btn-primary mb-2" onClick={loadData}>Top News</button>
            </div>
            <div className="card">
                <div className="card-header">
                    Top News
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                    {topNews && topNews.articles && topNews.articles.map((news, index) => {
                       return <li key={index} className="list-group-item">{news.title}</li> 
                    })}
                    </ul>
                </div>
            </div>
        </div>
    );
}