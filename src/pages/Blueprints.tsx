import React, { useState } from "react";
import { Home, BookOpen, Bookmark, Heart, Clock, Briefcase, Users, HomeIcon, BookOpenIcon, BookmarkIcon, HeartIcon, ClockIcon, BriefcaseIcon, UsersIcon, Menu, X } from 'lucide-react';

const dummyVideos = [
  {
    id: 1,
    title: "How to find your 'IDEAL' customers WHEREVER they Exist (The-DrawingBoard)",
    channel: "The DrawingBoard",
    views: "3.2k",
    time: "12 min",
    likes: "1k",
    saves: "200",
    thumbnail: "https://placehold.co/400x225/222/fff?text=Video+1",
    tag: "Growth",
    duration: "12 Min",
    community: "MyBusinessPlan"
  },
  {
    id: 2,
    title: "The Phycology Behind a Million-Dollar Offer",
    channel: "The DrawingBoard",
    views: "5.4k",
    time: "14 min",
    likes: "1.5k",
    saves: "300",
    thumbnail: "https://placehold.co/400x225/222/fff?text=Video+2",
    tag: "Strategy",
    duration: "14 Min",
    community: "Selling4Millions"
  },
  {
    id: 3,
    title: "The Fastest Way to Get Clients Without Ads",
    channel: "The DrawingBoard",
    views: "2.1k",
    time: "11 min",
    likes: "900",
    saves: "150",
    thumbnail: "https://placehold.co/400x225/222/fff?text=Video+3",
    tag: "Funnels",
    duration: "11 Min",
    community: "StartingABiz"
  },
  {
    id: 4,
    title: "Get More Done",
    channel: "The DrawingBoard",
    views: "1.8k",
    time: "9 min",
    likes: "800",
    saves: "100",
    thumbnail: "https://placehold.co/400x225/222/fff?text=Video+4",
    tag: "Mindset",
    duration: "9 Min",
    community: "1M-10M"
  }
];

const tags = [
  "Growth", "Strategy", "Funnels", "Offers", "Mindset", "Copy", "Sales", "Cash"
];

