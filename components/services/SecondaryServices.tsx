import { Car, Layers, Snowflake } from 'lucide-react';

import { Text } from '@/components/Text';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getDelayClass } from '@/utils/animations';

const services = [
  {
    icon: Layers,
    title: 'Wood Milling',
    description:
      'Raw lumber cut and shaped to spec. Boards, planks, custom dimensions for construction or sale. Straight from the source, priced accordingly.',
  },
  {
    icon: Car,
    title: 'Automotive',
    description:
      'Mechanical work handled with the same precision as my fencing. Need something sorted on a vehicle? I handle it.',
  },
  {
    icon: Snowflake,
    title: 'Cold Storage Rental',
    description:
      'Refrigerated storage units available for rent. Suitable for meat aging, cattle storage, and agricultural cold storage. Contact for availability and rates.',
  },
];

export function SecondaryServices() {
  return (
    <section className='bg-muted/30'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mb-10'>
          <Text
            variant='hd-xl'
            className='fade-in-from-bottom mb-2 font-display tracking-wide'
          >
            Additional Services
          </Text>
          <Text
            variant='muted'
            size='lg'
            className={`fade-in-from-bottom ${getDelayClass(1)}`}
          >
            Fencing is what I'm known for. These are the other ways I can help.
          </Text>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
          {services.map(({ icon: Icon, title, description }, index) => (
            <Card
              key={title}
              className={`fade-in-scale ${getDelayClass(index + 2)}`}
            >
              <CardHeader className='pb-2'>
                <Icon className='mb-2 h-7 w-7 text-muted-foreground' />
                <Text variant='hd-sm'>{title}</Text>
              </CardHeader>
              <CardContent>
                <Text variant='muted' size='sm'>
                  {description}
                </Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
