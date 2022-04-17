import React from 'react';
import useProvider from '../../Hooks/useProvider';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [providers, setProviders] = useProvider()


    return (
        <div>

            <div className='container row row-cols-1 row-cols-md-3 g-4'>
                {
                    providers.map(provider => <ServiceDetails
                        key={provider.id}
                        provider={provider}

                    ></ServiceDetails>)
                }

            </div>

        </div>
    );
};

export default Services;