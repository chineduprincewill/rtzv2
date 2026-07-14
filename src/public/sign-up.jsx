import React, { useEffect, useState } from 'react'
import LeftBanner from './left-banner'
import { Eye, EyeOff, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { useAuth } from '../hooks/useAuth'

const SignUp = () => {

    const navigate = useNavigate();
    const { isLoading, isAuthenticated, signup } = useAuth();

    const [vendor_name, setVendor_name] = useState();
    const [email, setEmail] = useState();
    const [phoneno, setPhoneno] = useState();
    const [password, setPassword] = useState();
    const [password_confirmation, setPassword_confirmation] = useState()
    const [error, setError] = useState();
    const [eyeopen, setEyeopen] = useState(false)
    const [eyeopen2, setEyeopen2] = useState(false)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const validateForm = () => {
        if (!email.trim()) {
            setError("Email is required");
            return false;
        }
        
        if (!password.trim()) {
            setError("Password is required");
            return false;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address");
            return false;
        }
        
        return true;
    };

    const confirmPassword = () => {
        if (password !== password_confirmation) {
            setError("Confirm password mismatch!");
            return false;
        }

        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //setLoginError("");
        setError("");
        
        if (!validateForm()) {
            return;
        }

        if (!confirmPassword()) {
            return;
        }

        try {
            await signup(vendor_name, email, phoneno, password, password_confirmation);
            toast.success("Account created successfully!", {
                className: "!bg-green-700 !text-white !border-white !font-bold",
                descriptionClassName: "!text-green-700",
            });
            navigate("/");
        } catch (err) {
            const errorMessage = err instanceof Error 
                ? err.message 
                : "Could not sign you up. Please try again.";
            setError(errorMessage);
        }
    };

    const goToLogin = () => {
        window.location.href = "/"
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background mt-4">
            <div className="w-full z-30 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Banner */}
                <LeftBanner />

                {/* Right Form */}
                <div className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 bg-background">
                    <div className="w-full max-w-md">
                        <div className="mb-8">
                            <div 
                                className='max-w-max p-3 flex items-center gap-1 rounded-xl border border-accent dark:border-muted-foreground/20 mb-2 shadow-md dark:shadow-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800'
                                onClick={goToLogin}
                            >
                                <Home />
                                <span>Back to Home</span>
                            </div>
                            <h1 className="text-3xl font-bold text-brand mb-2">Join Our Community</h1>
                            <p className="text-muted-foreground">Provide your credentials to create your account</p>
                        </div>
                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                                <p className="text-sm text-destructive flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {error}
                                </p>
                            </div>
                        )}
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full name input */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Your name
                                </Label>
                                <Input
                                    id="fullname"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={vendor_name}
                                    onChange={(e) => setVendor_name(e.target.value)}
                                    className="h-14 bg-input border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                    required
                                />
                            </div>
                            <div className='w-full grid md:flex md:items-center gap-4'>
                                {/* Email input */}
                                <div className="w-full space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-14 bg-input border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                        required
                                    />
                                </div>
                                {/* Phone no input */}
                                <div className="w-full space-y-2">
                                    <Label htmlFor="phoneno" className="text-sm font-medium text-foreground">
                                        Phone No.
                                    </Label>
                                    <Input
                                        id="phoneno"
                                        type="number"
                                        placeholder="08012345678"
                                        value={phoneno}
                                        onChange={(e) => setPhoneno(e.target.value)}
                                        className="h-14 bg-input border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='w-full grid md:flex md:items-center gap-4'>
                                {/* Password input */}
                                <div className="w-full space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                                    Password
                                    </Label>
                                    <div className='w-full flex items-center gap-1'>
                                        <Input
                                            id="password"
                                            type={eyeopen ? 'text' : 'password'}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="h-14 bg-input border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                            required
                                        />
                                    {
                                        eyeopen ? 
                                            <Eye 
                                                className='cursor-pointer'
                                                onClick={() => setEyeopen(false)}
                                            /> :
                                            <EyeOff
                                                className='cursor-pointer'
                                                onClick={() => setEyeopen(true)}
                                            />  
                                    }
                                    </div>
                                </div>

                                {/* Confirm Password input */}
                                <div className="w-full space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium text-foreground">
                                    Confirm password
                                    </Label>
                                    <div className='w-full flex items-center gap-1'>
                                        <Input
                                            id="confirm_password"
                                            type={eyeopen2 ? 'text' : 'password'}
                                            placeholder="••••••••"
                                            value={password_confirmation}
                                            onChange={(e) => setPassword_confirmation(e.target.value)}
                                            className="h-14 bg-input border-border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                            required
                                        />
                                    {
                                        eyeopen2 ? 
                                            <Eye 
                                                className='cursor-pointer'
                                                onClick={() => setEyeopen2(false)}
                                            /> :
                                            <EyeOff
                                                className='cursor-pointer'
                                                onClick={() => setEyeopen2(true)}
                                            />  
                                    }
                                    </div>
                                </div>
                            </div>
                            {/* Sign in button */}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-14 bg-gradient-to-br from-accent to-accent/40 text-primary-foreground font-semibold rounded-lg transition disabled:opacity-70"
                            >
                                {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Signing up...
                                </span>
                                ) : (
                                "Sign up"
                                )}
                            </Button>
                        </form>

                        {/* Sign up link */}
                        <p className="my-6 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-primary hover:text-primary/80 transition">
                            Login
                        </Link>
                        </p>

                        {/* Footer text */}
                        <p className="text-center text-xs text-muted-foreground mt-6">
                        By signing up, you agree to our{" "}
                        <a href="#" className="hover:text-foreground transition">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="hover:text-foreground transition">
                            Privacy Policy
                        </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full hidden md:block fixed top-0 h-screen m-0 bg-[url("/assets/hero.png")] bg-contain opacity-10 dark:opacity-10'></div>
        </div>
    )
}

export default SignUp