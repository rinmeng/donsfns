import type { Metadata } from 'next';

import { AboutTeaser } from '@/components/home/AboutTeaser';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';

export const metadata: Metadata = {
  title: "Don's Fences & Services | Fence Contractor Enderby BC",
  description:
    'Professional fence installation in Enderby, BC. Serving the BC interior — Vernon, Armstrong, Lake Country, Kelowna, and Salmon Arm. Fencing since 2002.',
  alternates: { canonical: 'https://donsfences.ca' },
  openGraph: {
    url: 'https://donsfences.ca',
    title: "Don's Fences & Services | Fence Contractor Enderby BC",
    description:
      'Professional fence installation in Enderby, BC. Since 2002 — highway, ranch, and residential fencing across the BC interior.',
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
