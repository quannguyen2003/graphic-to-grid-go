import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Github, Twitter, MessageCircle, Link } from "lucide-react";

const accounts = [
  { name: "Wallet", icon: Wallet, connected: false },
  { name: "Github", icon: Github, connected: false },
  { name: "X", icon: Twitter, connected: false },
  { name: "Discord", icon: MessageCircle, connected: false },
];

const ConnectedAccounts = () => {
  return (
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
  );
};

export default ConnectedAccounts;
