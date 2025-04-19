
import { MainLayout } from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 gap-4">
        {/* First row - Profile and Total Gain */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-sidebar p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Profile Card</h2>
            <p className="text-sidebar-foreground/70">Your profile information here</p>
          </div>
          
          <div className="bg-sidebar p-4 rounded-lg shadow md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Total Gain</h2>
            <p className="text-sidebar-foreground/70">Tracking your gains</p>
          </div>
        </div>
        
        {/* Second row - Wallet and Referrals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-sidebar p-4 rounded-lg shadow md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Wallet</h2>
            <p className="text-sidebar-foreground/70">Your wallet information</p>
          </div>
          
          <div className="bg-sidebar p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Referrals</h2>
            <p className="text-sidebar-foreground/70">Your referral information</p>
          </div>
        </div>
        
        {/* Third row - Shortcuts */}
        <div className="bg-sidebar p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Shortcuts</h2>
          <p className="text-sidebar-foreground/70">Quick access to features</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
