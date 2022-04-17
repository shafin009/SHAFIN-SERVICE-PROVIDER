import { useEffect, useState } from 'react';


const useProvider = () => {
    const [providers, setProviders] = useState([])


    useEffect(() => {


        fetch('data.json')
            .then(res => res.json())
            .then(data => setProviders(data))

    }, [])
    return [providers, setProviders]

};

export default useProvider;