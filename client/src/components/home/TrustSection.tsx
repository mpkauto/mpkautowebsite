import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Award, DollarSign, Star, StarHalf, CheckCircle } from "lucide-react";

export default function TrustSection() {
  const trustPoints = [
    {
      icon: <Gauge className="h-10 w-10 text-primary" />,
      title: "Fast Turnaround",
      description: "Most services completed same-day, getting you back on the road quickly and comfortably."
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Certified Technicians",
      description: "Our team is highly trained and certified in the latest automotive AC technologies."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Transparent Pricing",
      description: "No surprises or hidden fees. We provide clear quotes before starting any work."
    }
  ];

  const testimonials = [
    {
      rating: 5,
      comment: "MPK fixed my AC in less than two hours. Great service and fair pricing! Will definitely return for future services.",
      name: "Michael R.",
      title: "Toyota Camry Owner"
    },
    {
      rating: 5,
      comment: "As a rideshare driver, a functioning AC is essential. MPK's quick service and mobile option saved me from losing work days.",
      name: "Sarah L.",
      title: "Uber Driver"
    },
    {
      rating: 4.5,
      comment: "The diagnostic service was thorough and they explained everything clearly. No pushy upselling like other places.",
      name: "David K.",
      title: "Honda CR-V Owner"
    }
  ];

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-primary text-primary" />);
    }
    
    if (halfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />);
    }
    
    return stars;
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-background relative">
      {/* Decorative diagonal line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 border-t border-l border-primary/10"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 border-b border-r border-primary/10"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-5">
            <div className="h-0.5 w-12 bg-primary mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Reputation</span>
            <div className="h-0.5 w-12 bg-primary ml-4"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose MPK
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicle's comfort.
          </p>
        </div>
        
        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-xl border border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-primary/5 inline-flex rounded-xl p-5 mb-6">
                {point.icon}
              </div>
              <h3 className="font-bold text-2xl mb-4 text-foreground">{point.title}</h3>
              <p className="text-muted-foreground text-lg">{point.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="bg-darker-bg p-12 rounded-2xl border border-border/20 shadow-xl">
          <div className="text-center mb-8 animate-fade-in-up">
            <span className="text-primary font-medium uppercase tracking-wider text-sm inline-block mb-3">Testimonials</span>
            <h3 className="text-3xl font-bold text-foreground">
              What Our Customers Say
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-background rounded-xl border border-border/40 shadow-md hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-8">
                  {/* Rating accent bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex text-primary">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground font-medium">{testimonial.rating}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg italic">"{testimonial.comment}"</p>
                  
                  <div className="flex items-center">
                    <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center pt-8 border-t border-border/30">
            <div className="animate-fade-in-up">
              <p className="text-4xl font-bold text-primary">2,500+</p>
              <p className="text-muted-foreground">Satisfied Customers</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: "0.2s"}}>
              <p className="text-4xl font-bold text-primary">4.9</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <p className="text-4xl font-bold text-primary">95%</p>
              <p className="text-muted-foreground">Same-Day Repairs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
