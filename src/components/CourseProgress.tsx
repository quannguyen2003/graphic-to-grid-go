import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const courses = [
  { title: "Sui Move Bootcamp Graduate", status: "In progress", progress: 65, variant: "progress" },
  { title: "Sui Move Bootcamp Graduate", status: "Review", progress: 85, variant: "review" },
  { title: "Sui Move Bootcamp Graduate", status: "Completed", progress: 100, variant: "completed" },
];

const CourseProgress = () => {
  return (
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
  );
};

export default CourseProgress;
