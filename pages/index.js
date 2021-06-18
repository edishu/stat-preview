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
        <div className="w-1/2 bg-cardBlue text-white ">
          <h2>
            Get <sapn>insights</sapn> that help your business gorw.
          </h2>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer exprience, and overall efficiency.
          </p>
          <div>
            <span>
              <h4>10k+</h4>
              <p>companies</p>
            </span>
            <span>
              <h4>314</h4>
              <p>templates</p>
            </span>
            <span>
              <h4>12M+</h4>
              <p>queries</p>
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-softViolet bg-desktopImg bg-blend-multiply">
          <img className="opacity-0" src="/image-header-desktop.jpg" alt="Analysts working"></img>
        </div>
      </div>
    </div>
  );
}
