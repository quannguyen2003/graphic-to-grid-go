import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

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

export default BountyCard;
