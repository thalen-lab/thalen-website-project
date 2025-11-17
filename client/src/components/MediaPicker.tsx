import { useState, useRef, useCallback } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Image as ImageIcon, X, Check, Search } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface MediaPickerProps {
  value?: string;
  onChange: (url: string) => void;
  label?: string;
  accept?: string;
}

export function MediaPicker({ value, onChange, label = "Featured Image", accept = "image/*" }: MediaPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMediaId, setSelectedMediaId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: mediaList = [], refetch } = trpc.admin.media.list.useQuery(
    { search: searchQuery || undefined },
    { enabled: isOpen }
  );

  const uploadMutation = trpc.admin.media.upload.useMutation({
    onSuccess: (data) => {
      toast.success('Image uploaded successfully');
      refetch();
      onChange(data.url);
      setIsOpen(false);
    },
    onError: (error) => {
      toast.error(`Upload failed: ${error.message}`);
    },
  });

  const handleFileSelect = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast.error('File size must be less than 10MB');
      return;
    }

    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Data = e.target?.result as string;
        await uploadMutation.mutateAsync({
          filename: file.name,
          base64Data,
          mimeType: file.type,
        });
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      setIsUploading(false);
    }
  }, [uploadMutation]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleSelectMedia = (media: any) => {
    setSelectedMediaId(media.id);
  };

  const handleConfirmSelection = () => {
    const selected = mediaList.find(m => m.id === selectedMediaId);
    if (selected) {
      onChange(selected.url);
      setIsOpen(false);
      toast.success('Image selected');
    }
  };

  const handleRemoveImage = () => {
    onChange('');
    toast.success('Image removed');
  };

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      
      {value ? (
        <div className="relative group">
          <img 
            src={value} 
            alt="Selected" 
            className="w-full h-48 object-cover rounded-lg border"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setIsOpen(true)}
            >
              Change
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleRemoveImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="w-full h-48 border-dashed"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="h-8 w-8 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Select or Upload Image</span>
          </div>
        </Button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Media Library</DialogTitle>
            <DialogDescription>
              Upload a new image or select from your media library
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="library" className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="library">Media Library</TabsTrigger>
              <TabsTrigger value="upload">Upload New</TabsTrigger>
            </TabsList>

            <TabsContent value="library" className="flex-1 flex flex-col overflow-hidden mt-4">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search images..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {mediaList.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <ImageIcon className="h-12 w-12 mb-2" />
                    <p>No images found</p>
                    <p className="text-sm">Upload your first image to get started</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    {mediaList.map((media) => (
                      <div
                        key={media.id}
                        className={cn(
                          "relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all",
                          selectedMediaId === media.id
                            ? "border-orange-500 ring-2 ring-orange-200"
                            : "border-transparent hover:border-gray-300"
                        )}
                        onClick={() => handleSelectMedia(media)}
                      >
                        <img
                          src={media.thumbnailUrl || media.url}
                          alt={media.altText || media.filename}
                          className="w-full h-32 object-cover"
                          loading="lazy"
                        />
                        {selectedMediaId === media.id && (
                          <div className="absolute top-2 right-2 bg-orange-500 text-white rounded-full p-1">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                          <p className="text-white text-xs truncate">{media.filename}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <DialogFooter className="mt-4">
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleConfirmSelection}
                  disabled={!selectedMediaId}
                  className="bg-orange-gradient hover:opacity-90"
                >
                  Select Image
                </Button>
              </DialogFooter>
            </TabsContent>

            <TabsContent value="upload" className="flex-1 flex flex-col mt-4">
              <div
                className={cn(
                  "flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-8 transition-colors",
                  isDragging ? "border-orange-500 bg-orange-50" : "border-gray-300"
                )}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {isUploading ? "Uploading..." : "Drag and drop your image here"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  or click the button below to browse
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={accept}
                  onChange={handleFileInputChange}
                  className="hidden"
                />
                <Button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="bg-orange-gradient hover:opacity-90"
                >
                  {isUploading ? "Uploading..." : "Browse Files"}
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Maximum file size: 10MB
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
