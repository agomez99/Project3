
import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '../context/authContext/authContext'
import "./style.css"



function useFetch(url, defaultResponse) {
    const [data, setData] = useState(defaultResponse);
    async function getDataFromAPI(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData({
                isLoading: false,
                data
            })
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getDataFromAPI(url);
    }, [url])
    return data;
}
export default function TutorialPage() {

    const {getUser} = useContext(AuthContext)

    useEffect(() => {
      getUser()
      // eslint-disable-next-line
    }, [])
  



    const channelID = "UCXgGY0wkgOzynnHvSEVmE3A";
    const APIKEY = "AIzaSyBKnNYl2XaJBi5d_oR5kNBOsnYwf1R0M_E";
    const results = 10
    const apiEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${channelID}&part=snippet,id&order=date&&maxResults=${results}`
    const userFetchResponse = useFetch(apiEndpoint, { isLoading: true, data: null });
    if (!userFetchResponse.data || userFetchResponse.isLoading) {
        return 'Loading...'
    }

const videoId = userFetchResponse.data.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);

    return (
        <div>

            {
                videoId.map((link, i) => {
                    var frame =
                        <div key={i} className='youtube'>
                            <iframe
                                title={i}
                                width="560"
                                height="315"
                                src={link}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>
                    return frame
                })
            }
          
        </div>
    )
}