import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

function FaqSection() {
  return (
    <div className="flex h-fit w-full flex-col justify-center gap-3 px-4 pt-3">
      <div>
        <p className="text-DocOrange pt-3 text-center text-xl font-bold">
          Frequently Asked Questions
        </p>
        <hr className="mx-auto mt-1 w-56 rounded-2xl border-2 text-center text-gray-400" />
      </div>
      <div className="mx-auto w-full max-w-xl divide-y divide-white/5 rounded-xl bg-gray-700">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-DocOrange text-sm/2 font-semibold">
              How to place an order?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80">
            Choose desired product and click add to cart button then proceed
            your order by clicking bascket icon on right top corner.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-DocOrange text-sm/2 font-semibold">
              What are the delivery methods?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80">
            Based on product size and your location, we ship items using
            motorcycle, bus and track.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-DocOrange text-sm/2 font-semibold">
              How much does the delivery cost?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80">
            In Addis Ababa - 20 Birr per kilo meter.
            <span className="block">For Remote area fixed 300 Birr.</span>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-DocOrange text-sm/2 font-semibold">
              How to exchange or return the goods?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm text-white/80">
            You can return product with in 24 hours of delivery with out any
            discharge or additional payment.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}

export default FaqSection;
