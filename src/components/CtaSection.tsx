import Image from "next/image";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  backgroundImage?: string;
}

export default function CtaSection({
  title = "Ready to list?",
  subtitle = "Join thousands of satisfied homeowners who have successfully sold their properties with Spotlight Realty's AI-powered platform and expert human support.",
  primaryButtonText = "Create a Listing",
  primaryButtonLink = "/sellers",
  backgroundImage = "/cta-background.png",
}: CtaSectionProps) {
  return (
    <section className="py-24 relative pt-92">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="CTA Background"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-normal">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-10 font-sans">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto w-full">
            <a
              href={primaryButtonLink}
             className="text-black bg-white rounded-full font-semibold px-6 py-4 font-sans w-fit justify-center items-center"
            >
              {primaryButtonText}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-5 w-5 ml-2 text-black align-middle"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-sans">No upfront costs</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-sans">Cancel anytime</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-white font-sans">24/7 human support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 