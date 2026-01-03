import React from "react";
import Text from "./Text";

const WhyTrustUs = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const [canHover, setCanHover] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover)");
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    setCanHover(mq.matches);
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", handler as EventListener);
      return () => mq.removeEventListener("change", handler as EventListener);
    }
    return undefined;
  }, []);

  const reasons = [
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.5032 16.2237L33.2172 12.5098C37.399 8.32801 42.8737 6.59343 48.6677 6.30998C50.9215 6.19973 52.0482 6.14461 52.9517 7.04821C53.8555 7.95178 53.8002 9.07858 53.69 11.3322C53.4065 17.1263 51.672 22.6011 47.4902 26.7828L43.7762 30.4968C40.7177 33.5553 39.8482 34.425 40.4902 37.7425C41.124 40.2768 41.7372 42.7308 39.8945 44.5735C37.6592 46.8088 35.6202 46.8088 33.385 44.5735L15.4264 26.615C13.1912 24.3797 13.1911 22.3408 15.4264 20.1055C17.2692 18.2627 19.7232 18.8761 22.2574 19.5097C25.575 20.1518 26.4447 19.2822 29.5032 16.2237Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M42.4922 17.5H42.5147" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.25 53.75L18.75 41.25" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M21.25 53.75L26.25 48.75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M6.25 38.75L11.25 33.75" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      text: "Independent Living Skills Training",
      longText: "Learn essential life skills, from budgeting and cooking to household management and personal care for confident, independent living.",
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.9276 43.7506H20.0088C12.5395 43.7506 8.80487 43.7506 6.48446 41.3862C4.16406 39.0216 4.16406 35.216 4.16406 27.6048C4.16406 19.9936 4.16406 16.188 6.48446 13.8235C8.80487 11.459 12.5395 11.459 20.0088 11.459H27.9311C35.4003 11.459 39.1351 11.459 41.4555 13.8235C43.2407 15.6427 43.6524 18.315 43.7474 22.9173" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M35.6505 27.6145C36.0351 27.2601 36.2273 27.083 36.4609 27.083C36.6944 27.083 36.8867 27.2601 37.2713 27.6145L38.7561 28.9824C38.9355 29.1476 39.0251 29.2303 39.1365 29.2711C39.248 29.3122 39.3698 29.3074 39.6136 29.2978L41.6196 29.219C42.1361 29.1986 42.3944 29.1886 42.5715 29.3374C42.7486 29.4861 42.783 29.7424 42.8519 30.2547L43.1284 32.3074C43.1603 32.5447 43.1763 32.6632 43.234 32.7645C43.2919 32.8657 43.3859 32.9397 43.574 33.0878L45.1896 34.3597C45.5894 34.6745 45.7894 34.8318 45.829 35.0568C45.8686 35.2818 45.7344 35.4978 45.4661 35.9303L44.3703 37.6961C44.2448 37.8982 44.1823 37.9993 44.1623 38.1134C44.1423 38.2274 44.1671 38.3438 44.2167 38.5763L44.6515 40.6147C44.7582 41.1155 44.8117 41.3659 44.6969 41.5649C44.5823 41.7636 44.3388 41.843 43.8519 42.0016L41.9234 42.6297C41.6936 42.7045 41.5786 42.742 41.4888 42.818C41.399 42.8943 41.3434 43.0016 41.2321 43.2161L40.2901 45.0318C40.0498 45.4945 39.9298 45.7257 39.7111 45.8055C39.4923 45.8853 39.2515 45.7855 38.7701 45.5857L36.9192 44.818C36.693 44.7243 36.5801 44.6774 36.4609 44.6774C36.3417 44.6774 36.2288 44.7243 36.0026 44.818L34.1517 45.5857C33.6703 45.7855 33.4294 45.8853 33.2107 45.8055C32.9919 45.7257 32.8719 45.4945 32.6317 45.0318L31.6896 43.2161C31.5784 43.0016 31.5228 42.8943 31.433 42.818C31.3432 42.742 31.2282 42.7045 30.9984 42.6297L29.0698 42.0016C28.583 41.843 28.3394 41.7636 28.2248 41.5649C28.1101 41.3659 28.1636 41.1155 28.2703 40.6147L28.7051 38.5763C28.7546 38.3438 28.7794 38.2274 28.7594 38.1134C28.7394 37.9993 28.6769 37.8982 28.5515 37.6961L27.4557 35.9303C27.1873 35.4978 27.0532 35.2818 27.0928 35.0568C27.1323 34.8318 27.3323 34.6745 27.7321 34.3597L29.3478 33.0878C29.5359 32.9397 29.6298 32.8657 29.6878 32.7645C29.7455 32.6632 29.7615 32.5447 29.7934 32.3074L30.0698 30.2547C30.1388 29.7424 30.1732 29.4861 30.3503 29.3374C30.5273 29.1886 30.7857 29.1986 31.3021 29.219L33.3082 29.2978C33.5519 29.3074 33.6738 29.3122 33.7853 29.2711C33.8967 29.2303 33.9863 29.1476 34.1657 28.9824L35.6505 27.6145Z" stroke="currentColor" strokeWidth="3"/>
          <path d="M33.336 11.4587L33.1289 10.8148C32.0977 7.60635 31.5821 6.00214 30.3544 5.08455C29.1269 4.16699 27.4962 4.16699 24.235 4.16699H23.6869C20.4256 4.16699 18.795 4.16699 17.5674 5.08455C16.3398 6.00214 15.8242 7.60635 14.7929 10.8148L14.5859 11.4587" stroke="currentColor" strokeWidth="3"/>
        </svg>
      ),
      text: "Employment Readiness Programmes",
      longText: "Prepare for the workplace with expert guidance in CV writing, interview skills, professional behaviour, and career planning.",
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.3307 35.417H20.8307M16.6641 8.33366V16.667M10.4141 4.16699V20.8337M4.16406 10.417V14.5837M22.9141 10.417V14.5837M8.33073 27.0837C8.3349 35.7337 8.43073 40.1566 11.0766 42.942C13.8224 45.8337 18.2432 45.8337 27.0807 45.8337H28.0182C35.9495 45.8337 39.9141 45.8337 42.5453 43.4691C42.9189 43.133 43.2655 42.7677 43.5849 42.3732C45.8307 39.6045 45.8307 35.4316 45.8307 27.0837C45.8307 18.7357 45.8307 14.5587 43.5849 11.792C43.2671 11.3999 42.9188 11.0334 42.5432 10.6962C40.2474 8.62533 36.9266 8.36699 30.8307 8.33366H29.1641" stroke="currentColor" strokeWidth="3.125" strokeLinecap="round"/>
        </svg>
      ),
      text: "Vocational Training",
      longText: "Gain control of your finances through practical lessons on banking, saving, debt management, and benefits awareness.",
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.9974 45.8337C36.5033 45.8337 45.8307 36.5063 45.8307 25.0003C45.8307 13.4944 36.5033 4.16699 24.9974 4.16699C13.4915 4.16699 4.16406 13.4944 4.16406 25.0003C4.16406 36.5063 13.4915 45.8337 24.9974 45.8337Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M16.6641 25.0003C16.6641 37.5003 24.9974 45.8337 24.9974 45.8337C24.9974 45.8337 33.3307 37.5003 33.3307 25.0003C33.3307 12.5003 24.9974 4.16699 24.9974 4.16699C24.9974 4.16699 16.6641 12.5003 16.6641 25.0003Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M43.75 31.25H6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M43.75 18.75H6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Digital & Technology Skills",
      longText: "Build digital confidence and employability with hands-on training in everyday tech and online communication.",
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.9767 7.28228C35.0344 5.32078 30.2102 4.16699 25 4.16699C19.7898 4.16699 14.9656 5.32078 11.0233 7.28228C9.08996 8.2442 8.12331 8.72516 7.18667 10.2374C6.25 11.7496 6.25 13.2138 6.25 16.1423V23.4109C6.25 35.2514 15.7133 41.8345 21.1938 44.6541C22.7223 45.4405 23.4865 45.8337 25 45.8337C26.5135 45.8337 27.2777 45.4405 28.806 44.6541C34.2867 41.8345 43.75 35.2514 43.75 23.4109V16.1423C43.75 13.2138 43.75 11.7496 42.8133 10.2374C41.8767 8.72514 40.91 8.2442 38.9767 7.28228Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M31.25 22.917C31.25 26.3687 28.4519 29.167 25 29.167C21.5481 29.167 18.75 26.3687 18.75 22.917C18.75 19.4652 21.5481 16.667 25 16.667C28.4519 16.667 31.25 19.4652 31.25 22.917Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Safeguarding & Personal Safety",
      longText: "Stay informed and empowered with awareness programmes focused on personal safety, boundaries, and self-protection.",
    },
    {
      icon: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.79369 45.8228V38.4276C8.79369 35.7789 8.10004 34.402 6.7366 32.0999C5.10219 29.3405 4.16406 26.1201 4.16406 22.6807C4.16406 12.4559 12.4551 4.16699 22.6826 4.16699C32.9101 4.16699 41.2011 12.4559 41.2011 22.6807C41.2011 23.8885 41.2011 24.4924 41.2516 24.831C41.372 25.6403 41.7497 26.3366 42.1211 27.0572L45.8307 34.2518L42.9153 35.7091C42.0703 36.1314 41.648 36.3426 41.3536 36.7324C41.0593 37.122 40.9766 37.562 40.8107 38.4418L40.7945 38.5276C40.4149 40.5432 39.9959 42.7682 38.8159 44.172C38.3993 44.6676 37.8834 45.0703 37.3014 45.3543C36.3405 45.8228 35.1593 45.8228 32.7968 45.8228C31.7036 45.8228 30.6074 45.848 29.5145 45.8216C26.9239 45.7585 24.9974 43.5803 24.9974 41.0512" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29.9724 21.9409C29.0843 21.9409 28.2743 21.6049 27.6607 21.052M29.9724 21.9409C29.9724 24.3282 28.5893 26.5957 25.9268 26.5957C23.2643 26.5957 21.8813 28.863 21.8813 31.2503M29.9724 21.9409C34.4501 21.9409 34.4501 14.959 29.9724 14.959C29.5655 14.959 29.1751 15.0296 28.8124 15.1592C29.0311 9.95489 21.5284 8.54199 19.8291 13.4174M19.8291 13.4174C21.0668 14.2526 21.8813 15.6737 21.8813 17.2863M19.8291 13.4174C15.9712 10.8135 10.8283 15.4859 13.275 19.6519C9.16877 20.2676 9.60779 26.5957 13.7901 26.5957C14.9629 26.5957 15.9997 26.0095 16.6273 25.1124" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Mental Health & Wellbeing Support",
      longText: "Develop emotional resilience and confidence through mentoring, coaching, and holistic wellbeing support.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {reasons.map((reason, index) => (
        <div
          className="flex items-center flex-col justify-center py-10 gradient-border cursor-pointer min-h-[250px] relative"
          key={index}
          onMouseEnter={canHover ? () => setHoveredIndex(index) : undefined}
          onMouseLeave={canHover ? () => setHoveredIndex(null) : undefined}
          onPointerUp={() => {
            setExpandedIndex((prev) => (prev === index ? null : index));
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setExpandedIndex((prev) => (prev === index ? null : index));
            }
          }}
        >
          {expandedIndex === index || (canHover && hoveredIndex === index) ? (
            <div
              className="absolute -inset-8 rounded-full pointer-events-none transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle at center, rgba(66,133,244,0.15) 0%, rgba(66,133,244,0.05) 55%, rgba(66,133,244,0) 100%)",
                filter: "blur(20px)",
              }}
            ></div>
          ) : null}
          <div className="flex items-center flex-col justify-center transition-opacity duration-300 h-full w-full" aria-expanded={expandedIndex === index}>
            {expandedIndex === index || (canHover && hoveredIndex === index) ? (
              <Text type="body" className="text-center px-6">
                {reason.longText}
              </Text>
            ) : (
              <>
                <div className="text-black dark:text-white">{reason.icon}</div>
                <Text type="body" className="mt-4 text-center font-semibold text-xl text-[#A7C8FF] px-12">
                  {reason.text}
                </Text>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyTrustUs;
