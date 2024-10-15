import { Zap, Shield, Smartphone, Globe } from 'lucide-react'

export default function Incentives() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "Lightning Fast",
      description: "Experience blazing fast load times and smooth performance across all devices."
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "Secure by Default",
      description: "Your data is protected with state-of-the-art security measures and encryption."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
      title: "Mobile Optimized",
      description: "Fully responsive design ensures a great experience on any device, big or small."
    },
    {
      icon: <Globe className="h-6 w-6 text-orange-500" />,
      title: "Global Reach",
      description: "Connect with users worldwide through our distributed content delivery network."
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features for Your Success
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the tools that will take your project to the next level
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}