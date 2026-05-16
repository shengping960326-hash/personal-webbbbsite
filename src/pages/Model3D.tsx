import { Box, ArrowUpRight } from 'lucide-react';

export default function Model3D() {
  return (
    <div className="max-w-4xl mx-auto fade-in h-full flex flex-col">
      <header className="mb-12 shrink-0">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">3D 模型展示</h1>
        <p className="text-slate-500 font-medium text-lg">線上互動式預覽</p>
      </header>
      
      <div className="bg-white rounded-3xl p-8 sm:p-16 shadow-sm border border-slate-200 text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-rose-400"></div>
        <div className="w-32 h-32 bg-orange-50 rounded-full mx-auto flex items-center justify-center mb-8 border border-orange-100 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-100">
           <Box size={48} className="text-orange-400" />
        </div>
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">探索引擎 3D 模型</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
          點擊下方按鈕或連結，前往 Tripo3D 平台觀看並互動我們所建立的 3D 模型。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://studio.tripo3d.ai/3d-model/46bd21a3-9d8b-402c-bd53-5549252a08fa?invite_code=ARN5FT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-lg hover:shadow-orange-500/20"
          >
            個人模型 <ArrowUpRight size={20} />
          </a>
          <a 
            href="https://studio.tripo3d.ai/workspace/generate/7e0bbf8e-b9de-4da0-bd1e-afade92bff2d" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-slate-900 border-2 border-slate-200 px-8 py-3.5 rounded-xl font-bold hover:border-orange-500 hover:text-orange-500 transition-colors shadow-sm"
          >
            小時候的可愛游詠小男孩 <ArrowUpRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white bg-slate-50 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <img 
              src="/IMG_20230912_184830_885.jpg" 
              alt="小時候的可愛游詠小男孩" 
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white bg-slate-50 rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <img 
              src="/1766669257129.jpg" 
              alt="照片" 
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>


      </div>
    </div>
  );
}
