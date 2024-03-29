const Body = () => {
  return (
    <main className="body max-w-[1024px] m-auto flex items-center h-screen-[calc(100vh-4rem)] mt-20 gap-36">
      <div className="body-content">
        <div className="font-extrabold text-7xl">
          <h1>YOUR FEET DESERVE THE BEST</h1>
        </div>
        <div className="mt-6 max-w-[390px] font-semibold text-gray-600">
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
        </div>
        <div className="body-btn flex gap-5 mt-6">
          <button className="text-2xl border-[3px] border-solid border-black hover:cursor-pointer rounded-sm py-[6px] px-4 bg-[#D01C28] text-white font-medium">
            Shop Now
          </button>
          <button className="text-2xl border-[3px] border-solid border-gray-500 hover:cursor-pointer rounded-sm py-[6px] px-4 font-medium text-gray-500">
            Category
          </button>
        </div>
        <div className="shopping mt-6">
          <p>Also Available On</p>

          <div className="brand-icons flex gap-6 mt-3">
            <img
              src="./images/flipkart.png"
              alt="flipkart-logo"
              className="cursor-pointer"
            />
            <img
              src="./images/amazon.png"
              alt="amazon-logo"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="body-image min-w-[450px]">
        <div>
          <img src="/images/shoe_image.png" alt="shoe-image" />
        </div>
      </div>
    </main>
  );
};
export default Body;
