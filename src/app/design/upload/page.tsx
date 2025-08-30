'use client';

import { useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, FileImage, FileText, AlertTriangle, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface DesignFile {
  id?: string;
  name: string;
  file?: File;
  url?: string;
  type: string;
  size: number;
  resolution?: {
    width: number;
    height: number;
    dpi: number;
  };
  isValid: boolean;
  warnings: string[];
}

export default function DesignUploadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get product info from URL params or state
  const productId = searchParams.get('productId');
  const productName = searchParams.get('productName') || 'Custom Product';
  const quantity = parseInt(searchParams.get('quantity') || '1');
  
  const [uploadedFiles, setUploadedFiles] = useState<DesignFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewMode, setPreviewMode] = useState<'front' | 'back'>('front');
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 50 }); // Position as percentage
  const [designSize, setDesignSize] = useState(24); // Size in units (24 = default 96px)
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;
    
    setUploading(true);
    setUploadProgress(0);
    
    for (let i = 0; i < acceptedFiles.length; i++) {
      const file = acceptedFiles[i];
      const progress = ((i + 1) / acceptedFiles.length) * 100;
      setUploadProgress(progress);
      
      // Validate file
      const designFile = await validateDesignFile(file);
      
      // Create preview URL
      designFile.url = URL.createObjectURL(file);
      designFile.id = `file-${Date.now()}-${i}`;
      
      setUploadedFiles(prev => [...prev, designFile]);
    }
    
    setUploading(false);
    setUploadProgress(0);
  }, []);

  const validateDesignFile = async (file: File): Promise<DesignFile> => {
    const warnings: string[] = [];
    let isValid = true;
    
    // File size validation (max 50MB)
    if (file.size > 50 * 1024 * 1024) {
      warnings.push("File size exceeds 50MB limit");
      isValid = false;
    }
    
    // File type validation
    const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      warnings.push("File type not supported. Please use PNG, JPG, PDF, or SVG.");
      isValid = false;
    }
    
    // Resolution check for images
    let resolution;
    if (file.type.startsWith('image/')) {
      resolution = await getImageResolution(file);
      if (resolution && resolution.width < 300) {
        warnings.push("Image resolution is too low for quality printing (minimum 300 DPI recommended)");
      }
    }
    
    return {
      name: file.name,
      file,
      type: file.type.split('/')[1] || 'unknown',
      size: file.size,
      resolution,
      isValid,
      warnings,
    };
  };

  const getImageResolution = (file: File): Promise<{width: number; height: number; dpi: number}> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          dpi: 72 // Default web DPI, actual DPI would need EXIF data
        });
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf'],
      'image/svg+xml': ['.svg'],
    },
    maxFiles: 5,
  });

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Handle drag functionality for design positioning
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDragging(true);
    
    const previewContainer = e.currentTarget.parentElement?.parentElement;
    if (!previewContainer) return;
    
    // Get initial position from mouse or touch
    const startX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const startY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
    const startPosition = { ...designPosition };
    
    const handlePointerMove = (moveEvent: MouseEvent | TouchEvent) => {
      moveEvent.preventDefault();
      
      // Get current position from mouse or touch
      const currentX = 'clientX' in moveEvent ? moveEvent.clientX : (moveEvent as TouchEvent).touches[0].clientX;
      const currentY = 'clientY' in moveEvent ? moveEvent.clientY : (moveEvent as TouchEvent).touches[0].clientY;
      
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      
      const rect = previewContainer.getBoundingClientRect();
      
      // Convert pixel movement to percentage
      const deltaXPercent = (deltaX / rect.width) * 100;
      const deltaYPercent = (deltaY / rect.height) * 100;
      
      let newX = startPosition.x + deltaXPercent;
      let newY = startPosition.y + deltaYPercent;
      
      // Keep design within reasonable bounds
      newX = Math.max(10, Math.min(90, newX));
      newY = Math.max(10, Math.min(90, newY));
      
      setDesignPosition({ x: newX, y: newY });
    };
    
    const handlePointerUp = (upEvent: MouseEvent | TouchEvent) => {
      upEvent.preventDefault();
      setIsDragging(false);
      document.removeEventListener('mousemove', handlePointerMove as EventListener);
      document.removeEventListener('mouseup', handlePointerUp as EventListener);
      document.removeEventListener('touchmove', handlePointerMove as EventListener);
      document.removeEventListener('touchend', handlePointerUp as EventListener);
    };
    
    // Add both mouse and touch event listeners
    document.addEventListener('mousemove', handlePointerMove as EventListener);
    document.addEventListener('mouseup', handlePointerUp as EventListener);
    document.addEventListener('touchmove', handlePointerMove as EventListener);
    document.addEventListener('touchend', handlePointerUp as EventListener);
  };

  // Handle design resizing with mouse wheel
  const handleWheel = (e: React.WheelEvent) => {
    if (uploadedFiles.length === 0 || !uploadedFiles[0].url) return;
    
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -2 : 2;
    const newSize = Math.max(8, Math.min(60, designSize + delta));
    
    setDesignSize(newSize);
  };

  // Resize handles functionality
  const handleResizeStart = (e: React.MouseEvent | React.TouchEvent, direction: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    const startX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const startY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
    const startSize = designSize;
    
    setIsResizing(true);
    
    const handlePointerMove = (moveEvent: MouseEvent | TouchEvent) => {
      moveEvent.preventDefault();
      
      const currentX = 'clientX' in moveEvent ? moveEvent.clientX : (moveEvent as TouchEvent).touches[0].clientX;
      const currentY = 'clientY' in moveEvent ? moveEvent.clientY : (moveEvent as TouchEvent).touches[0].clientY;
      
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      
      let sizeDelta = 0;
      
      // Calculate size change based on direction
      switch (direction) {
        case 'se':
          sizeDelta = (deltaX + deltaY) * 0.08;
          break;
        case 'nw':
          sizeDelta = (-deltaX - deltaY) * 0.08;
          break;
        case 'ne':
          sizeDelta = (deltaX - deltaY) * 0.08;
          break;
        case 'sw':
          sizeDelta = (-deltaX + deltaY) * 0.08;
          break;
        case 'e':
          sizeDelta = deltaX * 0.12;
          break;
        case 'w':
          sizeDelta = -deltaX * 0.12;
          break;
        case 's':
          sizeDelta = deltaY * 0.12;
          break;
        case 'n':
          sizeDelta = -deltaY * 0.12;
          break;
      }
      
      const newSize = Math.max(8, Math.min(60, startSize + sizeDelta));
      setDesignSize(newSize);
    };
    
    const handlePointerUp = (upEvent: MouseEvent | TouchEvent) => {
      upEvent.preventDefault();
      setIsResizing(false);
      document.removeEventListener('mousemove', handlePointerMove as EventListener);
      document.removeEventListener('mouseup', handlePointerUp as EventListener);
      document.removeEventListener('touchmove', handlePointerMove as EventListener);
      document.removeEventListener('touchend', handlePointerUp as EventListener);
    };
    
    document.addEventListener('mousemove', handlePointerMove as EventListener);
    document.addEventListener('mouseup', handlePointerUp as EventListener);
    document.addEventListener('touchmove', handlePointerMove as EventListener);
    document.addEventListener('touchend', handlePointerUp as EventListener);
  };

  const increaseSize = () => {
    setDesignSize(prev => Math.min(60, prev + 4));
  };

  const decreaseSize = () => {
    setDesignSize(prev => Math.max(8, prev - 4));
  };

  const resetSize = () => {
    setDesignSize(24);
  };

  const proceedToCanvas = () => {
    if (uploadedFiles.length === 0) {
      alert('Please upload at least one design file to continue.');
      return;
    }
    
    // For now, just show success message
    alert('Design uploaded! Canvas designer will be available soon.');
  };

  // Mock product data
  const mockProduct = {
    name: productName,
    images: [
      { 
        url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
        angle: 'front'
      },
      { 
        url: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500',
        angle: 'back'
      }
    ]
  };

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Upload Your Design</h1>
          <p className="text-xl text-muted-foreground">
            Upload your design files and see how they'll look on your {mockProduct.name}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={mockProduct.images[0].url}
                    alt={mockProduct.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{mockProduct.name}</h3>
                    <p className="text-sm text-muted-foreground">Quantity: {quantity}</p>
                    <Badge variant="outline" className="mr-1 mt-1">
                      Size: M
                    </Badge>
                    <Badge variant="outline" className="mr-1 mt-1">
                      Color: Black
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upload Design Files</CardTitle>
                <CardDescription>
                  Drag and drop your files or click to browse. Accepted formats: PNG, JPG, PDF, SVG
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                    isDragActive
                      ? 'border-primary bg-primary/10'
                      : 'border-muted-foreground/25 hover:border-primary/50'
                  }`}
                >
                  <input {...getInputProps()} />
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  {isDragActive ? (
                    <p className="text-lg">Drop the files here ...</p>
                  ) : (
                    <div>
                      <p className="text-lg mb-2">Drag & drop files here, or click to select</p>
                      <p className="text-sm text-muted-foreground">
                        Maximum file size: 50MB. Up to 5 files.
                      </p>
                    </div>
                  )}
                </div>

                {uploading && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <Label>Uploading...</Label>
                      <span className="text-sm text-muted-foreground">{uploadProgress.toFixed(0)}%</span>
                    </div>
                    <Progress value={uploadProgress} />
                  </div>
                )}
              </CardContent>
            </Card>

            {uploadedFiles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Uploaded Files</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                      <div className="flex items-center space-x-3">
                        {file.type === 'pdf' ? (
                          <FileText className="h-8 w-8 text-red-500" />
                        ) : (
                          <FileImage className="h-8 w-8 text-green-500" />
                        )}
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {file.isValid ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeFile(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant={previewMode === 'front' ? 'default' : 'outline'}
                    onClick={() => setPreviewMode('front')}
                  >
                    Front
                  </Button>
                  <Button
                    size="sm"
                    variant={previewMode === 'back' ? 'default' : 'outline'}
                    onClick={() => setPreviewMode('back')}
                  >
                    Back
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden"
                  onWheel={handleWheel}
                >
                  {/* Product mockup */}
                  <img
                    src={mockProduct.images.find((img: any) => img.angle === previewMode)?.url || mockProduct.images[0].url}
                    alt={`${mockProduct.name} ${previewMode}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Design overlay with drag and resize functionality */}
                  {uploadedFiles.length > 0 && uploadedFiles[0].url && (
                    <div 
                      className="absolute group hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 rounded transition-all duration-200"
                      style={{
                        width: `${designSize * 4}px`,
                        height: `${designSize * 4}px`,
                        left: `${designPosition.x}%`,
                        top: `${designPosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        background: 'transparent',
                        opacity: isDragging ? 0.8 : 1,
                        minWidth: '32px',
                        minHeight: '32px',
                        maxWidth: '240px',
                        maxHeight: '240px',
                        border: '2px dashed rgba(59, 130, 246, 0.3)',
                        borderRadius: '4px',
                        zIndex: 2,
                        cursor: isDragging ? 'grabbing' : 'grab'
                      }}
                      onMouseDown={handlePointerDown}
                      onTouchStart={handlePointerDown}
                    >
                      <img
                        src={uploadedFiles[0].url}
                        alt="Design preview"
                        className="pointer-events-none select-none w-full h-full"
                        style={{ 
                          objectFit: 'contain',
                          background: 'transparent',
                          display: 'block'
                        }}
                        draggable={false}
                      />
                      
                      {/* Resize handles - only show on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                        {/* Corner handles */}
                        <div 
                          className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 border border-white rounded-full cursor-nw-resize shadow-md hover:bg-blue-600 transition-colors" 
                          onMouseDown={(e) => handleResizeStart(e, 'nw')}
                          onTouchStart={(e) => handleResizeStart(e, 'nw')}
                        />
                        <div 
                          className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 border border-white rounded-full cursor-ne-resize shadow-md hover:bg-blue-600 transition-colors" 
                          onMouseDown={(e) => handleResizeStart(e, 'ne')}
                          onTouchStart={(e) => handleResizeStart(e, 'ne')}
                        />
                        <div 
                          className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 border border-white rounded-full cursor-sw-resize shadow-md hover:bg-blue-600 transition-colors" 
                          onMouseDown={(e) => handleResizeStart(e, 'sw')}
                          onTouchStart={(e) => handleResizeStart(e, 'sw')}
                        />
                        <div 
                          className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-500 border border-white rounded-full cursor-se-resize shadow-md hover:bg-blue-600 transition-colors" 
                          onMouseDown={(e) => handleResizeStart(e, 'se')}
                          onTouchStart={(e) => handleResizeStart(e, 'se')}
                        />
                        
                        {/* Center drag handle for moving */}
                        <div 
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 border-2 border-white rounded-full cursor-move shadow-md hover:bg-green-600 transition-colors flex items-center justify-center"
                          onMouseDown={handlePointerDown}
                          onTouchStart={handlePointerDown}
                        >
                          <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                      
                      {/* Size indicator */}
                      <div className="absolute -top-8 left-0 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {Math.round((designSize / 24) * 100)}%
                      </div>
                    </div>
                  )}
                  
                  {uploadedFiles.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Upload a design to see preview</p>
                    </div>
                  )}
                </div>
                
                {/* Size Controls */}
                {uploadedFiles.length > 0 && uploadedFiles[0].url && (
                  <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <Label className="text-sm font-medium">Design Size</Label>
                      <span className="text-xs text-muted-foreground">
                        {Math.round((designSize / 24) * 100)}% • {designSize * 4}px
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={decreaseSize}
                        disabled={designSize <= 8}
                        className="px-2"
                      >
                        -
                      </Button>
                      <div className="flex-1 mx-2">
                        <Input
                          type="range"
                          min="8"
                          max="60"
                          value={designSize}
                          onChange={(e) => setDesignSize(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={increaseSize}
                        disabled={designSize >= 60}
                        className="px-2"
                      >
                        +
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={resetSize}
                        className="px-2 ml-2"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {uploadedFiles.some(file => file.warnings.length > 0) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <span>Design Warnings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      file.warnings.length > 0 && (
                        <Alert key={index}>
                          <AlertDescription>
                            <strong>{file.name}:</strong>
                            <ul className="mt-1 ml-4 list-disc">
                              {file.warnings.map((warning, wIndex) => (
                                <li key={wIndex}>{warning}</li>
                              ))}
                            </ul>
                          </AlertDescription>
                        </Alert>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => router.back()}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
              <div className="space-x-2">
                <Button variant="outline" asChild>
                  <a href="/design/canvas">
                    Canvas Designer
                  </a>
                </Button>
                <Button onClick={proceedToCanvas} disabled={uploadedFiles.length === 0}>
                  Continue to Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
