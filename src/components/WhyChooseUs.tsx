import { Building2, Users, BarChart3, Layout, UserPlus, Network } from 'lucide-react'
import { Inter, Poppins } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex gap-6 items-start group transition-all duration-300 hover:bg-green-50 p-6 rounded-xl bg-white">
    <span className="text-green-600 bg-green-100 p-3 rounded-full group-hover:bg-white transition-colors duration-300">
      {icon}
    </span>
    <div>
      <h3 className={`font-semibold text-xl text-gray-800 ${poppins.className}`}>{title}</h3>
      <p className={`mt-2 text-gray-600 ${inter.className}`}>{description}</p>
    </div>
  </div>
)

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Targeted Advertising",
      description: "Promote your projects directly to thousands of brokers and real estate professionals through our platform."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Streamlined Collaboration",
      description: "Connect with brokers and agencies in a single hub, boosting the visibility and sales potential of your developments."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Campaigns",
      description: "Use our analytics tools to measure the success of your marketing efforts and fine-tune your strategies for better ROI."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Showcase Portfolio",
      description: "Leverage Urbantap's professional-grade features to display your projects in a way that attracts the right audience."
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: "Efficient Hiring",
      description: "Post real estate job listings and reach qualified candidates directly through our specialized platform."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Expand Talent Pool",
      description: "Tap into a network of professionals with experience in Dubai's competitive real estate market."
    }
  ]

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ${inter.className} bg-white`}>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Why <span className="text-green-500"> Urbantap</span> is The Right Choice for You
        </h2>
        <p className="max-w-2xl mx-auto font-semibold md:text-xl text-md mt-3 text-gray-500" id='why'>
          Urbantap provides cutting-edge tools for real estate professionals in Dubai. Discover how we can transform your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>

      {/* <div className="mt-20 text-center">
        <a
          href="#"
          className={`inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 ${poppins.className}`}
        >
          Get Started with Urbantap
        </a>
      </div> */}
    </div>
  )
}

