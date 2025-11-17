import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import Comment from './Comment';

interface CommentSectionProps {
  articleSlug: string;
}

export default function CommentSection({ articleSlug }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch comments for this article
  const { data: comments = [], refetch } = trpc.comments.list.useQuery({ articleSlug });
  
  // Get current user
  const { data: user } = trpc.auth.me.useQuery();

  // Create comment mutation
  const createComment = trpc.comments.create.useMutation({
    onSuccess: () => {
      toast.success('Comment posted successfully!');
      setNewComment('');
      refetch();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to post comment');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      toast.error('Please enter a comment');
      return;
    }

    if (!user) {
      toast.error('Please sign in to comment');
      return;
    }

    setIsSubmitting(true);
    try {
      await createComment.mutateAsync({
        articleSlug,
        content: newComment.trim(),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Organize comments into threads (top-level and replies)
  const topLevelComments = comments.filter(c => !c.parentId);
  const getReplies = (parentId: number) => comments.filter(c => c.parentId === parentId);

  return (
    <div className="space-y-8">
      {/* Comment Form */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-accent" />
            Join the Discussion
          </h3>
          
          {user ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Textarea
                  placeholder="Share your thoughts..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                  maxLength={2000}
                  className="resize-none"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {newComment.length} / 2000 characters
                </p>
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting || !newComment.trim()}
                className="bg-orange-gradient"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Post Comment
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground mb-4">
                Sign in to join the discussion
              </p>
              <Button 
                onClick={() => window.location.href = '/api/auth/login'}
                className="bg-orange-gradient"
              >
                Sign In to Comment
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">
          {comments.length === 0 ? 'No comments yet' : `${comments.length} ${comments.length === 1 ? 'Comment' : 'Comments'}`}
        </h3>
        
        {topLevelComments.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Be the first to share your thoughts on this article!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {topLevelComments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                replies={getReplies(comment.id)}
                articleSlug={articleSlug}
                currentUser={user}
                onCommentPosted={refetch}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
