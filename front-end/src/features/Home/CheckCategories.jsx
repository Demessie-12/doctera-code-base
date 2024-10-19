import React from "react";

function CheckCategories() {
  return (
    <div className="w-full px-2">
      <p className="text-DocOrange mx-auto flex w-fit text-xl font-bold capitalize md:text-2xl">
        Categories for you
      </p>
      <hr className="mx-auto mb-3 mt-1 w-36 rounded-2xl border-2 text-center text-gray-400 md:w-44" />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        <div className="bg-trusted rounded-2xl">
          <div className="bg-DocBlue/50 mx-auto flex h-fit justify-center py-20 align-middle font-bold">
            <span className="bg-DocOrange rounded-full px-2 py-2 text-white">
              Imaging
            </span>
          </div>
        </div>
        <div className="bg-trusted rounded-2xl">
          <div className="bg-DocBlue/50 mx-auto flex h-fit justify-center py-20 align-middle font-bold">
            <span className="bg-DocOrange rounded-full px-2 py-2 text-white">
              Diagnostic Tools
            </span>
          </div>
        </div>
        <div className="bg-trusted rounded-2xl">
          <div className="bg-DocBlue/50 mx-auto flex h-fit justify-center py-20 align-middle font-bold">
            <span className="bg-DocOrange rounded-full px-2 py-2 text-white">
              Lab Equipments
            </span>
          </div>
        </div>
        <div className="bg-trusted rounded-2xl">
          <div className="bg-DocBlue/50 mx-auto flex h-fit justify-center py-20 align-middle font-bold">
            <span className="bg-DocOrange rounded-full px-2 py-2 text-white">
              Homecare
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckCategories;
