'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BarChart, LineChart, Calendar, BookOpen, Award, Timer, Users, MessageSquare } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/layout';
import LearningSummary from '@/components/dashboard/mentee/learning-summary';
import UpcomingSessions from '@/components/dashboard/mentee/upcoming-sessions';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  // Demo content for mentee dashboard
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Learning Progress</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">65%</div>
                  <Progress value={65} className="h-2 mt-2" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Stage 2: Intermediate
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/20</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    4 lessons ahead of schedule
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Mentored</CardTitle>
                  <Timer className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.5h</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    +2.5 hours from last month
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Next: Tomorrow, 3:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Learning Summary</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <LearningSummary />
                </CardContent>
              </Card>
              
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <UpcomingSessions />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Recommended Learning</CardTitle>
                  <CardDescription>
                    Personalized content based on your progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="rounded-md bg-secondary p-2">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">Introduction to Design Thinking</h4>
                            <Badge variant="outline">15 min</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Learn the basics of design thinking and how to apply it to problem solving.
                          </p>
                          <Button variant="link" className="h-auto p-0 text-sm">
                            Start Lesson
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Your Badges</CardTitle>
                  <CardDescription>
                    Achievements you've earned
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Award className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xs text-center font-medium">
                          {["Quick Start", "Team Player", "Problem Solver", "Fast Learner", "Creative", "Dedicated"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Learning Progress Over Time</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center border rounded-md">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <LineChart className="h-16 w-16 mb-2" />
                    <p>Learning progress analytics visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Time Spent by Category</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center border rounded-md">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <BarChart className="h-16 w-16 mb-2" />
                    <p>Time distribution chart would appear here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Skills Development</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center border rounded-md">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <BarChart className="h-16 w-16 mb-2" />
                    <p>Skills radar chart would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="sessions" className="space-y-4">
            <div className="grid gap-4 grid-cols-1">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Upcoming Sessions</CardTitle>
                    <Button size="sm">
                      Schedule New
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b pb-6">
                        <div className="flex gap-4 items-start">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Career Planning Session</h4>
                            <p className="text-sm text-muted-foreground">
                              With Jane Smith (Mentor)
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Calendar className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs">May 15, 2025 • 3:00 PM</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-10 md:ml-0">
                          <Button size="sm" variant="outline">Reschedule</Button>
                          <Button size="sm">Join</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Past Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex gap-4 items-start">
                          <div className="rounded-full bg-secondary p-3">
                            <Users className="h-6 w-6" />
                          </div>
                          <div>
                            <h4 className="font-semibold">Goal Setting Workshop</h4>
                            <p className="text-sm text-muted-foreground">
                              With Michael Brown (Mentor)
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <Calendar className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs">May 5, 2025 • 2:00 PM</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-10 md:ml-0">
                          <Button size="sm" variant="outline">View Notes</Button>
                          <Button size="sm" variant="secondary">Rate Session</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="learning" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Your Learning Path</CardTitle>
                  <CardDescription>Stage 2: Intermediate - 65% complete</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {[1, 2, 3].map((module) => (
                      <div key={module} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">Module {module}: UX Design Fundamentals</h3>
                          <Badge variant={module === 1 ? "default" : (module === 2 ? "secondary" : "outline")}>
                            {module === 1 ? "Completed" : (module === 2 ? "In Progress" : "Upcoming")}
                          </Badge>
                        </div>
                        <Progress value={module === 1 ? 100 : (module === 2 ? 40 : 0)} className="h-2" />
                        
                        <div className="pl-4 border-l-2 border-muted space-y-3 pt-2">
                          {[1, 2, 3].map((lesson) => (
                            <div key={`${module}-${lesson}`} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`h-2 w-2 rounded-full ${
                                  module < 2 || (module === 2 && lesson < 2) 
                                    ? "bg-primary" 
                                    : "bg-muted-foreground/30"
                                }`}></div>
                                <span className={`text-sm ${
                                  module < 2 || (module === 2 && lesson < 2)
                                    ? "text-foreground" 
                                    : "text-muted-foreground"
                                }`}>
                                  Lesson {lesson}: {["Introduction", "Key Principles", "Practical Exercise"][lesson-1]}
                                </span>
                              </div>
                              <Button 
                                size="sm" 
                                variant={
                                  module < 2 || (module === 2 && lesson < 2)
                                    ? "ghost"
                                    : (module === 2 && lesson === 2)
                                      ? "default"
                                      : "outline"
                                }
                                className="h-7"
                              >
                                {
                                  module < 2 || (module === 2 && lesson < 2)
                                    ? "Completed"
                                    : (module === 2 && lesson === 2)
                                      ? "Continue"
                                      : "Start"
                                }
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Connect with Mentors</CardTitle>
                  <CardDescription>
                    Specialists in your area of interest
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                        <div className="rounded-full bg-secondary h-10 w-10 flex items-center justify-center">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">Alex Johnson</h4>
                            <Badge variant="outline" className="text-xs">UX/UI</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            10+ years experience in UX design at major tech companies
                          </p>
                          <div className="flex items-center gap-2 pt-1">
                            <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                              <MessageSquare className="h-3.5 w-3.5" />
                            </Button>
                            <Button size="sm" className="h-7 text-xs">Request Session</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      View All Mentors
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}