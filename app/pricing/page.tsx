"use client";

import React from 'react';
import toast, {Toaster} from 'react-hot-toast';

interface PricingCardProps {
  planTitle: string;
  planPrice: string;
  planFeatures: string[];
  planHeader: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  planTitle,
  planPrice,
  planFeatures,
  planHeader,
}) => {

    const handelToast = () => {
        toast('Thanks for your choice!!!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
    }
  return (
    <div className="border border-sky-700 p-4 rounded-lg shadow-md mx-4 w-96 mb-4">
      <h2 className="text-2xl font-semibold">{planTitle}</h2>
      <p className="text-3xl font-bold text-primary-500 mt-2">{planPrice}</p>
      <div className="border-t border-gray-300 mt-4 pt-4">
        <h3 className="text-lg font-semibold">{planHeader}</h3>
        <ul className="mt-4">
          {planFeatures.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button onClick={handelToast} className="bg-primary-500 text-white  bg-sky-700 font-semibold rounded-lg py-2 px-4 mt-4 hover:bg-primary-600 transition duration-300">
          Choisir le forfait
        </button>
        <Toaster />
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const freePlanFeatures: string[] = ["Avantage 1 gratuit", "Avantage 2 gratuit", "Avantage 3 gratuit", "Avantage 1 payant", "Avantage 2 payant", "Avantage 3 payant"];
  const paidPlanFeatures: string[] = ["Avantage 1 payant", "Avantage 2 payant", "Avantage 3 payant", "Avantage 1 payant", "Avantage 2 payant", "Avantage 3 payant"];
  
  return (
    <div className="mt-28 flex items-center justify-center">
      <div className="flex">
        <PricingCard planTitle="Gratuit" planPrice="0 €" planFeatures={freePlanFeatures} planHeader="Forfait Gratuit" />
        <PricingCard planTitle="Payant" planPrice="10 €/mois" planFeatures={paidPlanFeatures} planHeader="Forfait Payant" />
      </div>
    </div>
  );
};

export default Pricing;
