'use client';

import React from 'react';
import Image from 'next/image';
import LinkButton from '@/components/LinkButton';
import ProfileHeader from '@/components/ProfileHeader';
import { Card } from '@/components/ui/card';
import CustomerLogos from '@/components/CustomerLogos';
import { Utensils, Globe, Building2, MapPin, MessageCircle, Instagram, Music } from 'lucide-react';
import { trackLead, trackMenuView, trackLocationClick, trackSocialClick } from '@/lib/facebook-pixel';

// Simple TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Index = () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=6281219598012&text=Hi%20Mbok!%20Saya%20tertarik%20dengan%20produk%20Mbok%20Rum%2C%20boleh%20tanya-tanya%3F&fbclid=PARlRTSAOKH_JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeAgmWtSzWtyFBFgWYxvyPCKyyeb6B_uRLsC6JSosYVDHjLOmsn3k4z3UWayg_aem_BLm8dLbgcVuMi_MCbZE4tw`;

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
          <Card className="bg-white/10 backdrop-blur-sm shadow-lg rounded-xl border-white/20 p-6 md:p-8">
            <ProfileHeader />

            <div className="mt-8">
              <CustomerLogos />
            </div>
            <div className="flex flex-col space-y-2 mt-8">
              <LinkButton 
                href="https://example.com/menu"
                icon={<Utensils className="h-5 w-5" />}
                onClick={() => trackMenuView()}
              >
                Menu
              </LinkButton>
              
              <LinkButton 
                href="https://example.com/services"
                icon={<Utensils className="h-5 w-5" />}
              >
                Food Menu & Pricelist
              </LinkButton>
              
          
              
              <LinkButton 
                href="https://maps.app.goo.gl/ZZ5A5LCAij8RnnAp7"
                icon={<MapPin className="h-5 w-5" />}
                onClick={() => trackLocationClick('outlet')}
              >
                Lokasi Outlet
              </LinkButton>
              
              <LinkButton 
                href="https://maps.app.goo.gl/apRwaCx3UJa6Zyhx6?g_st=ipc"
                icon={<MapPin className="h-5 w-5" />}
                onClick={() => trackLocationClick('dapur')}
              >
                Lokasi Dapur
              </LinkButton>
              
              <LinkButton 
                href={whatsappUrl}
                className="bg-yellow-500 hover:bg-yellow-600 font-bold text-white py-4 px-6 rounded-lg transition duration-800 shadow-md hover:shadow-lg animate-bounce"
                icon={<MessageCircle className="h-5 w-5" />}
                onClick={() => trackLead('whatsapp_button')}
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
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/mbokrum?igsh=MWlycWZuM3JqZTYxdg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                onClick={() => trackSocialClick('instagram')}
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a 
                href="https://www.tiktok.com/@nasikuning.mbokrum?_r=1&_t=ZS-91WHnaqWK0u" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                onClick={() => trackSocialClick('tiktok')}
              >
                <TikTokIcon className="w-8 h-8" />
              </a>
            </div>
            
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
            
            {/* Social Media Icons - Right */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <a 
                href="https://www.instagram.com/mbokrum?igsh=MWlycWZuM3JqZTYxdg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                onClick={() => trackSocialClick('instagram')}
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a 
                href="https://www.tiktok.com/@nasikuning.mbokrum?_r=1&_t=ZS-91WHnaqWK0u" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                onClick={() => trackSocialClick('tiktok')}
              >
                <TikTokIcon className="w-8 h-8" />
              </a>
            </div>
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

