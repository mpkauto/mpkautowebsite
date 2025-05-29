import JobApplicationForm from "@/components/careers/JobApplicationForm";
import { Helmet } from "react-helmet-async";
import ScrollAnimation from "react-scroll-animation";

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
      
      <section className="py-20 px-6 md:px-12 bg-black text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
              We are always looking for skilled and passionate individuals to join the MPK Auto Service family.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Current Openings
            </h2>
            
            <ScrollAnimation variant="fadeUp" delay={0.1}>
              <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">AC Technician</h3>
                <p className="text-base text-gray-300 mb-2">Full-time</p>
                <p className="text-base text-gray-300 mb-4">
                  As an AC Technician, you will be responsible for diagnosing, repairing, and maintaining automotive air conditioning systems.
                </p>
                <p className="text-base text-gray-900 font-semibold">Requirements:</p>
                <ul className="list-disc list-inside text-base text-gray-300 ml-2 mb-2">
                  <li>Proven experience as an Automotive AC Technician.</li>
                  <li>Knowledge of AC systems and components.</li>
                  <li>Ability to diagnose and repair complex AC issues.</li>
                  <li>Valid driver's license.</li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp" delay={0.2}>
              <div className="bg-gray-800 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Service Advisor</h3>
                <p className="text-base text-gray-300 mb-2">Full-time</p>
                <p className="text-base text-gray-300 mb-4">
                  Our Service Advisors are the first point of contact for customers, providing excellent service and technical advice.
                </p>
                <p className="text-base text-gray-900 font-semibold">Requirements:</p>
                <ul className="list-disc list-inside text-base text-gray-300 ml-2 mb-2">
                  <li>Previous experience in a service advisor role or automotive customer service.</li>
                  <li>Strong communication and interpersonal skills.</li>
                  <li>Basic knowledge of automotive repair and maintenance.</li>
                  <li>Ability to explain technical information clearly to customers.</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              How to Apply
            </h2>
            <p className="text-base text-gray-300 mb-6">
              Interested candidates are invited to submit their resume and cover letter to our email address or apply through the form below.
            </p>
          </div>

          <div className="bg-ice-white rounded-lg p-8 shadow-md">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Application Form
            </h2>
            <p className="text-base text-gray-300 mb-6">
              Interested in joining our team? Fill out the application form below, and we'll be in touch if your qualifications match our needs.
            </p>
            
            <JobApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
