import { Card } from "@/components/ui/card";
import { ArrowUpRight, Award, Trophy, FileText } from "lucide-react";

const achievements = [
  { name: "Sui Move Bootcamp Graduate", icon: Award },
  { name: "Hackathon Winner", icon: Trophy },
  { name: "Top Content Creator", icon: FileText },
];

const Achievements = () => {
  return (
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
  );
};

export default Achievements;
