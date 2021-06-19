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
        className="rounded-xl overflow-hidden
        mx-6 my-20 md:w-9/12 md:m-0
        flex flex-col md:flex-row-reverse"
      >
        <div className="bg-softViolet bg-desktopImg bg-blend-multiply bg-center bg-cover bg-no-repeat
        md:w-6/12">
          <img
            className="opacity-0"
            src="/image-header-desktop.jpg"
            alt="Analysts working"
          ></img>
        </div>
        <div className="bg-cardBlue text-white p-16
        flex flex-col justify-between
        md:w-6/12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold">
              Get <sapn className="text-softViolet">insights</sapn> that help
              your business gorw.
            </h2>

            <p className="text-paraWhite text-lg md:text-sm mt-5 md:mt-7">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer exprience, and overall efficiency.
            </p>
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0">
            <span className="text-center md:text-left mt-8 md:mt-0 md:w-4/12">
              <h4 className="text-2xl font-bold mb-1">10k+</h4>
              <p className="text-statWhit uppercase text-xs font-lexend">
                companies
              </p>
            </span>
            <span className="text-center md:text-left mt-8 md:mt-0 md:w-4/12">
              <h4 className="text-2xl font-bold mb-1">314</h4>
              <p className="text-statWhit uppercase text-xs font-lexend">
                templates
              </p>
            </span>
            <span className="text-center md:text-left mt-8 md:mt-0 md:w-4/12">
              <h4 className="text-2xl font-bold mb-1">12M+</h4>
              <p className="text-statWhit uppercase text-xs font-lexend">
                queries
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
