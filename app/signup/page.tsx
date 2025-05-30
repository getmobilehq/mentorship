'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, UserPlus } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Join MentorMatch</h1>
          <p className="text-muted-foreground">Choose how you want to participate</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RoleCard
            title="I want to find a mentor"
            description="Join as a mentee to be matched with experienced mentors and access personalized learning content."
            icon={<BookOpen className="h-12 w-12" />}
            benefits={[
              "Get matched with the perfect mentor",
              "Access personalized learning content",
              "Track your progress and earn badges",
              "Join a supportive community"
            ]}
            onClick={() => router.push('/signup/mentee')}
            ctaText="Sign up as Mentee"
          />

          <RoleCard
            title="I want to be a mentor"
            description="Share your knowledge and experience with mentees who can benefit from your guidance."
            icon={<UserPlus className="h-12 w-12" />}
            benefits={[
              "Create your mentor profile",
              "Set your mentorship preferences",
              "Help shape the future generation",
              "Build your professional network"
            ]}
            onClick={() => router.push('/signup/mentor')}
            ctaText="Sign up as Mentor"
            variant="outline"
          />
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/signin" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  onClick: () => void;
  ctaText: string;
  variant?: 'default' | 'outline';
}

function RoleCard({ 
  title, 
  description, 
  icon, 
  benefits, 
  onClick, 
  ctaText, 
  variant = 'default' 
}: RoleCardProps) {
  return (
    <Card className={cn(
      "border-2 transition-all duration-300 hover:shadow-lg", 
      variant === 'outline' ? "border-muted" : "border-primary/50"
    )}>
      <CardHeader className="space-y-1">
        <div className={cn(
          "rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
          variant === 'outline' ? "bg-muted text-foreground" : "bg-primary/10 text-primary"
        )}>
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg
                className={cn(
                  "mr-2 h-5 w-5 flex-shrink-0",
                  variant === 'outline' ? "text-muted-foreground" : "text-primary"
                )}
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        <Button 
          className="w-full" 
          onClick={onClick}
          variant={variant}
          size="lg"
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}