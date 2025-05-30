'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ThemeToggle } from '@/components/theme-toggle';
import { useAuth } from '@/contexts/auth-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Users,
  MessageSquare,
  Award,
  Settings,
  LogOut,
  Menu,
  X,
  Bell
} from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const sidebarItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: 'Learning',
      href: '/dashboard/learning',
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: 'Sessions',
      href: '/dashboard/sessions',
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: 'Mentors',
      href: '/dashboard/mentors',
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: 'Messages',
      href: '/dashboard/messages',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: 'Achievements',
      href: '/dashboard/achievements',
      icon: <Award className="h-5 w-5" />,
    },
  ];

  const userNavItems = [
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 md:gap-8">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Link href="/" className="font-bold text-xl hidden md:flex">
              MentorMatch
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            {user && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium hidden md:inline-block">
                  {user.displayName || user.email?.split('@')[0]}
                </span>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
                  <AvatarFallback>{user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden",
          mobileSidebarOpen ? "block" : "hidden"
        )}
      >
        <div className="fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-xs border-r bg-background shadow-lg">
          <div className="flex h-16 items-center justify-between border-b px-4">
            <Link href="/" className="font-bold text-xl">
              MentorMatch
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close sidebar</span>
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="px-4 py-6">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                    <AvatarFallback>
                      {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user?.displayName || user?.email?.split('@')[0]}</div>
                    <div className="text-xs text-muted-foreground">{user?.role || 'Mentee'}</div>
                  </div>
                </div>

                <h3 className="text-xs font-medium uppercase text-muted-foreground tracking-wider mb-3">
                  Main Navigation
                </h3>
                <nav className="flex flex-col gap-1">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-secondary/50"
                      )}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-medium uppercase text-muted-foreground tracking-wider mb-3">
                  User
                </h3>
                <nav className="flex flex-col gap-1">
                  {userNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-secondary/50"
                      )}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      signOut();
                      setMobileSidebarOpen(false);
                    }}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary/50"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Desktop + Mobile Layout */}
      <div className="flex flex-1">
        {/* Desktop Sidebar */}
        <aside className="hidden border-r bg-background md:block md:w-64 lg:w-72">
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="px-4 py-6">
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-8">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                    <AvatarFallback>
                      {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user?.displayName || user?.email?.split('@')[0]}</div>
                    <div className="text-xs text-muted-foreground">{user?.role || 'Mentee'}</div>
                  </div>
                </div>

                <h3 className="text-xs font-medium uppercase text-muted-foreground tracking-wider mb-3 px-3">
                  Main Navigation
                </h3>
                <nav className="flex flex-col gap-1">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-secondary/50"
                      )}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-medium uppercase text-muted-foreground tracking-wider mb-3 px-3">
                  User
                </h3>
                <nav className="flex flex-col gap-1">
                  {userNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        pathname === item.href
                          ? "bg-secondary text-secondary-foreground"
                          : "hover:bg-secondary/50"
                      )}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-left hover:bg-secondary/50"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </nav>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="container py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}