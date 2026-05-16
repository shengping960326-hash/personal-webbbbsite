import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: '2023-03 — 2023-07',
      company: '餐飲業 內場',
      responsibilities: [
        '負責備料、食材處理與餐點製作',
        '清潔與食物保存',
        '打掃環境、切菜、鋪展等前置作業，確保火鍋能順利出餐。管理內外場，無誤依點單內容製作餐點。',
      ]
    },
    {
      period: '2023-09 — 現在',
      company: '7-11 店員',
      responsibilities: [
        '擔任門市人員，主要工作內容包括收銀結帳、協助顧客服務與商品管理。',
        '平時負責操作收銀機、代收繳費、儲值與兌換等服務，並協助顧客客訴商品或解決問題。',
        '負責補貨上架、整理排面，檢查商品效期，確保賣場整潔與商品充足。',
      ]
    }
  ];

  return (
    <section className="my-16">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">EXPERIENCE</h2>
        <div className="h-px bg-white/10 flex-grow"></div>
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">打工經驗</span>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
            <div className="font-mono text-sm text-indigo-400 mb-4">{exp.period}</div>
            <h3 className="text-2xl font-bold text-white mb-6 font-display">{exp.company}</h3>
            <ul className="space-y-3 text-zinc-400">
              {exp.responsibilities.map((task, i) => (
                <li key={i} className="flex leading-relaxed">
                  <span className="text-indigo-500 mr-3 opacity-50 group-hover:opacity-100 transition-opacity">▹</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
