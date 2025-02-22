import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#000000] text-light p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between">
      <p className="text-sm sm:text-base">
        We use cookies to enhance your experience. By continuing, you agree to
        our{" "}
        <a href="/privacyPolicy" className="text-primary underline">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-3 sm:mt-0 space-x-3">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-primary text-white rounded-md"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
