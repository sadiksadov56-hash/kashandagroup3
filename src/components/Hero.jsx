const products = [
  {
    id: 1,
    title: "Minimal Chair",
    price: "$189",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    id: 2,
    title: "Modern Lamp",
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800",
  },
  {
    id: 3,
    title: "Wood Table",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    id: 4,
    title: "Premium Sofa",
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
  },
];

const Hero = () => {
  return (
    <section className="bg-zinc-50">

      {/* HERO */}

      <div className="max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center gap-16 px-6 lg:px-12">

        <div>

          <p className="uppercase tracking-[8px] text-gray-400 text-xs mb-5">
            New Collection 2026
          </p>

          <h1 className="text-6xl lg:text-8xl font-light leading-none text-zinc-900">
            Modern
            <br />
            Furniture
          </h1>

          <p className="text-gray-500 mt-8 max-w-md leading-8">
            Discover premium furniture created for modern interiors with
            minimalist aesthetics and timeless quality.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 duration-300 hover:shadow-2xl">
              Shop Now
            </button>

            <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white duration-300">
              Explore
            </button>

          </div>

          <div className="flex gap-12 mt-16">

            <div>
              <h2 className="text-3xl font-semibold">12K+</h2>
              <p className="text-gray-500 text-sm">Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold">350+</h2>
              <p className="text-gray-500 text-sm">Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold">4.9★</h2>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>

          </div>

        </div>

        <div className="relative group">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
            alt=""
            className="rounded-[40px] h-[750px] w-full object-cover duration-700 group-hover:scale-105"
          />

          <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">

            <p className="text-xs uppercase tracking-[4px] text-gray-400">
              Bestseller
            </p>

            <h3 className="text-2xl mt-2 font-semibold">
              Nordic Chair
            </h3>

            <div className="flex justify-between items-center mt-5 gap-10">

              <span className="text-xl font-bold">$189</span>

              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-zinc-800 duration-300">
                Buy
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-light">
            Featured Products
          </h2>

          <button className="text-sm uppercase tracking-[3px] hover:underline">
            View All
          </button>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl duration-500 group"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt=""
                  className="h-72 w-full object-cover group-hover:scale-110 duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-medium">
                  {item.title}
                </h3>

                <div className="flex justify-between items-center mt-5">

                  <span className="font-bold text-lg">
                    {item.price}
                  </span>

                  <button className="w-11 h-11 rounded-full bg-black text-white hover:rotate-90 duration-300">
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Hero;