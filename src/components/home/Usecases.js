import { Users, Briefcase, Lightbulb, GraduationCap } from 'lucide-react'

export default function UseCases() {
  const cases = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Teams",
      description: "Perfect for small to large teams looking to streamline their workflow and boost productivity.",
      examples: ["Marketing Teams", "Development Squads", "Design Studios"]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-500" />,
      title: "Businesses",
      description: "Ideal for businesses of all sizes seeking to optimize operations and drive growth.",
      examples: ["Startups", "SMEs", "Enterprises"]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Creators",
      description: "Empowering individual creators to bring their ideas to life and reach a wider audience.",
      examples: ["Artists", "Writers", "YouTubers"]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-purple-500" />,
      title: "Education",
      description: "Supporting educational institutions in delivering engaging and effective learning experiences.",
      examples: ["Schools", "Universities", "Online Courses"]
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Who Uses Our Platform?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our versatile solution caters to a wide range of users and industries
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {useCase.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}