const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="135"
      height="37"
      viewBox="0 0 135 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.7254 23.7872V20.216H50.959C52.207 20.216 53.1382 19.9568 53.7526 19.4384C54.367 18.92 54.6742 18.0464 54.6742 16.8176C54.6742 15.7424 54.3862 14.9264 53.8102 14.3696C53.2534 13.8128 52.3606 13.5344 51.1318 13.5344H46.7254V9.992H51.2758C52.5046 9.992 53.6086 10.136 54.5878 10.424C55.5862 10.712 56.4406 11.144 57.151 11.72C57.8614 12.2768 58.399 12.9968 58.7638 13.88C59.1478 14.744 59.3398 15.7616 59.3398 16.9328C59.3398 18.4304 58.9942 19.688 58.303 20.7056C57.631 21.7232 56.623 22.4912 55.279 23.0096C53.9542 23.528 52.2934 23.7872 50.2966 23.7872H46.7254ZM43.327 29V9.992H47.9638V29H43.327ZM68.9113 29.4032C67.3753 29.4032 66.0121 29.1056 64.8217 28.5104C63.6505 27.9152 62.7289 27.0224 62.0569 25.832C61.3849 24.6416 61.0489 23.1536 61.0489 21.368C61.0489 19.5824 61.3849 18.104 62.0569 16.9328C62.7289 15.7424 63.6601 14.8592 64.8505 14.2832C66.0409 13.688 67.4041 13.3904 68.9401 13.3904C70.4761 13.3904 71.8393 13.688 73.0297 14.2832C74.2201 14.8784 75.1513 15.7712 75.8233 16.9616C76.4953 18.1328 76.8313 19.6112 76.8313 21.3968C76.8313 23.2208 76.4857 24.728 75.7945 25.9184C75.1033 27.1088 74.1529 27.992 72.9433 28.568C71.7529 29.1248 70.4089 29.4032 68.9113 29.4032ZM69.0553 26.0336C69.7465 26.0336 70.3225 25.88 70.7833 25.5728C71.2441 25.2464 71.5897 24.7568 71.8201 24.104C72.0505 23.4512 72.1657 22.6448 72.1657 21.6848C72.1657 20.6672 72.0409 19.8128 71.7913 19.1216C71.5417 18.4112 71.1673 17.8736 70.6681 17.5088C70.1881 17.1248 69.5641 16.9328 68.7961 16.9328C68.1433 16.9328 67.5769 17.096 67.0969 17.4224C66.6361 17.7296 66.2905 18.2096 66.0601 18.8624C65.8297 19.5152 65.7145 20.3312 65.7145 21.3104C65.7145 22.8848 66.0025 24.0656 66.5785 24.8528C67.1737 25.64 67.9993 26.0336 69.0553 26.0336ZM79.5473 33.8672V21.5696V13.7936H83.3489L83.4065 18.1136L83.9249 18.1712C84.0977 17.096 84.4049 16.2032 84.8465 15.4928C85.2881 14.7824 85.8545 14.2544 86.5457 13.9088C87.2561 13.5632 88.0625 13.3904 88.9649 13.3904C90.3089 13.3904 91.4609 13.7168 92.4209 14.3696C93.4001 15.0224 94.1489 15.9536 94.6673 17.1632C95.1857 18.3728 95.4449 19.8224 95.4449 21.512C95.4449 23.0096 95.2145 24.3536 94.7537 25.544C94.3121 26.7344 93.6305 27.6752 92.7089 28.3664C91.8065 29.0576 90.6545 29.4032 89.2529 29.4032C88.3121 29.4032 87.5153 29.24 86.8625 28.9136C86.2097 28.568 85.6529 28.0688 85.1921 27.416C84.7505 26.7632 84.3761 25.9472 84.0689 24.968H83.5217C83.6369 25.4864 83.7425 26.0144 83.8385 26.552C83.9345 27.0896 84.0113 27.608 84.0689 28.1072C84.1457 28.6064 84.1841 29.0864 84.1841 29.5472V33.8672H79.5473ZM87.5537 25.7456C88.1873 25.7456 88.7249 25.5728 89.1665 25.2272C89.6273 24.8816 89.9825 24.392 90.2321 23.7584C90.4817 23.1248 90.6065 22.3856 90.6065 21.5408C90.6065 20.6384 90.4721 19.8704 90.2033 19.2368C89.9537 18.584 89.5889 18.0848 89.1089 17.7392C88.6289 17.3744 88.0721 17.192 87.4385 17.192C86.8433 17.192 86.3345 17.3264 85.9121 17.5952C85.5089 17.8448 85.1729 18.1808 84.9041 18.6032C84.6545 19.0064 84.4721 19.4384 84.3569 19.8992C84.2417 20.36 84.1841 20.792 84.1841 21.1952V21.8288C84.1841 22.1936 84.2321 22.5584 84.3281 22.9232C84.4241 23.288 84.5681 23.6432 84.7601 23.9888C84.9521 24.3152 85.1825 24.6128 85.4513 24.8816C85.7201 25.1504 86.0273 25.3616 86.3729 25.5152C86.7377 25.6688 87.1313 25.7456 87.5537 25.7456ZM98.2223 29V8.2352H102.773V19.6976C103.33 19.2944 103.848 18.8624 104.328 18.4016C104.827 17.9408 105.278 17.4608 105.682 16.9616C106.104 16.4624 106.478 15.9536 106.805 15.4352C107.15 14.8976 107.448 14.3504 107.698 13.7936H112.997C112.747 14.5424 112.402 15.2912 111.96 16.04C111.518 16.7696 110.981 17.4512 110.347 18.0848C109.714 18.6992 108.955 19.2272 108.072 19.6688C107.208 20.1104 106.229 20.408 105.134 20.5616V21.08C106.517 20.8112 107.65 20.8112 108.533 21.08C109.435 21.3296 110.155 21.7424 110.693 22.3184C111.23 22.8944 111.643 23.5664 111.931 24.3344C112.219 25.1024 112.459 25.8608 112.651 26.6096L113.256 29H108.216L107.928 27.56C107.736 26.6192 107.506 25.8128 107.237 25.1408C106.987 24.4688 106.622 23.9504 106.142 23.5856C105.662 23.2016 104.971 23.0096 104.069 23.0096H102.773V29H98.2223ZM115.66 29V13.7936H120.297V29H115.66ZM117.993 11.6624C117.109 11.6624 116.428 11.48 115.948 11.1152C115.487 10.7312 115.257 10.1936 115.257 9.5024C115.257 8.7728 115.487 8.2256 115.948 7.8608C116.428 7.4768 117.109 7.2848 117.993 7.2848C118.895 7.2848 119.577 7.4768 120.037 7.8608C120.517 8.2256 120.757 8.7632 120.757 9.4736C120.757 10.184 120.517 10.7312 120.037 11.1152C119.577 11.48 118.895 11.6624 117.993 11.6624ZM129.833 29.3744C128.048 29.3744 126.732 28.904 125.888 27.9632C125.043 27.0032 124.62 25.4768 124.62 23.384V17.4224H122.46L122.547 13.8224H124.102C124.716 13.8032 125.177 13.7072 125.484 13.5344C125.811 13.3616 126.012 13.0352 126.089 12.5552L126.464 10.424H129.084V13.7936H132.742V17.5664H129.084V23.1824C129.084 23.8352 129.238 24.3152 129.545 24.6224C129.872 24.9296 130.361 25.0832 131.014 25.0832C131.379 25.0832 131.724 25.0448 132.051 24.968C132.377 24.8912 132.646 24.7856 132.857 24.6512V28.9424C132.243 29.1344 131.676 29.2496 131.158 29.288C130.659 29.3456 130.217 29.3744 129.833 29.3744Z"
        fill="white"
      />
      <path
        d="M28.3952 17.8092C29.8323 18.1753 30.566 19.7733 29.9069 21.1018V21.1018C29.2478 22.4303 27.5315 22.8129 26.3706 21.89L19.721 16.6042C19.5331 16.4548 19.475 16.1944 19.5818 15.9793V15.9793C19.6885 15.7642 19.9309 15.6529 20.1636 15.7122L28.3952 17.8092Z"
        fill="url(#paint0_linear_1016_751)"
      />
      <path
        d="M13.8793 26.0915C13.5132 27.5286 11.9152 28.2623 10.5867 27.6032V27.6032C9.25817 26.9441 8.87562 25.2278 9.79846 24.0669L15.0843 17.4173C15.2337 17.2294 15.4941 17.1713 15.7092 17.278V17.278C15.9243 17.3848 16.0356 17.6272 15.9763 17.8599L13.8793 26.0915Z"
        fill="url(#paint1_linear_1016_751)"
      />
      <path
        d="M5.6009 11.5844C4.16378 11.2183 3.43012 9.62028 4.08922 8.29177V8.29177C4.74832 6.96325 6.46457 6.5807 7.6255 7.50354L14.2751 12.7894C14.463 12.9388 14.5211 13.1992 14.4143 13.4143V13.4143C14.3076 13.6294 14.0652 13.7407 13.8325 13.6814L5.6009 11.5844Z"
        fill="url(#paint2_linear_1016_751)"
      />
      <path
        d="M20.1051 3.30012C20.4712 1.863 22.0692 1.12933 23.3977 1.78844V1.78844C24.7262 2.44754 25.1088 4.16379 24.1859 5.32472L18.9001 11.9743C18.7507 12.1622 18.4903 12.2203 18.2752 12.1136V12.1136C18.0601 12.0068 17.9488 11.7644 18.0081 11.5317L20.1051 3.30012Z"
        fill="url(#paint3_linear_1016_751)"
      />
      <path
        d="M7.42234 20.164C6.19558 21.2525 4.25577 20.7363 3.73229 19.1821V19.1821C3.20882 17.6278 4.44112 16.0432 6.07645 16.1678L9.70878 16.4446C10.0074 16.4673 10.2634 16.6664 10.359 16.9502V16.9502C10.4546 17.234 10.3712 17.5475 10.1472 17.7462L7.42234 20.164Z"
        fill="url(#paint4_linear_1016_751)"
      />
      <path
        d="M25.7534 9.55473C26.9802 8.4662 28.92 8.98241 29.4435 10.5367V10.5367C29.967 12.091 28.7347 13.6755 27.0993 13.5509L23.467 13.2742C23.1684 13.2514 22.9124 13.0523 22.8168 12.7685V12.7685C22.7212 12.4847 22.8046 12.1713 23.0286 11.9725L25.7534 9.55473Z"
        fill="url(#paint5_linear_1016_751)"
      />
      <path
        d="M11.2872 5.69577C10.1986 4.46901 10.7148 2.5292 12.2691 2.00573V2.00573C13.8234 1.48226 15.408 2.71456 15.2834 4.34989L15.0066 7.98222C14.9838 8.28081 14.7847 8.53684 14.5009 8.63242V8.63242C14.2171 8.728 13.9037 8.64459 13.7049 8.4206L11.2872 5.69577Z"
        fill="url(#paint6_linear_1016_751)"
      />
      <path
        d="M21.8925 24.022C22.9811 25.2488 22.4649 27.1886 20.9106 27.712V27.712C19.3563 28.2355 17.7717 27.0032 17.8963 25.3679L18.1731 21.7356C18.1958 21.437 18.395 21.1809 18.6788 21.0854V21.0854C18.9625 20.9898 19.276 21.0732 19.4747 21.2972L21.8925 24.022Z"
        fill="url(#paint7_linear_1016_751)"
      />
      <path
        d="M4.6115 33.2499C3.08205 32.0371 0.741291 28.9257 3.61384 26.182"
        stroke="#11E442"
        strokeWidth="3.3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1016_751"
          x1="29.9069"
          y1="21.1018"
          x2="19.5818"
          y2="15.9793"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1016_751"
          x1="10.5867"
          y1="27.6032"
          x2="15.7092"
          y2="17.278"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1016_751"
          x1="4.08922"
          y1="8.29177"
          x2="14.4143"
          y2="13.4143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1016_751"
          x1="23.3977"
          y1="1.78844"
          x2="18.2752"
          y2="12.1136"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1016_751"
          x1="3.73229"
          y1="19.1821"
          x2="10.359"
          y2="16.9502"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1016_751"
          x1="29.4435"
          y1="10.5367"
          x2="22.8168"
          y2="12.7685"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1016_751"
          x1="12.2691"
          y1="2.00573"
          x2="14.5009"
          y2="8.63242"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1016_751"
          x1="20.9106"
          y1="27.712"
          x2="18.6788"
          y2="21.0854"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BB2FF" />
          <stop offset="1" stopColor="#61A3FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const LogoSimple = ({ className }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M31.5275 23.2817L24.213 17.4673C24.1185 17.3923 24.0894 17.2614 24.143 17.1534C24.1966 17.0453 24.3184 16.9894 24.4353 17.0192L33.4901 19.3259C34.8832 19.6808 35.5944 21.2298 34.9554 22.5177C34.3165 23.8055 32.6528 24.1763 31.5275 23.2817Z"
        fill="white"
        stroke="white"
        stroke-width="0.608572"
      />
      <path
        d="M13.3481 26.1036L19.1625 18.7891C19.2376 18.6947 19.3684 18.6655 19.4765 18.7192C19.5846 18.7728 19.6405 18.8946 19.6107 19.0115L17.304 28.0662C16.9491 29.4593 15.4001 30.1705 14.1122 29.5316C12.8244 28.8927 12.4536 27.229 13.3481 26.1036Z"
        fill="white"
        stroke="white"
        stroke-width="0.608572"
      />
      <path
        d="M10.5272 7.9331L17.8417 13.7475C17.9362 13.8226 17.9653 13.9534 17.9117 14.0615C17.8581 14.1695 17.7363 14.2255 17.6194 14.1957L8.56463 11.889C7.17151 11.5341 6.46032 9.98502 7.09924 8.69719C7.73816 7.40936 9.40185 7.03853 10.5272 7.9331Z"
        fill="white"
        stroke="white"
        stroke-width="0.608572"
      />
      <path
        d="M28.6948 5.10925L22.8804 12.4238C22.8054 12.5182 22.6745 12.5474 22.5665 12.4937C22.4584 12.4401 22.4025 12.3183 22.4322 12.2014L24.739 3.14666C25.0938 1.75355 26.6429 1.04235 27.9307 1.68127C29.2186 2.32019 29.5894 3.98388 28.6948 5.10925Z"
        fill="white"
        stroke="white"
        stroke-width="0.608572"
      />
      <path
        d="M8.98988 17.5286L12.9854 17.8331C13.1921 17.8488 13.3693 17.9866 13.4354 18.183C13.5016 18.3794 13.4438 18.5963 13.2888 18.7339L10.2915 21.3934C9.10509 22.4462 7.22906 21.9469 6.7228 20.4438C6.21654 18.9406 7.40832 17.4081 8.98988 17.5286Z"
        fill="white"
        stroke="white"
        stroke-width="0.608571"
      />
      <path
        d="M32.1586 14.0436L28.163 13.7392C27.9564 13.7235 27.7792 13.5857 27.713 13.3893C27.6469 13.1929 27.7046 12.9759 27.8596 12.8384L30.8569 10.1788C32.0433 9.12608 33.9194 9.62532 34.4256 11.1285C34.9319 12.6317 33.7401 14.1641 32.1586 14.0436Z"
        fill="white"
        stroke="white"
        stroke-width="0.608572"
      />
      <path
        d="M18.8395 4.2018L18.5351 8.19736C18.5194 8.404 18.3816 8.58119 18.1852 8.64733C17.9888 8.71348 17.7718 8.65575 17.6343 8.50074L14.9747 5.50343C13.922 4.31701 14.4212 2.44097 15.9244 1.93471C17.4276 1.42845 18.96 2.62023 18.8395 4.2018Z"
        fill="white"
        stroke="white"
        stroke-width="0.608571"
      />
      <path
        d="M22.3206 27.3685L22.6251 23.373C22.6408 23.1663 22.7786 22.9891 22.975 22.923C23.1714 22.8568 23.3883 22.9146 23.5259 23.0696L26.1854 26.0669C27.2382 27.2533 26.7389 29.1293 25.2358 29.6356C23.7326 30.1419 22.2001 28.9501 22.3206 27.3685Z"
        fill="white"
        stroke="white"
        stroke-width="0.608572"
      />
      <path
        d="M7.40233 36.0163C5.71994 34.6822 3.14511 31.2596 6.30491 28.2416"
        stroke="white"
        stroke-width="3.63"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default Logo;
