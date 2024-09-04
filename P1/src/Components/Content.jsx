const Content = () => {
  return (
    <div className="main">
      <div className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="btns">
          <button>Shop Now</button>
          <button className="category">Category</button>
        </div>
        <p className="stores">Also Available On</p>
        <img src="/img/flipkart.png" alt="store" className="esite" />
        <img src="/img/amazon.png" alt="store" className="esite"  />
      </div>
      <div className="right">
        <img src="/img/shoe_image.png" alt="shoe" />
      </div>
    </div>
  );
};

export default Content;
