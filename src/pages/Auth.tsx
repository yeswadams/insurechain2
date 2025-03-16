
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail } from 'lucide-react';
import { toast } from "sonner";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  if (authenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleAuthTypeToggle = () => {
    setIsLogin(!isLogin);
    setShowOtpField(false);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      toast.error("Please enter a valid phone number");
      return;
    }
    
    // In a real app, this would send an OTP to the user's phone
    toast.success("OTP sent to your phone");
    setShowOtpField(true);
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      toast.error("Please enter the OTP");
      return;
    }
    
    // In a real app, this would validate the OTP
    toast.success("Authentication successful");
    
    // Simulate loading
    setTimeout(() => {
      setAuthenticated(true);
    }, 1500);
  };

  const handleGoogleAuth = () => {
    // In a real app, this would initiate Google OAuth
    toast.success("Google authentication initiated");
    
    // Simulate loading
    setTimeout(() => {
      setAuthenticated(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-6 flex justify-center">
        <div className="text-2xl font-bold text-insurBlue-800">InsureChain</div>
      </div>
      
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {isLogin ? 'Sign in to your account' : 'Create a new account'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin 
                ? "Access your insurance dashboard" 
                : "Start managing your insurance policies"}
            </p>
          </div>
          
          <div className="mt-8 space-y-6">
            <Button
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            >
              <Mail className="h-5 w-5" />
              {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            {!showOtpField ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="pl-10"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-insurBlue-800 hover:bg-insurBlue-700">
                  {isLogin ? 'Get OTP' : 'Create Account'}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    One-Time Password
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-insurBlue-800 hover:bg-insurBlue-700">
                  Verify
                </Button>
              </form>
            )}
          </div>
          
          <div className="text-center mt-4">
            <button
              onClick={handleAuthTypeToggle}
              className="text-sm text-insurBlue-600 hover:text-insurBlue-700"
            >
              {isLogin 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
