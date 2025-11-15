'use client';

import React from 'react';
import Image from 'next/image';
import LinkButton from '@/components/LinkButton';
import ProfileHeader from '@/components/ProfileHeader';
import { Card } from '@/components/ui/card';
import CustomerLogos from '@/components/CustomerLogos';
import { Utensils, Globe, Building2, MapPin, MessageCircle, Instagram } from 'lucide-react';

const Index = () => {
  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    "Hello! I'm interested in learning more."
  )}`;

  return (
    <div className="relative min-h-screen">
      {/* Background Image - Portrait for mobile, Landscape for desktop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg_portrait.png"
          alt="Background"
          fill
          className="object-cover md:hidden"
          priority
          unoptimized={true}
        />
        <Image
          src="/bg_landscape.png"
          alt="Background"
          fill
          className="object-cover hidden md:block"
          priority
          unoptimized={true}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#141e14]/10 z-10" />

      {/* Content */}
      <div className="relative z-20 py-2 px-4 text-white">
        <div className="max-w-md mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-lg rounded-xl border-white/20">
            <ProfileHeader />

            <div className="mt-8">
              <CustomerLogos />
            </div>
            <div className="flex flex-col space-y-4 mt-8">
              <LinkButton 
                href="https://example.com/menu"
                icon={<Utensils className="h-5 w-5" />}
              >
                Menu
              </LinkButton>
              
              <LinkButton 
                href="https://example.com/services"
                icon={<Utensils className="h-5 w-5" />}
              >
                Services
              </LinkButton>
              
              <LinkButton 
                href="https://example.com"
                icon={<Globe className="h-5 w-5" />}
              >
                Website
              </LinkButton>
              
              <LinkButton 
                href="https://example.com/about"
                icon={<Building2 className="h-5 w-5" />}
              >
                Company Profile
              </LinkButton>
              
              <LinkButton 
                href="https://maps.app.goo.gl/ZZ5A5LCAij8RnnAp7"
                icon={<MapPin className="h-5 w-5" />}
              >
                Lokasi Outlet
              </LinkButton>
              
              <LinkButton 
                href={whatsappUrl}
                className="bg-yellow-500 hover:bg-yellow-600 font-bold text-white py-4 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg animate-bounce"
                icon={<MessageCircle className="h-5 w-5" />}
              >
                ORDER DISINI!
              </LinkButton>
            </div>
          </Card>
        </div>

        {/* Footer - Outside the transparent box and max-width container - Full width */}
        <div className="mt-8 text-white w-full px-4">
          {/* Mobile Layout: Stacked vertically */}
          <div className="flex flex-col items-center md:hidden space-y-4 max-w-md mx-auto px-8">
            {/* Logo */}
            <div className="w-32 h-32 relative">
              <Image
                src="/logo_portrait.png"
                alt="Mbokrum Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Address */}
            <p className="text-center text-sm w-[300px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Jl. Taman Palem Lestari No.19 RT.7/RW.8 Cengkareng Barat 111730
            </p>
            
            {/* Instagram Icon */}
            <a 
              href="https://instagram.com/mbokrum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-8 h-8" />
            </a>
            
            {/* White Line */}
            <div className="w-full h-px bg-white/30 my-2" />
            
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              © {new Date().getFullYear()} Mbokrum. All rights reserved.
            </p>
          </div>

          {/* Desktop Layout: Logo left, Address center, Instagram right - Full width */}
          <div className="hidden md:flex items-center justify-between max-w-6xl mx-auto px-4 mb-4">
            {/* Logo - Left */}
            <div className="w-32 h-32 relative flex-shrink-0">
              <Image
                src="/logo_portrait.png"
                alt="Mbokrum Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Address - Center */}
            <p className="text-center text-xl flex-1 max-w-[400px] mr-24 " style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Jl. Taman Palem Lestari No.19 RT.7/RW.8 Cengkareng Barat 111730
            </p>
            
            {/* Instagram - Right */}
            <a 
              href="https://instagram.com/mbokrum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>

          {/* Desktop: White Line and Copyright - Full width */}
          <div className="hidden md:block w-full">
            <div className="w-full h-px bg-white/30 my-4" />
            <div className="max-w-6xl mx-auto px-4">
              <p className="text-white/60 text-sm text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                © {new Date().getFullYear()} Mbokrum. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

