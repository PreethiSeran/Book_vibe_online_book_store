import BookCard from "./BookCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  summary: string;
  coverImage: string;
}

interface BookRecommendationsProps {
  mood: string;
  books: Book[];
  onBack: () => void;
}

const BookRecommendations = ({ mood, books, onBack }: BookRecommendationsProps) => {
  const getMoodGradient = (mood: string) => {
    const gradients: Record<string, string> = {
      happy: "gradient-happy",
      sad: "gradient-sad",
      romantic: "gradient-romantic",
      adventurous: "gradient-adventurous",
      calm: "gradient-calm",
    };
    return gradients[mood] || "gradient-calm";
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="rounded-full hover:bg-muted"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Moods
          </Button>
        </div>
        
        <div className={`${getMoodGradient(mood)} rounded-3xl p-12 mb-12 shadow-soft`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground capitalize text-center">
            {mood} Reads
          </h2>
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto">
            Here are some carefully curated books perfect for your {mood} mood
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book) => (
            <div key={book.id} className="animate-fade-in">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookRecommendations;
