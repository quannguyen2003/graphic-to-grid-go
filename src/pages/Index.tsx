import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CourseProgress from "@/components/CourseProgress";
import Bounties from "@/components/Bounties";
import Rewards from "@/components/Rewards";
import Achievements from "@/components/Achievements";
import ConnectedAccounts from "@/components/ConnectedAccounts";
import ProfileSidebar from "@/components/ProfileSidebar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <SearchBar />
            <CourseProgress />
            <Bounties />
            <Rewards />
            <Achievements />
            <ConnectedAccounts />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProfileSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