const communities = [
  { name: "MyBusinessPlan", color: "bg-yellow-400" },
  { name: "Selling4Millions", color: "bg-blue-400" },
  { name: "StartingABiz", color: "bg-pink-400" },
  { name: "1M-10M", color: "bg-green-400" }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const sidebarItems = [
  { key: 'top', label: 'Top', icon: Home, iconFilled: HomeIcon },
  { key: 'snippets', label: 'Snippets', icon: BookOpen, iconFilled: BookOpenIcon },
  { key: 'saved', label: 'Saved', icon: Bookmark, iconFilled: BookmarkIcon },
  { key: 'likes', label: 'Likes', icon: Heart, iconFilled: HeartIcon },
  { key: 'history', label: 'History', icon: Clock, iconFilled: ClockIcon },
  { key: 'brands', label: 'Brands', icon: Briefcase, iconFilled: BriefcaseIcon },
];

const SocialIcons = () => (
  <span className="flex items-center gap-1 bg-[#8B5CF6] rounded-full px-3 py-1 text-xs font-semibold text-white">
    Social
    <span className="flex items-center gap-1 ml-2">
      {/* Discord */}
      <span className="bg-white rounded-full p-0.5 flex items-center justify-center" style={{width:20, height:20}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.3a.112.112 0 0 0-.12.056c-.524.927-1.11 2.13-1.527 3.084a18.524 18.524 0 0 0-5.36 0A12.76 12.76 0 0 0 8.35 3.356a.115.115 0 0 0-.12-.056c-1.432.36-2.814.87-4.115 1.569a.105.105 0 0 0-.05.043C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c1.733 1.277 3.415 2.052 5.077 2.568a.115.115 0 0 0 .125-.042c.391-.537.74-1.104 1.045-1.699a.112.112 0 0 0-.062-.157c-.552-.21-1.077-.465-1.58-.765a.112.112 0 0 1-.011-.186c.106-.08.213-.162.316-.246a.112.112 0 0 1 .115-.012c3.19 1.46 6.64 1.46 9.797 0a.112.112 0 0 1 .116.01c.104.084.21.167.317.247a.112.112 0 0 1-.01.186c-.504.3-1.03.555-1.582.765a.112.112 0 0 0-.062.157c.305.595.654 1.162 1.045 1.699a.115.115 0 0 0 .125.042c1.663-.516 3.345-1.291 5.078-2.568a.115.115 0 0 0 .045-.081c.5-5.177-.838-9.673-3.549-13.646a.093.093 0 0 0-.048-.043zM8.02 15.331c-1.013 0-1.845-.927-1.845-2.063 0-1.137.82-2.064 1.845-2.064 1.034 0 1.86.936 1.845 2.064 0 1.136-.82 2.063-1.845 2.063zm7.974 0c-1.013 0-1.845-.927-1.845-2.063 0-1.137.82-2.064 1.845-2.064 1.034 0 1.86.936 1.845 2.064 0 1.136-.82 2.063-1.845 2.063z" fill="#5865F2"/></svg>
      </span>
      {/* X/Twitter */}
      <span className="bg-white rounded-full p-0.5 flex items-center justify-center" style={{width:20, height:20}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M17.53 3H21.5l-7.19 8.21L22.5 21h-7.19l-5.66-6.47L3.5 21H-.5l7.72-8.82L1.5 3h7.19l5.13 5.86L17.53 3zm-2.1 15h2.36l-6.47-7.41-2.36 2.7L15.43 18zM6.57 6h-2.36l6.47 7.41 2.36-2.7L6.57 6z" fill="#000"/></svg>
      </span>
      {/* Star/Gold */}
      <span className="bg-yellow-400 rounded-full p-0.5 flex items-center justify-center" style={{width:20, height:20}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#fff"/></svg>
      </span>
    </span>
  </span>
);

const BlueprintVideoItem = ({ video, mode, sidebarOpen }: { video: typeof dummyVideos[0], mode: string, sidebarOpen: boolean }) => {
  // Default size
  const baseWidth = 400;
  const baseHeight = 192;
  // Increase by 20% when sidebar is closed
  const scale = sidebarOpen ? 1 : 1.2;
  const width = baseWidth * scale;
  const height = baseHeight * scale;
  return (
    <div className="flex flex-col gap-2 py-6">
      <div className="relative w-full" style={{maxWidth: width}}>
        <img src={video.thumbnail} alt={video.title} className="w-full object-cover rounded-3xl" style={{height}} />
        <span className="absolute top-3 left-3 bg-[#8B5CF6] text-white text-xs font-bold px-3 py-1 rounded-full">#{video.tag}</span>
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full">{video.duration}</span>
      </div>
      <h3 className={classNames(
        "text-lg font-bold leading-tight line-clamp-2",
        mode === 'dark' ? "text-white" : "text-zinc-900"
      )}>{video.title}</h3>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs px-2 py-0.5 rounded-full bg-black/80 text-white font-medium dark:bg-white/10 dark:text-white">{video.community}</span>
        <span className={classNames("text-xs", mode === 'dark' ? "text-gray-400" : "text-gray-500")}>{video.views} views</span>
        <span className={classNames("text-xs", mode === 'dark' ? "text-gray-400" : "text-gray-500")}>{video.time} ago</span>
      </div>
      <div className="flex items-center gap-4">
        <span className={classNames("text-xs", mode === 'dark' ? "text-gray-400" : "text-gray-500")}>{video.likes} likes</span>
        <span className={classNames("text-xs", mode === 'dark' ? "text-gray-400" : "text-gray-500")}>{video.saves} saves</span>
      </div>
    </div>
  );
};

const TopBar = ({ sidebarOpen, setSidebarOpen, mode, setMode }: any) => (
  <header className="sticky top-0 z-30 w-full bg-[#111113] flex items-center h-20 px-8" style={{minHeight:80}}>
    {/* Left: Hamburger + Logo Pill (always flush left, does not move) */}
    <div className="flex items-center gap-3 min-w-[260px] absolute left-8 top-0 h-20" style={{zIndex:40}}>
      <button
        className="p-2 rounded-lg hover:bg-[#8B5CF6]/10 transition-colors"
        onClick={() => setSidebarOpen((open: boolean) => !open)}
        aria-label="Toggle sidebar"
      >
        <svg width="32" height="32" fill="none" stroke="#8B5CF6" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <span className="flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#a78bfa] transition-colors px-5 py-2 rounded-full shadow-none">
        <img src="/website logo favtdb.png" alt="Blueprint Logo" className="w-6 h-6 rounded" />
        <span className="font-black text-base text-white">Blueprint.</span>
      </span>
    </div>
    {/* Center: Search Bar (centered absolutely) */}
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] flex justify-center">
      <div className="flex items-center gap-2 border border-[#8B5CF6] rounded-full px-5 py-2 bg-transparent w-full" style={{height:44}}>
        <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input className="bg-transparent outline-none w-full placeholder:text-gray-400 text-white text-base" style={{height:28}} placeholder="Enter keyword to search" />
      </div>
      <button className="ml-4 rounded-full border border-[#8B5CF6] w-10 h-10 flex items-center justify-center text-[#8B5CF6] hover:bg-[#8B5CF6]/10 transition-colors" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} title="Toggle light/dark mode">
        {mode === 'dark' ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" /></svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
        )}
      </button>
    </div>
    {/* Right: Social + Account */}
    <div className="flex items-center gap-3 min-w-[120px] justify-end ml-auto">
      <span className="flex items-center bg-[#8B5CF6] rounded-full px-2 py-1 h-11 hover:bg-[#a78bfa] transition-colors cursor-pointer justify-center" style={{height:44, minWidth:0}}>
        {/* Only social icons, no text */}
        <span className="flex items-center gap-2">
          {/* Discord */}
          <span className="bg-white rounded-full flex items-center justify-center" style={{width:28, height:28}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.3a.112.112 0 0 0-.12.056c-.524.927-1.11 2.13-1.527 3.084a18.524 18.524 0 0 0-5.36 0A12.76 12.76 0 0 0 8.35 3.356a.115.115 0 0 0-.12-.056c-1.432.36-2.814.87-4.115 1.569a.105.105 0 0 0-.05.043C.533 9.045-.32 13.58.099 18.057a.117.117 0 0 0 .045.082c1.733 1.277 3.415 2.052 5.077 2.568a.115.115 0 0 0 .125-.042c.391-.537.74-1.104 1.045-1.699a.112.112 0 0 0-.062-.157c-.552-.21-1.077-.465-1.58-.765a.112.112 0 0 1-.011-.186c.106-.08.213-.162.316-.246a.112.112 0 0 1 .115-.012c3.19 1.46 6.64 1.46 9.797 0a.112.112 0 0 1 .116.01c.104.084.21.167.317.247a.112.112 0 0 1-.01.186c-.504.3-1.03.555-1.582.765a.112.112 0 0 0-.062.157c.305.595.654 1.162 1.045 1.699a.115.115 0 0 0 .125.042c1.663-.516 3.345-1.291 5.078-2.568a.115.115 0 0 0 .045-.081c.5-5.177-.838-9.673-3.549-13.646a.093.093 0 0 0-.048-.043zM8.02 15.331c-1.013 0-1.845-.927-1.845-2.063 0-1.137.82-2.064 1.845-2.064 1.034 0 1.86.936 1.845 2.064 0 1.136-.82 2.063-1.845 2.063zm7.974 0c-1.013 0-1.845-.927-1.845-2.063 0-1.137.82-2.064 1.845-2.064 1.034 0 1.86.936 1.845 2.064 0 1.136-.82 2.063-1.845 2.063z" fill="#5865F2"/></svg>
          </span>
          {/* X/Twitter */}
          <span className="bg-white rounded-full flex items-center justify-center" style={{width:28, height:28}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.53 3H21.5l-7.19 8.21L22.5 21h-7.19l-5.66-6.47L3.5 21H-.5l7.72-8.82L1.5 3h7.19l5.13 5.86L17.53 3zm-2.1 15h2.36l-6.47-7.41-2.36 2.7L15.43 18zM6.57 6h-2.36l6.47 7.41 2.36-2.7L6.57 6z" fill="#000"/></svg>
          </span>
          {/* Star/Gold */}
          <span className="bg-yellow-400 rounded-full flex items-center justify-center" style={{width:28, height:28}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#fff"/></svg>
          </span>
        </span>
      </span>
      <span className="bg-[#8B5CF6] rounded-full px-3 py-2 text-sm font-semibold text-white h-11 flex items-center justify-center hover:bg-[#a78bfa] transition-colors cursor-pointer" style={{height:44, minWidth:70}}>
        Account
      </span>
    </div>
  </header>
);

const Blueprints = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [activeSidebar, setActiveSidebar] = useState('top');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  React.useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <div className={classNames("min-h-screen flex flex-col text-white transition-colors duration-300", mode === 'dark' ? "bg-[#0f0f0f]" : "bg-white text-zinc-900")}> 
      {/* TopBar always at the very top, flush left */}
      <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} mode={mode} setMode={setMode} />
      <div className="flex flex-1 w-full">
        {/* Sidebar appears directly under TopBar, not overlapping */}
        {sidebarOpen && (
          <aside className={classNames(
            "w-56 flex flex-col gap-2 min-h-full transition-colors duration-300 pt-4",
            mode === 'dark' ? "bg-[#0f0f0f]" : "bg-zinc-100"
          )}>
            <nav className="flex flex-col gap-1 ml-4">
              {sidebarItems.map(item => {
                const Icon = activeSidebar === item.key ? item.iconFilled : item.icon;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveSidebar(item.key)}
                    className={classNames(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      activeSidebar === item.key
                        ? "bg-[#23232a] text-[#8B5CF6] dark:bg-[#23232a] dark:text-[#8B5CF6]"
                        : "text-gray-400 hover:bg-[#23232a]/40 hover:text-[#8B5CF6] dark:hover:bg-[#23232a]/40"
                    )}
                    style={{ minHeight: 36 }}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="mt-6 ml-4">
              <div className="border-t border-[#23232a] mx-2 mb-3" />
              <h3 className="text-xs font-semibold mb-2 text-gray-400 tracking-wide uppercase">Communities</h3>
              <ul className="space-y-2">
                {communities.map((c) => (
                  <li key={c.name} className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${c.color}`}></span>
                    <span className="text-xs text-gray-300">{c.name}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#23232a] mx-2 mt-3" />
            </div>
          </aside>
        )}
        {/* Main Content fills all available space */}
        <main className={classNames(
          "flex-1 flex flex-col",
          mode === 'dark' ? "bg-[#0f0f0f]" : "bg-white"
        )}>
          {/* Tags */}
          <div className={classNames(
            "flex gap-3 overflow-x-auto scrollbar-hide",
            sidebarOpen ? "px-8 py-2" : "px-4 py-2"
          )}>
            {tags.map(tag => (
              <button key={tag} className={classNames(
                "px-4 py-1.5 rounded-2xl text-sm font-medium border border-[#8B5CF6] transition-colors duration-200 border-[1px]",
                mode === 'dark' ? "text-white bg-transparent hover:bg-[#8B5CF6] hover:text-white" : "text-zinc-900 bg-white hover:bg-[#8B5CF6] hover:text-white"
              )} style={{height:32}}>{tag}</button>
            ))}
          </div>
          {/* Video Grid fills width when sidebar is closed */}
          <div className={classNames(
            sidebarOpen ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-6" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-6"
          )}>
            {dummyVideos.map(video => (
              <BlueprintVideoItem key={video.id} video={video} mode={mode} sidebarOpen={sidebarOpen} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blueprints; 