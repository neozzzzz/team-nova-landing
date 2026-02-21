const services = [
  {
    name: "MATHLAB",
    description: "초등 수학 연습 문제를 자동으로 생성하고 인쇄할 수 있는 학습지 생성기",
    url: "https://mathlab.team-nova.dev",
    tags: ["수학", "학습지", "초등교육"],
    color: "from-orange-500 to-amber-500",
    icon: "📐",
    status: "Live",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            서비스 운영 중
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-4">
            Team{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Nova
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-md mx-auto">
            교육을 더 쉽고 재미있게 만드는 서비스
          </p>
        </div>
      </header>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-6 pb-32 -mt-4">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
          Services
        </h2>
        <div className="grid gap-4">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sm:p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {service.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-black tracking-tight group-hover:text-white transition-colors">
                      {service.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs font-bold">
                      {service.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-slate-500 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 text-slate-600 group-hover:text-slate-400 group-hover:translate-x-1 transition-all duration-200 text-lg">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Team Nova
      </footer>
    </div>
  );
}
