import React, { useState } from "react";

const Card = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="bg-neutral-0 dark:bg-neutral-800 rounded-2xl p-5 max-w-md flex flex-col h-[250px] justify-between shadow-2xl">
      <div className="flex items-start  justify-between gap-4">
        <img src="images/logo-speed-boost.svg" alt="icon-console-card" />
        <div className="flex flex-col gap-2 text-neutral-900 dark:text-neutral-0 ">
          <h1 className="text-2xl font-bold">SpeedBoost</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            repudiandae.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center  ">
        <button className="text-neutral-900 dark:text-neutral-0 border-1 rounded-3xl px-3 py-2 font-bold">Remove</button>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? "bg-red-500 dark:bg-red-500"  : "bg-neutral-300 dark:bg-neutral-600"
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-neutral-0 dark:bg-neutral-0 transition-transform ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
