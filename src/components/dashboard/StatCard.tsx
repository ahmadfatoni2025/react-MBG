import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  colorClass: string;
  trend?: string;
}

export const StatCard = ({ title, value, icon: Icon, colorClass, trend }: StatCardProps) => {
  return (
    <Card className="relative overflow-hidden">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase text-muted-foreground mb-1">
              {title}
            </p>
            <p className="text-2xl font-bold text-foreground">
              {value}
            </p>
          </div>
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            colorClass
          )}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
        {trend && (
          <p className="text-xs text-muted-foreground mt-2">{trend}</p>
        )}
      </div>
    </Card>
  );
};
