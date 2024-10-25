import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function FaqSection() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div className="flex h-fit w-full flex-col justify-center gap-3 px-4 pt-3">
      <div>
        <p className="pt-3 text-center text-xl font-bold text-DocOrange lg:text-2xl">
          Frequently Asked Questions
        </p>
        <hr className="mx-auto mt-1 w-56 rounded-2xl border-2 text-center text-gray-400 lg:w-64" />
      </div>
      <div className="mx-auto w-full max-w-xl divide-y divide-white/5 rounded-xl bg-gray-700 lg:max-w-2xl xl:max-w-4xl">
        <Disclosure
          data-aos="fade-up"
          as="div"
          className="p-6"
          defaultOpen={true}
        >
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/2 font-semibold text-DocOrange lg:text-xl">
              How to place an order?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80 lg:text-lg">
            Choose desired product and click add to cart button then proceed
            your order by clicking bascket icon on right top corner.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure data-aos="fade-up" as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/2 font-semibold text-DocOrange lg:text-xl">
              What are the delivery methods?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80 lg:text-lg">
            Based on product size and your location, we ship items using
            motorcycle, bus and track.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure data-aos="fade-up" as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/2 font-semibold text-DocOrange lg:text-xl">
              How much does the delivery cost?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80 lg:text-lg">
            In Addis Ababa - 20 Birr per kilo meter.
            <span className="block">For Remote area fixed 300 Birr.</span>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure data-aos="fade-up" as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/2 font-semibold text-DocOrange lg:text-xl">
              How to exchange or return the goods?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80 lg:text-lg">
            You can return product with in 24 hours of delivery with out any
            discharge or additional payment.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}

export default FaqSection;
