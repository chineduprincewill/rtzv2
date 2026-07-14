import { Leaf, MapPin, Shield, TrendingUp } from 'lucide-react'
import React from 'react'

const Features = () => {
    return (
        <section className="bg-gray-100 dark:bg-[#00231a] py-8 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extralight capitalize mb-4">Features</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to succeed in the circular economy</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-lg font-extralight">
                {/* Feature 1 */}
                    <div className="flex gap-6 border border-muted-foreground/20 rounded-r-3xl p-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg dark:bg-pink-100 bg-pink-600 flex items-center justify-center">
                                <MapPin className="w-6 h-6 dark:text-pink-600 text-pink-100" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl mb-2">Location-Based Discovery</h3>
                            <p className="text-muted-foreground">Find vendors, buyers, and recyclers near you with integrated GPS and map features.</p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex gap-6 border border-muted-foreground/20 rounded-r-3xl p-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg dark:bg-pink-100 bg-pink-600 flex items-center justify-center">
                                <Shield className="w-6 h-6 dark:text-pink-600 text-pink-100" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl mb-2">Secure Transactions</h3>
                            <p className="text-muted-foreground">Complete transactions with confidence using our secure platform infrastructure.</p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex gap-6 border border-muted-foreground/20 rounded-r-3xl p-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg dark:bg-pink-100 bg-pink-600 flex items-center justify-center">
                                <TrendingUp className="w-6 h-6 dark:text-pink-600 text-pink-100" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl mb-2">Real-Time Listings</h3>
                            <p className="text-muted-foreground">Access live inventory of recyclable materials and recycled products from our community.</p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex gap-6 border border-muted-foreground/20 rounded-r-3xl p-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg dark:bg-pink-100 bg-pink-600 flex items-center justify-center">
                                <Leaf className="w-6 h-6 dark:text-pink-600 text-pink-100" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl mb-2">Environmental Impact</h3>
                            <p className="text-muted-foreground">Track your contribution to reducing non-biodegradable waste and protecting the climate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features