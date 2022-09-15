import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import GreenBtn from '../GreenBtn/GreenBtn';

const PriceCard = ({ priceCategory, dollar, features }) => {
  return (
    <div className="bg-white text-slate-900 m-4 rounded-xl overflow-hidden shadow-2xl">
      <div className="text-center bg-indigo-900 text-white py-4 uppercase text-2xl">
        <p>{priceCategory}</p>
      </div>
      <div className="p-4 flex justify-center">
        <p className="text-6xl font-bold py-4 flex ">
          {`$${dollar} `}
          <span className="text-xl text-indigo-900 flex flex-col justify-end">
            /mo
          </span>
        </p>
      </div>

      <p className="text-2xl px-4 py-8 text-slate-500">
        Now radiant parting quoth all spoken she tempest seeming of, gently door
        you was many the the raven perched. Both.
      </p>

      <div className="text-2xl">
        <div className="px-4 ">
          {features.map(({ id, title }) => (
            <p
              key={id}
              className="flex duration-500  items-center py-3 text-2xl hover:text-3xl"
            >
              <FaPlusCircle className="w-16 mr-3 text-lightColor" /> {title}
            </p>
          ))}
        </div>

        <GreenBtn
          title="get started"
          className="capitalize w-full py-4 mt-14 rounded-none hover:border-none hover:text-indigo-900 hover:font-bold hover:text-3xl"
        />
      </div>
    </div>
  );
};

export default PriceCard;
