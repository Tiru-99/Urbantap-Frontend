'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Share2, Bed, Bath, Maximize, Star, Heart, Check, MapPin, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface PropertyImage {
  url: string
  alt: string
}

interface PropertyDetailsProps {
  images: PropertyImage[]
  title: string
  description: string
  price: string
  askingPrice: string
  details: {
    bedrooms: string
    bathrooms: string
    size: string
    city: string
    furnishing: string
  }
  moreDetails: {
    type: string
    projectName: string
    rentFrequency: string
    propertySize: string
  }
  amenities: string[]
  broker: {
    initials: string
    name: string
  }
}

export default function Property({
  images,
  title,
  description,
  price,
  askingPrice,
  details,
  moreDetails,
  amenities,
  broker,
}: PropertyDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{details.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span>4.9 (120 reviews)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Badge variant="secondary" className="text-lg font-semibold py-1 px-3">
                {price}
              </Badge>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0 relative">
            <div className="aspect-[16/9] relative">
              <Image
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black hover:bg-white hover:text-primary"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black hover:bg-white hover:text-primary"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
            <div className="absolute top-4 left-4 flex gap-2">
              {images.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
              {images.length > 5 && (
                <div className="w-2 h-2 rounded-full bg-white/50" />
              )}
            </div>

            {/* Dialog Box */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute md:bottom-4 md:right-4 bottom-3 right-3 scale-90 md:scale-100"
                >
                  Show all photos
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-full h-[90vh]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto p-6">
                  {images.map((image, index) => (
                    <div key={index} className="relative aspect-video">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

     {/* Main Content */}
     <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Title and Price */}
              <div>
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-lg font-medium">Budget: {price}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Asking Price: {askingPrice}</p>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span>{details.bedrooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span>{details.bathrooms}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-muted-foreground" />
                  <span>{details.size}</span>
                </div>
              </div>

              <Separator />

              {/* More Details */}
              <div className="space-y-4">
                <h3 className="font-semibold">More Details</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p>{moreDetails.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Project name</p>
                    <p>{moreDetails.projectName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rent frequency</p>
                    <p>{moreDetails.rentFrequency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">No of Bedrooms</p>
                    <p>{details.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">No of Bathrooms</p>
                    <p>{details.bathrooms}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Furnishing</p>
                    <p>{details.furnishing}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Property size (sq.ft)</p>
                    <p>{moreDetails.propertySize}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">City</p>
                    <p>{details.city}</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Property Details */}
              <div className="space-y-4">
                <h3 className="font-semibold">Property Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">City</p>
                    <p>{details.city}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Furnishing</p>
                    <p>{details.furnishing}</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Amenities */}
              <div className="space-y-4">
                <h3 className="font-semibold">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Broker Details */}
              <div className="space-y-4">
                <h3 className="font-semibold">Broker Details</h3>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    {broker.initials}
                  </div>
                  <div>
                    <p className="font-medium">{broker.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
        </div>

  )
}

