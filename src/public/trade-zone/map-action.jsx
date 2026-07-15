import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps';
import { Award, Badge, CheckCircle, MapPin, Recycle, ShoppingBag, Store, User, XCircle } from 'lucide-react';
import React, { useMemo, useState } from 'react'
import { Card, CardContent } from '../../components/ui/card'

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// Custom marker colors based on action
const getMarkerColor = (action, isVerified) => {
  if (action === 'buying') return '#EAB308'; // green
  if (action === 'selling') return '#16A34A'; // amber
  return isVerified ? '#A1376D' : '#9CA3AF'; // blue or gray
};

// Custom marker size based on quantity
const getMarkerSize = (quantity) => {
  if (!quantity) return 30;
  if (quantity > 1000) return 44;
  if (quantity > 500) return 38;
  return 30;
};

// Helper to get user type icon
const getUserTypeIcon = (userTypes) => {
  if (userTypes.includes('recycler') && userTypes.includes('vendor')) return <Recycle className="w-2 h-2" />;
  if (userTypes.includes('recycler')) return <Recycle className="w-2 h-2" />;
  if (userTypes.includes('vendor')) return <Store className="w-2 h-2" />;
  if (userTypes.includes('buyer')) return <ShoppingBag className="w-2 h-2" />;
  return <User className="w-2 h-2" />;
};

const MapAction = ({ members }) => {
    console.log(members);
    const [selectedMember, setSelectedMember] = useState(null);
    const [hoveredMember, setHoveredMember] = useState(null);
  

  // Calculate center of Nigeria
    const defaultCenter = useMemo(() => ({
        lat: 9.0820,
        lng: 8.6753
    }), []);

    // Filter out members without coordinates
    const validMembers = useMemo(() => 
        members.filter(m => m.latitude && m.longitude),
        []
    );

    // Group markers for clustering (simple version)
    const markers = useMemo(() => {
        return validMembers.map((member, index) => ({
        ...member,
        id: index,
        markerColor: getMarkerColor(member.action, member.is_verified),
        markerSize: getMarkerSize(member.quantity_kg)
        }));
    }, [validMembers]);

    return (
        <APIProvider 
            apiKey={API_KEY} 
            libraries={['marker']}
        >
        <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-gray-200">
            <Map
            style={{ width: '100%', height: '100%' }}
            defaultCenter={defaultCenter}
            defaultZoom={6}
            gestureHandling={'greedy'}
            mapId= 'DEMO_MAP_ID' //{import.meta.env.VITE_GOOGLE_MAPS_MAP_ID} // Optional: for custom map styles
            >
            {markers.map((member) => (
                <AdvancedMarker
                key={member.id}
                position={{ lat: member.latitude, lng: member.longitude }}
                onClick={() => setSelectedMember(member)}
                onMouseEnter={() => setHoveredMember(member)}
                onMouseLeave={() => setHoveredMember(null)}
                >
                <div 
                    className="relative cursor-pointer transition-transform duration-200 hover:scale-110"
                    style={{
                    transform: hoveredMember?.id === member.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                >
                    <Pin
                    background={member.markerColor}
                    borderColor={member.is_verified ? '#FA07FD' : 'none'}
                    glyphColor={member.is_verified ? '#FA07FD' : '#FFFFFF'}
                    scale={member.markerSize / 30}
                    />
                    {member.is_verified && (
                    <div className="absolute -top-1 -right-1">
                        <CheckCircle className="w-4 h-4 text-green-500 bg-white rounded-full" />
                    </div>
                    )}
                </div>
                </AdvancedMarker>
            ))}

            {/* Info Window for selected member */}
            {selectedMember && (
                <InfoWindow
                position={{ lat: selectedMember.latitude, lng: selectedMember.longitude }}
                onCloseClick={() => setSelectedMember(null)}
                >
                <Card className="w-72 shadow-lg border-0">
                    <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                        <h3 className="font-light text-xl leading-tight">
                            {selectedMember.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-muted-foreground">
                                {selectedMember.address}, {selectedMember.city}, {selectedMember.state}
                            </span>
                        </div>
                        </div>
                        <div className="flex items-center gap-1">
                        {selectedMember.is_verified ? (
                            <div className="p-1 rounded-full bg-pink-600 text-white hover:bg-pink-500">
                                <Award className="w-4 h-4" />
                            </div>
                        ) : (
                            <Badge variant="secondary" className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-100">
                            <XCircle className="w-3 h-3 mr-1" />
                            Unverified
                            </Badge>
                        )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {selectedMember.user_type.map((type) => (
                            <span className="capitalize px-2 py-1 rounded-md bg-muted-foreground/30 text-xs">{type}</span>
                        ))}
                        {selectedMember.user_type.length === 0 && (
                        <Badge variant="outline" className="text-xs text-gray-400">
                            No role assigned
                        </Badge>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="border border-muted-foreground/20 rounded p-2">
                            <span className="text-gray-500">Action</span>
                            <div className="font-medium capitalize">
                                Currently {selectedMember.action || 'N/A'}
                            </div>
                        </div>
                        <div className="border border-muted-foreground/20 rounded p-2">
                            <span className="text-gray-500">Quantity (kg)</span>
                            <div className="font-medium">
                                {selectedMember.quantity_kg ? 
                                selectedMember.quantity_kg.toLocaleString() : 
                                'N/A'}
                            </div>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </InfoWindow>
            )}
            </Map>

            {/* Legend Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
            <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <span>Selling</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Buying</span>
                </div>
                <div className="flex items-center gap-2 text-xs pt-1 border-t border-gray-200">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                <span>Verified</span>
                </div>
            </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-16 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-200">
            <div className="text-xs space-y-1">
                <div className="font-medium text-gray-700">Total Members</div>
                <div className="text-2xl font-bold text-gray-900">{validMembers.length}</div>
                <div className="flex gap-3 text-gray-500">
                <span>Verified: {members.filter(m => m.is_verified).length}</span>
                <span>Buying: {members.filter(m => m.action === 'buying').length}</span>
                <span>Selling: {members.filter(m => m.action === 'selling').length}</span>
                </div>
            </div>
            </div>
        </div>
        </APIProvider>
    );
}

export default MapAction