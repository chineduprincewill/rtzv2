import React, { useEffect, useState } from 'react'
import SlidePanel from './slide-panel'
import RtzSignature from './rtz-signature'
import ViewToggle from './view-toggle'
import { Award, Funnel, Home, Search, TrendingDown, TrendingUp } from 'lucide-react'
import { Input } from '../../components/ui/input'
import { Checkbox } from '../../components/ui/checkbox'
import { Label } from '../../components/ui/label'
import SearchResultComponent from './search-result-component'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'

const TradeZone = () => {

    const [view, setView] = useState('list');
    const [pageWarning, setPageWaring] = useState(false);
    const [location, setLocation] = useState();
    const [quantity, setQuantity] = useState();
    const [optionsarr, setOptionsarr] = useState([]);
    const [verifiedarr, setVerifiedarr] = useState(0);
    const [selectedAction, setSelectionAction] = useState('All');

    const goToLogin = () => {
        window.location.href = "/"
    }

    const handleActionChange = (value) => {
        setSelectionAction(value);
        console.log("Selected:", value);
    };

    const handleNumberChange = (e) => {
        // Only allow digits and decimal point
        const numericValue = e.target.value.replace(/[^0-9.]/g, '');
        setQuantity(numericValue);
    };

    // State for checkbox options
    const [selectedOptions, setSelectedOptions] = useState({
        option1: false,
        option2: false,
        option3: false,
    });

    const [selectedVerifiedOptions, setSelectedVerifiedOptions] = useState({
        verified: false,
    });

    // Handle individual checkbox changes
    const handleCheckboxChange = (option, checked) => {
        setSelectedOptions(prev => ({
        ...prev,
        [option]: checked
        }));
    };

    const handleVerifiedCheckboxChange = (option, checked) => {
        //console.log(option)
        setSelectedVerifiedOptions(prev => ({
            ...prev,
           [option] : checked
        }));
        //checked ? setVerifiedarr(1) : setVerifiedarr(0)
    };

    // Get selected options for display
    const getSelectedOptions = () => {
        const options = [];
        if (selectedOptions.option1) options.push('Vendors');
        if (selectedOptions.option2) options.push('Recyclers');
        if (selectedOptions.option3) options.push('Buyers');
        //setOptionsarr(options);
        return options.length > 0 ? options.join(', ') : 'None selected';
    };

    const storeSelectedOptions = () => {
        const options = [];
        if (selectedOptions.option1) options.push('Vendor');
        if (selectedOptions.option2) options.push('Recycler');
        if (selectedOptions.option3) options.push('Buyer');
        setOptionsarr(options);
    }

    const storeVerifedOption = () => {
        //if(selectedVerifiedOptions.verified) setVerifiedarr(1);
        selectedVerifiedOptions.verified ? setVerifiedarr(1) : setVerifiedarr(0)
    }

    const toggleView = () => {
        view === "list" ? setView("map") : setView("list")
    }

    useEffect(() => {
        selectedOptions && storeSelectedOptions()
    }, [selectedOptions])

    useEffect(() => {
        selectedVerifiedOptions && storeVerifedOption()
    }, [selectedVerifiedOptions])

    useEffect(() => {
        setPageWaring(true)
    }, [])

    return (
        <div className='w-full grid'>
            <div className='w-full z-20 grid gap-2 md:gap-4 px-4 py-8 font-extralight'>
                <div className='flex items-center justify-between'>
                    <RtzSignature />
                    <div 
                        className='max-w-max p-3 flex items-center gap-1.5 rounded-xl border border-accent dark:border-muted-foreground/20 mb-2 shadow-md dark:shadow-gray-800 cursor-pointer hover:bg-muted-foreground/10'
                        onClick={goToLogin}
                    >
                        <Home className='w-5 h-5 text-muted-foreground' />
                        <span className='text-nowrap'>Back to Home</span>
                    </div>
                </div>
                
                <div className='w-full grid gap-4'>
                    <div className='w-full grid gap-2 md:gap-8'>
                        <h1 className='text-4xl md:text-6xl font-extralight capitalize'>the trade zone!</h1>

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                        
                        <div className='flex flex-col gap-4 md:flex-row md:items-start'>
                            <div className='w-full grid md:w-1/4 md:pr-6'>
                                <div className='flex gap-2 items-center pb-2 border-b border-muted-foreground/20'>
                                    <Funnel />
                                    <span className='text-2xl'>
                                        Search filter
                                    </span>
                                </div>
                                <div className="my-4">
                                    <div className="w-full max-w-md backdrop-blur-sm rounded-2xl shadow-2xl border border-white/10 p-2">
                                        {/* Option 1 */}
                                        <div className="flex items-center space-x-3 px-2 py-1 rounded-lg hover:bg-muted-foreground/10 transition-colors">
                                            <Checkbox
                                                id="option1"
                                                checked={selectedOptions.option1}
                                                onCheckedChange={(checked) => 
                                                    handleCheckboxChange('option1', checked)
                                                }
                                                className="w-5 h-5 border-2 border-slate-300 data-[state=checked]:bg-accent data-[state=checked]:border-brand"
                                            />
                                            <Label 
                                                htmlFor="option1" 
                                                className="text-lg cursor-pointer font-extralight"
                                            >
                                                Vendors
                                            </Label>
                                        </div>

                                        {/* Option 2 */}
                                        <div className="flex items-center space-x-3 px-2 py-1 rounded-lg hover:bg-muted-foreground/10 transition-colors">
                                            <Checkbox
                                                id="option2"
                                                checked={selectedOptions.option2}
                                                onCheckedChange={(checked) => 
                                                handleCheckboxChange('option2', checked)
                                                }
                                                className="w-5 h-5 border-2 border-slate-300 data-[state=checked]:bg-accent data-[state=checked]:border-brand"
                                            />
                                            <Label 
                                                htmlFor="option2" 
                                                className="text-lg cursor-pointer font-extralight"
                                            >
                                                Recyclers
                                            </Label>
                                        </div>

                                        {/* Option 3 */}
                                        <div className="flex items-center space-x-3 px-2 py-1 rounded-lg hover:bg-muted-foreground/10 transition-colors">
                                            <Checkbox
                                                id="option3"
                                                checked={selectedOptions.option3}
                                                onCheckedChange={(checked) => 
                                                handleCheckboxChange('option3', checked)
                                                }
                                                className="w-5 h-5 border-2 border-slate-300 data-[state=checked]:bg-accent data-[state=checked]:border-brand"
                                            />
                                            <Label 
                                                htmlFor="option2" 
                                                className="text-lg cursor-pointer font-extralight"
                                            >
                                                Buyers
                                            </Label>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4"></div>

                                        {/* Selected options display */}
                                        <div className="bg-muted-foreground/10 rounded-lg px-4 py-2">
                                            <p className="font-extralight">
                                                Filter options: <span className="font-medium">
                                                {getSelectedOptions()}
                                                </span>
                                            </p>
                                            <p className="text-xs mt-1">
                                                Total selected: {Object.values(selectedOptions).filter(Boolean).length} / 3
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-4 mb-2"></div>

                                        {/* verified Option */}
                                        <div className="flex items-center space-x-3 px-2 py-1 rounded-lg hover:bg-muted-foreground/10 transition-colors">
                                            <Checkbox
                                                id="option1"
                                                checked={selectedVerifiedOptions.verified}
                                                onCheckedChange={(checked) => 
                                                    handleVerifiedCheckboxChange('verified', checked)
                                                }
                                                className="w-5 h-5 border-2 border-slate-300 data-[state=checked]:bg-accent data-[state=checked]:border-brand"
                                            />
                                            <Label 
                                                htmlFor="option2" 
                                                className="text-lg cursor-pointer font-extralight"
                                            >
                                                <div className='flex items-center gap-2'>
                                                    <div className='p-1 rounded-full shadow-md bg-accent'>
                                                        <Award className='w-4 h-4 text-white' />
                                                    </div>
                                                    <span className='text-lg font-extralight'>Verified</span>
                                                </div>
                                            </Label>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2"></div>

                                        <Input 
                                            type="number" 
                                            className="px-4 py-6 rounded-lg my-4 border border-muted-foreground/40" 
                                            placeholder="Minimum quantity in kg"
                                            onChange={handleNumberChange}
                                        />

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mt-2"></div>

                                        <RadioGroup 
                                            value={selectedAction} 
                                            onValueChange={handleActionChange}
                                            className="grid md:flex md:flex-wrap md:items-center p-4 gap-4"
                                            >
                                            
                                            <div className="flex items-center space-x-2 font-extralight text-lg">
                                                <RadioGroupItem value="Selling" id="Selling" />
                                                <Label htmlFor="Selling" className="flex gap-1 items-center font-extralight text-lg">
                                                    <span>Selling</span>
                                                    <TrendingUp className='w-4 h-4 text-green-600' />
                                                </Label>
                                            </div>
                                            
                                            <div className="flex items-center space-x-2 font-extralight text-lg">
                                                <RadioGroupItem value="Buying" id="Buying" />
                                                <Label htmlFor="Buying" className="flex gap-1 items-center font-extralight text-lg">
                                                    <span>Buying</span>
                                                    <TrendingDown className='w-4 h-4 scale-x-[-1] text-red-600' />
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2 font-extralight text-lg">
                                                <RadioGroupItem value="All" id="All" />
                                                <Label htmlFor="All" className="font-extralight text-lg">All</Label>
                                            </div>
                                        </RadioGroup>

                                    </div>
                                </div>
                            </div>
                            <div className='w-full grid gap-1 md:w-3/4'>
                                <div className='w-full grid gap-1 md:flex md:items-center md:justify-between'>
                                    <div className='w-full md:w-3/4 flex gap-0 items-center rounded-full border border-muted-foreground/40'>
                                        <div className='flex items-center justify-center h-11 rounded-l-full px-2'>
                                            <Search className='text-muted-foreground' />
                                        </div>
                                        <Input 
                                            type="text"
                                            className="h-11 p-4 rounded-r-full border-none"
                                            placeholder="Type location to filter"
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                    <ViewToggle view={view} toggleView={toggleView} />
                                </div>
                                
                                <small className='font-extralight md:ml-4 text-muted-foreground'>Start typing your location of choice to view your search filter within the location</small>
                                <div className='w-full overflow-x-auto'>
                                    <SearchResultComponent optionsarr={optionsarr} location={location} verifiedarr={verifiedarr} quantity={quantity} selectedAction={selectedAction} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SlidePanel pageWarning={pageWarning} setPageWaring={setPageWaring} />
            </div>
            <div className='w-full fixed top-0 h-screen m-0 bg-[url("/assets/hero.png")] bg-contain opacity-10 dark:opacity-10'></div>
        </div>
        
    )
}

export default TradeZone