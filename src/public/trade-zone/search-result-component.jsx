import React, { useEffect, useMemo, useState } from 'react'
import { members } from './members';
import { Award, TrendingDown, TrendingUp } from 'lucide-react';
import ListAction from './list-action';
import MapAction from './map-action';
import MinimalMap from './minimal-map';
import SvgLoader from '../../components/svg-loader';

const SearchResultComponent = ({ optionsarr, location, verifiedarr, quantity, selectedAction, view }) => {

    const [membersList, setMembersList] = useState(members.filter(mem => mem?.user_type.length > 0));
    const [loading, setLoading] = useState(false)

    const filterMembers = useMemo(() => {
        let filtered = membersList;

        // Filter by location
        if (location && location.trim()) {
            const searchTerm = location.toLowerCase().trim();
            filtered = filtered.filter(item => (
                (item.address && item.address.toLowerCase().includes(searchTerm)) ||
                (item.city && item.city.toLowerCase().includes(searchTerm)) ||
                (item.state && item.state.toLowerCase().includes(searchTerm))
            ));
        }

        // Filter by quantity
        if (quantity) {
            filtered = filtered.filter(item => (
                (item?.quantity_kg && item.quantity_kg >= quantity)
            ));
        }

        // Filter by user_type (AT LEAST ONE match)
        if (optionsarr && optionsarr.length > 0) {
            const lowerOptions = optionsarr.map(item => item.toLowerCase().trim());
            console.log(lowerOptions);
            
            filtered = filtered.filter(user => {
                // Skip users with no user_type
                if (!user.user_type || user.user_type.length === 0) return false;
                
                const userTypes = user.user_type.map(type => type.toLowerCase().trim());
                console.log(userTypes, lowerOptions.some(option => userTypes.includes(option)));
                return lowerOptions.every(option => userTypes.includes(option));
            });
        }

        if (verifiedarr === 1){
            filtered = filtered.filter(item => item.is_verified);
        }

        if (selectedAction && selectedAction !== 'All'){
            filtered = filtered.filter(item => item.action === selectedAction.toLowerCase());
        }

        return filtered;
    }, [membersList, optionsarr, location, verifiedarr, quantity, selectedAction]);

    console.log(verifiedarr)

    useEffect(() => {
        setLoading(true);
    }, [filterMembers])

    useEffect(() => {
        loading && setTimeout(() => setLoading(false), 1000)
    }, [loading])

    return (
        <div className='w-full grid gap-4 rounded-2xl p-4 border border-muted-foreground/30 my-4 min-h-64 shadow-inner'>
            <div className='w-full flex justify-end'>
                <span className='text-muted-foreground text-lg font-extralight'>Total search result : {filterMembers.length}</span>
            </div>
        {
            filterMembers.length > 0 && (
                view === "list" ? <ListAction filterMembers={filterMembers} /> : (
                loading ? <SvgLoader /> : <MapAction members={filterMembers} />
            )
            )
        }
        </div>
    )
}

export default SearchResultComponent