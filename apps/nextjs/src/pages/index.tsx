import Image from "next/image";
import Link from "next/link";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import Contact from "~/components/Contact";
import FAQ from "~/components/FAQ";

export default function Index() {
  return (
    <>
      <main className="font-cash relative flex flex-col items-center justify-center">
        <div className="bg-gradient-to-b from-[#3372F2] via-[#0B41B0] to-[#164EC2]">
          <div className="">
            <div className="mx-10 flex items-center justify-between">
              <div className="p-5">
                <Image
                  src="/imgs/logo.png"
                  className=""
                  alt=""
                  width={90}
                  height={80}
                />
              </div>

              <div className="hidden items-center space-x-5 text-lg text-white lg:flex">
                <Link href="#features">
                  <p>Features</p>
                </Link>

                <Link href="#faq">
                
                <p>Faq</p>
                </Link>

                <Link href="#contact">
                
                <p>Contact us</p>
                </Link>
              </div>
            </div>
          </div>
          <section className="flex min-h-screen flex-col items-center  pt-[5rem] text-center md:flex-row md:justify-center md:pt-0 lg:space-x-10 lg:pt-0">
            <div className="lg:max-w-[60%]">
              <div className="  lg:text-left">
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
              <div className=" pl-5 pt-5 text-white lg:mt-5 lg:flex  lg:max-h-[200px] lg:w-[600px] lg:flex-row-reverse lg:rounded-md lg:border-[1px] lg:border-[#598df5] lg:bg-[#2f70f3] lg:pb-5">
                <div className="lg:pl-10 ">
                  <p className="lg:text-left">
                    Scan the QR code with your smart phone camera to download
                    the emotions app.
                  </p>
                  <div className="flex pt-5 lg:flex-col lg:text-left">
                    <p className="">or download the app on:</p>
                    <p className="pl-3 text-yellow lg:pl-0">
                      ios <span className="text-white">and</span> Android
                    </p>
                  </div>
                </div>

                <Image
                  src="/imgs/qr-code.png"
                  className="mt-5 lg:mt-0 lg:h-[150px] lg:w-[150px]"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
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

      <section
        className="bg-[#f5f8fe] lg:mt-10 lg:flex lg:items-center lg:justify-center"
        id="features"
      >
        <div className="flex flex-col items-center  lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-5">
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-yellow pl-5 lg:relative lg:h-[500px] lg:w-[600px]">
            <Image
              className="pt-5"
              width={60}
              height={60}
              src="/imgs/icon-1.png"
              alt=""
            />
            <p className="mt-2 text-xl font-medium lg:text-2xl">
              Consult Therapist
            </p>
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
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-white pl-5 lg:relative lg:h-[500px] lg:w-[600px]">
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
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-white pl-5 lg:relative lg:h-[500px] lg:w-[600px]">
            <Image
              className="pt-5"
              width={60}
              height={60}
              src="/imgs/icon-3.png"
              alt=""
            />
            <p className="mt-2 text-xl font-medium lg:text-2xl">
              Explore Resources
            </p>
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
          <div className="mt-5 h-[400px] w-[300px] overflow-hidden rounded-md bg-[#1960F2] pl-5 lg:relative lg:h-[500px] lg:w-[600px]">
            <Image
              className=" pt-5"
              width={60}
              height={60}
              src="/imgs/icon-4.png"
              alt=""
            />

            <p className="mt-2 text-xl font-medium text-white lg:text-2xl">
              Mental Health Tests
            </p>
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

      <section className="lg:flex lg:items-center lg:justify-center ">
        <section className="mt-5 bg-[#1960F2] pb-5 lg:relative lg:h-[300px] lg:w-[80%] lg:overflow-hidden lg:rounded-md">
          <h2 className="pl-5 pt-5 text-xl font-medium text-white lg:text-center lg:text-2xl">
            Get the Emotions app
          </h2>

          <div className="lg:flex lg:justify-center">
            <Image
              className="hidden pr-5 pt-5 lg:block"
              width={300}
              height={300}
              src="/imgs/preview.png"
              alt=""
            />

            <div className=" pl-5 pt-5 text-white lg:mt-5 lg:flex  lg:max-h-[200px] lg:flex-row-reverse lg:rounded-md lg:border-[1px] lg:border-[#598df5] lg:bg-[#2f70f3]">
              <div className="lg:max-w-[400px] lg:pl-10">
                <p>
                  Scan the QR code with your smart phone camera to download the
                  emotions app.
                </p>
                <div className="flex pt-5 lg:flex-col">
                  <p className="">or download the app on:</p>
                  <p className="pl-3 text-yellow lg:pl-0">
                    ios <span className="text-white">and</span> Android
                  </p>
                </div>
              </div>

              <Image
                src="/imgs/qr-code.png"
                className="mt-5 lg:mt-0 lg:h-[150px] lg:w-[150px]"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>
      </section>

      <section className="mt-10 pl-5 lg:flex lg:flex-col lg:items-center lg:text-center">
        <h2 className="font-medium lg:text-xl">
          Common Questions about Emotions
        </h2>
        <p className="pt-5 lg:pt-3 lg:text-lg">
          The all-in-one companion for mental wellness, offering connection,
          assessment, resources, and professional support
        </p>
        <FAQ />
      </section>

      <Contact />
      <footer className="bg-black py-5 pl-5 text-white ">
        <section className="flex flex-col gap-5 space-y-5 lg:flex-row lg:justify-around lg:space-y-0">
          <Image
            src="/imgs/logo.png"
            className=""
            alt=""
            width={90}
            height={80}
          />

          <div className="text-lg">
            <p className="">Info@altruistechinnovations.com</p>
            <p>+250786468892</p>
          </div>

          <div>
            <p>Follow us</p>
            <div className="flex items-center space-x-5 text-yellow">
              <Link href="https://www.instagram.com/emotions_altruistech?igsh=MTVtMTVmN2hzZTQzYw%3D%3D&utm_source=qr">
                <InstagramLogoIcon height={26} width={26} />
              </Link>

              <Link href="https://www.linkedin.com/company/altruistech-innovations/">
                <LinkedInLogoIcon height={26} width={26} />
              </Link>
            </div>
          </div>
        </section>

        <p className="mt-10 text-center text-white">
          2023 Altruistech. All right reserved.
        </p>
      </footer>
    </>
  );
}
