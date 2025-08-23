import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Play, 
  Pause,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Clock,
  User,
  Bot
} from "lucide-react";

const InterviewSimulator = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes

  const questions = [
    {
      type: "Technical",
      question: "Explain the difference between a stack and a queue. When would you use each?",
      difficulty: "Medium",
      expectedDuration: "5 minutes"
    },
    {
      type: "Technical", 
      question: "How would you implement a function to reverse a linked list?",
      difficulty: "Medium",
      expectedDuration: "8 minutes"
    },
    {
      type: "Behavioral",
      question: "Tell me about a time when you had to work with a difficult team member. How did you handle it?",
      difficulty: "Easy",
      expectedDuration: "5 minutes"
    },
    {
      type: "System Design",
      question: "Design a URL shortening service like bit.ly. Consider scalability and performance.",
      difficulty: "Hard", 
      expectedDuration: "12 minutes"
    }
  ];

  const aiResponses = [
    "Great start! Your explanation of stack LIFO principle is clear. Can you elaborate on specific use cases?",
    "Good approach with the iterative solution. Have you considered the recursive approach? What are the trade-offs?",
    "I appreciate your structured response using the STAR method. The conflict resolution strategy you described shows emotional intelligence.",
    "Excellent consideration of scalability! Your database design is solid. How would you handle cache invalidation?"
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartInterview = () => {
    setInterviewStarted(true);
    // Start timer countdown
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setAnswer("");
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  if (!interviewStarted) {
    return (
      <div className="min-h-screen bg-gradient-card">
        <header className="bg-background border-b shadow-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold">AI Interview Simulator</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technical Interview Practice</h2>
            <p className="text-xl text-muted-foreground">
              Practice with our AI interviewer to improve your technical and behavioral interview skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle>What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Real Interview Questions</p>
                    <p className="text-sm text-muted-foreground">Questions from top tech companies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">AI-Powered Feedback</p>
                    <p className="text-sm text-muted-foreground">Instant analysis of your responses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Multiple Formats</p>
                    <p className="text-sm text-muted-foreground">Technical, behavioral, and system design</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle>Interview Format</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span className="font-medium">4-5 questions</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty:</span>
                  <span className="font-medium">Mixed levels</span>
                </div>
                <div className="flex justify-between">
                  <span>Recording:</span>
                  <span className="font-medium">Optional</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleStartInterview}
              className="bg-gradient-primary shadow-primary text-lg px-8 py-6"
            >
              <Play className="w-6 h-6 mr-3" />
              Start Interview
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Make sure you're in a quiet environment with good lighting
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <header className="bg-background border-b shadow-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-lg font-bold">Interview in Progress</h1>
                <p className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeLeft)}</span>
              </div>
              <Progress value={(currentQuestion / questions.length) * 100} className="w-24" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* AI Interviewer */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-5 h-5" />
                  <span>AI Interviewer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">Sarah - Technical Interviewer</p>
                </div>
                
                <div className="space-y-3">
                  <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="sm"
                    onClick={() => setIsRecording(!isRecording)}
                    className="w-full"
                  >
                    {isRecording ? <MicOff className="w-4 h-4 mr-2" /> : <Mic className="w-4 h-4 mr-2" />}
                    {isRecording ? "Stop Recording" : "Start Recording"}
                  </Button>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Video className="w-4 h-4 mr-2" />
                    Camera On
                  </Button>
                </div>

                {aiResponses[currentQuestion] && (
                  <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">AI Feedback:</p>
                    <p className="text-sm">{aiResponses[currentQuestion]}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Question & Answer */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Question */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Current Question</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge className={getDifficultyColor(questions[currentQuestion].difficulty)}>
                      {questions[currentQuestion].difficulty}
                    </Badge>
                    <Badge variant="outline">{questions[currentQuestion].type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>Expected Duration: {questions[currentQuestion].expectedDuration}</span>
                  <span>•</span>
                  <span>Think out loud as you work through your answer</span>
                </div>
              </CardContent>
            </Card>

            {/* Answer Input */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle>Your Answer</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Type your answer here or speak aloud if recording..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="min-h-[200px]"
                />
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset Answer
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      onClick={handleNextQuestion}
                      disabled={currentQuestion === questions.length - 1}
                    >
                      Skip Question
                    </Button>
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={currentQuestion === questions.length - 1}
                      className="bg-gradient-primary shadow-primary"
                    >
                      {currentQuestion === questions.length - 1 ? "Finish Interview" : "Next Question"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Tips */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span>Real-time Tips</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Speak clearly and maintain good eye contact with the camera</p>
                  <p>• For technical questions, explain your thought process step by step</p>
                  <p>• Use specific examples and quantify your achievements when possible</p>
                  <p>• It's okay to ask clarifying questions about the problem</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewSimulator;