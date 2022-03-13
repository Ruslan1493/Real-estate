import React, { useEffect, useState } from 'react';
import { getAllProperties } from '../services/userServices';

const Properties = () => {
    const [properties, setProperties] = useState([0,1]);

    useEffect(() => {
        getAllProperties()
            .then(res => {
                console.log(res)
                setProperties(res.data);
            })
    }, [])

    return (
        <>
            <h1>Properties</h1>
            <ul>
                {
                    properties && properties.length > 0 ? properties.map((property) => {
                        return <li>{property.title}</li>
                    }) : "No properties found"
                }
            </ul>
        </>
    )
}

export default Properties;