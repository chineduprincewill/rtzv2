import React, { useMemo, useState } from 'react'
import { members } from './members';
import { Award, TrendingDown, TrendingUp } from 'lucide-react';

const SearchResultComponent = ({ optionsarr, location, verifiedarr, quantity, selectedAction }) => {

    const [membersList, setMembersList] = useState(members.filter(mem => mem?.user_type.length > 0));

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

    return (
        <div className='w-full grid gap-4 rounded-2xl p-4 border border-muted-foreground/30 my-4 min-h-64 shadow-inner'>
            <div className='w-full flex justify-end'>
                <span className='text-muted-foreground text-lg font-extralight'>Total search result : {filterMembers.length}</span>
            </div>
        {
            filterMembers.length > 0 && filterMembers.map((member, index) => (
                <div key={index} className='grid gap-2 md:flex md:justify-between md:items-center w-full p-4 rounded-r-2xl border border-muted-foreground/10 hover:bg-muted-foreground/10 cursor-pointer'>
                    <div className='max-w-max grid gap-1'>
                        {
                            member?.action === "selling" ?
                            <div className='flex items-end gap-1 text-sm text-green-600 mb-[-9px]'>
                                <TrendingUp className='h-5 w-5' />
                                <span>Selling</span>
                            </div> : 
                            <div className='flex items-end gap-1 text-sm text-red-600 mb-[-9px]'>
                                <TrendingDown className='h-5 w-5 scale-x-[-1]' />
                                <span>Buying</span>
                            </div>
                        }
                        <div className='flex items-center gap-2'>                            
                            <span className='text-lg md:text-3xl font-extralight'>{member?.name}</span>
                            {
                                member?.is_verified && 
                                <div className='p-1 rounded-full shadow-md bg-accent'>
                                    <Award className='w-4 h-4 text-white' />
                                </div>
                            }
                        </div>
                        <span className='md:text-lg'>{member?.address}, {member?.city}, {member?.state}</span>
                        <span className='capitalize text-xs md:text-sm'>{member?.user_type.length > 0 && member?.user_type.join(', ')}</span>
                    </div>
                    <span className='text-3xl md:text-4xl'>{member?.quantity_kg !== null ? member?.quantity_kg : 0}<span className='ml-1 text-sm'>kg</span></span>
                </div>
            ))
        }
        </div>
    )
}

export default SearchResultComponent