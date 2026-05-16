export default function Autobiography() {
  return (
    <section className="my-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">BIOGRAPHY</h2>
        <div className="h-px bg-white/10 flex-grow"></div>
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">自傳</span>
      </div>
      
      <div className="max-w-4xl space-y-6 text-zinc-400 leading-relaxed text-lg font-medium">
        <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-white first-letter:mr-2 first-letter:float-left">
          我是張勝評,目前就讀於國立高雄科技大學航海科五專部。從小因家人工作環境的影響,使我對船舶與大海有著濃厚的興趣,這也是我選擇成為一名航海人員的原因之一,期望未來能成為一名優秀的航海人員。
        </p>
        <p>
          在學期間,我積極參與校內活動與專業課程。這段時間的學習不僅讓我具備了紮實的航海專業知識,更培養了我在壓力下冷靜處理問題的能力。我相信,這些在校期間累積的經驗與技能,將為我未來在職場上的表現打下堅實的基礎。
        </p>
        <p>
          除了學業,我也在課餘時間積極打工,累積社會經驗。我曾在餐飲業擔任內場人員,負責準備食材與食物製作;也曾在超商擔任門市人員,負責收銀機操作、商品陳列與顧客服務。這些工作經驗讓我學習到如何與不同的人溝通協作,培養了我的責任感與抗壓性。
        </p>
        <p>
          未來,我希望能在航海領域發揮所長。短期內,我會持續精進自己的專業能力,考取相關證照;長期而言,我希望能成為一名優秀的船長,帶領團隊安全完成每一次的航行任務。我深知,航海是一項充滿挑戰的工作,但我已做好準備,迎接未來的每一個挑戰。
        </p>
      </div>

      <div className="mt-16">
        <a href="mailto:shengping960326@gmail.com" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
          Get In Touch
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
