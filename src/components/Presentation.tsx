import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
  type?: "title" | "content" | "bullets" | "split";
}

const slides: Slide[] = [
  {
    id: 1,
    title: "",
    type: "title",
    content: (
      <div className="text-center space-y-12 py-16">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-light text-foreground tracking-widest">
            ROSS PALOS VERDES
          </h1>
          <div className="h-px w-32 bg-primary mx-auto"></div>
          <h2 className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
            BUSINESS PLAN & CONTENT STRATEGY
          </h2>
          <h3 className="text-lg md:text-xl text-accent font-light tracking-wider">
            FOR INKINDLE
          </h3>
        </div>
        <div className="space-y-4 pt-8">
          <p className="text-muted-foreground text-sm tracking-wide">@ROSSPV</p>
          <p className="text-foreground font-light">ARTIST ENTREPRENEUR • FINE LINE TATTOO • PROFESSIONAL CREATOR</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "WHO IS ROSS PALOS VERDES?",
    type: "split",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-6 tracking-wide">ARTIST</h3>
            <p className="text-foreground leading-relaxed font-light text-lg">
              Master fine line tattooing through an intensive apprenticeship under Anastasia while documenting the journey through high-quality content creation.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-6 tracking-wide">CREATOR</h3>
            <p className="text-foreground leading-relaxed font-light text-lg">
              Develop premium influencer-style media that showcases Palos Verdes while positioning Inkindle as the destination for prestigious tattoo work.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-primary mb-8 tracking-wide">WHAT MAKES ME DIFFERENT</h3>
          <div className="space-y-6 text-foreground font-light text-lg">
            <div className="flex items-start">
              <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
              <p>Curating & educating, not just posting my own tattoos</p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
              <p>Building an influencer brand that promotes other fine line artists worldwide</p>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
              <p>Integrating Palos Verdes lifestyle in a way that appeals to locals</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "MY STORY",
    type: "content",
    content: (
      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 p-8 border border-border/30">
            <h3 className="text-xl md:text-2xl font-light text-primary tracking-wide">THE CALL</h3>
            <p className="text-foreground font-light leading-relaxed">
              Head-hunted by Anastasia, I relocated across the country to study under her and resident at Inkindle—the first ever tattoo studio in Palos Verdes.
            </p>
          </div>
          <div className="space-y-6 p-8 border border-border/30">
            <h3 className="text-xl md:text-2xl font-light text-primary tracking-wide">THE DISCOVERY</h3>
            <p className="text-foreground font-light leading-relaxed">
              Before this, I had never heard of Palos Verdes. Upon arrival, I fell in love with the scenery, community values, and unique culture.
            </p>
          </div>
          <div className="space-y-6 p-8 border border-border/30">
            <h3 className="text-xl md:text-2xl font-light text-primary tracking-wide">THE COMMITMENT</h3>
            <p className="text-foreground font-light leading-relaxed">
              I chose not just to be a tattoo artist, but an active contributor to the community by creating respectful, community-first media.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "BUSINESS MODEL",
    type: "bullets",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-8 tracking-wide">TATTOO SERVICES</h3>
            <div className="space-y-4 text-foreground font-light text-lg">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Apprentice tattoos (entry-level pricing)</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>High-end tattoos once skills mature</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-8 tracking-wide">CONTENT CREATION</h3>
            <div className="space-y-4 text-foreground font-light text-lg">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Custom content for local businesses</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Commission-based partnerships</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Ad share and live-streaming revenue</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-8 tracking-wide">DIGITAL PRODUCTS</h3>
            <div className="space-y-4 text-foreground font-light text-lg">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Pay-per-download ebooks</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Temporary tattoo sets</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Affiliate commissions (ShopMy, Pinterest, Amazon)</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-8 tracking-wide">IRL EVENTS</h3>
            <div className="space-y-4 text-foreground font-light text-lg">
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Tattoo education seminars</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Artist workshops & mixers</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-primary mr-6"></div>
                <span>Life drawing classes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "BRAND IDENTITY",
    type: "content",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="space-y-6 p-8 border border-border/30">
          <h3 className="text-xl md:text-2xl font-light text-primary tracking-wide">IDENTITY</h3>
          <div className="space-y-3 text-foreground font-light">
            <p>Artist</p>
            <p>Creator</p>
            <p>Entrepreneur</p>
          </div>
        </div>
        <div className="space-y-6 p-8 border border-border/30">
          <h3 className="text-xl md:text-2xl font-light text-primary tracking-wide">TONE</h3>
          <div className="space-y-3 text-foreground font-light">
            <p>Lifestyle vlog</p>
            <p>Luxury lifestyle</p>
            <p>Documentarian</p>
            <p>Reality TV</p>
          </div>
        </div>
        <div className="space-y-6 p-8 border border-border/30">
          <h3 className="text-xl md:text-2xl font-light text-primary tracking-wide">VALUES</h3>
          <div className="space-y-3 text-foreground font-light">
            <p>Professionalism</p>
            <p>Artistic excellence</p>
            <p>PV pride</p>
            <p>High-end quality</p>
          </div>
        </div>
        <div className="space-y-6 p-8 border border-border/30">
          <h3 className="text-xl md:text-2xl font-light text-primary tracking-wide">AESTHETIC</h3>
          <div className="space-y-3 text-foreground font-light">
            <p>Fashion editorial</p>
            <p>Clean minimalist</p>
            <p>White on white</p>
            <p>Olive + gold accents</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "CONTENT STRATEGY",
    type: "split",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <h3 className="text-2xl md:text-3xl font-light text-primary mb-8 tracking-wide">CORE PLATFORMS</h3>
          <div className="space-y-8">
            <div className="border-l-2 border-primary/30 pl-6">
              <h4 className="font-light text-xl text-foreground mb-2">YOUTUBE</h4>
              <p className="text-muted-foreground font-light">Daily vlog documenting apprenticeship, PV lifestyle, tattoo culture</p>
            </div>
            <div className="border-l-2 border-primary/30 pl-6">
              <h4 className="font-light text-xl text-foreground mb-2">INSTAGRAM</h4>
              <p className="text-muted-foreground font-light">Daily reels, scheduled 9am posts, 3-part story strategy</p>
            </div>
            <div className="border-l-2 border-primary/30 pl-6">
              <h4 className="font-light text-xl text-foreground mb-2">TIKTOK</h4>
              <p className="text-muted-foreground font-light">Tattoo education, PV lifestyle flex, fine line curator</p>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <h3 className="text-2xl md:text-3xl font-light text-primary mb-8 tracking-wide">CONTENT PILLARS</h3>
          <div className="space-y-4 text-foreground font-light">
            <div className="flex items-start">
              <div className="w-1 h-6 bg-primary mr-6 flex-shrink-0 mt-1"></div>
              <span>Apprenticeship journey (daily insights, mistakes, shop drama)</span>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-6 bg-primary mr-6 flex-shrink-0 mt-1"></div>
              <span>PV Lifestyle (community-first)</span>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-6 bg-primary mr-6 flex-shrink-0 mt-1"></div>
              <span>Client education (first tattoo, placement, finding an artist)</span>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-6 bg-primary mr-6 flex-shrink-0 mt-1"></div>
              <span>Local features (Parks, Promenade, fountain)</span>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-6 bg-primary mr-6 flex-shrink-0 mt-1"></div>
              <span>Business collaborations</span>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-6 bg-primary mr-6 flex-shrink-0 mt-1"></div>
              <span>Behind-the-scenes (studio life, creative process)</span>
            </div>
            <div className="flex items-start">
              <div className="w-1 h-6 bg-primary mr-6 flex-shrink-0 mt-1"></div>
              <span>Tattooist education (fine line techniques)</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "GO TO MARKET STRATEGY",
    type: "bullets",
    content: (
      <div className="space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-12 tracking-wide">INITIAL PUSH</h3>
            <div className="space-y-6 text-foreground font-light text-lg">
              <div className="flex items-start">
                <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
                <p>Use current following to get first 10K followers</p>
              </div>
              <div className="flex items-start">
                <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
                <p>Schedule daily posts at 9am for 60 days</p>
              </div>
              <div className="flex items-start">
                <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
                <p>Maintain "Pop Star Test" page aesthetic</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-light text-primary mb-12 tracking-wide">COMMUNITY INTEGRATION</h3>
            <div className="space-y-6 text-foreground font-light text-lg">
              <div className="flex items-start">
                <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
                <p>Media for PV Magazine & City Council</p>
              </div>
              <div className="flex items-start">
                <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
                <p>Build relationships with influencers & businesses</p>
              </div>
              <div className="flex items-start">
                <div className="w-1 h-8 bg-primary mr-6 flex-shrink-0 mt-2"></div>
                <p>Provide meet & greets for tattoo education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "GROWTH & REVENUE FORECAST Q2 2026",
    type: "content",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8 p-8 border border-border/30">
          <h3 className="text-2xl md:text-3xl font-light text-primary text-center tracking-wide">GROWTH FORECAST</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">Tattoo Bookings</span>
              <span className="text-primary font-light text-lg">12/month</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">Instagram Reach</span>
              <span className="text-primary font-light text-lg">3M/month</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">YouTube Subscribers</span>
              <span className="text-primary font-light text-lg">10K</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">Instagram Followers</span>
              <span className="text-primary font-light text-lg">30K</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-foreground font-light">Pinterest Views</span>
              <span className="text-primary font-light text-lg">1M/month</span>
            </div>
          </div>
        </div>
        <div className="space-y-8 p-8 border border-border/30">
          <h3 className="text-2xl md:text-3xl font-light text-primary text-center tracking-wide">REVENUE FORECAST</h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">Tattoos Gross</span>
              <span className="text-primary font-light text-lg">$6K/month</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">Tattoos Shop</span>
              <span className="text-primary font-light text-lg">$1.5K/month</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">Content & Freelance</span>
              <span className="text-primary font-light text-lg">$1K/month</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border/20">
              <span className="text-foreground font-light">Digital Products</span>
              <span className="text-primary font-light text-lg">$300/month</span>
            </div>
            <div className="flex justify-between items-center py-3 pt-6">
              <span className="text-foreground font-light text-xl">Total Revenue</span>
              <span className="text-primary font-light text-xl">$8.8K/month</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-light">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-6xl">
          <div className="min-h-[70vh] p-8 md:p-16">
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4 tracking-wide">
                {slides[currentSlide].title}
              </h2>
              <div className="h-0.5 w-16 bg-primary"></div>
            </div>
            <div className="h-full">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="border-t border-border bg-card/50 backdrop-blur-sm p-6 md:p-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-muted-foreground hover:text-foreground disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="text-muted-foreground hover:text-foreground disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-sm text-muted-foreground font-light tracking-wide">
            {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  );
};