import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

// Mock data for upcoming sessions
const upcomingSessions = [
  {
    id: 1,
    title: "Career Planning Discussion",
    mentor: {
      name: "Jane Smith",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    },
    date: "May 15, 2025",
    time: "3:00 PM - 4:00 PM",
    status: "confirmed",
  },
  {
    id: 2,
    title: "Portfolio Review",
    mentor: {
      name: "Michael Brown",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    date: "May 18, 2025",
    time: "2:00 PM - 3:00 PM",
    status: "confirmed",
  },
];

export default function UpcomingSessions() {
  return (
    <div className="space-y-4">
      {upcomingSessions.length > 0 ? (
        upcomingSessions.map((session) => (
          <div
            key={session.id}
            className="flex flex-col space-y-3 border-b pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={session.mentor.avatar} alt={session.mentor.name} />
                  <AvatarFallback>{session.mentor.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{session.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    with {session.mentor.name}
                  </p>
                </div>
              </div>
              <Button size="sm" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-3.5 w-3.5" />
                {session.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-3.5 w-3.5" />
                {session.time}
              </div>
              <div className="flex items-center">
                <Video className="mr-1 h-3.5 w-3.5" />
                Video Call
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-1">
              <Button size="sm" variant="outline">
                Reschedule
              </Button>
              <Button size="sm">
                Join Call
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <Calendar className="h-10 w-10 text-muted-foreground mb-2" />
          <h3 className="font-medium">No upcoming sessions</h3>
          <p className="text-sm text-muted-foreground">
            Schedule a session with a mentor to get started
          </p>
          <Button className="mt-4">Find a Mentor</Button>
        </div>
      )}
    </div>
  );
}