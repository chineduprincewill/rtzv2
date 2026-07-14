import React, { useEffect, useState } from 'react'

const CountdownComponent = () => {
    const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    });
    //const [subscribed, setSubscribed] = useState(false);

    useEffect(() => {
    // Set launch date to 90 days from now (only once)
    const launchDate = new Date('2026-08-10 00:00:00');
    launchDate.setDate(launchDate.getDate());

    const calculateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;

        if (distance > 0) {
        setCountdown({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    // Calculate immediately on mount
    calculateCountdown();

    // Then update every second
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
    }, []);

    const CountdownItem = ({
    value,
    label,
    }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 flex items-center justify-center bg-background rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-lg w-full h-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {String(value).padStart(2, "0")}
                </span>
            </div>
        </div>
        <span className="text-xs sm:text-sm font-medium text-white/80 uppercase tracking-wider">
        {label}
        </span>
    </div>
    );

    return (
        <div className="w-full md:max-w-max my-2 p-4 rounded-2xl border border-muted-foreground/30">
            <div className="grid grid-cols-4 gap-4 justify-center">
                <CountdownItem value={countdown.days} label="Days" />
                <CountdownItem value={countdown.hours} label="Hours" />
                <CountdownItem value={countdown.minutes} label="Minutes" />
                <CountdownItem value={countdown.seconds} label="Seconds" />
            </div>
        </div>
    );
}

export default CountdownComponent