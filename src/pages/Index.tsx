import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  ArrowUpRight, 
  Clock, 
  Users, 
  Award, 
  Trophy, 
  FileText, 
  Wallet, 
  Github, 
  Twitter, 
  MessageCircle, 
  Link,
  Bell,
  Settings,
  HelpCircle,
  LogOut,
  Send
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

// BountyCard Component
interface BountyCardProps {
  title: string;
  category: string;
  quests: number;
  dueIn: string;
  reward: number;
  currency: string;
}

const BountyCard = ({ title, category, quests, dueIn, reward, currency }: BountyCardProps) => {
  return (
    <Card className="p-4 bg-gradient-card border-border hover:border-primary/50 transition-all cursor-pointer">
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>Quests | {dueIn} | 👥 🔒</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="text-sm font-bold text-primary">{reward} {currency}</span>
        </div>
      </div>
    </Card>
  );
};

// Data
const courses = [
  { title: "Sui Move Bootcamp Graduate", status: "In progress", progress: 65, variant: "progress" },
  { title: "Sui Move Bootcamp Graduate", status: "Review", progress: 85, variant: "review" },
  { title: "Sui Move Bootcamp Graduate", status: "Completed", progress: 100, variant: "completed" },
];

const bounties = [
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
];

const rewards = [
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
];

const achievements = [
  { name: "Sui Move Bootcamp Graduate", icon: Award },
  { name: "Hackathon Winner", icon: Trophy },
  { name: "Top Content Creator", icon: FileText },
];

const accounts = [
  { name: "Wallet", icon: Wallet, connected: false },
  { name: "Github", icon: Github, connected: false },
  { name: "X", icon: Twitter, connected: false },
  { name: "Discord", icon: MessageCircle, connected: false },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold tracking-tight">
                FM<span className="text-primary">³</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Explore
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Learn
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Earn
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                User Dashboard
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Join Telegram
            </Button>
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* SearchBar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              <Input 
                placeholder="Search" 
                className="pl-10 bg-card border-border"
              />
            </div>

            {/* CourseProgress */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Courses in Progress</h2>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {courses.map((course, idx) => (
                  <div key={idx} className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">{course.title}</p>
                      <Progress value={course.progress} className="h-1.5" />
                    </div>
                    <Badge 
                      variant={course.variant as any}
                      className={
                        course.variant === "progress" ? "bg-secondary/20 text-secondary hover:bg-secondary/30" :
                        course.variant === "review" ? "bg-warning/20 text-warning hover:bg-warning/30" :
                        "bg-success/20 text-success hover:bg-success/30"
                      }
                    >
                      {course.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Bounties */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Active Bounties</h2>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {bounties.map((bounty, idx) => (
                  <BountyCard key={idx} {...bounty} />
                ))}
              </div>
            </div>

            {/* Rewards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Pending Rewards</h2>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {rewards.map((reward, idx) => (
                  <BountyCard key={idx} {...reward} />
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Achievements & Badges</h2>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {achievements.map((achievement, idx) => (
                  <Card key={idx} className="p-6 bg-card border-border hover:border-primary/50 transition-all cursor-pointer group">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <achievement.icon className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground">{achievement.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* ConnectedAccounts */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Connected Accounts</h2>

              <div className="space-y-2">
                {accounts.map((account, idx) => (
                  <Card key={idx} className="p-4 bg-card border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <account.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{account.name}</span>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                        <Link className="h-3 w-3 mr-1" />
                        Connect
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background mt-16">
        <div className="container px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="text-2xl font-bold">
                  FM<span className="text-primary">³</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-md text-center md:text-left">
                First Movers Vietnam is the official Sui community for developers and builders in Vietnam
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">POWERED BY</span>
                <div className="px-2 py-1 rounded bg-card border border-border">
                  <span className="text-xs font-semibold text-primary">Sui</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground mb-3 text-center md:text-right">
                  Join our community
                </p>
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    className="h-9 w-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Home</a>
                <a href="#" className="hover:text-foreground transition-colors">Explore</a>
                <a href="#" className="hover:text-foreground transition-colors">Learn</a>
                <a href="#" className="hover:text-foreground transition-colors">Earn</a>
                <a href="#" className="hover:text-foreground transition-colors">FM Launchpad</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">©2025 First Movers</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
