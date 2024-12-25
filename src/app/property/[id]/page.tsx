"use client"
import Link from 'next/link'
import PropertyDetails from '@/components/PropertyListing'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams(); 
  console.log("This is my params " , params.id);
  const propertyData = {
    images: [
      {
        url: '/assets/bedroom.jpg',
        alt: 'Modern bedroom with sea view',
      },
      {
        url: '/assets/bedroom.jpg',
        alt: 'Living room',
      },
    ],
    title: 'Selling Ready to move in',
    description: '4BR Size: 235 sqm Partial sea view / corner unit with big terrace',
    price: 'AED 12,000,000',
    askingPrice: '19.6M',
    details: {
      bedrooms: '4+',
      bathrooms: '3+',
      size: '3700 sq.ft',
      city: 'Sharjah',
      furnishing: 'Furnished',
    },
    moreDetails: {
      type: 'Apartment',
      projectName: '4BR Size: 235 sqm Partial sea view / corner unit with big terrace',
      rentFrequency: 'Monthly',
      propertySize: '3700',
    },
    amenities: [
      'Pets Allowed',
      'Gym',
      'Parking',
      'Security',
      'Balcony',
      'Garden',
      'Air Conditioning',
      'Furnished',
      'Heating',
      'Jacuzzi',
    ],
    broker: {
      initials: 'EM',
      name: 'Eliza Michell',
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <Link href="/listings" passHref>
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Listings
            </Button>
          </Link>
        </div>
        <PropertyDetails {...propertyData} />
      </div>
    </div>
  )
}

