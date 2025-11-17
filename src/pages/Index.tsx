import { WaitlistButton } from "@/components/WaitlistButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
            Experience the
            <br />
            Future of Innovation
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform the way you work with our revolutionary platform.
            Join thousands of early adopters.
          </p>

          <div className="pt-4">
            <WaitlistButton />
          </div>
        </div>
      </section>

      {/* Demo Section - Images */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">See it in Action</h2>
            <p className="text-lg text-muted-foreground">
              Beautiful design meets powerful functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted/30 border border-border rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center hover:border-foreground/20 transition-colors">
              <div className="text-center p-8">
                <p className="text-muted-foreground text-sm">
                  Add your demo image here
                </p>
              </div>
            </div>
            <div className="bg-muted/30 border border-border rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center hover:border-foreground/20 transition-colors">
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
            <div className="bg-muted/30 border border-border rounded-xl overflow-hidden aspect-video flex items-center justify-center hover:border-foreground/20 transition-colors">
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
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              Built for the modern world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-10 space-y-4 hover:border-foreground/20 transition-colors">
              <h3 className="text-2xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience unparalleled speed and performance in everything you do.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-10 space-y-4 hover:border-foreground/20 transition-colors">
              <h3 className="text-2xl font-bold">Secure & Private</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data is protected with enterprise-grade security measures.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-10 space-y-4 hover:border-foreground/20 transition-colors">
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
