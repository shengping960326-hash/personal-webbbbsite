import { MapPin, Sun, Moon, Coffee } from 'lucide-react';

export default function TravelPlan() {
  const plan = [
    {
      day: 1,
      title: "台東市區",
      subtitle: "耍废開端",
      budget: 3000,
      activities: [
        { time: "09:00", desc: "高雄出發 (南迴公路風光風景)", icon: Sun },
        { time: "下午", desc: "琵琶湖騎腳踏車 (或：加路蘭、富山護漁區)", icon: MapPin },
        { time: "晚上", desc: "鐵花村散步，回飯店/民宿休息", icon: Moon },
      ]
    },
    {
      day: 2,
      title: "縱谷風光",
      subtitle: "看海放空",
      budget: 3500,
      activities: [
        { time: "上午", desc: "鹿野高台看熱氣球 (或初鹿牧場)", icon: Sun },
        { time: "中午", desc: "池上吃便當、伯朗大道騎單車、金城武樹", icon: Coffee },
        { time: "下午", desc: "離開池上，前往花蓮 (沿路看風景)", icon: MapPin },
        { time: "晚上", desc: "入住花蓮市區，逛東大門夜市 (晚餐自理)", icon: Moon },
      ]
    },
    {
      day: 3,
      title: "海線花蓮",
      subtitle: "看海放空",
      budget: 3500,
      activities: [
        { time: "上午", desc: "七星潭看海、吹海風", icon: Sun },
        { time: "下午", desc: "找間海景咖啡廳停留 (加：加路蘭)，享受慢步調", icon: Coffee },
        { time: "晚上", desc: "花蓮市區吃美食，或回民宿休息享受寧靜時光", icon: Moon },
      ]
    },
    {
      day: 4,
      title: "慢悠南返",
      subtitle: "採買收心",
      budget: 2500,
      activities: [
        { time: "上午", desc: "起床後整理行李", icon: Sun },
        { time: "中午", desc: "找間當地小吃作為最後的回味(如：海鮮)", icon: Coffee },
        { time: "下午", desc: "慢慢開車回高雄，結束四天三夜", icon: MapPin },
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto fade-in pb-20">
      <header className="mb-12">
        <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 font-bold tracking-widest text-sm rounded-full mb-6">
          TRAVEL ITINERARY
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">高雄出發：花東四人行</h1>
        <p className="text-xl text-slate-500 font-medium">「極簡預算版」四天三夜在地慢遊</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {plan.map((item) => (
          <div key={item.day} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all hover:border-slate-300">
            <div className="absolute top-0 right-0 p-8 w-32 h-32 bg-slate-50 border-b border-l border-slate-100 rounded-bl-3xl flex items-start justify-end -mt-2 -mr-2 group-hover:bg-orange-50 transition-colors">
               <span className="text-5xl font-display font-black text-slate-200 group-hover:text-orange-200">D{item.day}</span>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-display font-bold text-slate-900">{item.title}</h2>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">{item.subtitle}</span>
              </div>
              
              <div className="space-y-6 mb-8">
                {item.activities.map((act, i) => {
                  const Icon = act.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-1">{act.time}</p>
                        <p className="text-slate-600 font-medium">{act.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">預算估計</span>
                <span className="text-2xl font-display font-bold text-slate-900">~ ${item.budget} <span className="text-sm text-slate-500 font-sans">/人</span></span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Gallery Section */}
      <div className="mt-12 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 relative overflow-hidden">
        <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500"></span> Video Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 group hover:shadow-md transition-shadow">
            <video 
              src="/video1.mp4" 
              controls 
              className="w-full h-auto object-cover aspect-video bg-slate-200"
            />
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-orange-500 transition-colors">Chishang / Luye Day 2</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">台東 ‧ 池上鹿野紀實</p>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 group hover:shadow-md transition-shadow">
            <video 
              src="/video2.mp4" 
              controls 
              className="w-full h-auto object-cover aspect-video bg-slate-200"
            />
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-orange-500 transition-colors">Hualien Coastal - Sea Crest Valley</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">花蓮 ‧ 海崖谷</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 group hover:shadow-md transition-shadow">
            <video 
              src="/video3.mp4" 
              controls 
              className="w-full h-auto object-cover aspect-video bg-slate-200"
            />
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-orange-500 transition-colors">Hualien Coastal - Qixingtan</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">花蓮 ‧ 七星潭疊石</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 group hover:shadow-md transition-shadow">
            <video 
              src="/video4.mp4" 
              controls 
              className="w-full h-auto object-cover aspect-video bg-slate-200"
            />
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-orange-500 transition-colors">Adventure</h3>
              <p className="text-sm text-slate-500 mt-1 font-medium">風景與冒險</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
