'use client'

import { ChevronLeft, Share2, Phone, MessageSquare, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from 'next/link'

interface PropertyDetailsProps {
  images: string[]
  title: string
  rent: string
  location: string
  details: {
    bedrooms: number
    bathrooms: string
    size: string
  }
  moreDetails: {
    type: string
    projectName: string
    rentFrequency: string
    noOfBedrooms: number
    noOfBathrooms: string
    furnishing: string
    propertySize: string
    city: string
  }
  amenities: string[]
  broker: {
    name: string
    avatar: string
    postedTime: string
  }
}

export default function PropertyDetails({
  images,
  title = "Is Renting",
  rent = "AED 20,000",
  location = "Sidra Villas II, Dubai Hills Estate, Dubai",
  details = {
    bedrooms: 2,
    bathrooms: "2",
    size: "1000+ sq ft"
  },
  moreDetails = {
    type: "Apartment",
    projectName: "Zada Tower",
    rentFrequency: "Monthly",
    noOfBedrooms: 3,
    noOfBathrooms: "1-3 Bathroom",
    furnishing: "Furnished",
    propertySize: "1,200 sq.ft",
    city: "Dubai"
  },
  amenities = [
    "Storage Kitchen & Chimney",
    "Barbecue Area",
    "Double Glazed Windows"
  ],
  broker = {
    name: "Omar faizan",
    avatar: "OF",
    postedTime: "1 month ago"
  }
}: PropertyDetailsProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b">
        <div className="px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/listings">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-base font-semibold">Post details</h1>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20">
        {/* Property Image */}
        <div className="aspect-[4/3] relative bg-muted">
          <img
            src={images?.[0] || "/placeholder.svg?height=400&width=600"}
            alt="Property"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Property Details */}
        <div className="p-4 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">{title}</h2>
            <p className="text-sm text-muted-foreground mb-4">Property in Dubai hill for an esteemed client that is looking for high yield investment for lon ter...</p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-lg font-semibold">Rent: {rent}</p>
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-3 gap-4 py-2">
            <div className="text-center">
              <p className="text-sm">{details.bedrooms} BHK</p>
            </div>
            <div className="text-center">
              <p className="text-sm">{details.bathrooms} Bathroom</p>
            </div>
            <div className="text-center">
              <p className="text-sm">{details.size}</p>
            </div>
          </div>

          {/* More Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">More details</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="text-sm">{moreDetails.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Project name</p>
                <p className="text-sm">{moreDetails.projectName}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rent frequency</p>
                <p className="text-sm">{moreDetails.rentFrequency}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">No of Bedrooms</p>
                <p className="text-sm">{moreDetails.noOfBedrooms}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">No of Bathrooms</p>
                <p className="text-sm">{moreDetails.noOfBathrooms}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Furnishing</p>
                <p className="text-sm">{moreDetails.furnishing}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Property size (sq.ft)</p>
                <p className="text-sm">{moreDetails.propertySize}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">City</p>
                <p className="text-sm">{moreDetails.city}</p>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-4">
            <h3 className="font-semibold">Amenities</h3>
            <ul className="space-y-2">
              {amenities.map((amenity, index) => (
                <li key={index} className="text-sm">• {amenity}</li>
              ))}
            </ul>
            <Button variant="outline" className="w-full text-sm">
              Show All Amenities
            </Button>
          </div>

          {/* Broker Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Broker details</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{broker.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{broker.name}</p>
                  <p className="text-sm text-muted-foreground">{broker.postedTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

