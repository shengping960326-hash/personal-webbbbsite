import { ArrowRight, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="fade-in max-w-6xl mx-auto space-y-6">
      {/* Header Profile Section */}
      <header className="flex flex-col md:flex-row gap-8 items-center md:items-end justify-between pb-8 border-b border-slate-200 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <img 
            src="/profile-pic.jpg" 
            alt="Andrew"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white bg-slate-200"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">張勝評 Andrew</h1>
            <p className="text-lg text-slate-600 font-medium">顧客關係管理 顧客體驗優化 賽特主理人</p>
          </div>
        </div>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Intro */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100 flex flex-col justify-center">
          <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span> About Me
          </h2>
          <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-relaxed">
            "我選擇海科大是因為海科大能滿足五專四年級的學生，從小因家人工作影響使對船舶與大海有著濃厚的興趣，因此選擇航海科，並希望能有未來成為一名<span className="text-orange-500 font-bold mix-blend-multiply">優秀的航海人員</span>。"
          </p>
        </div>

        {/* Education */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-sm text-white flex flex-col pt-12 relative overflow-hidden group">
          <GraduationCap className="absolute top-6 right-6 text-slate-700 w-16 h-16 opacity-50 group-hover:scale-110 transition-transform duration-500" />
          <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-auto">Education</h2>
          <div className="mt-8">
            <p className="text-sm font-mono text-orange-400 mb-2 font-bold">2022-07 — 2025-06</p>
            <p className="text-2xl font-display font-bold">國立高雄科技大學</p>
            <p className="text-slate-400 font-medium mt-1">航海科 五專部</p>
          </div>
        </div>

        {/* Experience 1 */}
        <div className="bg-orange-50 rounded-3xl p-8 shadow-sm border border-orange-100/50 relative overflow-hidden">
           <Briefcase className="absolute -right-4 -bottom-4 text-orange-200/50 w-32 h-32" />
           <p className="text-xs font-mono font-bold text-orange-600 mb-2 bg-orange-200/50 inline-block px-3 py-1 rounded-full">2023-09 — Now</p>
           <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 mt-2 border-b border-orange-200/50 pb-4">7-11 店員</h3>
           <ul className="space-y-3 text-sm text-slate-700 relative z-10 font-medium">
             <li className="flex gap-3"><span className="text-orange-500 mt-0.5">•</span> 收銀結帳、協助顧客服務與商品管理</li>
             <li className="flex gap-3"><span className="text-orange-500 mt-0.5">•</span> 代收繳費、儲值與兌換、處理客訴</li>
             <li className="flex gap-3"><span className="text-orange-500 mt-0.5">•</span> 補貨上架、整理排面、確保賣場整潔</li>
           </ul>
        </div>
        
        {/* Experience 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:border-slate-300 transition-colors">
           <Briefcase className="absolute -right-4 -bottom-4 text-slate-100 w-32 h-32 group-hover:scale-110 transition-transform duration-500" />
           <p className="text-xs font-mono font-bold text-slate-500 mb-2 bg-slate-100 inline-block px-3 py-1 rounded-full">2023-03 — 2023-07</p>
           <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 mt-2 border-b border-slate-100 pb-4">餐飲業 內場</h3>
           <ul className="space-y-3 text-sm text-slate-600 relative z-10 font-medium">
             <li className="flex gap-3"><span className="text-slate-400 mt-0.5">•</span> 負責備料、食材處理與餐點製作</li>
             <li className="flex gap-3"><span className="text-slate-400 mt-0.5">•</span> 清潔與食物保存</li>
             <li className="flex gap-3"><span className="text-slate-400 mt-0.5">•</span> 打掃環境、切菜、鋪展等前置作業</li>
           </ul>
        </div>

        {/* Skills Bento */}
        <div className="md:col-span-3 bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-800 flex flex-col justify-between relative overflow-hidden mt-4">
           <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
           <h2 className="text-sm font-bold text-orange-400 tracking-widest uppercase mb-8 flex items-center gap-2 relative z-10">
             <Code size={18} /> Professional Skills & Certifications
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
             <div>
               <h3 className="text-white font-display font-bold mb-4 border-b border-slate-700 pb-2">專業技能</h3>
               <div className="flex flex-wrap gap-2">
                 <span className="px-4 py-2 bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 rounded-xl text-sm font-medium border border-slate-700 shadow-sm">顧客關係管理</span>
                 <span className="px-4 py-2 bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 rounded-xl text-sm font-medium border border-slate-700 shadow-sm">顧客體驗優化</span>
                 <span className="px-4 py-2 bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 rounded-xl text-sm font-medium border border-slate-700 shadow-sm">通路經營維護</span>
               </div>
             </div>
             
             <div>
               <h3 className="text-white font-display font-bold mb-4 border-b border-slate-700 pb-2">專業證照</h3>
               <div className="flex flex-wrap gap-2">
                 <span className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-xl text-sm font-medium border border-orange-500/20 shadow-sm">救生艇筏及救難艇操縱</span>
                 <span className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-xl text-sm font-medium border border-orange-500/20 shadow-sm">進階滅火</span>
                 <span className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-xl text-sm font-medium border border-orange-500/20 shadow-sm">醫療急救</span>
                 <span className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-xl text-sm font-medium border border-orange-500/20 shadow-sm">基本滅火</span>
                 <span className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-xl text-sm font-medium border border-orange-500/20 shadow-sm">人員求生技能</span>
                 <span className="px-4 py-2 bg-orange-500/10 text-orange-400 rounded-xl text-sm font-medium border border-orange-500/20 shadow-sm">基礎急救</span>
               </div>
             </div>

             <div className="space-y-6">
               <div>
                  <h3 className="text-white font-display font-bold mb-4 border-b border-slate-700 pb-2">語言與電腦技能</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl text-sm font-medium border border-indigo-500/20 shadow-sm">TOEIC 570</span>
                    <span className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-xl text-sm font-medium border border-indigo-500/20 shadow-sm">台語溝通</span>
                    <span className="px-4 py-2 mt-2 bg-slate-800 text-slate-300 rounded-xl text-sm font-medium border border-slate-700 shadow-sm w-full block">Microsoft Office (Word, Excel, PowerPoint)</span>
                  </div>
               </div>
             </div>
           </div>
        </div>

        {/* Projects Teaser Layout */}
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200 mt-2">
          <Link to="/travel-plan" className="group p-8 bg-slate-900 text-white rounded-3xl hover:bg-orange-500 transition-colors duration-300">
            <h3 className="font-display font-bold text-2xl mb-2">旅遊規劃</h3>
            <p className="text-slate-400 group-hover:text-white/90 text-sm mb-8 font-medium">高雄出發：花東四人行極簡版</p>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-orange-600 transition-colors mt-auto">
              <ArrowRight size={20} />
            </div>
          </Link>

          <Link to="/presentation" className="group p-8 bg-white border border-slate-200 rounded-3xl hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            <h3 className="font-display font-bold text-2xl mb-2 text-slate-900 relative z-10">企劃簡報</h3>
            <p className="text-slate-500 text-sm mb-8 relative z-10 font-medium">旅遊行程企劃與預算分析視覺化</p>
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors relative z-10 mt-auto">
              <ArrowRight size={20} />
            </div>
          </Link>

          <div className="group p-8 bg-white border border-slate-200 rounded-3xl hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden flex flex-col">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
            <h3 className="font-display font-bold text-2xl mb-2 text-slate-900 relative z-10">3D 模型展示</h3>
            <p className="text-slate-500 text-sm mb-6 relative z-10 font-medium">線上互動式 3D 模型預覽</p>
            
            <div className="relative z-10 flex-1 mb-6 rounded-2xl overflow-hidden shadow-inner bg-slate-100">
              <img 
                src="/1766669257129.jpg" 
                alt="3D Model Feature"
                className="w-full h-32 md:h-40 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            <div className="relative z-10 mt-auto flex flex-col gap-3">
              <a 
                href="https://studio.tripo3d.ai/3d-model/46bd21a3-9d8b-402c-bd53-5549252a08fa?invite_code=ARN5FT"
                target="_blank" rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-between"
              >
                個人模型 <ArrowRight size={16} />
              </a>
              <a 
                href="https://studio.tripo3d.ai/workspace/generate/7e0bbf8e-b9de-4da0-bd1e-afade92bff2d"
                target="_blank" rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-slate-100 text-slate-700 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-between"
              >
                小時候的可愛游詠小男孩 <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Autobiography Section */}
      <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
        <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-300"></span> Biography
        </h2>
        
        <div className="max-w-4xl space-y-6 text-slate-700 leading-relaxed text-lg font-medium">
          <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-orange-500 first-letter:mr-2 first-letter:float-left">
            我是張勝評來自高科大航海科五專四年級的學生,從小因家人工作影響便對船舶與大海有濃厚的興趣,因此選擇就讀航海科,並希望能在未來成為一名優秀的航海人員。
          </p>
          <p>
            在學期間,我曾擔任班代及系學會活動組組長,並在學校內認真學習專業知識,積極參與活動,以提升實務能力。此外,我也培養了良好的紀律與團隊合作精神,深知航海不僅是個人技術的展現,更是團隊協作與責任感的體現。
          </p>
          <p>
            除了課業,我也熱衷於鍛鍊體能,保持良好的身體素質,以應對航海工作中可能面臨的挑戰。我相信,耐心、細心與面對挑戰,勇於承擔責任,是一名優秀航海人員應具備的特質,因此,我在學習過程中不斷磨練自己的心性與判斷能力,學會在面對困難與挑戰時保持冷靜與專注,培養出堅定的責任感。透過不斷的學習,我更加明白航海工作需要極高的專業與細心,也體認到安全與精確是航運中最重要的核心價值。
          </p>
          <p>
            未來,我希望能考取相關證照,投身航運產業,將所學應用於實務,為航運業貢獻自己的專業與熱情,不斷學習與精進能力,並朝著船長的目標邁進。
          </p>
          <p>
            未來,我希望能考取各項與航海相關的專業證照,逐步累積經驗與實力,投身航運產業的第一線,將在學校所學的知識應用於實務操作中。無論是在船上執行航行任務,或是在岸上從事航務管理,我都期許自己能以專業態度與熱忱為航運業貢獻一份心力。
          </p>
        </div>
      </div>
    </div>
  );
}
