import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Reply, Trash2, Send, Loader2 } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import type { Comment as CommentType } from '../../../drizzle/schema';

interface CommentProps {
  comment: CommentType;
  replies: CommentType[];
  articleSlug: string;
  currentUser: any;
  onCommentPosted: () => void;
  isReply?: boolean;
}

export default function Comment({ 
  comment, 
  replies, 
  articleSlug, 
  currentUser, 
  onCommentPosted,
  isReply = false 
}: CommentProps) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create reply mutation
  const createReply = trpc.comments.create.useMutation({
    onSuccess: () => {
      toast.success('Reply posted successfully!');
      setReplyContent('');
      setShowReplyForm(false);
      onCommentPosted();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to post reply');
    },
  });

  // Delete comment mutation
  const deleteComment = trpc.comments.delete.useMutation({
    onSuccess: () => {
      toast.success('Comment deleted successfully');
      onCommentPosted();
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete comment');
    },
  });

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyContent.trim()) {
      toast.error('Please enter a reply');
      return;
    }

    if (!currentUser) {
      toast.error('Please sign in to reply');
      return;
    }

    setIsSubmitting(true);
    try {
      await createReply.mutateAsync({
        articleSlug,
        content: replyContent.trim(),
        parentId: comment.id,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this comment?')) {
      return;
    }

    await deleteComment.mutateAsync({ commentId: comment.id });
  };

  const canDelete = currentUser && (
    currentUser.id === comment.userId || 
    currentUser.role === 'admin'
  );

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={isReply ? 'ml-8 md:ml-12' : ''}>
      <Card className={isReply ? 'border-l-4 border-l-accent/30' : ''}>
        <CardContent className="p-6">
          {/* Comment Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent font-semibold">
                  {comment.userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold">{comment.userName}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(comment.createdAt)}
                </p>
              </div>
            </div>
            
            {canDelete && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDelete}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Comment Content */}
          <p className="text-muted-foreground whitespace-pre-wrap mb-4">
            {comment.content}
          </p>

          {/* Actions */}
          {!isReply && currentUser && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="gap-2"
            >
              <Reply className="h-4 w-4" />
              Reply
            </Button>
          )}

          {/* Reply Form */}
          {showReplyForm && (
            <form onSubmit={handleReply} className="mt-4 space-y-3">
              <Textarea
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                rows={3}
                maxLength={2000}
                className="resize-none"
              />
              <div className="flex gap-2">
                <Button 
                  type="submit" 
                  size="sm"
                  disabled={isSubmitting || !replyContent.trim()}
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
                      Post Reply
                    </>
                  )}
                </Button>
                <Button 
                  type="button" 
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setShowReplyForm(false);
                    setReplyContent('');
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Nested Replies */}
      {replies.length > 0 && (
        <div className="mt-4 space-y-4">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              replies={[]}
              articleSlug={articleSlug}
              currentUser={currentUser}
              onCommentPosted={onCommentPosted}
              isReply={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}
