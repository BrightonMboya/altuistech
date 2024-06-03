import { useState, type Dispatch, type SetStateAction } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream relative">
      <div className="flex items-center justify-between px-5 py-3 lg:hidden">
        <a href="/">
          <img alt="logo" src="/imgs/logo.png" className="object-cover" />
        </a>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3333 30C33.7581 30.0005 34.1667 30.1631 34.4756 30.4547C34.7845 30.7464 34.9704 31.1449 34.9953 31.569C35.0202 31.993 34.8822 32.4106 34.6096 32.7364C34.3369 33.0621 33.9502 33.2715 33.5283 33.3217L33.3333 33.3333H6.66667C6.24187 33.3329 5.83328 33.1702 5.52439 32.8786C5.21549 32.587 5.02961 32.1884 5.00471 31.7643C4.97982 31.3403 5.11779 30.9227 5.39044 30.5969C5.66309 30.2712 6.04984 30.0618 6.47167 30.0117L6.66667 30H33.3333ZM33.3333 18.3333C33.7754 18.3333 34.1993 18.5089 34.5118 18.8215C34.8244 19.134 35 19.558 35 20C35 20.442 34.8244 20.8659 34.5118 21.1785C34.1993 21.4911 33.7754 21.6667 33.3333 21.6667H6.66667C6.22464 21.6667 5.80072 21.4911 5.48816 21.1785C5.17559 20.8659 5 20.442 5 20C5 19.558 5.17559 19.134 5.48816 18.8215C5.80072 18.5089 6.22464 18.3333 6.66667 18.3333H33.3333ZM33.3333 6.66666C33.7754 6.66666 34.1993 6.84225 34.5118 7.15481C34.8244 7.46737 35 7.8913 35 8.33332C35 8.77535 34.8244 9.19927 34.5118 9.51183C34.1993 9.82439 33.7754 9.99999 33.3333 9.99999H6.66667C6.22464 9.99999 5.80072 9.82439 5.48816 9.51183C5.17559 9.19927 5 8.77535 5 8.33332C5 7.8913 5.17559 7.46737 5.48816 7.15481C5.80072 6.84225 6.22464 6.66666 6.66667 6.66666H33.3333Z"
              fill="#066393"
            />
          </svg>
        </button>

        {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      </div>

      <div className="hidden md:items-center lg:flex lg:justify-between lg:px-[40px] lg:py-[20px] ">
        <a href="/">
          <img alt="logo" src="/imgs/logo-2.png" className="object-cover" />
        </a>

        <div className="">
          <ul className="flex items-center text-blue md:flex lg:gap-x-[30px]">
            <a href="/about-us">
              <li>About Us</li>
            </a>

            <a href="/team">
              <li>Our Team</li>
            </a>

            <a href="#">
              <li>Media</li>
            </a>

            <a href="/values">
              <li>Our Values and Inspiration</li>
            </a>
          </ul>
        </div>

        <button className="h-[47px] w-[150px] rounded-[4px] bg-black text-[15px]  text-white lg:h-[70px] lg:w-[200px] lg:py-[20px] lg:text-[20px]">
          Get Involved
        </button>
      </div>
    </nav>
  );
}

function MobileNav({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section className="bg-cream absolute left-0 top-0 z-[999] h-screen w-full ">
      <button
        className="absolute right-5 top-5"
        onClick={() => setIsOpen(false)}
      >
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.2082 3.55324L25.4469 0.791992L14.4998 11.7391L3.55275 0.791992L0.791504 3.55324L11.7386 14.5003L0.791504 25.4474L3.55275 28.2087L14.4998 17.2616L25.4469 28.2087L28.2082 25.4474L17.2611 14.5003L28.2082 3.55324Z"
            fill="#066393"
          />
        </svg>
      </button>
      <ul className="flex flex-col space-y-[20px] pl-[40px] pt-[50px]  text-[16px] text-blue">
        <a href="/">
          <li>Home</li>
        </a>

        <a href="/about-us">
          <li>About Us</li>
        </a>

        <a href="/team">
          <li>Our Team</li>
        </a>

        <a href="#">
          <li>Media</li>
        </a>

        <a href="/values">
          <li>Our Values and Inspiration</li>
        </a>

        <a href="/get-involved">
          <li>
            <button className="h-[47px] w-[150px] rounded-[4px] bg-orange text-[15px]  text-white lg:h-[81px] lg:w-[261px] lg:py-[26px] lg:text-[26px]">
              Get Involved
            </button>
          </li>
        </a>
      </ul>
    </section>
  );
}
