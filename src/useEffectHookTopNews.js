import React, {useState, useEffect} from 'react';

export default function UseEffectHookTopNews () {
    const [newsType, setNewType] = useState('Cricket');
    const [topNews, setTopNews] = useState([]);

    const updateNewsType = (event) => {
        setNewType(event.target.value);
    }

    const loadData = async () => {
        const data = await fetchData();
        data && setTopNews(data.articles);
    }

    const fetchData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${newsType}&sortBy=publishedAt&apiKey=f02b2a0ecd7a4e41977d296648ad94b7`)
        return response.json();
    };

    useEffect(() => {
        fetchData().then((data) => {
            console.log(data);
            data && setTopNews(data.articles);
        });
        return 
    }, []);

    return (
        <div className="form-group m-b-20">
            <label className="form-group mx-sm-3 mb-2">Top News</label>
            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input className="form-control form-control-sm" value={newsType} type="text" onChange={updateNewsType} />
                </div>
                <button className="btn btn-primary mb-2" onClick={loadData}>Top News</button>
            </div>
            <div className="card">
                <div className="card-header">
                    Top News
                </div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                    {topNews && topNews.map((news, index) => {
                       return <li key={index} className="list-group-item">{news.title}</li> 
                    })}
                    </ul>
                </div>
            </div>
        </div>
    );
}