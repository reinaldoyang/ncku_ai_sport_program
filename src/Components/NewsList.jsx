const newsData = [
  {
    id: 1,
    content: "辦理成大盃桌球邀請賽轉播",
    date: "2025/08/08 ~ 2025/08/11"
  },
];

export default function NewsList() {
  return (
    <div className="max-w-6xl mx-auto p-8 font-sans text-gray-900 bg-gray-200 rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold mb-1 tracking-tight">News</h2>
      <div className="flex flex-col border-t border-gray-200">
        {newsData.map((item) => (
          <div key={item.id} className="py-1 border-b border-gray-100">
            <p className="text-[18px] leading-relaxed">
              <span className="text-gray-800 align-middle">{item.content.replace('News!', '')}</span>
              <span className="text-gray-400 ml-2 text-sm italic align-middle">({item.date})</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}