import { useState, useEffect } from 'react';
import { Bell, Check } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import {
  isPushSupported,
  isSubscribed,
  subscribeToPushNotifications,
  unsubscribeFromPushNotifications,
  updateNotificationPreferences,
  getCurrentSubscription,
  type NotificationPreferences
} from '@/lib/push-notifications';
import { toast } from 'sonner';

/**
 * Notification preferences dialog
 * Allows users to manage their push notification settings
 */
export function NotificationPreferences() {
  const [open, setOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    caseStudies: true,
    events: true,
    assessments: true,
    general: true
  });

  useEffect(() => {
    if (open) {
      checkSubscriptionStatus();
    }
  }, [open]);

  const checkSubscriptionStatus = async () => {
    if (!isPushSupported()) {
      return;
    }

    const status = await isSubscribed();
    setSubscribed(status);

    if (status) {
      // Get current subscription to fetch preferences
      const subscription = await getCurrentSubscription();
      if (subscription) {
        // TODO: Fetch preferences from server using subscription endpoint
        // For now, use default preferences
      }
    }
  };

  const handleToggleSubscription = async () => {
    setLoading(true);
    try {
      if (subscribed) {
        // Unsubscribe
        await unsubscribeFromPushNotifications();
        setSubscribed(false);
        toast.success('Notifications disabled', {
          description: 'You will no longer receive push notifications.'
        });
      } else {
        // Subscribe
        await subscribeToPushNotifications(preferences);
        setSubscribed(true);
        toast.success('Notifications enabled!', {
          description: 'You will receive updates based on your preferences.'
        });
      }
    } catch (error) {
      console.error('Failed to toggle subscription:', error);
      toast.error('Failed to update notification settings', {
        description: 'Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePreferences = async () => {
    if (!subscribed) {
      // If not subscribed, just update local state
      return;
    }

    setLoading(true);
    try {
      await updateNotificationPreferences(preferences);
      toast.success('Preferences updated', {
        description: 'Your notification preferences have been saved.'
      });
    } catch (error) {
      console.error('Failed to update preferences:', error);
      toast.error('Failed to update preferences', {
        description: 'Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePreferenceChange = (key: keyof NotificationPreferences, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (!isPushSupported()) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Bell className="h-4 w-4 mr-2" />
          Notifications
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notification Preferences</DialogTitle>
          <DialogDescription>
            Manage your push notification settings and preferences.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-2 sm:space-y-3 md:space-y-4 py-4">
          {/* Master toggle */}
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">
                {subscribed ? 'Enabled' : 'Disabled'}
              </p>
            </div>
            <Switch
              checked={subscribed}
              onCheckedChange={handleToggleSubscription}
              disabled={loading}
            />
          </div>

          {/* Preference toggles */}
          {subscribed && (
            <>
              <div className="border-t pt-4 space-y-2 sm:space-y-3 md:space-y-4">
                <p className="text-sm font-medium">Notification Categories</p>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="case-studies">Case Studies</Label>
                    <p className="text-sm text-muted-foreground">
                      New case studies and success stories
                    </p>
                  </div>
                  <Switch
                    id="case-studies"
                    checked={preferences.caseStudies}
                    onCheckedChange={(checked) => handlePreferenceChange('caseStudies', checked)}
                    disabled={loading}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="events">Events</Label>
                    <p className="text-sm text-muted-foreground">
                      Upcoming webinars and conferences
                    </p>
                  </div>
                  <Switch
                    id="events"
                    checked={preferences.events}
                    onCheckedChange={(checked) => handlePreferenceChange('events', checked)}
                    disabled={loading}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="assessments">Assessment Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Personalized assessment reminders
                    </p>
                  </div>
                  <Switch
                    id="assessments"
                    checked={preferences.assessments}
                    onCheckedChange={(checked) => handlePreferenceChange('assessments', checked)}
                    disabled={loading}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="general">General Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Company news and announcements
                    </p>
                  </div>
                  <Switch
                    id="general"
                    checked={preferences.general}
                    onCheckedChange={(checked) => handlePreferenceChange('general', checked)}
                    disabled={loading}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <DialogFooter>
          {subscribed && (
            <Button onClick={handleUpdatePreferences} disabled={loading}>
              <Check className="h-4 w-4 mr-2" />
              {loading ? 'Saving...' : 'Save Preferences'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
