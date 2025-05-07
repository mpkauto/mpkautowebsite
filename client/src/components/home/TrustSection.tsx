import { Card, CardContent } from "@/components/ui/card";
import { Gauge, Award, DollarSign, Star, StarHalf } from "lucide-react";

export default function TrustSection() {
  const trustPoints = [
    {
      icon: <Gauge className="h-6 w-6 text-white" />,
      title: "Fast Turnaround",
      description: "Most services completed same-day, getting you back on the road quickly and comfortably."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Certified Technicians",
      description: "Our team is highly trained and certified in the latest automotive AC technologies."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
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
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (halfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
            Why Choose MPK
          </h2>
          <p className="text-slate-gray text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their vehicle's comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="bg-midnight-blue inline-flex rounded-full p-5 mb-4">
                {point.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{point.title}</h3>
              <p className="text-slate-gray">{point.description}</p>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-midnight-blue mb-6 text-center">
            What Our Customers Say
          </h3>
          
          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white p-6 rounded-lg shadow-sm flex-shrink-0 w-full md:w-1/3">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-sm text-slate-gray">{testimonial.rating}</span>
                  </div>
                  <p className="text-slate-gray mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-slate-gray">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
