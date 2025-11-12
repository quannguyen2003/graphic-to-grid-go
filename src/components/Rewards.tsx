import { ArrowUpRight } from "lucide-react";
import BountyCard from "./BountyCard";

const rewards = [
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
  { title: "Build Permissionless Fee Routing Anchor Program for Sui", category: "Sui", quests: 3, dueIn: "3d", reward: 500, currency: "SUI" },
];

const Rewards = () => {
  return (
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
  );
};

export default Rewards;
