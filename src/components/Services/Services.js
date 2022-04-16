import React from 'react';
import useDoctor from '../../Hooks/useDoctor';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [doctors, setDoctors] = useDoctor()


    return (
        <div>
            <div className='container d-flex justify-content-between'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {
                        doctors.map(doctor => <ServiceDetails
                            key={doctor.id}
                            doctor={doctor}

                        ></ServiceDetails>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;