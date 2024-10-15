import { ArrowRight } from 'lucide-react'
export default function Cta() {
    return (
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to take your project to the next level?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Join thousands of satisfied customers who have transformed their ideas into reality.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-white hover:bg-indigo-50 transition duration-150 ease-in-out"
                >
                  Get started
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              <div className="ml-3 inline-flex">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-black transition duration-150 ease-in-out"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }