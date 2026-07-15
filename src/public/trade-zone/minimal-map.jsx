import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps';
import React from 'react'

const MinimalMap = () => {
    const testPosition = { lat: 6.5244, lng: 3.3792 }; // Lagos coordinates
  
    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map
                style={{ width: '100%', height: '400px' }}
                defaultCenter={testPosition}
                defaultZoom={12}
                mapId= 'DEMO_MAP_ID'
            >
                <AdvancedMarker position={testPosition}>
                <Pin background={'#FF0000'} />
                </AdvancedMarker>
            </Map>
        </APIProvider>
    );
}

export default MinimalMap