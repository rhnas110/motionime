export const TabNavMobile = ({ tab, index, activeTab }) => {
  return (
    <div
      className={`border-2 border-[#865dff] lg:hidden px-4 py-2 rounded-full font-semibold ${
        index === activeTab && "bg-[#865dff] text-white"
      }`}
    >
      {tab?.title}
    </div>
  );
};
