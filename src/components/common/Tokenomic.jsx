const Tokenomic = ({ title, content, icon }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-4">
      <div className="flex flex-col max-w-[300px]">
        <p className="text-gray-200 text-xl xl:text-3xl">{title}</p>
        <p className="text-gray-400 text-lg xl:text-2xl">{content}</p>
      </div>
      {icon}
    </div>
  );
};

export default Tokenomic;
