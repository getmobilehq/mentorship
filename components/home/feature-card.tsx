import { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="mb-2">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}