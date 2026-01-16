
import React, { useState, useRef } from 'react';
import { Search, Download, Share2, Facebook, Linkedin, Twitter, MessageCircle, Instagram, CheckCircle2, Sparkles, Lock, Heart as HeartIcon, Cloud as CloudIcon } from 'lucide-react';

type ShapeType = 'cloud' | 'heart' | 'circle' | 'rect';

interface Thought {
  id: number;
  text: string;
  editable: boolean;
  shape: ShapeType;
  position: { top: string; left: string };
  color: string;
  textColor: string;
}

export const MyPhoto: React.FC = () => {
  const [imgId, setImgId] = useState('');
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Adjusted thoughts to match the user's provided screenshot colors and shapes
  const [thoughts, setThoughts] = useState<Thought[]>([
    { id: 1, text: 'Great Place To Work®', editable: false, shape: 'circle', position: { top: '15%', left: '25%' }, color: '#E11D48', textColor: '#FFFFFF' },
    { id: 2, text: 'For All Summit 2026', editable: false, shape: 'rect', position: { top: '10%', left: '80%' }, color: '#0F172A', textColor: '#FFFFFF' },
    { id: 3, text: 'Spread the love! ❤️', editable: true, shape: 'heart', position: { top: '45%', left: '20%' }, color: '#FFFFFF', textColor: '#0F172A' },
    { id: 4, text: 'Incredible Energy!', editable: true, shape: 'cloud', position: { top: '65%', left: '85%' }, color: '#FFFFFF', textColor: '#0F172A' },
    { id: 5, text: 'Memories for Life', editable: true, shape: 'circle', position: { top: '88%', left: '30%' }, color: '#FFFFFF', textColor: '#0F172A' },
  ]);

  const handleAccessGallery = () => {
    if (!imgId.trim()) return;
    setLoading(true);
    setImgError(false);
    setTimeout(() => {
      // Using a reliable high-res placeholder that matches the persona of the event
      const imageName = imgId.includes('.') ? imgId : `${imgId}.jpg`;
      setActiveImg(`/Image/${imageName}`);
      setLoading(false);
    }, 800);
  };

  const updateThought = (id: number, text: string) => {
    setThoughts(prev => prev.map(t => t.id === id ? { ...t, text } : t));
  };

  const handleDownload = async () => {
    if (!activeImg || !imageRef.current) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use high resolution for download (matches the aspect ratio 3/4)
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = activeImg;

    img.onload = () => {
      // 1. Draw Background Image (Natural Size)
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0);

      // 2. Draw Shapes and Text
      // Calculate scale factor relative to a baseline width (e.g. 1200px)
      // This ensures shapes look proportional on 6000px images as well as 800px images.
      const scaleFactor = width / 1200;

      thoughts.forEach(thought => {
        const centerX = (parseFloat(thought.position.left) / 100) * width;
        const centerY = (parseFloat(thought.position.top) / 100) * height;
        const bubbleWidth = 240 * scaleFactor;
        const bubbleHeight = 140 * scaleFactor;

        ctx.save();
        ctx.translate(centerX, centerY);

        // Styling for the bubble
        ctx.fillStyle = thought.color;
        ctx.shadowBlur = 30 * scaleFactor;
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.strokeStyle = "rgba(0,0,0,0.05)";
        ctx.lineWidth = 2 * scaleFactor;

        // DRAW SHAPES
        if (thought.shape === 'heart') {
          drawCanvasHeart(ctx, -bubbleWidth / 2, -bubbleHeight / 2, bubbleWidth, bubbleHeight);
        } else if (thought.shape === 'cloud') {
          drawCanvasCloud(ctx, -bubbleWidth / 2, -bubbleHeight / 2, bubbleWidth, bubbleHeight);
        } else if (thought.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, bubbleWidth / 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          drawCanvasRoundRect(ctx, -bubbleWidth / 2, -bubbleHeight / 2, bubbleWidth, bubbleHeight, 30 * scaleFactor);
          ctx.fill();
          ctx.stroke();
        }

        // DRAW TEXT
        ctx.shadowBlur = 0;
        ctx.fillStyle = thought.textColor;
        ctx.font = `bold ${28 * scaleFactor}px 'Inter', sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Multi-line wrap
        const words = thought.text.split(' ');
        let line = '';
        const lines = [];
        const maxWidth = bubbleWidth * 0.7;

        for (let n = 0; n < words.length; n++) {
          const testLine = line + words[n] + ' ';
          const metrics = ctx.measureText(testLine);
          if (metrics.width > maxWidth && n > 0) {
            lines.push(line);
            line = words[n] + ' ';
          } else {
            line = testLine;
          }
        }
        lines.push(line);

        lines.forEach((l, i) => {
          ctx.fillText(l.trim(), 0, (i - (lines.length - 1) / 2) * (36 * scaleFactor));
        });

        ctx.restore();
      });

      // 3. Trigger Download
      const link = document.createElement('a');
      link.download = `MemoraEvent_${imgId || 'Moment'}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    };
  };

  // Improved Canvas Drawing Helpers
  function drawCanvasHeart(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
    ctx.beginPath();
    const topCurveHeight = h * 0.3;
    ctx.moveTo(x + w / 2, y + h);
    // Left side
    ctx.bezierCurveTo(x + w / 2, y + h * 0.7, x, y + h * 0.6, x, y + h * 0.3);
    ctx.bezierCurveTo(x, y, x + w / 2, y, x + w / 2, y + topCurveHeight);
    // Right side
    ctx.bezierCurveTo(x + w / 2, y, x + w, y, x + w, y + h * 0.3);
    ctx.bezierCurveTo(x + w, y + h * 0.6, x + w / 2, y + h * 0.7, x + w / 2, y + h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  function drawCanvasCloud(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
    ctx.beginPath();
    const r = h * 0.4;
    ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI * 1.5);
    ctx.arc(x + w * 0.3, y + r, r, Math.PI, Math.PI * 1.7);
    ctx.arc(x + w * 0.7, y + r * 0.8, r * 1.2, Math.PI * 1.3, Math.PI * 1.9);
    ctx.arc(x + w - r, y + h - r, r, Math.PI * 1.5, Math.PI * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  function drawCanvasRoundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 bg-slate-50 min-h-screen">
      {/* Search Header */}
      <div className="text-center space-y-8">
        <div className="inline-block group cursor-default">
          <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight transition-all">
            Memora<span className="text-rose-600">Events</span> Gallery
          </h1>
          <div className="h-2 w-20 md:w-32 bg-rose-600 mx-auto mt-4 rounded-full shadow-lg shadow-rose-200"></div>
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          <div className="relative group">
            <input
              type="text"
              value={imgId}
              onChange={(e) => setImgId(e.target.value)}
              placeholder="Enter Image Name (e.g. IMG001)"
              className="w-full px-6 py-4 md:px-8 md:py-5 bg-white border-2 border-slate-200 rounded-[2.5rem] focus:outline-none focus:border-rose-500 transition-all text-base md:text-xl shadow-xl group-hover:border-slate-300"
              onKeyDown={(e) => e.key === 'Enter' && handleAccessGallery()}
            />
            <button
              onClick={handleAccessGallery}
              className="absolute right-2 top-2 bottom-2 md:right-3 md:top-3 md:bottom-3 px-6 md:px-8 bg-rose-600 text-white rounded-[2rem] font-black flex items-center gap-2 hover:bg-rose-700 transition-all active:scale-95 disabled:bg-slate-300 shadow-xl shadow-rose-200 text-sm md:text-base"
              disabled={loading || !imgId}
            >
              {loading ? <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-2 border-white border-t-transparent" /> : <Search className="w-5 h-5 md:w-6 md:h-6" />}
              GO
            </button>
          </div>
        </div>
      </div>

      {activeImg && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-in fade-in slide-in-from-bottom-12 duration-1000">

          {/* Left Side: The Interactive Visual Preview */}
          <div className="relative">
            <div
              ref={containerRef}
              className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_24px_40px_-8px_rgba(0,0,0,0.3)] md:shadow-[0_48px_80px_-16px_rgba(0,0,0,0.3)] bg-white p-2 md:p-4 border-[8px] md:border-[16px] border-white ring-1 ring-slate-100"
            >
              {!imgError ? (
                <img
                  ref={imageRef}
                  src={activeImg}
                  alt="Memory Result"
                  crossOrigin="anonymous"
                  className="w-full h-auto rounded-[2rem]"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 rounded-[2rem] text-slate-400 p-8 text-center space-y-4">
                  <div className="rounded-full bg-slate-200 p-6">
                    <CloudIcon className="w-12 h-12 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-600">Image Not Found</h3>
                    <p className="text-sm">We couldn't find "{imgId}". Please check the name and try again.</p>
                  </div>
                </div>
              )}

              {/* Floating Shapes Overlay for Preview */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {thoughts.map((thought) => (
                  <div
                    key={thought.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 hover:scale-110"
                    style={{ top: thought.position.top, left: thought.position.left }}
                  >
                    <ThoughtShapeView thought={thought} />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Actions Bar */}
            <div className="mt-8 md:mt-12 text-center space-y-8">
              <button className="group inline-flex items-center justify-center gap-2 md:gap-4 px-8 py-4 md:px-16 md:py-6 bg-rose-600 text-white rounded-[2.5rem] font-black text-xl md:text-3xl hover:bg-rose-700 transition-all hover:scale-105 shadow-2xl shadow-rose-300 active:scale-95 w-full md:w-auto">
                READY FOR ALL
                <CheckCircle2 className="w-6 h-6 md:w-10 md:h-10 group-hover:animate-bounce" />
              </button>

              <div className="flex flex-col items-center gap-6">
                <div className="h-px w-32 bg-slate-200"></div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  <ActionButton onClick={handleDownload} icon={<Download />} label="Download" highlight />
                  <ActionButton icon={<Linkedin />} />
                  <ActionButton icon={<Twitter />} />
                  <ActionButton icon={<MessageCircle />} />
                  <ActionButton icon={<Facebook />} />
                  <ActionButton icon={<Instagram />} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Configuration Panels */}
          <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-50 space-y-10 sticky top-24">
            <div className="space-y-3 border-b border-slate-100 pb-6">
              <h2 className="text-4xl font-black text-slate-900 flex items-center gap-4">
                <Sparkles className="w-10 h-10 text-rose-500 animate-pulse" />
                Customize
              </h2>
              <p className="text-slate-500 font-bold text-lg">Your thoughts, exactly how you want them.</p>
            </div>

            <div className="space-y-6">
              {thoughts.map((thought, idx) => (
                <div key={thought.id} className="space-y-2 group">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-xs">{idx + 1}</span>
                      {thought.shape}
                    </span>
                    {!thought.editable && (
                      <span className="text-[10px] bg-slate-900 text-white px-3 py-1 rounded-full font-black flex items-center gap-1 shadow-sm">
                        <Lock className="w-3 h-3" /> OFFICIAL
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={thought.text}
                      readOnly={!thought.editable}
                      onChange={(e) => updateThought(thought.id, e.target.value)}
                      className={`
                        w-full px-8 py-5 rounded-2xl border-2 transition-all text-base font-bold
                        ${thought.editable
                          ? 'border-slate-100 focus:border-rose-500 focus:ring-8 focus:ring-rose-500/10 bg-white text-slate-800 shadow-sm'
                          : 'border-slate-50 bg-slate-50 text-slate-400 cursor-not-allowed'}
                      `}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black text-xl hover:bg-black transition-all flex items-center justify-center gap-3 shadow-2xl group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Share2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Update Final Result
            </button>
          </div>
        </div>
      )}

      {/* Styles for visual feel */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
        .clip-heart {
          clip-path: path('M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402');
        }
      `}</style>
    </div>
  );
};

// Component for the thought shapes in the Web Preview
const ThoughtShapeView: React.FC<{ thought: Thought }> = ({ thought }) => {
  const isOfficial = !thought.editable;

  // Base styling for all shapes
  const baseClasses = `
    animate-floating flex items-center justify-center text-center p-6 shadow-2xl transition-all duration-500
    border-2 border-slate-100/20 backdrop-blur-sm z-30
  `;

  const textStyle = { color: thought.textColor };

  // HEART SHAPE PREVIEW
  if (thought.shape === 'heart') {
    return (
      <div
        className="w-24 h-24 md:w-48 md:h-48 animate-floating flex items-center justify-center relative transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full drop-shadow-2xl overflow-visible">
          <path
            fill={thought.color}
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="0.1"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
        <p className="relative z-10 text-[10px] md:text-base font-black px-2 md:px-4 leading-tight max-w-[80px] md:max-w-[120px]" style={textStyle}>
          {thought.text}
        </p>
      </div>
    );
  }

  // CLOUD SHAPE PREVIEW
  if (thought.shape === 'cloud') {
    return (
      <div className="w-32 h-20 md:w-56 md:h-36 animate-floating flex items-center justify-center relative">
        <svg viewBox="0 0 24 24" className="absolute inset-0 w-full h-full drop-shadow-2xl overflow-visible">
          <path
            fill={thought.color}
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="0.1"
            d="M17.5,19c3.6,0,6.5-2.9,6.5-6.5c0-3.1-2.1-5.6-4.9-6.3c-0.6-3.6-3.7-6.3-7.5-6.3c-2.9,0-5.5,1.6-6.7,4.1C2.1,4.7,0,7.1,0,10c0,3.6,2.9,6.5,6.5,6.5c0.3,0,0.6,0,0.9-0.1c1.5,1.6,3.6,2.6,6.1,2.6c1.1,0,2.1-0.2,3-0.6C16.8,18.8,17.1,19,17.5,19z"
          />
        </svg>
        <p className="relative z-10 text-[10px] md:text-base font-black px-4 md:px-6 leading-tight max-w-[100px] md:max-w-[140px]" style={textStyle}>
          {thought.text}
        </p>
      </div>
    );
  }

  // CIRCLE & RECT PREVIEW
  const shapeStyles: Partial<Record<ShapeType, string>> = {
    circle: 'rounded-full aspect-square w-24 md:w-48',
    rect: 'rounded-2xl md:rounded-[2rem] w-32 h-20 md:w-56 md:h-32',
  };

  return (
    <div
      className={`${baseClasses} ${shapeStyles[thought.shape as ShapeType] || 'rounded-2xl'}`}
      style={{ backgroundColor: thought.color }}
    >
      <p className="text-[10px] md:text-base font-black px-2 md:px-4 leading-tight" style={textStyle}>
        {thought.text}
      </p>
      {/* Little pointer tail */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 border-r-2 border-b-2 border-slate-100/10"
        style={{ backgroundColor: thought.color }}
      ></div>
    </div>
  );
};

const ActionButton: React.FC<{
  icon: React.ReactElement;
  label?: string;
  highlight?: boolean;
  onClick?: () => void
}> = ({ icon, label, highlight, onClick }) => (
  <button
    onClick={onClick}
    className={`
      group flex flex-col items-center gap-2 p-3 md:p-5 rounded-2xl md:rounded-[2rem] transition-all hover:-translate-y-2
      ${highlight ? 'bg-rose-600 text-white shadow-xl shadow-rose-200' : 'bg-white text-slate-400 hover:text-rose-600 hover:shadow-lg border border-slate-100'}
    `}
  >
    {React.cloneElement(icon, { size: 24 } as any)}
    {/* Scaled down icon for mobile, handled by size prop if supported or className */}
    {/* For Lucide icons, size prop is number. We can't conditionally pass size based on screen easily without JS matchMedia, 
        so better to use classNames if allowed or accept fixed size. 
        Here we assume 24 is small enough or we can use a class override if needed. 
        Actually, let's keep it simple: 24 is fine. Original was 32. Let's make it responsive via wrapper? 
        The icon itself might not take className size if size prop matches. 
        Let's switch to 24px default or keep 32px but adjust padding. 
        Let's try adjusting padding first as done above. 
    */}
    {label && <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">{label}</span>}
  </button>
);
