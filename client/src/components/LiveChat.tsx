import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, Clock } from "lucide-react";
import { toast } from "sonner";

function isBusinessHours(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  
  // Monday-Friday (1-5), 9am-5pm ET
  // Note: This uses local time. In production, you'd want to convert to ET timezone
  const isWeekday = day >= 1 && day <= 5;
  const isDuringHours = hour >= 9 && hour < 17;
  
  return isWeekday && isDuringHours;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check business hours on mount and every minute
    const checkHours = () => {
      setIsOnline(isBusinessHours());
    };
    
    checkHours();
    const interval = setInterval(checkHours, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Chat message submitted:", { name, email, message, isOnline });
      
      if (isOnline) {
        toast.success("Connected! A solution architect will respond shortly.");
      } else {
        toast.success("Message sent! We'll respond within 24 hours.");
      }
      
      // Reset form
      setMessage("");
      setName("");
      setEmail("");
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-orange-gradient text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
          aria-label="Open live chat"
        >
          <MessageCircle className="w-6 h-6" />
          {isOnline && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 shadow-2xl">
          <CardHeader className="bg-navy-gradient text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <div>
                  <CardTitle className="text-lg">Live Chat Support</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-white/80 mt-1">
                    <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-gray-400'}`} />
                    {isOnline ? "Online - TS/SCI Cleared Architects" : "Offline - Leave a message"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded p-1 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>

          <CardContent className="p-3 sm:p-4 md:p-6">
            {isOnline ? (
              // Online Chat Form
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Welcome!</strong> Our TS/SCI cleared solution architects are available to discuss your application development needs.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div>
                    <Label htmlFor="chat-name">Name *</Label>
                    <Input
                      id="chat-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="chat-email">Email *</Label>
                    <Input
                      id="chat-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@agency.gov"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="chat-message">Message *</Label>
                    <Textarea
                      id="chat-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help with your application development project?"
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-gradient hover:opacity-90"
                  >
                    {isSubmitting ? (
                      "Connecting..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Start Chat
                      </>
                    )}
                  </Button>
                </form>
              </div>
            ) : (
              // Offline Message Form
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <div className="bg-secondary p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold mb-1">We're currently offline</p>
                      <p className="text-muted-foreground">
                        Business hours: Monday-Friday, 9am-5pm ET
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Leave a message and we'll respond within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div>
                    <Label htmlFor="offline-name">Name *</Label>
                    <Input
                      id="offline-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="offline-email">Email *</Label>
                    <Input
                      id="offline-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john.doe@agency.gov"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="offline-message">Message *</Label>
                    <Textarea
                      id="offline-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your application development needs..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-gradient hover:opacity-90"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
