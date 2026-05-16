export default function Skills() {
  return (
    <section className="my-24">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">EXPERTISE</h2>
        <div className="h-px bg-white/10 flex-grow"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Education & Languages */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xs font-mono tracking-widest text-zinc-500 mb-6 uppercase">學歷 Education</h3>
            <div className="font-mono text-sm text-indigo-400 mb-2">2022-07 — 2025-06</div>
            <p className="text-lg text-zinc-300 font-medium">國立高雄科技大學</p>
            <p className="text-zinc-500">航海科 五專部</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-xs font-mono tracking-widest text-zinc-500 mb-6 uppercase">語言能力 Languages</h3>
            <div className="space-y-6">
              <div>
                <p className="text-white font-medium mb-1">英文 English</p>
                <div className="w-full bg-white/10 h-1.5 rounded-full mb-2 overflow-hidden">
                   <div className="bg-indigo-500 h-1.5 rounded-full w-2/3"></div>
                </div>
                <p className="text-sm text-zinc-500">TOEIC 570</p>
              </div>
               <div>
                <p className="text-white font-medium mb-1">台語 Taiwanese</p>
                 <div className="w-full bg-white/10 h-1.5 rounded-full mb-2 overflow-hidden">
                   <div className="bg-indigo-500 h-1.5 rounded-full w-full"></div>
                </div>
                <p className="text-sm text-zinc-500">溝通無障礙</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pro Skills */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
             <h3 className="text-xs font-mono tracking-widest text-zinc-500 mb-8 uppercase">專業技能 Professional Skills</h3>
             
             <div className="grid sm:grid-cols-2 gap-8">
               <div>
                 <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                   顧客關係管理
                 </h4>
                 <ul className="text-zinc-400 text-sm space-y-2 pl-3 border-l border-white/10 ml-[3px]">
                   <li>顧客分類經營、管理</li>
                   <li>會員經營策略與制定</li>
                 </ul>
               </div>

                <div>
                 <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                   顧客體驗優化
                 </h4>
                 <ul className="text-zinc-400 text-sm space-y-2 pl-3 border-l border-white/10 ml-[3px]">
                   <li>提升服務態度</li>
                   <li>改善軟硬體商品或服務</li>
                   <li>快速解決客人回饋與應對作法等運作</li>
                 </ul>
               </div>

                <div className="sm:col-span-2">
                 <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                   通路經營維護
                 </h4>
                 <ul className="text-zinc-400 text-sm space-y-2 pl-3 border-l border-white/10 ml-[3px] grid sm:grid-cols-2 gap-x-4">
                   <li>確保商品安全、庫存充足</li>
                   <li>提升及維護賣場整潔與陳列</li>
                 </ul>
               </div>
             </div>
          </div>

          {/* Certifications & Computer */}
          <div className="grid sm:grid-cols-2 gap-8">
             <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
               <h3 className="text-xs font-mono tracking-widest text-zinc-500 mb-6 uppercase">電腦技能 Software</h3>
               <p className="text-white font-medium mb-2">Microsoft Office</p>
               <p className="text-sm text-zinc-400">Word, Excel, Outlook, PowerPoint</p>
             </div>
             
             <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
               <h3 className="text-xs font-mono tracking-widest text-zinc-500 mb-6 uppercase">專業證照 Certifications</h3>
               <div className="flex flex-wrap gap-2">
                 {['基本滅火', '進階滅火', '救生艇筏操縱', '人員求生技能', '基礎急救', '醫療急救'].map(cert => (
                   <span key={cert} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 font-mono">
                     {cert}
                   </span>
                 ))}
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
