import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Mail, Link2, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

export default function SocialShare({ title, url, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  // Construct full URL (handle relative URLs)
  const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
  
  // Encode URL and text for sharing
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = description ? encodeURIComponent(description) : '';

  // LinkedIn sharing URL
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  // Twitter sharing URL
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  // Email sharing
  const emailSubject = encodeURIComponent(`Thought you'd find this interesting: ${title}`);
  const emailBody = encodeURIComponent(
    `I came across this article and thought you might find it valuable:\n\n${title}\n\n${description || ''}\n\nRead more: ${fullUrl}\n\n`
  );
  const emailUrl = `mailto:?subject=${emailSubject}&body=${emailBody}`;

  // Copy link to clipboard
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-muted-foreground">Share:</span>
      
      {/* LinkedIn */}
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => window.open(linkedinUrl, '_blank', 'width=600,height=600')}
      >
        <Linkedin className="h-4 w-4" />
        <span className="hidden sm:inline">LinkedIn</span>
      </Button>

      {/* Twitter */}
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => window.open(twitterUrl, '_blank', 'width=600,height=600')}
      >
        <Twitter className="h-4 w-4" />
        <span className="hidden sm:inline">Twitter</span>
      </Button>

      {/* Email */}
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={() => window.location.href = emailUrl}
      >
        <Mail className="h-4 w-4" />
        <span className="hidden sm:inline">Email</span>
      </Button>

      {/* Copy Link */}
      <Button
        variant="outline"
        size="sm"
        className="gap-2"
        onClick={handleCopyLink}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-600" />
            <span className="hidden sm:inline text-green-600">Copied!</span>
          </>
        ) : (
          <>
            <Link2 className="h-4 w-4" />
            <span className="hidden sm:inline">Copy Link</span>
          </>
        )}
      </Button>
    </div>
  );
}
