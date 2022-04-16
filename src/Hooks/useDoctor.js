import { useEffect, useState } from 'react';


const useDoctor = () => {
    const [doctor, setDoctors] = useState([])


    useEffect(() => {


        fetch('data.json')
            .then(res => res.json())
            .then(data => setDoctors(data))

    }, [])
    return [doctor, setDoctors]

};

export default useDoctor;