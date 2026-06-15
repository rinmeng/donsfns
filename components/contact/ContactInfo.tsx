import { Mail, MapPin, Phone } from 'lucide-react';
import { Badge } from '@/components/ui';

import { Text } from '@/components/Text';
import { Separator } from '@/components/ui/separator';
import { getDelayClass } from '@/utils/animations';

const serviceAreas = [
  'Enderby',
  'Vernon',
  'Armstrong',
  'Lake Country',
  'Kelowna',
  'Salmon Arm',
  'BC Interior',
];

export function ContactInfo() {
  return (
    <div className='flex flex-col gap-6'>
      <div className={`fade-in-from-bottom ${getDelayClass(0)}`}>
        <Text variant='hd-lg' className='mb-2 font-display tracking-wide'>
          Get in Touch
        </Text>
        <Text variant='muted'>
          Fill out the form and I'll get back to you. No run-around.
        </Text>
      </div>

      <Separator className={`fade-in-opacity ${getDelayClass(1)}`} />

      <div className='flex flex-col gap-5'>
        <div
          className={`fade-in-from-bottom ${getDelayClass(2)} flex items-center gap-3`}
        >
          <Phone className='h-5 w-5 shrink-0 text-muted-foreground' />
          <div className='flex flex-row gap-1'>
            <Text variant='label' size='sm'>
              Phone:
            </Text>
            <a
              href='tel:+12503065064'
              className='text-sm underline transition-colors hover:text-foreground'
            >
              (250) 306-5064
            </a>
          </div>
        </div>

        <div
          className={`fade-in-from-bottom ${getDelayClass(3)} flex items-center gap-3`}
        >
          <Mail className='h-5 w-5 shrink-0 text-muted-foreground' />
          <div className='flex flex-row gap-1'>
            <Text variant='label' size='sm'>
              Email:
            </Text>
            <a
              href='mailto:doncookbc@yahoo.ca'
              className='text-sm underline transition-colors hover:text-foreground'
            >
              doncookbc@yahoo.ca
            </a>
          </div>
        </div>

        <div className={`fade-in-from-bottom ${getDelayClass(4)} flex items-start gap-3`}>
          <MapPin className='mt-1 h-5 w-5 shrink-0 text-muted-foreground' />
          <div className='flex flex-col gap-2'>
            <Text variant='label' size='sm'>
              Service Areas
            </Text>
            <div className='flex flex-wrap gap-1'>
              {serviceAreas.map((area) => (
                <Badge key={area} variant={'outline'}>
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
