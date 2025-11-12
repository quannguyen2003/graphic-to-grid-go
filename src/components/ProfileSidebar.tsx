import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Twitter, Settings, Bell, HelpCircle, LogOut } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const ProfileSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Icons in top right */}
      <div className="flex items-center justify-end gap-2">
        <Button size="icon" variant="ghost" className="h-8 w-8">
          <Bell className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-8 w-8">
          <Settings className="h-4 w-4" />
        </Button>
      </div>

      {/* Profile Card */}
      <Card className="p-6 bg-gradient-to-br from-secondary to-secondary/50 border-border">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gradient-primary p-1">
              <img 
                src={profileAvatar}
                alt="Profile" 
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground">Jason Liu</h2>
            <p className="text-sm text-muted-foreground">
              Builder, Content Creator, Researcher
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Github className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline">
              Edit Profile
            </Button>
          </div>
        </div>
      </Card>

      {/* Bio Section */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-sm font-semibold text-foreground mb-3">Bio & Summary</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Blockchain designer passionate about community learning and building tools for the Sui ecosystem
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Builder</Badge>
          <Badge variant="secondary">Content Creator</Badge>
          <Badge variant="secondary">Researcher</Badge>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 bg-card border-border">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Quest Completed</p>
            <p className="text-2xl font-bold text-primary">12</p>
          </div>
        </Card>
        <Card className="p-4 bg-card border-border">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Bounties Earned</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-primary">5</p>
              <Badge variant="outline" className="text-xs">320 SUI</Badge>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-card border-border">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Pending Rewards</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-warning">8</p>
              <Badge variant="outline" className="text-xs">1.2k reads</Badge>
            </div>
          </div>
        </Card>
        <Card className="p-4 bg-card border-border">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">XP Level</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-accent">Lv.5</p>
              <Badge variant="outline" className="text-xs">4,750 MP</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Badges/NFTs */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-sm font-semibold text-foreground mb-4">Badges/NFTs</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-lg">🎓</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Sui Move Bootcamp Graduate</p>
              <p className="text-xs text-muted-foreground">Verified by Sui Foundation ✓</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-lg">🏆</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">Hackathon Winner</p>
              <p className="text-xs text-muted-foreground">Verified by Sui Foundation ✓</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <HelpCircle className="h-4 w-4 mr-2" />
          Help & Information
        </Button>
        <Button variant="ghost" className="w-full justify-start" size="sm">
          <LogOut className="h-4 w-4 mr-2" />
          Log out
        </Button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
