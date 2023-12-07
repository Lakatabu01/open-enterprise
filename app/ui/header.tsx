const Header = () => {
  return (
    <header className="w-full flex justify-between  md:px-12 px-4 fixed bg-white md:py-10 py:6 md:mb-28 mb-16 z-20 ">
      <div className="flex w-[35%] items-center ">
        <div>
          <svg
            className="md:h-26 md:w-20 h-14 w-14 "
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="41"
            viewBox="0 0 68 41"
            fill="none">
            <g clipPath="url(#clip0_86_2)">
              <path
                d="M68 20.5C68 31.5456 58.9793 40.5 47.8518 40.5H47.5912H47.4306L47.2751 40.4962C47.1605 40.4962 47.0453 40.4887 46.9313 40.4837C46.8866 40.4837 46.8425 40.48 46.7978 40.4769L46.5579 40.4637L46.3835 40.4519L46.3237 40.4475C46.2715 40.4437 46.2192 40.44 46.1669 40.435C46.1147 40.43 46.0738 40.4275 46.0272 40.4231C45.9699 40.4181 45.9126 40.4131 45.8546 40.4069L45.7583 40.3975C45.6223 40.3837 45.4869 40.3687 45.3516 40.3512C45.3006 40.3456 45.2489 40.3387 45.1973 40.3319C45.0714 40.3165 44.9478 40.2992 44.8265 40.28L44.6407 40.25C44.5778 40.2406 44.5148 40.2306 44.4569 40.22L44.2736 40.1881C44.1931 40.1744 44.1125 40.1594 44.0331 40.1437C43.9702 40.1331 43.9135 40.1212 43.8537 40.1094L43.7278 40.0831C43.6056 40.0581 43.4847 40.0319 43.3638 40.0044L43.1856 39.9631L43.0062 39.92C42.8866 39.8912 42.7676 39.8608 42.6492 39.8287L42.4723 39.7812L42.2953 39.7319C42.1776 39.6981 42.0599 39.6637 41.9434 39.6281L41.7923 39.5819L41.7192 39.5587L41.5757 39.5125C41.4535 39.4725 41.3314 39.4319 41.2105 39.3875L41.0367 39.325L41.0191 39.3187L40.8491 39.2562C40.6684 39.1937 40.4902 39.1219 40.3126 39.05L40.1357 38.9781L39.9594 38.9044C39.8419 38.8556 39.7252 38.805 39.6094 38.7525L39.4589 38.6875L39.4104 38.6656L39.292 38.6106C38.7883 38.3765 38.2957 38.1215 37.8143 37.8456L37.6638 37.7587C37.5826 37.7119 37.5014 37.6637 37.4214 37.615L37.2955 37.5369L37.2476 37.5081L37.1286 37.4337C36.9565 37.3271 36.7869 37.2175 36.6199 37.105L36.4669 37C36.3922 36.9496 36.3179 36.8983 36.244 36.8462C36.2397 36.8437 36.2357 36.8408 36.232 36.8375C36.1556 36.7842 36.0801 36.7304 36.0053 36.6762L35.9921 36.6669C35.9111 36.6081 35.8305 36.5487 35.7503 36.4887C35.7407 36.4824 35.7315 36.4755 35.7226 36.4681C35.6528 36.4162 35.5835 36.3637 35.5149 36.31C35.4985 36.2987 35.4834 36.2869 35.4683 36.2744C35.4009 36.2225 35.3335 36.17 35.2668 36.1162C35.2416 36.0969 35.2164 36.0762 35.1912 36.0537C35.1232 36 35.0552 35.9444 34.9879 35.8881C34.9728 35.8769 34.9583 35.865 34.9444 35.8525C34.8966 35.8133 34.8487 35.7733 34.8009 35.7325C34.7581 35.6969 34.7152 35.66 34.6749 35.6237C34.6032 35.5633 34.5324 35.5008 34.4628 35.4362C34.3878 35.3706 34.3142 35.3037 34.2405 35.2369C34.1668 35.17 34.0976 35.1062 34.0271 35.0394C33.6778 34.7131 33.3405 34.374 33.0152 34.0219C32.9781 33.9825 32.9416 33.9425 32.9057 33.9025C32.8553 33.8481 32.8056 33.7931 32.7571 33.7375C32.7086 33.6819 32.6645 33.6337 32.6192 33.5812C32.5739 33.5287 32.5141 33.46 32.4618 33.3987C32.3082 33.2192 32.1583 33.0369 32.0122 32.8519L31.8914 32.6975C31.7768 32.5512 31.6647 32.4029 31.5551 32.2525C31.4922 32.1662 31.4292 32.08 31.3662 31.9925C31.3617 31.9867 31.3575 31.9807 31.3536 31.9744C31.2928 31.8881 31.2323 31.8012 31.1723 31.7137C31.1173 31.6346 31.0636 31.5548 31.0111 31.4744C30.9897 31.4431 30.9683 31.4119 30.9482 31.3781C30.91 31.3206 30.8722 31.2625 30.8348 31.2037C30.8204 31.1819 30.8059 31.16 30.7926 31.1375C30.7385 31.0542 30.6852 30.9687 30.6327 30.8812C30.5748 30.7875 30.5181 30.6937 30.4621 30.5975C30.4061 30.5012 30.3506 30.41 30.2959 30.3112C30.2644 30.2556 30.2329 30.2006 30.2021 30.1444L30.1347 30.0194C30.0963 29.9506 30.0591 29.8812 30.022 29.8119C30.0132 29.7956 30.0044 29.7787 29.9962 29.7619C29.9647 29.6994 29.9332 29.6425 29.9024 29.5825C29.8646 29.5087 29.8274 29.435 29.7903 29.3612C29.7531 29.2875 29.7172 29.2131 29.6814 29.1394C29.6092 28.9906 29.5388 28.8408 29.4704 28.69C29.402 28.5392 29.3355 28.3873 29.2708 28.2344C29.2387 28.1581 29.2079 28.0812 29.1751 28.0044C29.1424 27.9275 29.1122 27.8512 29.0826 27.7744C29.0524 27.6975 29.0196 27.6206 28.9932 27.5431C28.9667 27.4656 28.9346 27.3875 28.9056 27.3094C28.8217 27.0752 28.7405 26.8385 28.662 26.5994C28.6362 26.52 28.611 26.44 28.5864 26.36C28.5505 26.2444 28.5159 26.1275 28.4819 26.0106C28.4655 25.9525 28.4485 25.8937 28.4322 25.835C28.4158 25.7762 28.4001 25.7181 28.3843 25.6594C28.352 25.5419 28.3214 25.4237 28.2924 25.305C28.2773 25.2458 28.2628 25.1865 28.2489 25.1269L28.2074 24.95C28.1797 24.83 28.1532 24.71 28.1281 24.5888L28.1016 24.4638C28.0896 24.4044 28.0777 24.345 28.067 24.2856C28.0512 24.2069 28.0361 24.1269 28.0223 24.0469C28.0109 23.9865 28.0002 23.9258 27.9902 23.865C27.9795 23.8025 27.9694 23.74 27.9599 23.6825C27.9505 23.625 27.9404 23.5575 27.931 23.4988C27.9121 23.3738 27.8951 23.2537 27.8787 23.1306C27.8718 23.0794 27.8649 23.0281 27.8592 22.9775C27.8416 22.8431 27.8265 22.7087 27.8126 22.5738C27.8088 22.5421 27.8057 22.5102 27.8032 22.4781C27.7969 22.4206 27.7918 22.3638 27.7868 22.3069C27.7824 22.2606 27.778 22.2144 27.7748 22.1681C27.7717 22.1219 27.766 22.0644 27.7622 22.0125C27.7622 21.9925 27.7591 21.9731 27.7578 21.9531C27.7534 21.8956 27.7496 21.8375 27.7459 21.78C27.7408 21.7004 27.7364 21.621 27.7326 21.5419C27.7295 21.4975 27.7276 21.4538 27.7257 21.4094C27.7207 21.2963 27.7163 21.1819 27.7131 21.0681L27.7094 20.9138C27.7094 20.8606 27.7094 20.8075 27.7094 20.7544C27.7094 20.6681 27.7094 20.5819 27.7094 20.4956C27.7094 20.4094 27.7094 20.3231 27.7094 20.2369C27.7094 20.1619 27.7106 20.0869 27.7131 20.0119C27.7175 19.8194 27.7251 19.6281 27.7358 19.4369C27.7389 19.3669 27.7427 19.2963 27.7478 19.2263C27.7547 19.1156 27.7622 19.0044 27.7711 18.8944C27.7761 18.8319 27.7818 18.7694 27.7874 18.7031C27.7937 18.6288 27.8013 18.5544 27.8088 18.4794L27.8145 18.4206C27.8221 18.3469 27.8302 18.2731 27.8391 18.1994C27.8479 18.1219 27.8573 18.045 27.8668 17.9688C27.8743 17.91 27.8819 17.8519 27.8901 17.7938C27.8982 17.7356 27.9045 17.6894 27.9121 17.6375C27.9343 17.4817 27.9585 17.3267 27.9845 17.1725C27.9965 17.1019 28.0084 17.0319 28.021 16.9619C28.0207 16.9579 28.0207 16.954 28.021 16.95C28.0475 16.8006 28.0758 16.6525 28.1066 16.5044C28.1136 16.4694 28.1205 16.435 28.1281 16.4006C28.1482 16.3025 28.1696 16.2044 28.191 16.1069C28.2393 15.8915 28.2915 15.6775 28.3478 15.465C28.3705 15.3769 28.3938 15.2888 28.4183 15.2006C28.4454 15.1019 28.4737 15.0025 28.5027 14.9044C28.5285 14.8156 28.5549 14.7269 28.5826 14.6388C28.5871 14.6219 28.5921 14.6056 28.5978 14.5894C28.6261 14.4981 28.6551 14.4075 28.6846 14.3169C28.7161 14.22 28.7476 14.1244 28.7816 14.0281C28.8156 13.9319 28.8477 13.8406 28.8824 13.7425L28.8861 13.7319C28.9075 13.6694 28.9296 13.6119 28.9529 13.5525C28.9762 13.4931 28.9906 13.45 29.0102 13.3988C29.0731 13.2381 29.1361 13.0781 29.1991 12.92C29.2205 12.8675 29.2419 12.815 29.262 12.7631C29.2715 12.7388 29.2822 12.715 29.2929 12.6913C29.3187 12.6288 29.3458 12.5663 29.3735 12.5038C29.3785 12.4913 29.3835 12.4794 29.3892 12.4675C29.4188 12.4 29.4522 12.3331 29.4792 12.2663C29.5466 12.1188 29.6152 11.9719 29.6864 11.8288C29.7103 11.7794 29.7342 11.73 29.7588 11.6813C29.7834 11.6325 29.7997 11.5981 29.8218 11.5563C29.8438 11.5144 29.8564 11.4863 29.8746 11.4519C29.8929 11.4175 29.9124 11.3775 29.9326 11.34C29.9603 11.2863 29.9886 11.2325 30.0169 11.1794C30.0541 11.1088 30.0919 11.0388 30.1296 10.9694C30.2316 10.7831 30.3366 10.599 30.4445 10.4169C30.4728 10.3688 30.5011 10.3213 30.5301 10.2738C30.5641 10.2163 30.5987 10.1594 30.634 10.1025C30.7127 9.97313 30.7939 9.84438 30.8764 9.7175C30.9192 9.65063 30.9633 9.58375 31.0074 9.5175C31.042 9.46438 31.0772 9.41188 31.1125 9.36C31.3085 9.06834 31.5121 8.78396 31.7232 8.50688C31.756 8.46313 31.7894 8.42 31.8227 8.37688C31.8435 8.34875 31.8643 8.32125 31.8857 8.29438L32.0066 8.14C32.1526 7.955 32.3025 7.77271 32.4561 7.59313C32.5084 7.53063 32.5606 7.46813 32.6135 7.41063C32.6664 7.35313 32.7048 7.30626 32.7514 7.25438C32.798 7.20251 32.8496 7.14375 32.9 7.08938C32.9359 7.04938 32.9724 7.00938 33.0096 6.97001C33.3261 6.62667 33.6549 6.29521 33.9962 5.97563C35.5413 7.42832 36.8461 9.11356 37.8628 10.9694C35.3799 13.5295 33.995 16.9463 34 20.5C34 20.6619 34 20.8231 34.0088 20.9831C34.0822 23.1648 34.6807 25.2973 35.7541 27.2025C35.8603 27.3912 35.9709 27.5771 36.0859 27.76L55.1637 8.8225C53.11 7.55178 50.7553 6.84042 48.3366 6.76001C48.1755 6.75376 48.013 6.75126 47.8499 6.75126C46.2508 6.74937 44.6634 7.02302 43.1586 7.56001C42.0868 5.68609 40.7871 3.94997 39.2889 2.39063C39.6813 2.20688 40.0801 2.03605 40.4852 1.87813L40.6526 1.81563C40.7924 1.76188 40.9335 1.71063 41.0751 1.66063C41.1337 1.63938 41.1929 1.61938 41.2521 1.59813C41.3112 1.57688 41.3698 1.55751 41.4296 1.53563C41.4894 1.51376 41.5555 1.49313 41.6216 1.47313C41.6997 1.44751 41.7784 1.42313 41.8578 1.39876L42.0567 1.33626C42.2091 1.29126 42.3623 1.24772 42.5163 1.20563C42.5598 1.19376 42.6026 1.18188 42.6461 1.17126C42.7015 1.15626 42.7575 1.14126 42.8135 1.12751C42.8696 1.11376 42.9395 1.09501 43.0024 1.07938C43.0818 1.06001 43.1611 1.04063 43.2411 1.02251L43.3594 1.00001L43.5017 0.968757C43.6793 0.930007 43.8581 0.893132 44.0382 0.859382C44.1194 0.843757 44.2006 0.828757 44.2825 0.814382H44.2913C44.3719 0.799382 44.4531 0.785632 44.5343 0.772507C44.6716 0.750007 44.8097 0.729174 44.9486 0.710007L45.0915 0.687507C45.3081 0.658132 45.5254 0.631882 45.7445 0.609382L45.8452 0.599382C45.9044 0.593132 45.9629 0.588132 46.0215 0.583132C46.1084 0.575007 46.1953 0.567507 46.2822 0.561257L46.3791 0.554382C46.4358 0.550007 46.4931 0.545632 46.5504 0.542507H46.5699L46.7771 0.530632C46.8721 0.525632 46.9659 0.521257 47.0635 0.517507L47.26 0.511257C47.3097 0.511257 47.3601 0.508132 47.4098 0.507507H47.5509C47.651 0.507507 47.7511 0.507507 47.8518 0.507507H48.1125H48.2731L48.4286 0.511257C48.5432 0.511257 48.6578 0.518757 48.7723 0.523757C48.8171 0.523757 48.8611 0.527507 48.9058 0.530632C48.9856 0.534382 49.0655 0.538757 49.1457 0.543757L49.3201 0.555632L49.3799 0.560007C49.4322 0.563757 49.4845 0.567507 49.5367 0.572507C49.589 0.577507 49.6299 0.580007 49.6765 0.584382C49.7338 0.589382 49.7911 0.594382 49.849 0.600632C49.8809 0.603132 49.913 0.606257 49.9453 0.610007C50.0813 0.623757 50.2167 0.638757 50.3521 0.656257C50.4031 0.661882 50.4547 0.668757 50.5063 0.675632C50.6323 0.691882 50.7538 0.708757 50.8772 0.727507L51.0623 0.756257C51.1253 0.765632 51.1882 0.775632 51.2462 0.786257L51.4294 0.818132C51.51 0.831882 51.5906 0.846882 51.6699 0.862507C51.7329 0.873132 51.7895 0.885007 51.8493 0.896882L51.9753 0.923132C52.0974 0.948132 52.2183 0.974382 52.3392 1.00188L52.5174 1.04313C52.5774 1.05688 52.6372 1.07126 52.6968 1.08626C52.8165 1.11501 52.9355 1.14542 53.0538 1.17751L53.2308 1.22501L53.4077 1.27438C53.5254 1.30813 53.6432 1.34251 53.7596 1.37813L53.9611 1.44063L54.162 1.50313L54.3616 1.56938C54.4944 1.61438 54.6266 1.66126 54.7582 1.70876L54.9547 1.78126C55.0088 1.80126 55.063 1.82209 55.1171 1.84376C55.2015 1.87501 55.2846 1.90626 55.369 1.94126L55.5409 2.01126L55.7335 2.09126C55.7965 2.11813 55.8595 2.14563 55.9224 2.17376C55.9854 2.20188 56.0483 2.22876 56.1113 2.25751L56.3002 2.34376C56.3632 2.37251 56.4261 2.40188 56.4891 2.43188C56.5709 2.47001 56.6522 2.50876 56.7328 2.54876L56.8631 2.61126C56.9261 2.64188 56.989 2.67376 57.052 2.70501C57.1779 2.76751 57.2975 2.83001 57.4197 2.89751L57.5796 2.98438C57.6898 3.04688 57.7987 3.10501 57.9064 3.16751L58.0323 3.23938C58.1885 3.33001 58.3433 3.42251 58.4963 3.51813L58.6097 3.58876C58.6449 3.61063 58.6802 3.63251 58.7148 3.65501C58.7778 3.69688 58.8458 3.73876 58.9106 3.78001C58.9566 3.80938 59.0019 3.83876 59.0466 3.86938C59.0913 3.90001 59.1323 3.92626 59.1726 3.95563C59.5239 4.1923 59.8668 4.44021 60.2014 4.69938C60.2423 4.73001 60.2832 4.76188 60.3235 4.79376C60.5036 4.93459 60.681 5.07855 60.8556 5.22563L61.0319 5.37501C61.0948 5.42876 61.1578 5.48251 61.2208 5.53751C61.2598 5.57126 61.2982 5.60563 61.3366 5.64063C61.4203 5.71438 61.5028 5.79001 61.5847 5.86626C61.6344 5.91188 61.6842 5.95813 61.7333 6.00501C61.9813 6.23834 62.2229 6.47813 62.458 6.72438C62.5052 6.77313 62.5518 6.8225 62.5978 6.87188C62.6746 6.95313 62.7508 7.03501 62.8251 7.11813C62.8603 7.15626 62.8949 7.19438 62.9289 7.23313C62.9843 7.29563 63.0385 7.35813 63.0926 7.42063C63.1468 7.48313 63.1909 7.53375 63.2393 7.59063C63.3871 7.76355 63.5321 7.93959 63.6744 8.11875C63.7065 8.15875 63.7374 8.19938 63.7695 8.24C63.9005 8.40667 64.0281 8.5748 64.1523 8.74438L45.7816 26.9744L40.5381 32.1794C42.5917 33.4502 44.9464 34.1616 47.3651 34.2419C47.5263 34.2481 47.6888 34.2506 47.8518 34.2506C55.5018 34.2506 61.7037 28.0944 61.7037 20.5006C61.7037 20.3388 61.7037 20.1775 61.6949 20.0175L64.5282 17.205L67.1185 14.6331C67.1544 14.7488 67.189 14.8656 67.223 14.9825C67.2394 15.0406 67.2564 15.0994 67.2728 15.1581C67.2891 15.2169 67.3049 15.275 67.3206 15.3338C67.3525 15.4513 67.3832 15.5694 67.4125 15.6881C67.4276 15.7477 67.4421 15.8071 67.456 15.8663L67.4975 16.0431C67.5252 16.1631 67.5517 16.2831 67.5769 16.4044L67.6033 16.5294C67.6153 16.5888 67.6272 16.6481 67.6379 16.7075C67.6537 16.7863 67.6688 16.8663 67.6826 16.9463C67.694 17.0067 67.7047 17.0673 67.7148 17.1281C67.7255 17.1906 67.7355 17.2531 67.745 17.3106C67.7544 17.3681 67.7645 17.4356 67.7739 17.4944C67.7928 17.6169 67.8102 17.7396 67.8262 17.8625C67.8331 17.9138 67.8401 17.965 67.8457 18.0156C67.8634 18.15 67.8785 18.2844 67.8923 18.4194C67.8961 18.451 67.8992 18.4829 67.9018 18.515C67.9081 18.5725 67.9131 18.6294 67.9181 18.6863C67.9225 18.7325 67.9269 18.7788 67.9301 18.825C67.9332 18.8713 67.9389 18.9288 67.9427 18.9806C67.9427 19.0006 67.9458 19.02 67.9471 19.04C67.9515 19.0975 67.9553 19.1556 67.959 19.2131C67.9641 19.2927 67.9685 19.3721 67.9723 19.4513C67.9723 19.4956 67.9773 19.5394 67.9792 19.5838C67.9842 19.6975 67.9886 19.8113 67.9918 19.925L67.9956 20.0794C67.9956 20.1325 67.9956 20.1856 67.9956 20.2388C67.9985 20.3267 68 20.4138 68 20.5Z"
                fill="#71A894"
              />
              <path
                d="M34 5.97682C33.6592 6.29682 33.3303 6.62828 33.0134 6.97119C32.9762 7.01057 32.9397 7.05057 32.9038 7.09057C32.8534 7.14494 32.8037 7.19994 32.7552 7.25557C32.7067 7.31119 32.6627 7.35932 32.6173 7.41182C32.572 7.46432 32.5122 7.53307 32.4599 7.59432C32.3063 7.77349 32.1564 7.95578 32.0104 8.14119L31.8895 8.29557C31.8674 8.32244 31.8467 8.34995 31.8265 8.37807C31.7931 8.4212 31.7598 8.46432 31.727 8.50807C31.5172 8.78682 31.3136 9.07119 31.1163 9.36119C31.081 9.41307 31.0458 9.46557 31.0111 9.51869C30.9671 9.58494 30.923 9.65182 30.8802 9.71869C30.7977 9.84369 30.7165 9.97432 30.6378 10.1037C30.6025 10.1606 30.5679 10.2174 30.5339 10.2749C30.5049 10.3224 30.4766 10.3699 30.4483 10.4181C30.3408 10.6002 30.2359 10.7843 30.1334 10.9706C28.8426 9.63401 27.2923 8.57095 25.5761 7.84555C23.8599 7.12015 22.0134 6.74745 20.1481 6.74994C12.4981 6.74994 6.2963 12.9062 6.2963 20.4999C6.2963 28.0937 12.4981 34.25 20.1481 34.25C21.7473 34.2518 23.3346 33.9782 24.8395 33.4412C25.9118 35.3149 27.2121 37.0506 28.7111 38.6093C26.0322 39.8586 23.108 40.5042 20.1481 40.5C9.0207 40.5 0 31.5456 0 20.4999C0 9.45432 9.0207 0.499943 20.1481 0.499943C25.3017 0.496842 30.2599 2.45727 34 5.97682Z"
                fill="#303031"
              />
            </g>
            <defs>
              <clipPath id="clip0_86_2">
                <rect
                  width="68"
                  height="40"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2
          className={
            "font-bold md:text-3xl md:pl-4 font-nunito text-[#303031] text-base pl-2"
          }>
          Open Enterprise
        </h2>
      </div>

      {/* Hide this nav on small screens */}
      <nav className="font-fig w-[55%] text-xl md:flex hidden justify-around text-[#303031]">
        <button className="border-none bg-none">Why Open Enterprise</button>
        <button className="border-none bg-none">Features</button>
        <button className="border-none bg-none">Contribute</button>
        <button className="border-none bg-none text-[#71A894]">
          Request Early Access
        </button>
      </nav>

      <button className="bg-transparent border-none md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </header>
  );
};
export default Header;
