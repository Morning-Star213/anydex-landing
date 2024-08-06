const SushiSwapIFrame = ({ src, height, width }) => {
  return (
    <iframe
      title="SushiSwap"
      src={src}
      height={height}
      width={width}
      frameBorder="0"
      className="rounded-2xl border-gray-400 bg-gray-200"
    ></iframe>
  );
};

export default SushiSwapIFrame;
