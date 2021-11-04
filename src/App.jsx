import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function getPosition(options) {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    )
}

function App() {
    const [startCoords, setStartCoords] = useState([])
    const wifies = [
        {
            coords: [57.1477579, 65.5890323],
            name: 'wi-fi',
            description: 'wifi for me',
        },
        {
            coords: [57.1477579, 65.58812411],
            name: 'wi-fi2',
            description: 'wifi for me2',
        },
    ]

    useEffect(() => {
        getPosition().then((c) =>
            setStartCoords([c.coords.latitude, c.coords.longitude])
        )
    }, [])

    useEffect(() => {
        const test = { asd: 123 }

        fetch('http://localhost:3002/wifi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(test),
        })
    }, [])
    console.log(startCoords)
    if (!startCoords.length) return null
    return (
        <MapContainer
            style={{ height: '100vh' }}
            center={startCoords}
            zoom={13}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {wifies.map((w) => (
                <Marker position={w.coords}>
                    <Popup>
                        Точка: {w.name}
                        <br />
                        Описание: {w.description}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default App
