import { Link } from 'react-router-dom';
import { ArrowRight, Map, Presentation as PresentationIcon, Box } from 'lucide-react';

export default function TravelPreview() {
  const items = [
    {
      title: '極簡預算版旅遊規劃',
      desc: '高雄出發：花東四人行，四天三夜在地慢遊。',
      link: '/travel-plan',
      icon: <Map className="w-6 h-6 text-indigo-400" />,
      tag: 'Planning'
    },
    {
      title: '旅遊企劃簡報',
      desc: '詳細的行程企劃與預算分析視覺化呈現。',
      link: '/presentation',
      icon: <PresentationIcon className="w-6 h-6 text-pink-400" />,
      tag: 'Slides'
    },
    {
      title: '3D 模型展示',
      desc: '互動式 3D 模型線上預覽與應用。',
      link: '/model-3d',
      icon: <Box className="w-6 h-6 text-emerald-400" />,
      tag: 'Interactive'
    }
  ];

  return (
    <section className="my-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-display font-bold text-white tracking-tight">PROJECTS & WORKS</h2>
        <div className="h-px bg-white/10 flex-grow"></div>
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">作品展示</span>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {items.map((item, idx) => (
          <Link 
            key={idx} 
            to={item.link}
            className="group block p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {item.icon}
            </div>
            <div className="mb-6 inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-zinc-400 border border-white/5">
              {item.tag}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-indigo-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              {item.desc}
            </p>
            <div className="flex items-center text-sm font-bold text-indigo-400">
              EXPLORE
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
