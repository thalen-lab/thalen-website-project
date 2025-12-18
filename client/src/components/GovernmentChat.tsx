import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, X, Send, User, Shield, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  sender: 'user' | 'specialist';
  text: string;
  timestamp: Date;
}

interface Specialist {
  name: string;
  title: string;
  clearance?: string;
  region?: string;
  avatar: string;
}

export default function GovernmentChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'prequalification' | 'chat'>('prequalification');
  const [agencyType, setAgencyType] = useState<'federal' | 'state-local'>('federal');
  const [procurementTimeline, setProcurementTimeline] = useState('');
  const [agencyName, setAgencyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [initialMessage, setInitialMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [assignedSpecialist, setAssignedSpecialist] = useState<Specialist | null>(null);

  const specialists = {
    federal: [
      { name: 'Sarah Mitchell', title: 'Federal Solutions Director', clearance: 'TS/SCI', avatar: 'SM' },
      { name: 'James Rodriguez', title: 'DoD Compliance Specialist', clearance: 'Secret', avatar: 'JR' },
      { name: 'Emily Chen', title: 'FedRAMP Implementation Lead', clearance: 'Public Trust', avatar: 'EC' },
    ],
    'state-local': [
      { name: 'Michael Thompson', title: 'State & Local Solutions Director', region: 'Northeast', avatar: 'MT' },
      { name: 'Lisa Anderson', title: 'Regional Specialist', region: 'Southeast', avatar: 'LA' },
      { name: 'David Park', title: 'Municipal Solutions Expert', region: 'West Coast', avatar: 'DP' },
    ]
  };

  const handleStartChat = () => {
    if (!agencyName || !contactName || !contactEmail || !procurementTimeline) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Route to appropriate specialist based on agency type
    const availableSpecialists = specialists[agencyType];
    const specialist = availableSpecialists[Math.floor(Math.random() * availableSpecialists.length)];
    setAssignedSpecialist(specialist);

    // Add welcome message from specialist
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      sender: 'specialist',
      text: `Hello ${contactName}! I'm ${specialist.name}, ${specialist.title}. I understand you're from ${agencyName} and looking to ${procurementTimeline}. ${initialMessage ? `Regarding "${initialMessage}" - ` : ''}I'm here to help. What specific questions do you have about our government IT solutions?`,
      timestamp: new Date()
    };

    setMessages([welcomeMessage]);
    setStep('chat');
    toast.success(`Connected to ${specialist.name}`);
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');

    // Simulate specialist response after a short delay
    setTimeout(() => {
      const responses = [
        "That's a great question. Let me provide you with some detailed information...",
        "I can definitely help with that. Based on your agency's needs...",
        "Excellent point. For your specific situation, I'd recommend...",
        "I understand your concern. Here's how we typically approach this...",
      ];

      const specialistMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'specialist',
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, specialistMessage]);
    }, 1500);
  };

  const handleReset = () => {
    setStep('prequalification');
    setMessages([]);
    setAssignedSpecialist(null);
    setAgencyName('');
    setContactName('');
    setContactEmail('');
    setInitialMessage('');
    setProcurementTimeline('');
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-orange-gradient shadow-lg hover:opacity-90 transition-all flex items-center justify-center group"
          aria-label="Open government chat"
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent rounded-full animate-pulse" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] shadow-2xl rounded-lg overflow-hidden border-2 border-border bg-background">
          {/* Header */}
          <div className="bg-navy-gradient text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold">Government Solutions Chat</h3>
                <p className="text-xs opacity-90">
                  {step === 'chat' && assignedSpecialist ? assignedSpecialist.name : 'Connect with a specialist'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 rounded p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Pre-qualification Form */}
          {step === 'prequalification' && (
            <div className="p-4 max-h-[600px] overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Shield className="h-4 w-4 text-accent mr-2" />
                    Connect with the Right Specialist
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tell us about your agency so we can route you to the most qualified team member.
                  </p>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-2 block">Agency Type *</Label>
                  <RadioGroup value={agencyType} onValueChange={(value: any) => setAgencyType(value)}>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:border-[#FF6B35] transition-colors cursor-pointer">
                      <RadioGroupItem value="federal" id="chat-federal" />
                      <Label htmlFor="chat-federal" className="cursor-pointer flex-1">
                        <div className="font-medium">Federal Government</div>
                        <div className="text-xs text-muted-foreground">Cleared specialists available</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg hover:border-[#FF6B35] transition-colors cursor-pointer">
                      <RadioGroupItem value="state-local" id="chat-state-local" />
                      <Label htmlFor="chat-state-local" className="cursor-pointer flex-1">
                        <div className="font-medium">State & Local Government</div>
                        <div className="text-xs text-muted-foreground">Regional specialists available</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="agency-name" className="text-sm font-semibold">Agency Name *</Label>
                  <Input
                    id="agency-name"
                    placeholder="e.g., Department of Veterans Affairs"
                    value={agencyName}
                    onChange={(e) => setAgencyName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-name" className="text-sm font-semibold">Your Name *</Label>
                  <Input
                    id="contact-name"
                    placeholder="John Smith"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email" className="text-sm font-semibold">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="john.smith@agency.gov"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-sm font-semibold">Procurement Timeline *</Label>
                  <Select value={procurementTimeline} onValueChange={setProcurementTimeline}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (0-30 days)</SelectItem>
                      <SelectItem value="short-term">Short-term (1-3 months)</SelectItem>
                      <SelectItem value="mid-term">Mid-term (3-6 months)</SelectItem>
                      <SelectItem value="long-term">Long-term (6+ months)</SelectItem>
                      <SelectItem value="planning">Planning phase</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="initial-message" className="text-sm font-semibold">How can we help? (Optional)</Label>
                  <Textarea
                    id="initial-message"
                    placeholder="Briefly describe your needs or questions..."
                    value={initialMessage}
                    onChange={(e) => setInitialMessage(e.target.value)}
                    className="mt-1 resize-none"
                    rows={3}
                  />
                </div>

                <Button onClick={handleStartChat} className="w-full bg-orange-gradient">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Start Chat with Specialist
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your information is secure and will only be used to connect you with the right specialist.
                </p>
              </div>
            </div>
          )}

          {/* Chat Interface */}
          {step === 'chat' && assignedSpecialist && (
            <div className="flex flex-col h-[600px]">
              {/* Specialist Info */}
              <div className="p-3 border-b bg-secondary/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-accent">
                    {assignedSpecialist.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{assignedSpecialist.name}</div>
                    <div className="text-xs text-muted-foreground">{assignedSpecialist.title}</div>
                    {assignedSpecialist.clearance && (
                      <div className="text-xs text-accent flex items-center mt-0.5">
                        <Shield className="h-3 w-3 mr-1" />
                        Clearance: {assignedSpecialist.clearance}
                      </div>
                    )}
                    {assignedSpecialist.region && (
                      <div className="text-xs text-accent flex items-center mt-0.5">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Region: {assignedSpecialist.region}
                      </div>
                    )}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500" title="Online" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-3 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={handleReset}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Start new conversation
                  </button>
                  <p className="text-xs text-muted-foreground">
                    Response time: ~2 minutes
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
