import type { Metadata } from 'next';

import { AboutTeaser } from '@/components/home/AboutTeaser';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';

export const metadata: Metadata = {
  title: "Don's Fences & Services | Fence Contractor Enderby BC",
  description:
    'Professional fence installation in Enderby, BC. Serving Vernon, Armstrong, Salmon Arm, and the Okanagan. since 2002 experience including BC Parks and highway fencing.',
  alternates: { canonical: 'https://donsfences.ca' },
  openGraph: {
    url: 'https://donsfences.ca',
    title: "Don's Fences & Services | Fence Contractor Enderby BC",
    description:
      'Professional fence installation in Enderby, BC. since 2002 — BC Parks, highway, ranch, and residential fencing across the Okanagan.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutTeaser />
      <GalleryPreview />
    </>
  );
}
