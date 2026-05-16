import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-12 items-center md:items-start py-8">
      <div className="flex-1 flex flex-col space-y-6 text-center md:text-left">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-2">
            張勝評 <span className="text-zinc-500">Andrew</span>
          </h1>
          <p className="text-xl text-zinc-400 font-medium">曾任主理人，還路過愛情墳；願意做豬油仔</p>
        </div>

        <div className="space-y-2 text-zinc-500 text-sm font-mono">
          <p>DOB: 2003-03-26</p>
          <a href="mailto:shengping960326@gmail.com" className="inline-flex items-center gap-2 hover:text-white transition-colors group">
            <Mail size={14} />
            shengping960326@gmail.com
            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
          </a>
        </div>

        <div className="flex gap-4 items-center justify-center md:justify-start pt-4 text-zinc-400">
          <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-all transform hover:-translate-y-1">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 hover:text-white transition-all transform hover:-translate-y-1">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="w-56 h-56 sm:w-72 sm:h-72 flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl relative group bg-zinc-900 border border-white/10">
        <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors z-10 duration-500"></div>
        <img
          src="/profile.jpg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80';
          }}
          alt="張勝評 Andrew"
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
}
