import Image from "next/image";

import FAQ from "~/components/FAQ";

export default function Index() {
  return (
    <>
      <main className="font-cash flex flex-col items-center">
        <section className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#3372F2] via-[#0B41B0] to-[#164EC2] pt-[5rem] text-center">
          <h3 className="text-2xl font-medium text-white">
            We all have mental health, manage your{" "}
            <span className="text-yellow">Emotions.</span>
          </h3>
          <p className="px-5 pt-[1.5rem] text-lg text-white">
            ...with a supportive community, connect with compassionate
            therapists, explore insightful resources, and take meaningful steps
            towards a healthier, happier you. Your emotional well-being matters,
            and we're here to help you nurture it.
          </p>

          <Image
            src="/imgs/hero.png"
            className="mt-[3rem]"
            width={300}
            height={400}
            alt="Mental health platform"
          />
        </section>

        <section className="mt-5">
          <Image
            src="/imgs/group.png"
            width={300}
            height={400}
            alt="mental health platform in Rwanda"
            className=""
          />
        </section>
      </main>
      <div className="flex flex-col items-center bg-[#f5f8fe]">
        <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-yellow pl-5">
          <Image
            className=" pt-5"
            width={60}
            height={60}
            src="/imgs/icon-1.png"
            alt=""
          />
          <p className="mt-2 text-xl font-medium">Consult Therapist</p>
          <p className="text-sm">
            Connect with licensed mental health professionals directly through
            the app. Receive personalized support, guidance, and therapy
            sessions tailored to your needs, all from the comfort and
            convenience of your device.
          </p>
          <Image
            className="pr-5 pt-5"
            width={300}
            height={300}
            src="/imgs/phone-1.png"
            alt=""
          />
        </div>
        <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-white pl-5">
          <Image
            className=" pt-5"
            width={60}
            height={60}
            src="/imgs/icon-2.png"
            alt=""
          />
          <p className="mt-2 text-xl font-medium">Connect</p>
          <p className="text-sm">
            Join communities where you can share experiences, gain insights, and
            find comfort in knowing you're not alone on your journey towards
            emotional well-being.
          </p>
          <Image
            className="pr-5 pt-5"
            width={300}
            height={300}
            src="/imgs/phone-2.png"
            alt=""
          />
        </div>{" "}
        <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-white pl-5">
          <Image
            className="pt-5"
            width={60}
            height={60}
            src="/imgs/icon-3.png"
            alt=""
          />
          <p className="mt-2 text-xl font-medium">Explore Resources</p>
          <p className="text-sm">
            Access a wealth of mental health resources at your fingertips. From
            informative videos and insightful articles to engaging games,
            empower yourself with knowledge and tools to manage your mental
            health effectively.
          </p>
          <Image
            className="pr-5 pt-5"
            width={300}
            height={300}
            src="/imgs/phone-3.png"
            alt=""
          />
        </div>
        <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-[#1960F2] pl-5">
          <Image
            className=" pt-5"
            width={60}
            height={60}
            src="/imgs/icon-4.png"
            alt=""
          />

          <p className="mt-2 text-xl font-medium">Mental Health Tests</p>
          <p className="text-sm text-white">
            Take a series of tests tailored to understand your mental health
            better. From anxiety and PTSD to depression and substance use, gain
            insights into your emotional well-being and take proactive steps
            towards self-awareness and improvement.
          </p>
          <Image
            className="pr-5 pt-5"
            width={300}
            height={300}
            src="/imgs/phone-4.png"
            alt=""
          />
        </div>
      </div>

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

      <section className="pl-5 mt-10">
        <h2 className="font-medium">Common Questions about Emotions</h2>
        <p className="pt-5">
          The all-in-one companion for mental wellness, offering connection,
          assessment, resources, and professional support
        </p>
        <FAQ />
      </section>
    </>
  );
}
