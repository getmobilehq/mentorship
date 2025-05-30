import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  imageSrc: string;
}

export default function TestimonialCard({ quote, author, role, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-lg italic">"{quote}"</div>
          <div className="mt-auto flex items-center gap-3 pt-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image 
                src={imageSrc} 
                alt={author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold">{author}</div>
              <div className="text-sm text-muted-foreground">{role}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}