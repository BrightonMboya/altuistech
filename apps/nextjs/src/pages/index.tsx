import Image from "next/image";

import FAQ from "~/components/FAQ";

export default function Index() {
  return (
    <>
      <main className="font-cash flex flex-col items-center justify-center ">
        <div className="">
          <section className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#3372F2] via-[#0B41B0] to-[#164EC2] pt-[5rem] text-center md:flex-row md:justify-center md:pt-0 lg:space-x-10 lg:pt-0">
            <div className=" lg:max-w-[60%] lg:text-left">
              <h3 className="text-2xl font-medium text-white lg:max-w-[70%] lg:text-4xl">
                We all have mental health, manage your{" "}
                <span className="text-yellow">Emotions.</span>
              </h3>
              <p className="px-5 pt-[1.5rem] text-lg text-white lg:px-0 lg:text-xl">
                ...with a supportive community, connect with compassionate
                therapists, explore insightful resources, and take meaningful
                steps towards a healthier, happier you. Your emotional
                well-being matters, and we're here to help you nurture it.
              </p>
            </div>

            <div className="lg:w-[400px]">
              <Image
                src="/imgs/hero.png"
                className="mt-[3rem]"
                width={300}
                height={400}
                alt="Mental health platform"
              />
            </div>
          </section>
        </div>

        <section className="relative mt-5 h-[200px] w-[400px] lg:h-[400px] lg:w-[800px]">
          <Image
            src="/imgs/group.png"
            layout="fill"
            // width={300}
            // height={400}
            alt="mental health platform in Rwanda"
            className="object-fit"
          />
        </section>
      </main>

      <section className="bg-[#f5f8fe] lg:mt-10 lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col items-center  lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-5">
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-yellow pl-5 lg:h-[500px] lg:w-[600px] lg:relative">
            <Image
              className="pt-5"
              width={60}
              height={60}
              src="/imgs/icon-1.png"
              alt=""
            />
            <p className="mt-2 text-xl font-medium lg:text-2xl">Consult Therapist</p>
            <p className="text-sm lg:text-lg">
              Connect with licensed mental health professionals directly through
              the app. Receive personalized support, guidance, and therapy
              sessions tailored to your needs, all from the comfort and
              convenience of your device.
            </p>
            <Image
              className="pr-5 pt-5 lg:absolute lg:bottom-0 lg:left-[25%]"
              width={300}
              height={300}
              src="/imgs/phone-1.png"
              alt=""
            />
          </div>
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-white pl-5 lg:h-[500px] lg:w-[600px] lg:relative">
            <Image
              className=" pt-5"
              width={60}
              height={60}
              src="/imgs/icon-2.png"
              alt=""
            />
            <p className="mt-2 text-xl font-medium lg:text-2xl">Connect</p>
            <p className="text-sm lg:text-lg">
              Join communities where you can share experiences, gain insights,
              and find comfort in knowing you're not alone on your journey
              towards emotional well-being.
            </p>
            <Image
              className="pr-5 pt-5 lg:absolute lg:bottom-0 lg:left-[25%]"
              width={300}
              height={300}
              src="/imgs/phone-2.png"
              alt=""
            />
          </div>{" "}
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-white pl-5 lg:h-[500px] lg:w-[600px] lg:relative">
            <Image
              className="pt-5"
              width={60}
              height={60}
              src="/imgs/icon-3.png"
              alt=""
            />
            <p className="mt-2 text-xl font-medium lg:text-2xl">Explore Resources</p>
            <p className="text-sm lg:text-lg">
              Access a wealth of mental health resources at your fingertips.
              From informative videos and insightful articles to engaging games,
              empower yourself with knowledge and tools to manage your mental
              health effectively.
            </p>
            <Image
              className="pr-5 pt-5 lg:absolute lg:bottom-0 lg:left-[25%]"
              width={300}
              height={300}
              src="/imgs/phone-3.png"
              alt=""
            />
          </div>
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-[#1960F2] pl-5 lg:h-[500px] lg:w-[600px] lg:relative">
            <Image
              className=" pt-5"
              width={60}
              height={60}
              src="/imgs/icon-4.png"
              alt=""
            />

            <p className="mt-2 text-xl font-medium lg:text-2xl text-white">Mental Health Tests</p>
            <p className="text-sm text-white lg:text-lg">
              Take a series of tests tailored to understand your mental health
              better. From anxiety and PTSD to depression and substance use,
              gain insights into your emotional well-being and take proactive
              steps towards self-awareness and improvement.
            </p>
            <Image
              className="pr-5 pt-5 lg:absolute lg:bottom-0 lg:left-[25%]"
              width={300}
              height={300}
              src="/imgs/phone-4.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="mt-5 bg-[#1960F2] pb-5">
        <h2 className="pl-5 pt-5 text-xl font-medium text-white">
          Get the Emotions app
        </h2>

        <div className=" pl-5 pt-5 text-white">
          <p>
            Scan the QR code with your smart phone camera to download the
            emotions app.
          </p>
          <div className="flex pt-5 ">
            <p className="">or download the app on:</p>
            <p className="pl-3">
              ios <span>and</span> Android
            </p>
          </div>

          <Image
            src="/imgs/qr-code.png"
            className="mt-5"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </section>

      <section className="mt-10 pl-5 lg:text-center lg:flex lg:items-center lg:flex-col">
        <h2 className="font-medium lg:text-xl">Common Questions about Emotions</h2>
        <p className="pt-5 lg:text-lg lg:pt-3">
          The all-in-one companion for mental wellness, offering connection,
          assessment, resources, and professional support
        </p>
        <FAQ />
      </section>
    </>
  );
}
