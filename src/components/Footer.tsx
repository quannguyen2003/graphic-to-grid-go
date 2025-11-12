import { Twitter, Send, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
