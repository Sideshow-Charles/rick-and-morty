import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Location = () => {
    const [locations, setLocation] = useState([])

    const fetchLocation = () => {
        fetch("https://rickandmortyapi.com/api/location")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setLocation(data)
            })
    }
    useEffect(() => {
        fetchLocation()
    }, [])

    return (
        <div>
            {locations.length > 0 && (
                <ul>
                    {locations.map(location => (
                        <li key={location.id}>{location.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Location;