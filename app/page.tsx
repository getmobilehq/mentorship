import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Calendar, Award } from 'lucide-react';
import FeatureCard from '@/components/home/feature-card';
import TestimonialCard from '@/components/home/testimonial-card';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container px-4 py-16 md:py-24 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Connect, Learn, and Grow with Mentorship
            </h1>
            <p className="text-lg text-muted-foreground">
              MentorMatch connects youth mentees with vetted mentors through personalized learning 
              experiences and structured mentorship sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup/mentee">
                  Find a Mentor <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/signup/mentor">Become a Mentor</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/7641833/pexels-photo-7641833.jpeg" 
                alt="Mentorship in action"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to connect mentors and mentees through a structured, 
              supportive learning environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Connect"
              description="Get matched with the perfect mentor based on your goals, interests, and learning stage."
            />
            <FeatureCard 
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Learn"
              description="Access personalized micro-learning content tailored to your development stage."
            />
            <FeatureCard 
              icon={<Calendar className="h-8 w-8 text-primary" />}
              title="Schedule"
              description="Book mentorship sessions that fit your calendar and learning pace."
            />
            <FeatureCard 
              icon={<Award className="h-8 w-8 text-primary" />}
              title="Grow"
              description="Track your progress, earn badges, and celebrate your achievements."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from mentors and mentees who have transformed their lives through our platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="The structured approach to mentorship helped me develop skills I never thought possible. My mentor changed my life."
              author="Sarah J."
              role="Mentee"
              imageSrc="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
            />
            <TestimonialCard 
              quote="Being able to give back to the community while watching my mentees grow has been incredibly rewarding."
              author="Michael T."
              role="Mentor"
              imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
            />
            <TestimonialCard 
              quote="The platform's micro-learning approach made it easy to progress at my own pace while still feeling supported."
              author="Jamie R."
              role="Mentee"
              imageSrc="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn or to share your knowledge, join our community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup/mentee">Join as Mentee</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
              <Link href="/signup/mentor">Join as Mentor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}