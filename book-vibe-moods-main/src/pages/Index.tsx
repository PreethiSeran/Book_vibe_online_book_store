import { useState } from "react";
import Hero from "@/components/Hero";
import MoodSelector from "@/components/MoodSelector";
import BookRecommendations from "@/components/BookRecommendations";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { booksByMood } from "@/data/books";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleGetStarted = () => {
    const moodSection = document.getElementById("moods");
    moodSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectMood = (mood: string) => {
    setSelectedMood(mood);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToMoods = () => {
    setSelectedMood(null);
    setTimeout(() => {
      const moodSection = document.getElementById("moods");
      moodSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen">
      {!selectedMood ? (
        <>
          <Hero onGetStarted={handleGetStarted} />
          <MoodSelector onSelectMood={handleSelectMood} />
          <Testimonials />
        </>
      ) : (
        <BookRecommendations 
          mood={selectedMood} 
          books={booksByMood[selectedMood as keyof typeof booksByMood]} 
          onBack={handleBackToMoods}
        />
      )}
      <Footer />
    </main>
  );
};

export default Index;
