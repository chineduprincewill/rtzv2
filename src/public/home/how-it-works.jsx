import { Leaf, TrendingUp, Zap } from 'lucide-react'
import React from 'react'

const HowItWorks = () => {
    return (
        <section className="py-4 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extralight capitalize mb-4">How It Works</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">A seamless marketplace for the circular economy</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Vendors */}
                    <div className="rounded-2xl p-4 md:p-8 border border-muted-foreground/30 hover:border-green-300 hover:shadow-lg transition">
                        <div className='flex gap-2 items-end'>
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
                                <Leaf className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-2xl md:text-3xl mb-3">Vendors</span>
                        </div>
                        <p className="font-extralight text-lg mb-4">
                            Post your recyclable waste and connect with qualified buyers and recyclers in real-time.
                        </p>
                        <ul className="space-y-2 font-extralight text-lg">
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            List waste materials
                            </li>
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Get instant notifications
                            </li>
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Complete transactions
                            </li>
                        </ul>
                    </div>

                    {/* Buyers */}
                    <div className="rounded-2xl p-4 md:p-8 border border-muted-foreground/30 hover:border-pink-300 hover:shadow-lg transition md:scale-105">
                        <div className='flex gap-2 items-end'>
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-4">
                                <TrendingUp className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-2xl md:text-3xl mb-3">Buyers</span>
                        </div>
                        <p className="font-extralight text-lg mb-4">
                            Search for quality recyclables with location-based discovery and connect directly with suppliers.
                        </p>
                        <ul className="space-y-2 font-extralight text-lg">
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                            Find suppliers nearby
                            </li>
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                            Make purchase requests
                            </li>
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                            Negotiate best rates
                            </li>
                        </ul>
                    </div>

                    {/* Recyclers */}
                    <div className="rounded-2xl p-4 md:p-8 border border-muted-foreground/30 hover:border-yellow-300 hover:shadow-lg transition">
                        <div className='flex gap-2 items-end'>
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-700 flex items-center justify-center mb-4">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl mb-3">Recyclers</h3>
                        </div>
                        <p className="font-extralight text-lg mb-4">
                            Source quality materials and showcase your recycled products to a growing customer base.
                        </p>
                        <ul className="space-y-2 font-extralight text-lg">
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
                            Source raw materials
                            </li>
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
                            Display products
                            </li>
                            <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
                            Grow your business
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks