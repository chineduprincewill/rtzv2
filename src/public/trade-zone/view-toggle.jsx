import { List, MapPin } from 'lucide-react'
import React from 'react'

const ViewToggle = ({ view, toggleView }) => {
    return (
        <div className='flex items-end gap-4'>
            <div className='grid gap-2'>
                <span className='hidden md:block font-extralight text-xs text-nowrap'>List OR Map? Toggle view below</span>
                <div className='flex justify-end'>
                    <div className='max-w-max flex md:flex-row-reverse md:justify-end items-end gap-3'>
                        <div className='max-w-max flex items-center gap-0 p-0 rounded-full shadow-black mt-4 md:mt-0 border border-accent'>
                            <div 
                                className={`py-1.5 pl-3 pr-2 rounded-l-full cursor-pointer ${view === 'list' ? 'bg-accent hover:bg-accent/80' : 'hover:bg-muted-foreground/10'}`}
                                onClick={() => view !== 'list' && toggleView()}
                            >
                                <List className='w-4 h-4' />
                            </div>
                            <div 
                                className={`py-1.5 pl-2 pr-3 rounded-r-full cursor-pointer ${view === 'map' ? 'bg-accent hover:bg-accent/80' : 'hover:bg-muted-foreground/10'}`}
                                onClick={() => view !== 'map' && toggleView()}
                            >
                                <MapPin className='w-4 h-4' />  
                            </div>
                        </div>
                        <span className='capitalize text-lg'>{view}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewToggle