
import { useState } from 'react';
import { Wallet } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    if (isConnected) {
      // Disconnect wallet
      setIsConnected(false);
      setWalletAddress("");
      toast({
        title: "Wallet disconnected",
        description: "Your wallet has been disconnected successfully.",
      });
      return;
    }

    setIsConnecting(true);

    // Simulating wallet connection
    setTimeout(() => {
      const mockAddress = "0x" + [...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
      const displayAddress = mockAddress.slice(0, 6) + "..." + mockAddress.slice(-4);
      
      setWalletAddress(displayAddress);
      setIsConnected(true);
      setIsConnecting(false);
      
      toast({
        title: "Wallet connected",
        description: `Successfully connected to ${displayAddress}`,
      });
    }, 1500);
  };

  return (
    <Button 
      onClick={handleConnect}
      className={`font-medium transition-all duration-300 flex items-center ${
        isConnected 
          ? 'bg-insurBlue-100 text-insurBlue-600 hover:bg-insurBlue-200' 
          : 'bg-insurBlue-600 text-white hover:bg-insurBlue-700'
      }`}
      disabled={isConnecting}
    >
      <Wallet className="mr-2 h-4 w-4" />
      {isConnecting 
        ? 'Connecting...' 
        : isConnected 
          ? walletAddress 
          : 'Connect Wallet'
      }
    </Button>
  );
};

export default ConnectWallet;
