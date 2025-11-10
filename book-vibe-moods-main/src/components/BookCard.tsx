import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Book {
  id: number;
  title: string;
  author: string;
  summary: string;
  coverImage: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth bg-card border-0 group">
      <div className="aspect-[3/4] relative overflow-hidden bg-muted">
        <img 
          src={book.coverImage} 
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{book.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">by {book.author}</p>
        <p className="text-sm text-card-foreground/80 mb-4 line-clamp-3">{book.summary}</p>
        <Button 
          variant="outline" 
          className="w-full rounded-full border-primary/20 hover:bg-primary/10 transition-smooth"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Read More
        </Button>
      </div>
    </Card>
  );
};

export default BookCard;
