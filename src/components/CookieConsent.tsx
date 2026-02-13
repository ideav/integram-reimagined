import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem('cookieAccept');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccept', '1');
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimatingOut(false);
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed z-[1000] bottom-5 left-5 right-5 max-w-[75%] p-0 rounded-[22px] bg-[#e52c7b] transition-opacity duration-300 ${
        isAnimatingOut ? 'opacity-0' : 'opacity-100'
      } max-[480px]:max-w-full max-[480px]:left-[10px] max-[480px]:right-[10px] max-[480px]:bottom-[10px]`}
      style={{
        animation: isAnimatingOut ? 'none' : 'fadeIn 0.5s ease-in-out',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      <div className="grid justify-items-start gap-[15px] text-base p-5 leading-6 bg-white rounded-[10px] shadow-[0_5px_15px_0px_rgba(0,0,0,0.15)] m-[3px]">
        <div className="text-[#333333]">
          Наш сайт использует cookies, включая сервисы веб-аналитики (файлы с данными о прошлых посещениях сайта). Продолжая пользоваться сайтом, вы соглашаетесь с{' '}
          <a href="/terms.html" className="text-[#01356f]">
            Правилами использования
          </a>
          .
        </div>
        <button
          onClick={handleAccept}
          className="bg-[#e1e1e1] text-[#878787] border-none py-2 px-5 rounded-[5px] cursor-pointer text-sm transition-all duration-300 hover:bg-[#01356f] hover:text-white"
        >
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
