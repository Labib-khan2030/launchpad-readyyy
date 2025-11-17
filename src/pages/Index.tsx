import { WaitlistButton } from "@/components/WaitlistButton";
import { MatrixRain } from "@/components/MatrixRain";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider">AURAGEN</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
            <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <Button size="sm" className="rounded-full">
              Get Started <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Matrix Rain Background */}
        <MatrixRain />
        
        {/* Central Glow Effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-accent rounded-full glow-effect" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-12">
            <span className="text-muted-foreground/80">Where imagination</span>
            <br />
            <span className="text-muted-foreground/80">meets </span>
            <span className="text-glow-blue">artificial</span>
            <br />
            <span className="text-foreground">intelligence</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-12 h-14 text-base font-medium"
            >
              Try AuraGen
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full px-10 h-14 text-base border-border/50 hover:bg-secondary/20"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              See Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section - Images */}
      <section id="gallery" className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">See it in Action</h2>
            <p className="text-lg text-muted-foreground">
              Beautiful design meets powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/10 border border-border/50 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center hover:border-accent/50 transition-colors">
              <div className="text-center p-8">
                <p className="text-muted-foreground text-sm">
                  Add your demo image here
                </p>
              </div>
            </div>
            <div className="bg-muted/10 border border-border/50 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center hover:border-accent/50 transition-colors">
              <div className="text-center p-8">
                <p className="text-muted-foreground text-sm">
                  Add your demo image here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - GIFs/Videos */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Watch it Work</h2>
            <p className="text-lg text-muted-foreground">
              Live demonstrations of key features
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/10 border border-border/50 rounded-xl overflow-hidden aspect-video flex items-center justify-center hover:border-accent/50 transition-colors">
              <div className="text-center p-8">
                <p className="text-muted-foreground text-sm">
                  Add your demo GIF or video here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              Built for the modern world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 border border-border/50 rounded-xl p-10 space-y-4 hover:border-accent/50 transition-colors backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience unparalleled speed and performance in everything you do.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-10 space-y-4 hover:border-accent/50 transition-colors backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Secure & Private</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data is protected with enterprise-grade security measures.
              </p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-10 space-y-4 hover:border-accent/50 transition-colors backdrop-blur-sm">
              <h3 className="text-2xl font-bold">Easy to Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intuitive interface designed for users of all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community of innovators today
          </p>
          <WaitlistButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Your App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
