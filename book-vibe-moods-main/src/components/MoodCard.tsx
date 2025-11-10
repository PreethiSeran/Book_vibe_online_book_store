import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MoodCardProps {
  mood: string;
  icon: LucideIcon;
  gradient: string;
  onClick: () => void;
}

const MoodCard = ({ mood, icon: Icon, gradient, onClick }: MoodCardProps) => {
  return (
    <Card 
      onClick={onClick}
      className={`${gradient} p-8 cursor-pointer transition-smooth transform hover:scale-105 hover:shadow-hover shadow-soft border-0 group`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/70 transition-smooth">
          <Icon className="w-8 h-8 text-foreground" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground capitalize">{mood}</h3>
      </div>
    </Card>
  );
};

export default MoodCard;
