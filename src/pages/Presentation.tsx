import { ExternalLink } from 'lucide-react';

export default function Presentation() {
  return (
    <div className="max-w-5xl mx-auto fade-in flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] pb-8">
      <header className="mb-8 shrink-0">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">企劃簡報</h1>
        <p className="text-slate-500 font-medium text-lg">花東四人行旅遊專案提案</p>
      </header>
      
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex-1 relative flex flex-col group min-h-[500px]">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <a 
              href="https://docs.google.com/presentation/d/1rewzQHN7VuGp3neAfN845aBzjA8sROMRKEdCqy4vGWQ/pub?start=false&loop=false&delayms=3000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-500 hover:text-orange-500 flex items-center gap-1 transition-colors uppercase tracking-wider bg-white px-3 py-1.5 rounded-lg border border-slate-200"
            >
              在新分頁開啟 <ExternalLink size={14} />
            </a>
        </div>
        <div className="flex-1 w-full bg-slate-100 relative">
          <iframe 
            src="https://docs.google.com/presentation/d/1rewzQHN7VuGp3neAfN845aBzjA8sROMRKEdCqy4vGWQ/embed?start=false&loop=false&delayms=3000" 
            frameBorder="0" 
            allowFullScreen={true}
            className="absolute inset-0 w-full h-full"
            title="Google Slides Presentation"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
