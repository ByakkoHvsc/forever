import React, { useState } from 'react';

const NewsletterBox = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Simulate a successful subscription (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email" required />
        <button type="submit" className="bg-black text-white text-xs px-10 py-4">
          SUBSCRIBE
        </button>
      </form>
      {isSubscribed && (
        <p className="text-pink-800 mt-3">Thank you for subscribing!</p>
      )}
    </div>
  );
};

export default NewsletterBox;