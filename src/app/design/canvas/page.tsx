'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { PageLayout } from '@/components/page-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { 
  Type, 
  Circle as CircleIcon, 
  Square, 
  Upload, 
  Download, 
  RotateCcw, 
  ArrowRight, 
  Palette,
  Move,
  Trash2,
  Box
} from 'lucide-react';

// Fabric.js types - we'll handle the dynamic import to avoid SSR issues
let Canvas: any;
let Textbox: any; 
let Circle: any;
let Rect: any;
let FabricImage: any;

export default function CanvasDesignerPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const productId = searchParams.get('productId');
  const productName = searchParams.get('productName') || 'Custom Product';
  const quantity = parseInt(searchParams.get('quantity') || '1');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<any>(null);
  const [activeTool, setActiveTool] = useState<"select" | "text" | "circle" | "rectangle" | "upload" | "boundary">("select");
  const [activeColor, setActiveColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(24);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [previewMode, setPreviewMode] = useState<'front' | 'back'>('front');
  const [boundarySquare, setBoundarySquare] = useState<any>(null);
  const [previewDataUrl, setPreviewDataUrl] = useState<string>('');
  const [designScale, setDesignScale] = useState(0.3);
  const [isDragging, setIsDragging] = useState(false);
  const [fabricLoaded, setFabricLoaded] = useState(false);

  // Dynamically import Fabric.js to avoid SSR issues
  useEffect(() => {
    const loadFabric = async () => {
      try {
        const fabric = await import('fabric');
        Canvas = fabric.Canvas;
        Textbox = fabric.Textbox;
        Circle = fabric.Circle;
        Rect = fabric.Rect;
        FabricImage = fabric.FabricImage;
        setFabricLoaded(true);
      } catch (error) {
        console.error('Failed to load Fabric.js:', error);
      }
    };
    
    loadFabric();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !fabricLoaded || !Canvas) return;

    // Clear any existing canvas
    if (fabricCanvas) {
      fabricCanvas.dispose();
    }

    const canvas = new Canvas(canvasRef.current, {
      width: 400,
      height: 500,
    });

    // Make canvas transparent
    canvas.backgroundColor = '';
    canvas.renderOnAddRemove = true;
    
    if (canvasRef.current) {
      canvasRef.current.style.backgroundColor = 'transparent';
      canvasRef.current.style.background = 'none';
    }

    // Event setup
    canvas.on('selection:created', () => {
      setActiveTool("select");
    });
    
    canvas.on('object:moving', () => {
      updatePreview();
    });
    
    canvas.on('object:modified', updatePreview);
    canvas.on('object:added', updatePreview);
    canvas.on('object:removed', updatePreview);

    setFabricCanvas(canvas);
    
    // Add test text
    if (Textbox) {
      const testText = new Textbox("Click to edit text", {
        left: 50,
        top: 50,
        fontFamily: "Arial",
        fontSize: 16,
        fill: "#000000",
        width: 300,
        selectable: true,
        evented: true,
        hasControls: true,
        hasBorders: true,
      });
      canvas.add(testText);
      canvas.renderAll();
    }

    return () => {
      canvas.dispose();
    };
  }, [fabricLoaded]);

  // Update preview function
  const updatePreview = () => {
    if (!fabricCanvas) return;
    
    try {
      const dataURL = fabricCanvas.toDataURL({
        format: 'png',
        quality: 0.8,
        multiplier: 1,
        withoutTransform: false,
      });
      setPreviewDataUrl(dataURL);
    } catch (error) {
      console.error('Error updating preview:', error);
    }
  };

  const handleToolClick = (tool: typeof activeTool) => {
    setActiveTool(tool);

    if (!fabricCanvas || !fabricLoaded) return;

    // Clear selection when switching tools
    fabricCanvas.discardActiveObject();
    fabricCanvas.renderAll();

    switch (tool) {
      case "text":
        if (Textbox) {
          const text = new Textbox("Your Text Here", {
            left: 50,
            top: 50,
            fontFamily: fontFamily,
            fontSize: fontSize,
            fill: activeColor,
            width: 200,
            editable: true,
          });
          fabricCanvas.add(text);
          fabricCanvas.setActiveObject(text);
        }
        break;

      case "rectangle":
        if (Rect) {
          const rect = new Rect({
            left: 50,
            top: 50,
            fill: activeColor,
            width: 100,
            height: 100,
          });
          fabricCanvas.add(rect);
          fabricCanvas.setActiveObject(rect);
        }
        break;

      case "circle":
        if (Circle) {
          const circle = new Circle({
            left: 50,
            top: 50,
            fill: activeColor,
            radius: 50,
          });
          fabricCanvas.add(circle);
          fabricCanvas.setActiveObject(circle);
        }
        break;

      case "boundary":
        // Remove existing boundary if any
        if (boundarySquare) {
          fabricCanvas.remove(boundarySquare);
        }
        
        if (Rect) {
          // Create new boundary square in the center
          const boundary = new Rect({
            left: 150,
            top: 200,
            fill: "transparent",
            stroke: "#ff0000",
            strokeWidth: 2,
            strokeDashArray: [5, 5],
            width: 100,
            height: 100,
            selectable: true,
            hasControls: true,
            hasBorders: true,
          });
          
          fabricCanvas.add(boundary);
          fabricCanvas.setActiveObject(boundary);
          setBoundarySquare(boundary);
        }
        break;
    }

    fabricCanvas.renderAll();
  };

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    
    if (!fabricCanvas) return;
    
    const activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      activeObject.set('fill', color);
      fabricCanvas.renderAll();
    }
  };

  const handleFontSizeChange = (size: number[]) => {
    const newSize = size[0];
    setFontSize(newSize);
    
    if (!fabricCanvas) return;
    
    const activeObject = fabricCanvas.getActiveObject();
    if (activeObject && activeObject.type === 'textbox') {
      activeObject.set('fontSize', newSize);
      fabricCanvas.renderAll();
    }
  };

  const handleFontFamilyChange = (family: string) => {
    setFontFamily(family);
    
    if (!fabricCanvas) return;
    
    const activeObject = fabricCanvas.getActiveObject();
    if (activeObject && activeObject.type === 'textbox') {
      activeObject.set('fontFamily', family);
      fabricCanvas.renderAll();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !fabricCanvas || !FabricImage) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imgElement = new Image();
      imgElement.onload = () => {
        const fabricImg = new FabricImage(imgElement, {
          left: 100,
          top: 100,
          scaleX: 0.4,
          scaleY: 0.4,
          selectable: true,
          evented: true,
          hasControls: true,
          hasBorders: true,
        });
        
        fabricCanvas.add(fabricImg);
        fabricCanvas.setActiveObject(fabricImg);
        fabricCanvas.renderAll();
      };
      imgElement.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
    
    // Reset file input
    event.target.value = '';
  };

  const deleteActiveObject = () => {
    if (!fabricCanvas) return;
    
    const activeObject = fabricCanvas.getActiveObject();
    if (activeObject) {
      fabricCanvas.remove(activeObject);
      fabricCanvas.renderAll();
    }
  };

  const clearCanvas = () => {
    if (!fabricCanvas) return;
    
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = '';
    setBoundarySquare(null);
    fabricCanvas.renderAll();
  };

  const exportDesign = () => {
    if (!fabricCanvas) return;
    
    const dataURL = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    
    // Create download link
    const link = document.createElement('a');
    link.download = `design-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
  };

  const proceedToReview = () => {
    if (!fabricCanvas) return;
    
    alert('Design completed! Review functionality will be implemented.');
  };

  const colors = [
    "#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff",
    "#ffff00", "#ff00ff", "#00ffff", "#ffa500", "#800080",
    "#008000", "#ffc0cb", "#a52a2a", "#808080", "#000080"
  ];

  const fonts = [
    "Arial", "Helvetica", "Times New Roman", "Georgia", "Verdana",
    "Trebuchet MS", "Comic Sans MS", "Impact", "Lucida Console"
  ];

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

  if (!fabricLoaded) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p>Loading design tools...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Design Tool</h1>
          <p className="text-xl text-muted-foreground">
            Create your custom design for {mockProduct.name}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tools Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={activeTool === "select" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleToolClick("select")}
                >
                  <Move className="mr-2 h-4 w-4" />
                  Select
                </Button>
                <Button
                  variant={activeTool === "text" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleToolClick("text")}
                >
                  <Type className="mr-2 h-4 w-4" />
                  Text
                </Button>
                <Button
                  variant={activeTool === "rectangle" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleToolClick("rectangle")}
                >
                  <Square className="mr-2 h-4 w-4" />
                  Rectangle
                </Button>
                <Button
                  variant={activeTool === "circle" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleToolClick("circle")}
                >
                  <CircleIcon className="mr-2 h-4 w-4" />
                  Circle
                </Button>
                <Button
                  variant={activeTool === "boundary" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleToolClick("boundary")}
                >
                  <Box className="mr-2 h-4 w-4" />
                  Print Area
                </Button>
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Label htmlFor="image-upload">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <span>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Logo
                      </span>
                    </Button>
                  </Label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Properties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Color</Label>
                  <div className="grid grid-cols-5 gap-2 mt-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded border-2 ${
                          activeColor === color ? 'border-primary' : 'border-muted'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorChange(color)}
                      />
                    ))}
                  </div>
                  <Input
                    type="color"
                    value={activeColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Font Family</Label>
                  <Select value={fontFamily} onValueChange={handleFontFamilyChange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fonts.map((font) => (
                        <SelectItem key={font} value={font}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Font Size: {fontSize}px</Label>
                  <Slider
                    value={[fontSize]}
                    onValueChange={handleFontSizeChange}
                    min={12}
                    max={72}
                    step={2}
                    className="mt-2"
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    className="w-full"
                    onClick={deleteActiveObject}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Selected
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={clearCanvas}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Clear All
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={exportDesign}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export PNG
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Design Canvas</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Design area: 400x500px (recommended print area)
                </p>
              </CardHeader>
              <CardContent>
                <div className="border border-muted rounded-lg overflow-hidden flex justify-center p-4" style={{background: 'transparent'}}>
                  <canvas
                    ref={canvasRef}
                    className="border border-muted-foreground/20 shadow-lg"
                    style={{background: 'transparent', backgroundColor: 'transparent'}}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Preview</CardTitle>
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
                  onWheel={(e) => {
                    e.preventDefault();
                    const delta = e.deltaY > 0 ? -0.05 : 0.05;
                    const newScale = Math.max(0.1, Math.min(1.5, designScale + delta));
                    setDesignScale(newScale);
                  }}
                >
                  {/* Product mockup */}
                  <img
                    src={mockProduct.images.find((img: any) => img.angle === previewMode)?.url || mockProduct.images[0].url}
                    alt={`${mockProduct.name} ${previewMode}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dynamic design overlay */}
                  {previewDataUrl && (
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <div 
                        className="relative group hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 rounded"
                        style={{
                          transform: `scale(${designScale})`,
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        <img
                          src={previewDataUrl}
                          alt="Design preview"
                          className="max-w-full max-h-full object-contain"
                          style={{
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                          }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {/* Placeholder when no design */}
                  {!previewDataUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/70">
                        <Palette className="h-12 w-12 mx-auto mb-2" />
                        <p className="text-sm">Your design will appear here</p>
                        <p className="text-xs opacity-70">Scroll to resize preview</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Preview Controls */}
                {previewDataUrl && (
                  <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Label className="text-sm font-medium">Preview Size</Label>
                      <span className="text-xs text-muted-foreground">
                        {Math.round(designScale * 100)}%
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setDesignScale(Math.max(0.1, designScale - 0.1))}
                        disabled={designScale <= 0.1}
                        className="px-2"
                      >
                        -
                      </Button>
                      <Slider
                        value={[designScale]}
                        onValueChange={(value) => setDesignScale(value[0])}
                        min={0.1}
                        max={1.5}
                        step={0.05}
                        className="flex-1"
                      />
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setDesignScale(Math.min(1.5, designScale + 0.1))}
                        disabled={designScale >= 1.5}
                        className="px-2"
                      >
                        +
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setDesignScale(0.3)}
                        className="px-2 ml-2"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-2">
              <Button variant="outline" className="w-full" onClick={() => router.push('/products')}>
                Back to Products
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="/design/upload">
                  Upload Designer
                </a>
              </Button>
              <Button className="w-full" onClick={proceedToReview}>
                Continue to Review
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
