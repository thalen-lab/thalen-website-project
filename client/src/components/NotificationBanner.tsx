import { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  isPushSupported, 
  getNotificationPermission, 
  subscribeToPushNotifications,
  isSubscribed 
} from '@/lib/push-notifications';
import { toast } from 'sonner';

/**
 * Notification permission banner
 * Prompts users to enable push notifications for updates
 */
export function NotificationBanner() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if we should show the banner
    const checkPermission = async () => {
      // Don't show if push is not supported
      if (!isPushSupported()) {
        return;
      }

      // Don't show if user has already granted or denied permission
      const permission = getNotificationPermission();
      if (permission !== 'default') {
        return;
      }

      // Don't show if user already subscribed
      const subscribed = await isSubscribed();
      if (subscribed) {
        return;
      }

      // Don't show if user dismissed the banner recently
      const dismissed = localStorage.getItem('notification-banner-dismissed');
      if (dismissed) {
        const dismissedTime = parseInt(dismissed);
        const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
        if (daysSinceDismissed < 7) {
          return;
        }
      }

      // Show the banner after a delay
      setTimeout(() => {
        setShow(true);
      }, 5000); // Show after 5 seconds
    };

    checkPermission();
  }, []);

  const handleEnable = async () => {
    setLoading(true);
    try {
      await subscribeToPushNotifications({
        caseStudies: true,
        events: true,
        assessments: true,
        general: true
      });

      toast.success('Notifications enabled!', {
        description: 'You\'ll receive updates about new case studies, events, and more.'
      });

      setShow(false);
    } catch (error) {
      console.error('Failed to enable notifications:', error);
      toast.error('Failed to enable notifications', {
        description: 'Please check your browser settings and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem('notification-banner-dismissed', Date.now().toString());
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md animate-in slide-in-from-bottom-5">
      <Card className="p-4 shadow-lg border-2 border-primary/20">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Bell className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm mb-1">
              Stay Updated with Thalen Technologies
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Get notified about new case studies, upcoming events, and personalized assessment reminders.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleEnable}
                disabled={loading}
              >
                {loading ? 'Enabling...' : 'Enable Notifications'}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDismiss}
              >
                Not Now
              </Button>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </Card>
    </div>
  );
}
