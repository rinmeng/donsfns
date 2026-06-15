import { Text } from '@/components/Text';
import { Card, CardContent } from '@/components/ui/card';
import { getDelayClass } from '@/utils/animations';

const stats = [
  { value: '2002', label: 'Est.' },
  { value: 'BC Parks', label: 'Provincial Projects' },
  { value: 'Highway', label: 'Large-Scale Work' },
  { value: 'Okanagan', label: 'Service Region' },
];

export function ExperienceHighlights() {
  return (
    <section className='bg-muted/30'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
          {stats.map(({ value, label }, index) => (
            <Card
              key={label}
              className={`fade-in-from-bottom text-center ${getDelayClass(index + 1)}`}
            >
              <CardContent className='pb-8 pt-8'>
                <Text
                  as='p'
                  variant='hd-xxl'
                  className='mb-2 font-display leading-none tracking-wide'
                >
                  {value}
                </Text>
                <Text size='sm' variant='muted'>
                  {label}
                </Text>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
