import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Brain, 
  Users, 
  TrendingUp, 
  Clock, 
  Star,
  Play,
  CheckCircle,
  XCircle,
  BookOpen,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for student dashboard
const mockProblems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", completed: true, score: 95 },
  { id: 2, title: "Binary Search", difficulty: "Medium", completed: true, score: 87 },
  { id: 3, title: "Merge Sort", difficulty: "Medium", completed: false, score: null },
  { id: 4, title: "Dynamic Programming", difficulty: "Hard", completed: false, score: null }
];

const mockInterviews = [
  { id: 1, type: "Technical", completed: true, score: 92, feedback: "Great problem-solving approach" },
  { id: 2, type: "Behavioral", completed: true, score: 88, feedback: "Good communication skills" },
  { id: 3, type: "System Design", completed: false, score: null, feedback: null }
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("problems");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <header className="bg-background border-b shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">CodePrep</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Join Study Group
              </Button>
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">JS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
          <p className="text-muted-foreground">Continue your journey to tech career success</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Problems Solved</p>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Interview Score</p>
                  <p className="text-3xl font-bold">90%</p>
                </div>
                <Brain className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Study Streak</p>
                  <p className="text-3xl font-bold">7 days</p>
                </div>
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Readiness</p>
                  <p className="text-3xl font-bold">85%</p>
                </div>
                <Target className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="problems">Problems</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="collaborate">Collaborate</TabsTrigger>
          </TabsList>

          <TabsContent value="problems" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Coding Problems</h3>
              <Link to="/code-editor">
                <Button className="bg-gradient-primary shadow-primary">
                  <Play className="w-4 h-4 mr-2" />
                  Start Coding
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4">
              {mockProblems.map((problem) => (
                <Card key={problem.id} className="bg-gradient-card border-0 shadow-card hover:shadow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${problem.completed ? 'bg-success' : 'bg-muted'}`} />
                        <div>
                          <h4 className="font-semibold">{problem.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getDifficultyColor(problem.difficulty)} variant="secondary">
                              {problem.difficulty}
                            </Badge>
                            {problem.completed && (
                              <span className="text-sm text-muted-foreground">Score: {problem.score}%</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <Button variant={problem.completed ? "outline" : "default"} size="sm">
                        {problem.completed ? "Review" : "Solve"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">AI Mock Interviews</h3>
              <Link to="/interview">
                <Button className="bg-gradient-primary shadow-primary">
                  <Brain className="w-4 h-4 mr-2" />
                  Start Interview
                </Button>
              </Link>
            </div>
            
            <div className="grid gap-4">
              {mockInterviews.map((interview) => (
                <Card key={interview.id} className="bg-gradient-card border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${interview.completed ? 'bg-success' : 'bg-muted'}`} />
                        <div>
                          <h4 className="font-semibold">{interview.type} Interview</h4>
                          {interview.completed && (
                            <div className="mt-1">
                              <p className="text-sm text-muted-foreground">Score: {interview.score}%</p>
                              <p className="text-sm text-success">{interview.feedback}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <Button variant={interview.completed ? "outline" : "default"} size="sm">
                        {interview.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <h3 className="text-2xl font-bold">Your Progress</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Skill Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Algorithms</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Data Structures</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">System Design</span>
                      <span className="text-sm text-muted-foreground">62%</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Interview Readiness</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">85%</div>
                    <p className="text-muted-foreground">Ready for tech interviews</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Technical Skills</span>
                      <span className="text-success">Strong</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Communication</span>
                      <span className="text-success">Good</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Problem Solving</span>
                      <span className="text-warning">Needs Practice</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="collaborate" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">Peer Collaboration</h3>
              <Button className="bg-gradient-primary shadow-primary">
                <Users className="w-4 h-4 mr-2" />
                Create Study Group
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Active Study Groups</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <p className="font-medium">Algorithm Masters</p>
                      <p className="text-sm text-muted-foreground">5 members • Online now</p>
                    </div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <p className="font-medium">Interview Prep Squad</p>
                      <p className="text-sm text-muted-foreground">8 members • 3 online</p>
                    </div>
                    <Button size="sm" variant="outline">Join</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Pair Programming</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center py-6">
                    <Code className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No active sessions</p>
                    <Button className="mt-3" variant="outline">Start Pair Session</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;