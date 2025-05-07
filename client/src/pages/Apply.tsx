import JobApplicationForm from "@/components/careers/JobApplicationForm";
import { Helmet } from "react-helmet";

export default function Apply() {
  return (
    <>
      <Helmet>
        <title>Careers at MPK | Join Our Auto AC Service Team</title>
        <meta 
          name="description" 
          content="Join the MPK Auto Air Conditioning team. We're looking for skilled technicians and automotive professionals."
        />
        <meta 
          property="og:title" 
          content="Careers at MPK | Join Our Auto AC Service Team"
        />
        <meta 
          property="og:description" 
          content="Apply for open positions with a fast-growing automotive service team specializing in AC repair."
        />
      </Helmet>
      
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
                Join Our Team
              </h1>
              <p className="text-slate-gray text-lg mb-8 max-w-2xl mx-auto">
                Join a fast-growing auto service team. We're always looking for talented, customer-focused professionals to help us deliver exceptional service.
              </p>
            </div>
            
            <div className="bg-ice-white rounded-lg p-8 shadow-md mb-12">
              <h2 className="text-2xl font-bold text-midnight-blue mb-4">
                Current Openings
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-bold text-midnight-blue">AC Technician</h3>
                  <p className="text-slate-gray mb-2">Full-time</p>
                  <p className="text-slate-gray mb-4">
                    We're seeking experienced automotive AC technicians to join our team. Responsibilities include diagnosing, repairing, and maintaining vehicle air conditioning systems.
                  </p>
                  <p className="text-midnight-blue font-semibold">Requirements:</p>
                  <ul className="list-disc list-inside text-slate-gray ml-2 mb-2">
                    <li>3+ years of experience in automotive AC repair</li>
                    <li>EPA 609 certification required</li>
                    <li>ASE certification preferred</li>
                    <li>Strong diagnostic skills</li>
                  </ul>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-bold text-midnight-blue">Service Advisor</h3>
                  <p className="text-slate-gray mb-2">Full-time</p>
                  <p className="text-slate-gray mb-4">
                    Seeking a customer-oriented Service Advisor to manage client interactions, schedule appointments, and explain service recommendations.
                  </p>
                  <p className="text-midnight-blue font-semibold">Requirements:</p>
                  <ul className="list-disc list-inside text-slate-gray ml-2 mb-2">
                    <li>2+ years in customer service, preferably in automotive</li>
                    <li>Excellent communication skills</li>
                    <li>Basic understanding of automotive systems</li>
                    <li>Sales experience a plus</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-ice-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-midnight-blue mb-4">
                Application Form
              </h2>
              <p className="text-slate-gray mb-6">
                Interested in joining our team? Fill out the application form below, and we'll be in touch if your qualifications match our needs.
              </p>
              
              <JobApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
