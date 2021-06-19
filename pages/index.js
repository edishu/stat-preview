import Head from "next/head";

export default function Home() {
  return (
    <div
      className="min-h-screen min-w-screen 
    bg-backBlue
    flex justify-center items-center"
    >
      <Head>
        <title>Stats preview card</title>
        <link rel="icon" href="/favicon-32x32.png"></link>
      </Head>
      <div
        className="w-3/4 rounded-xl overflow-hidden
      flex"
      >
        <div className="w-1/2 bg-cardBlue text-white p-16 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Get <sapn className="text-softViolet">insights</sapn> that help
              your business gorw.
            </h2>

            <p className="w-10/12 text-paraWhite text-sm mt-7">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer exprience, and overall efficiency.
            </p>
          </div>
          <div className="flex">
            <span className="w-1/3">
              {/* Inter */}
              <h4 className="text-2xl font-bold mb-1">10k+</h4>
              {/* Lexend Deca */}
              <p className="text-statWhit uppercase text-xs font-lexend">
                companies
              </p>
            </span>
            <span className="w-1/3">
              <h4 className="text-2xl font-bold mb-1">314</h4>
              <p className="text-statWhit uppercase text-xs font-lexend">
                templates
              </p>
            </span>
            <span className="w-1/3">
              <h4 className="text-2xl font-bold mb-1">12M+</h4>
              <p className="text-statWhit uppercase text-xs font-lexend">
                queries
              </p>
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-softViolet bg-desktopImg bg-blend-multiply">
          <img
            className="opacity-0"
            src="/image-header-desktop.jpg"
            alt="Analysts working"
          ></img>
        </div>
      </div>
    </div>
  );
}
