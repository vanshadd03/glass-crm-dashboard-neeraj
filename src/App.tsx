
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";

const App = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Index />
      </div>
    </SidebarProvider>
  );
};

export default App;
