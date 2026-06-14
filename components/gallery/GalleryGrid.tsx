import Image from 'next/image';

import { getDelayClass } from '@/utils/animations';

const images = [
  { src: '/don_3.jpg', alt: 'Fence installation in the BC interior' },
  { src: '/don_4.jpg', alt: "Professional fencing by Don's Fences & Services" },
  { src: '/don_5.jpg', alt: 'Ranch fence — Enderby BC' },
  { src: '/don_6.jpg', alt: 'Custom gate installation — Okanagan' },
];

export function GalleryGrid() {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
      {images.map(({ src, alt }, index) => (
        <div
          key={src}
          className={`fade-in-scale relative aspect-[4/3] overflow-hidden rounded-lg ${getDelayClass(index)}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className='object-cover transition-transform duration-500 hover:scale-105'
          />
        </div>
      ))}
    </div>
  );
}
