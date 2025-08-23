import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Brain, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  BookOpen,
  Target,
  Zap,
  Shield,
  Globe,
  Award,
  Play
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const features = [
    {
      icon: Code,
      title: "Smart Coding Environment",
      description: "In-browser code editor with syntax highlighting and safe Docker execution for Python, Java, JavaScript, and C++."
    },
    {
      icon: Brain,
      title: "AI Interview Simulator", 
      description: "Practice technical and behavioral interviews with AI guidance and instant feedback on your performance."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track your progress with detailed insights and identify areas for improvement with data-driven feedback."
    },
    {
      icon: Users,
      title: "Peer Collaboration",
      description: "Live pair programming, study groups, and real-time collaboration with classmates and peers."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "500+", label: "Practice Problems" },
    { number: "24/7", label: "AI Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CS Student, Stanford",
      content: "CodePrep transformed my interview skills. The AI feedback was incredibly detailed and helped me land my dream job at Google!",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez", 
      role: "Professor, MIT",
      content: "This platform revolutionized how I track student progress. The analytics dashboard gives me insights I never had before.",
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Career Services, UC Berkeley", 
      content: "CodePrep helps us prepare students more effectively. The interview readiness scores are incredibly accurate.",
      avatar: "EJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b shadow-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CodePrep</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-gradient-primary shadow-primary">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Master Your 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Tech Career</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The complete learning platform that combines coding practice, AI-powered mock interviews, 
              progress tracking, and peer collaboration to prepare students for tech careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/dashboard">
                <Button variant="hero" className="animate-float">
                  <Play className="w-6 h-6 mr-3" />
                  Start Learning Now
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From coding practice to interview preparation, we've got you covered with cutting-edge tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300 group">
                <CardHeader>
                  <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How CodePrep Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to career success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Practice Coding</h3>
              <p className="text-muted-foreground">
                Solve problems from easy to hard with our in-browser editor and instant feedback
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Mock Interviews</h3>
              <p className="text-muted-foreground">
                Practice technical and behavioral interviews with AI-powered feedback and guidance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Hired</h3>
              <p className="text-muted-foreground">
                Track your progress and get ready for real interviews with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Students & Universities</h2>
            <p className="text-xl text-muted-foreground">See what our users say about CodePrep</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary-foreground">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who've transformed their career prospects with CodePrep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button variant="secondary" size="lg">
                <Target className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Users className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">CodePrep</span>
              </div>
              <p className="text-muted-foreground">
                Preparing the next generation of tech professionals with AI-powered learning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-muted mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 CodePrep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;