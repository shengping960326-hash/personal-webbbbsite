export default function AboutBanner() {
  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl text-zinc-300 py-16 px-8 sm:px-16 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <p className="text-xl sm:text-2xl text-center font-display font-medium leading-relaxed max-w-3xl mx-auto tracking-wide selection:bg-indigo-500/30">
        "我選擇海科大是因為海科大能滿足五專四年級的學生，從小因家人工作影響使對船舶與大海有著濃厚的興趣，因此選擇航海科，並希望能有未來成為一名<span className="text-white">優秀的航海人員</span>。"
      </p>
    </section>
  );
}
