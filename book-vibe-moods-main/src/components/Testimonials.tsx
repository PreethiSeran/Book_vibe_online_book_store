import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "BookVibe helped me find the perfect read when I was feeling down. The recommendations were spot-on!",
      author: "Sarah Johnson",
      role: "Avid Reader"
    },
    {
      id: 2,
      quote: "I love how this platform understands my mood and suggests books that truly resonate with how I'm feeling.",
      author: "Michael Chen",
      role: "Book Enthusiast"
    },
    {
      id: 3,
      quote: "The mood-based recommendations are genius! I've discovered so many amazing books I wouldn't have found otherwise.",
      author: "Emma Williams",
      role: "Literature Student"
    },
    {
      id: 4,
      quote: "BookVibe's interface is beautiful and the recommendations are always perfect for my current state of mind.",
      author: "David Brown",
      role: "Book Blogger"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Readers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of readers who've found their perfect books through BookVibe
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="p-8 md:p-12 bg-card border-0 shadow-soft">
                    <Quote className="w-12 h-12 text-primary/20 mb-6" />
                    <p className="text-lg md:text-xl text-card-foreground mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
