import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const VideosContext = createContext();

export function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);

    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideosContext() {
    const {videos, setVideos} = useContext(VideosContext);
    const [video, setVideo] = useState({});

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Nathansouzaon/cinetag-api/videos')
            .then(resp => resp.json())
            .then(data => setVideos(data));
    }, [setVideos])

    const getVideo = useCallback((id) => {
        fetch(`https://my-json-server.typicode.com/Nathansouzaon/cinetag-api/videos/${id}`)
            .then(resp => resp.json())
            .then(data => setVideo({...data}))
        }, []);

    return {videos, video, getVideo}
}