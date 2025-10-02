'use client';

import { useState, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, FileImage, FileText, AlertTriangle, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { getProductById } from '@/data/products';
import { bulkProducts } from '@/data/bulk-products';

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


function DesignUploadContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Get product info from URL params
  const productId = searchParams.get('productId') || 'unisex-jersey-tshirt';
  const quantity = parseInt(searchParams.get('quantity') || '1');
  const selectedSize = searchParams.get('size') || 'M';
  const selectedColor = searchParams.get('color') || 'Vit';
  
  // Get product data from bulk products first, then fallback to regular products
  const bulkProduct = bulkProducts.find(p => p.id === productId);
  const regularProduct = getProductById(productId);
  
  const product = bulkProduct || regularProduct || {
    id: 'unisex-jersey-tshirt',
    name: 'Unisex Jersey T-shirt',
    shortDescription: 'Klassisk bomulls-t-shirt för alla tillfällen',
    price: { base: 199, currency: 'SEK' },
    images: { main: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500' },
    category: 'Kläder',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Vit', 'Svart', 'Navy', 'Grå', 'Röd', 'Blå']
  };
  
  const [uploadedFiles, setUploadedFiles] = useState<DesignFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewMode, setPreviewMode] = useState<'front' | 'back'>('front');
  const [selectedPrintArea, setSelectedPrintArea] = useState<'right-chest' | 'left-chest' | 'back'>('right-chest');
  const [designSize, setDesignSize] = useState(24); // Size in units (24 = default 96px)
  const [designPosition, setDesignPosition] = useState({ x: 50, y: 50 }); // Position within print area (percentage)
  const [isDragging, setIsDragging] = useState(false);

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




  const proceedToCanvas = () => {
    if (uploadedFiles.length === 0) {
      alert('Please upload at least one design file to continue.');
      return;
    }
    
    // For now, just show success message
    alert('Design uploaded! Canvas designer will be available soon.');
  };

  // Product images for front/back view
  const productImages = {
    front: product.images.main,
    back: (product.images as any).gallery?.[1] || product.images.main // Use second gallery image for back, fallback to main
  };

  // Print area definitions (position and size as percentages)
  const printAreas = {
    'right-chest': { x: 60, y: 30, width: 30, height: 20, label: 'Höger bröst' },
    'left-chest': { x: 40, y: 30, width: 30, height: 20, label: 'Vänster bröst' },
    'back': { x: 50, y: 50, width: 55, height: 45, label: 'Rygg' }
  };

  // Size controls
  const increaseSize = () => {
    setDesignSize(prev => Math.min(60, prev + 4));
  };

  const decreaseSize = () => {
    setDesignSize(prev => Math.max(8, prev - 4));
  };

  const resetSize = () => {
    setDesignSize(24);
  };

  // Drag functionality within print area
  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDragging(true);
    
    const startX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
    const startY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
    const startPosition = { ...designPosition };
    
    // Get the print area container from the current target
    const printAreaContainer = (e.currentTarget as HTMLElement).closest('[data-print-area]');
    if (!printAreaContainer) return;
    
    const handlePointerMove = (moveEvent: MouseEvent | TouchEvent) => {
      moveEvent.preventDefault();
      
      const currentX = 'clientX' in moveEvent ? moveEvent.clientX : (moveEvent as TouchEvent).touches[0].clientX;
      const currentY = 'clientY' in moveEvent ? moveEvent.clientY : (moveEvent as TouchEvent).touches[0].clientY;
      
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      
      const rect = printAreaContainer.getBoundingClientRect();
      
      // Convert pixel movement to percentage within the print area
      const deltaXPercent = (deltaX / rect.width) * 100;
      const deltaYPercent = (deltaY / rect.height) * 100;
      
      let newX = startPosition.x + deltaXPercent;
      let newY = startPosition.y + deltaYPercent;
      
      // Keep design within the print area bounds
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
    
    document.addEventListener('mousemove', handlePointerMove as EventListener);
    document.addEventListener('mouseup', handlePointerUp as EventListener);
    document.addEventListener('touchmove', handlePointerMove as EventListener);
    document.addEventListener('touchend', handlePointerUp as EventListener);
  };

  // Update design position when print area changes
  const handlePrintAreaChange = (area: 'right-chest' | 'left-chest' | 'back') => {
    setSelectedPrintArea(area);
    
    // Auto-switch preview mode based on print area
    if (area === 'back') {
      setPreviewMode('back');
    } else {
      setPreviewMode('front');
    }
  };

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Ladda upp din design</h1>
          <p className="text-xl text-muted-foreground">
            Ladda upp dina designfiler och se hur de kommer att se ut på din {product.name}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Produktdetaljer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={product.images.main}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">Quantity: {quantity}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline">
                        Size: {selectedSize}
                      </Badge>
                      <Badge variant="outline">
                        Color: {selectedColor}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {product.price.base} {product.price.currency}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ladda upp designfiler</CardTitle>
                <CardDescription>
                  Dra och släpp dina filer eller klicka för att bläddra. Godkända format: PNG, JPG, PDF, SVG
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
                    <p className="text-lg">Släpp filerna här ...</p>
                  ) : (
                    <div>
                      <p className="text-lg mb-2">Dra och släpp filer här, eller klicka för att välja</p>
                      <p className="text-sm text-muted-foreground">
                        Maximal filstorlek: 50MB. Upp till 5 filer.
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
            {/* Print Area Selection */}
            {uploadedFiles.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Choose Print Area</CardTitle>
                  <CardDescription>
                    Select where you want to place your design on the t-shirt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      onClick={() => handlePrintAreaChange('right-chest')}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        selectedPrintArea === 'right-chest'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">👔</div>
                      <div className="font-medium">Höger bröst</div>
                      <div className="text-sm text-muted-foreground">Standard logoplacering</div>
                    </button>
                    
                    <button
                      onClick={() => handlePrintAreaChange('left-chest')}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        selectedPrintArea === 'left-chest'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">👔</div>
                      <div className="font-medium">Vänster bröst</div>
                      <div className="text-sm text-muted-foreground">Alternativ logoplacering</div>
                    </button>
                    
                    <button
                      onClick={() => handlePrintAreaChange('back')}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        selectedPrintArea === 'back'
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">🎨</div>
                      <div className="font-medium">Rygg</div>
                      <div className="text-sm text-muted-foreground">Stor designyta</div>
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Live-förhandsvisning</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant={previewMode === 'front' ? 'default' : 'outline'}
                    onClick={() => setPreviewMode('front')}
                  >
                    Fram
                  </Button>
                  <Button
                    size="sm"
                    variant={previewMode === 'back' ? 'default' : 'outline'}
                    onClick={() => setPreviewMode('back')}
                  >
                    Bak
                  </Button>
                  {uploadedFiles.length > 0 && (
                    <div className="ml-4 flex items-center text-sm text-muted-foreground">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                        {printAreas[selectedPrintArea].label}
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center relative overflow-hidden"
                >
                  {/* Product mockup */}
                  <img
                    src={productImages[previewMode]}
                    alt={`${product.name} ${previewMode}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Print Area Boundary (fixed size, shows where design can go) */}
                  {uploadedFiles.length > 0 && uploadedFiles[0].url && (
                    <div
                      data-print-area
                      className="absolute border-2 border-dashed border-blue-400/50 rounded-md overflow-hidden"
                      style={{
                        width: `${printAreas[selectedPrintArea].width}%`,
                        height: `${printAreas[selectedPrintArea].height}%`,
                        left: `${printAreas[selectedPrintArea].x}%`,
                        top: `${printAreas[selectedPrintArea].y}%`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        background: 'rgba(59, 130, 246, 0.05)'
                      }}
                    >
                      {/* The actual design, which is draggable within this print area */}
                      <div
                        className="absolute group hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 rounded transition-all duration-200 cursor-grab"
                        style={{
                          width: `${Math.max(designSize * 4, 80)}px`,
                          height: `${Math.max(designSize * 4, 80)}px`,
                          left: `${designPosition.x}%`,
                          top: `${designPosition.y}%`,
                          transform: 'translate(-50%, -50%)',
                          background: 'transparent',
                          opacity: isDragging ? 0.8 : 1,
                          border: '2px dashed rgba(59, 130, 246, 0.8)',
                          borderRadius: '4px',
                          zIndex: 2,
                          minWidth: '80px',
                          minHeight: '80px',
                          maxWidth: '300px',
                          maxHeight: '300px',
                          pointerEvents: 'auto' // Ensure this element can receive pointer events
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
                      </div>
                      {/* Print area label */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {printAreas[selectedPrintArea].label}
                      </div>
                    </div>
                  )}
                  
                  {uploadedFiles.length === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-muted-foreground">Ladda upp en design för att se förhandsvisning</p>
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
                        <input
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
                    <div className="mt-2 text-xs text-muted-foreground">
                      {selectedPrintArea === 'back' 
                        ? 'Large design area perfect for detailed graphics and text'
                        : 'Standard logo placement area, ideal for company logos and small designs'
                      }
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
                Tillbaka till produkter
              </Button>
              <div className="space-x-2">
                <Button variant="outline" asChild>
                  <a href="/design/canvas">
                    Canvas-designer
                  </a>
                </Button>
                <Button onClick={proceedToCanvas} disabled={uploadedFiles.length === 0}>
                  Fortsätt till granskning
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

export default function DesignUploadPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DesignUploadContent />
    </Suspense>
  );
}
