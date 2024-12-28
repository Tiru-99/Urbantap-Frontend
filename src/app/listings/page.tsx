
import { MapPin, Home, Bath , Square} from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import FixedNavbar from '@/components/FixedNavbar'


interface Listing {
  id: string
  user: {
    name: string
    avatar: string
  }
  title: string
  description: string
  images: string[]
  price: string
  location: string
  details: {
    bedrooms: number
    bathrooms: number
    area: string
  }
  postedAt: string
}

const sampleListings: Listing[] = [
  {
    id: '1',
    user: {
      name: 'Tiru',
      avatar: 'T',
    },
    title: 'Selling Off Plan',
    description: '5 Bedrooms available',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 250,000,000',
    location: '456 Main Street',
    details: {
      bedrooms: 3,
      bathrooms: 2,
      area: '500+ sq ft',
    },
    postedAt: '2 days ago',
  },
  {
    id: '2',
    user: {
      name: 'Riya',
      avatar: 'R',
    },
    title: 'Luxury Villa',
    description: '7 Bedrooms with a private pool',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 600,000,000',
    location: '789 Beach Avenue',
    details: {
      bedrooms: 7,
      bathrooms: 6,
      area: '10000+ sq ft',
    },
    postedAt: '5 days ago',
  },
  {
    id: '3',
    user: {
      name: 'Arjun',
      avatar: 'A',
    },
    title: 'Spacious Apartment',
    description: '3 Bedrooms in the city center',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 3,500,000',
    location: '123 Downtown Road',
    details: {
      bedrooms: 3,
      bathrooms: 3,
      area: '1500 sq ft',
    },
    postedAt: '1 week ago',
  },
  {
    id: '4',
    user: {
      name: 'Zara',
      avatar: 'Z',
    },
    title: 'Modern Penthouse',
    description: '2 Bedrooms with a rooftop garden',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 12,000,000',
    location: '456 Skyline Avenue',
    details: {
      bedrooms: 2,
      bathrooms: 2,
      area: '2000 sq ft',
    },
    postedAt: '3 days ago',
  },
  {
    id: '5',
    user: {
      name: 'Karan',
      avatar: 'K',
    },
    title: 'Family Home',
    description: '4 Bedrooms near the park',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 5,500,000',
    location: '678 Green Park Lane',
    details: {
      bedrooms: 4,
      bathrooms: 3,
      area: '2500 sq ft',
    },
    postedAt: '6 days ago',
  },
  {
    id: '6',
    user: {
      name: 'Meera',
      avatar: 'M',
    },
    title: 'Cozy Studio',
    description: 'Perfect for singles or couples',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 850,000',
    location: '123 Central Street',
    details: {
      bedrooms: 1,
      bathrooms: 1,
      area: '500 sq ft',
    },
    postedAt: '2 weeks ago',
  }
]

export default function PropertyListings() {
    //const [showDownloadPrompt, setShowDownloadPrompt] = useState(false)
    return (
      <>
      <FixedNavbar></FixedNavbar>
      <div className="container mx-auto px-4 py-6 max-w-5xl bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-medium">Looking or Selling..</h1>
        <Button variant="default" className="rounded-full">
          + Post a listing
        </Button>
      </div>

      {/* Listings */}
      <div className="space-y-8">
        {sampleListings.map((listing, index) => (
          <div 
            key={listing.id} 
            className={cn(
              "max-w-3xl mx-auto",
              index === 5 && "relative"
            )}
          >
            {index === 5 && (
              <div className="absolute inset-0 z-10 backdrop-blur-sm bg-background/80 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Want to see more listings?</h3>
                <p className="text-muted-foreground mb-4">Download our app to explore all available properties</p>
                <Button className="w-full max-w-sm">
                  Download App
                </Button>
              </div>
            )}
            
            <div className="flex justify-between px-4 mt-20">
              <div className="flex gap-2">
                <Avatar className="w-16 h-16">
                  <AvatarFallback>{listing.user.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0 pt-2">
                  <h3 className="font-bold">{listing.user.name}</h3>
                  <p className="text-gray-500">Black Brokers</p>
                </div>
              </div>
              <p className="text-gray-500">1 month ago</p>
            </div>

            <h2 className="font-bold pt-3 text-2xl px-4">{listing.title}</h2>
            <h3 className="font-light pt-2 truncate px-4">{listing.description}</h3>

            <div className="aspect-video w-full h-[25rem] mt-2">
              <img 
                src={listing.images[0]}
                alt={listing.title}
                className="object-cover h-full w-full"
              />
            </div>

            <div className="w-full bg-blue-50 rounded-b-xl flex flex-col gap-3">
              <p className="font-extrabold text-2xl pt-3 pl-4">Budget: {listing.price}</p>
              <div className="flex justify-start gap-1 pl-4 pb-3">
                <MapPin className="w-5 h-5" />
                <p className="text-gray-600">{listing.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 px-4 sm:px-10">
              {/* Property Features */}
              <div className="flex items-center justify-between border-b py-3">
                <div className="flex items-center gap-2 text-lg">
                  <Home className="h-5 w-5 text-muted-foreground" />
                  <span>{listing.details.bedrooms} BHK</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span>{listing.details.bathrooms} Bath</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                  <Square className="h-5 w-5 text-muted-foreground" />
                  <span>{listing.details.area}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between gap-4 pt-3">
                <Button variant="outline" className="flex-1 h-12 text-base gap-2">
                  <img className="h-5 w-5" src="/assets/call-calling.png" alt="Call icon" />
                  Call
                </Button>
                <Button variant="outline" className="flex-1 h-12 text-base gap-2">
                  <img className="h-5 w-5" src="/assets/send-2.png" alt="Enquire icon" />
                  Enquire
                </Button>
                <Button variant="outline" className="flex-1 h-12 text-base gap-2">
                  <img className="h-5 w-5" src="/assets/Share.png" alt="Share icon" />
                  Share
                </Button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </>
    )
  }
  
  