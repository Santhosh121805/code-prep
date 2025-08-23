import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { 
  Play, 
  Save, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  Clock,
  Code,
  FileText,
  TestTube,
  Users
} from "lucide-react";

const CodeEditor = () => {
  const [code, setCode] = useState(`def two_sum(nums, target):
    """
    Given an array of integers nums and an integer target,
    return indices of the two numbers such that they add up to target.
    """
    # Your solution here
    pass`);
  
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState([
    { input: "[2,7,11,15], target=9", expected: "[0,1]", actual: null, passed: null },
    { input: "[3,2,4], target=6", expected: "[1,2]", actual: null, passed: null },
    { input: "[3,3], target=6", expected: "[0,1]", actual: null, passed: null }
  ]);

  const handleRunCode = async () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      setOutput("Running test cases...\n\nTest 1: PASS\nTest 2: PASS\nTest 3: FAIL\n\nExpected: [0,1]\nActual: None");
      
      setTestResults(prev => prev.map((test, index) => ({
        ...test,
        actual: index < 2 ? test.expected : "None",
        passed: index < 2
      })));
      
      setIsRunning(false);
    }, 2000);
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
              <div>
                <h1 className="text-lg font-bold">Two Sum Problem</h1>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-success text-success-foreground">Easy</Badge>
                  <span className="text-sm text-muted-foreground">Array • Hash Table</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Collaborate
              </Button>
              <Button variant="outline" size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button 
                onClick={handleRunCode} 
                disabled={isRunning}
                className="bg-gradient-primary shadow-primary"
              >
                {isRunning ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isRunning ? "Running..." : "Run Code"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
          {/* Problem Description */}
          <Card className="bg-gradient-card border-0 shadow-card overflow-hidden">
            <CardHeader className="bg-muted/20">
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Problem Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Problem Statement</h3>
                  <p className="text-muted-foreground">
                    Given an array of integers <code className="bg-muted px-1 py-0.5 rounded">nums</code> and an integer <code className="bg-muted px-1 py-0.5 rounded">target</code>, 
                    return indices of the two numbers such that they add up to target.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-2">Examples</h3>
                  <div className="space-y-3">
                    <div className="bg-muted/20 p-3 rounded-lg">
                      <p className="font-medium">Example 1:</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Input:</strong> nums = [2,7,11,15], target = 9<br/>
                        <strong>Output:</strong> [0,1]<br/>
                        <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                      </p>
                    </div>
                    
                    <div className="bg-muted/20 p-3 rounded-lg">
                      <p className="font-medium">Example 2:</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Input:</strong> nums = [3,2,4], target = 6<br/>
                        <strong>Output:</strong> [1,2]
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-2">Constraints</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 2 ≤ nums.length ≤ 10⁴</li>
                    <li>• -10⁹ ≤ nums[i] ≤ 10⁹</li>
                    <li>• -10⁹ ≤ target ≤ 10⁹</li>
                    <li>• Only one valid answer exists</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-2">Hints</h3>
                  <div className="space-y-2">
                    <div className="bg-muted/20 p-3 rounded-lg">
                      <p className="text-sm">💡 Try using a hash map to store the numbers you've seen so far</p>
                    </div>
                    <div className="bg-muted/20 p-3 rounded-lg">
                      <p className="text-sm">💡 For each number, check if target - number exists in your hash map</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Code Editor & Results */}
          <div className="space-y-6">
            {/* Code Editor */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="bg-muted/20">
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5" />
                  <span>Code Editor</span>
                  <Badge variant="outline">Python</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="min-h-[300px] font-mono text-sm border-0 resize-none focus:ring-0"
                  placeholder="Write your solution here..."
                />
              </CardContent>
            </Card>

            {/* Test Results */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardHeader className="bg-muted/20">
                <CardTitle className="flex items-center space-x-2">
                  <TestTube className="w-5 h-5" />
                  <span>Test Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {testResults.map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                      <div className="flex-1">
                        <p className="text-sm font-medium">Test {index + 1}</p>
                        <p className="text-xs text-muted-foreground">{test.input}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {test.passed === null ? (
                          <Clock className="w-4 h-4 text-muted-foreground" />
                        ) : test.passed ? (
                          <CheckCircle className="w-4 h-4 text-success" />
                        ) : (
                          <XCircle className="w-4 h-4 text-destructive" />
                        )}
                        <span className="text-sm">
                          {test.passed === null ? "Not run" : test.passed ? "PASS" : "FAIL"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {output && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Output:</h4>
                    <pre className="bg-secondary p-3 rounded-lg text-sm text-secondary-foreground overflow-x-auto">
                      {output}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;