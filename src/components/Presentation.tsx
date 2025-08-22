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
    title: "Ross Palos Verdes",
    type: "title",
    content: (
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">Ross Palos Verdes</h1>
          <h2 className="text-3xl text-muted-foreground">Business Plan & Content Strategy</h2>
          <h3 className="text-2xl text-accent-foreground font-medium">for Inkindle</h3>
        </div>
        <div className="space-y-2 text-lg">
          <p className="text-muted-foreground">@rosspv</p>
          <p className="text-foreground">Artist Entrepreneur • Fine Line Tattoo • Professional Creator</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Who is Ross Palos Verdes?",
    type: "split",
    content: (
      <div className="grid grid-cols-2 gap-12 h-full">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Artist</h3>
            <p className="text-foreground leading-relaxed">
              Master fine line tattooing through an intensive apprenticeship under Anastasia while doing a daily vlog-style YouTube original web series: The first "high end" fine-line apprenticeship reality TV show.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Creator</h3>
            <p className="text-foreground leading-relaxed">
              High quality influencer-style media that showcases Palos Verdes while positioning Inkindle as the destination for prestigious tattoo work.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary mb-4">What Makes Me Different</h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Curating & educating, not just posting my own tattoos
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Building an influencer brand that promotes other fine line artists worldwide
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Integrating Palos Verdes lifestyle in a way that appeals to locals
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "My Story",
    type: "content",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-8">
          <Card className="p-6">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-bold text-primary">The Call</h3>
              <p className="text-foreground">Head-hunted by Anastasia, I relocated across the country to study under her and resident at Inkindle—the first ever tattoo studio in Palos Verdes.</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-bold text-primary">The Discovery</h3>
              <p className="text-foreground">Before this, I had never heard of Palos Verdes. Upon arrival, I fell in love with the scenery, community values, and unique culture.</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0 space-y-4">
              <h3 className="text-xl font-bold text-primary">The Commitment</h3>
              <p className="text-foreground">I chose not just to be a tattoo artist, but an active contributor to the community by creating respectful, community-first media.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Business Model",
    type: "bullets",
    content: (
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Tattoo Services</h3>
            <ul className="space-y-2 text-foreground">
              <li>• Apprentice tattoos (entry-level pricing)</li>
              <li>• High-end tattoos once skills mature</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Content Creation</h3>
            <ul className="space-y-2 text-foreground">
              <li>• Custom content for local businesses</li>
              <li>• Commission-based partnerships</li>
              <li>• Ad share and live-streaming revenue</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Digital Products</h3>
            <ul className="space-y-2 text-foreground">
              <li>• Pay-per-download ebooks</li>
              <li>• Temporary tattoo sets</li>
              <li>• Affiliate commissions (ShopMy, Pinterest, Amazon)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">IRL Events</h3>
            <ul className="space-y-2 text-foreground">
              <li>• Tattoo education seminars</li>
              <li>• Artist workshops & mixers</li>
              <li>• Life drawing classes</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Brand Identity",
    type: "content",
    content: (
      <div className="grid grid-cols-4 gap-8">
        <Card className="p-6">
          <CardContent className="p-0 space-y-4">
            <h3 className="text-xl font-bold text-primary">Identity</h3>
            <ul className="space-y-1 text-foreground text-sm">
              <li>• Artist</li>
              <li>• Creator</li>
              <li>• Entrepreneur</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardContent className="p-0 space-y-4">
            <h3 className="text-xl font-bold text-primary">Tone</h3>
            <ul className="space-y-1 text-foreground text-sm">
              <li>• Lifestyle vlog</li>
              <li>• Luxury lifestyle</li>
              <li>• Documentarian</li>
              <li>• Reality TV</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardContent className="p-0 space-y-4">
            <h3 className="text-xl font-bold text-primary">Values</h3>
            <ul className="space-y-1 text-foreground text-sm">
              <li>• Professionalism</li>
              <li>• Artistic excellence</li>
              <li>• PV pride</li>
              <li>• High-end quality</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardContent className="p-0 space-y-4">
            <h3 className="text-xl font-bold text-primary">Aesthetic</h3>
            <ul className="space-y-1 text-foreground text-sm">
              <li>• Fashion editorial</li>
              <li>• Clean minimalist</li>
              <li>• White on white</li>
              <li>• Olive + gold accents</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    )
  },
  {
    id: 6,
    title: "Content Strategy",
    type: "split",
    content: (
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary mb-4">Core Platforms</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-foreground">YouTube</h4>
              <p className="text-sm text-muted-foreground">Daily vlog documenting apprenticeship, PV lifestyle, tattoo culture</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-foreground">Instagram</h4>
              <p className="text-sm text-muted-foreground">Daily reels, scheduled 9am posts, 3-part story strategy</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-foreground">TikTok</h4>
              <p className="text-sm text-muted-foreground">Tattoo education, PV lifestyle flex, fine line curator</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary mb-4">Content Pillars</h3>
          <ul className="space-y-2 text-foreground text-sm">
            <li>• Apprenticeship journey (daily insights, mistakes, shop drama)</li>
            <li>• PV Lifestyle (community-first)</li>
            <li>• Client education (first tattoo, placement, finding an artist)</li>
            <li>• Local features (Parks, Promenade, fountain)</li>
            <li>• Business collaborations</li>
            <li>• Behind-the-scenes (studio life, creative process)</li>
            <li>• Tattooist education (fine line techniques)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "Go to Market Strategy",
    type: "bullets",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Initial Push</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Use current following to get first 10K followers
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Schedule daily posts at 9am for 60 days
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Maintain "Pop Star Test" page aesthetic
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Community Integration</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Media for PV Magazine & City Council
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Build relationships with influencers & businesses
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Provide meet & greets for tattoo education
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Growth & Revenue Forecast Q2 2026",
    type: "content",
    content: (
      <div className="grid grid-cols-2 gap-12">
        <Card className="p-8">
          <CardContent className="p-0 space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center">Growth Forecast</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Tattoo Bookings</span>
                <span className="font-semibold text-primary">12/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Instagram Reach</span>
                <span className="font-semibold text-primary">3M/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">YouTube Subscribers</span>
                <span className="font-semibold text-primary">10K</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Instagram Followers</span>
                <span className="font-semibold text-primary">30K</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-foreground">Pinterest Views</span>
                <span className="font-semibold text-primary">1M/month</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="p-8">
          <CardContent className="p-0 space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center">Revenue Forecast</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Tattoos Gross</span>
                <span className="font-semibold text-primary">$6K/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Tattoos Shop</span>
                <span className="font-semibold text-primary">$1.5K/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Content & Freelance</span>
                <span className="font-semibold text-primary">$1K/month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground">Digital Products</span>
                <span className="font-semibold text-primary">$300/month</span>
              </div>
              <div className="flex justify-between items-center py-2 font-semibold text-lg">
                <span className="text-foreground">Total Revenue</span>
                <span className="text-primary">$8.8K/month</span>
              </div>
            </div>
          </CardContent>
        </Card>
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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <Card className="min-h-[600px] p-12">
            <CardContent className="p-0 h-full">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-primary mb-2">
                  {slides[currentSlide].title}
                </h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>
              <div className="h-full">
                {slides[currentSlide].content}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="border-t border-border bg-card p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-primary"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
};