import { useEffect, useState } from "react"

const useFetch = (url, dependency) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // controller for cleanup function
        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
            .then(response => {
                if(!response.ok){
                    throw Error("Could the fetch the data from the endpoint!!");
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setData(data);
            })
            .catch(error => {
                if(error.name === "AbortError"){
                    console.log("Fetch aborted");
                }
                else{
                    setIsLoading(false);
                    setError(error.message);
                }
            })

        // Cleanup function
        return () => controller.abort();
    }, [url, dependency])

    return {data, isLoading, error};
}

export default useFetch;