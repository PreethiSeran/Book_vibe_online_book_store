import MoodCard from "./MoodCard";
import { Smile, CloudRain, Heart, Compass, Wind } from "lucide-react";

interface MoodSelectorProps {
  onSelectMood: (mood: string) => void;
}

const MoodSelector = ({ onSelectMood }: MoodSelectorProps) => {
  const moods = [
    { name: "happy", icon: Smile, gradient: "gradient-happy" },
    { name: "sad", icon: CloudRain, gradient: "gradient-sad" },
    { name: "romantic", icon: Heart, gradient: "gradient-romantic" },
    { name: "adventurous", icon: Compass, gradient: "gradient-adventurous" },
    { name: "calm", icon: Wind, gradient: "gradient-calm" },
  ];

  return (
    <section id="moods" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How Are You Feeling Today?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your current mood and we'll recommend the perfect books to match your vibe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {moods.map((mood) => (
            <MoodCard
              key={mood.name}
              mood={mood.name}
              icon={mood.icon}
              gradient={mood.gradient}
              onClick={() => onSelectMood(mood.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodSelector;
