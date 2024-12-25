'use client'

import { MapPin, Phone, Share2, Send, Home, Users2, Briefcase, User } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


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
  },
  {
    id: '7',
    user: {
      name: 'Ali',
      avatar: 'A',
    },
    title: 'Beachside Cottage',
    description: '3 Bedrooms with stunning sea views',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 15,000,000',
    location: '345 Ocean Drive',
    details: {
      bedrooms: 3,
      bathrooms: 3,
      area: '3000 sq ft',
    },
    postedAt: '4 days ago',
  },
  {
    id: '8',
    user: {
      name: 'Priya',
      avatar: 'P',
    },
    title: 'City Loft',
    description: '1 Bedroom with modern amenities',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 2,000,000',
    location: '789 Urban Street',
    details: {
      bedrooms: 1,
      bathrooms: 1,
      area: '800 sq ft',
    },
    postedAt: '1 week ago',
  },
  {
    id: '9',
    user: {
      name: 'Samir',
      avatar: 'S',
    },
    title: 'Mountain Retreat',
    description: '4 Bedrooms surrounded by nature',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 20,000,000',
    location: '987 Highland Road',
    details: {
      bedrooms: 4,
      bathrooms: 4,
      area: '3500 sq ft',
    },
    postedAt: '10 days ago',
  },
  {
    id: '10',
    user: {
      name: 'Lila',
      avatar: 'L',
    },
    title: 'Countryside Farmhouse',
    description: '5 Bedrooms with large gardens',
    images: ['/assets/bedroom.jpg'],
    price: 'AED 18,000,000',
    location: '654 Country Lane',
    details: {
      bedrooms: 5,
      bathrooms: 4,
      area: '4000 sq ft',
    },
    postedAt: '2 weeks ago',
  },
]

export default function PropertyListings() {
    //const [showDownloadPrompt, setShowDownloadPrompt] = useState(false)
    return (
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-medium">Looking or Selling..</h1>
          <Button variant="default" className="rounded-full">
            + Post a listing
          </Button>
        </div>
  
        {/* Listings */}
        <div className="space-y-4">
          {sampleListings.map((listing, index) => (
            <Card 
              key={listing.id} 
              className={cn(
                "overflow-hidden",
                index === 9 && "relative"
              )}
            >
              {index === 9 && (
                <div className="absolute inset-0 z-10 backdrop-blur-sm bg-background/80 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Want to see more listings?</h3>
                  <p className="text-muted-foreground mb-4">Download our app to explore all available properties</p>
                  <Button className="w-full max-w-sm">
                    Download App
                  </Button>
                </div>
              )}
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{listing.user.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{listing.user.name}</h3>
                      <p className="text-sm text-muted-foreground">{listing.postedAt}</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-1">{listing.title}</h2>
                  <p className="text-muted-foreground mb-4">{listing.description}</p>
                </div>
  
                <div className="aspect-[4/3] relative">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="object-cover w-full h-full"
                  />
                </div>
  
                <div className="p-4">
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-xl font-bold mb-2">Budget: {listing.price}</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-muted-foreground">{listing.location}</span>
                    </div>
                  </div>
  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-base">{listing.details.bedrooms} BHK</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-base">{listing.details.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-base">{listing.details.area}</span>
                    </div>
                  </div>
  
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Inquire
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
  
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[2fr,3fr] gap-4">
                <div className="relative aspect-[4/3]">
                  <img
                    src={listing.images[0]}
                    alt={listing.title}
                    className="object-cover w-full h-full"
                  />
                </div>
  
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{listing.user.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{listing.user.name}</h3>
                        <p className="text-sm text-muted-foreground">{listing.postedAt}</p>
                      </div>
                    </div>
                    {/* <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button> */}
                  </div>
  
                  <div className="space-y-3">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
                      <p className="text-muted-foreground">{listing.description}</p>
                    </div>
  
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{listing.location}</span>
                    </div>
  
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-xl font-bold">Budget: {listing.price}</p>
                    </div>
  
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-secondary/20 rounded-lg">
                        <p className="font-semibold">{listing.details.bedrooms} BHK</p>
                      </div>
                      <div className="text-center p-3 bg-secondary/20 rounded-lg">
                        <p className="font-semibold">{listing.details.bathrooms} Bath</p>
                      </div>
                      <div className="text-center p-3 bg-secondary/20 rounded-lg">
                        <p className="font-semibold">{listing.details.area}</p>
                      </div>
                    </div>
  
                    <div className="grid grid-cols-2 gap-3">
                      <Button className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Inquire
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
  
      </div>
    )
  }
  
  