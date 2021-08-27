import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__top}>
        <div className={style.header__logoWrapper}>
          <div className={style.header__logoInner}>
            <svg
              width='34'
              height='32'
              viewBox='0 0 34 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M28.6667 0.333374H5.33337C2.57671 0.333374 0.333374 2.57671 0.333374 5.33337V10.0517C0.333374 11.8067 0.970041 13.4017 2.00004 14.6284V30.3334C2.00004 30.7754 2.17564 31.1993 2.4882 31.5119C2.80076 31.8244 3.22468 32 3.66671 32H17C17.4421 32 17.866 31.8244 18.1786 31.5119C18.4911 31.1993 18.6667 30.7754 18.6667 30.3334V22H25.3334V30.3334C25.3334 30.7754 25.509 31.1993 25.8215 31.5119C26.1341 31.8244 26.558 32 27 32H30.3334C30.7754 32 31.1993 31.8244 31.5119 31.5119C31.8244 31.1993 32 30.7754 32 30.3334V14.6267C33.03 13.4017 33.6667 11.8067 33.6667 10.05V5.33337C33.6667 2.57671 31.4234 0.333374 28.6667 0.333374ZM30.3334 5.33337V10.0517C30.3334 11.9517 28.9184 13.5717 27.1817 13.6634L27 13.6667C25.1617 13.6667 23.6667 12.1717 23.6667 10.3334V3.66671H28.6667C29.5867 3.66671 30.3334 4.41504 30.3334 5.33337ZM13.6667 10.3334V3.66671H20.3334V10.3334C20.3334 12.1717 18.8384 13.6667 17 13.6667C15.1617 13.6667 13.6667 12.1717 13.6667 10.3334ZM3.66671 5.33337C3.66671 4.41504 4.41337 3.66671 5.33337 3.66671H10.3334V10.3334C10.3334 12.1717 8.83837 13.6667 7.00004 13.6667L6.81837 13.6617C5.08171 13.5717 3.66671 11.9517 3.66671 10.0517V5.33337ZM13.6667 23.6667H7.00004V18.6667H13.6667V23.6667Z'
                fill='url(#paint0_linear)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear'
                  x1='17'
                  y1='0.333374'
                  x2='17'
                  y2='32'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#EA9769' />
                  <stop offset='1' stop-color='#EA6969' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <nav>
          <ul className={`listReset ${style.nav__list}`}>
            <li className={`${style.nav__item} ${style.nav__item_active}`}>
              <a className={style.nav__link} href='#'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.73037 0.788355C9.00037 -0.220645 10.7804 -0.260645 12.0894 0.668355L12.2504 0.788355L18.3394 5.65935C19.0094 6.17835 19.4204 6.94936 19.4904 7.78835L19.5004 7.98935V16.0984C19.5004 18.1884 17.8494 19.8884 15.7804 19.9984H13.7904C12.8394 19.9794 12.0704 19.2394 12.0004 18.3094L11.9904 18.1684V15.3094C11.9904 14.9984 11.7594 14.7394 11.4504 14.6884L11.3604 14.6784H8.68937C8.37037 14.6884 8.11037 14.9184 8.07037 15.2184L8.06037 15.3094V18.1594C8.06037 18.2184 8.04937 18.2884 8.04037 18.3384L8.03037 18.3594L8.01937 18.4284C7.90037 19.2794 7.20037 19.9284 6.33037 19.9894L6.20037 19.9984H4.41037C2.32037 19.9984 0.610366 18.3594 0.500366 16.2984V7.98935C0.509366 7.13835 0.880366 6.34835 1.50037 5.79835L7.73037 0.788355ZM11.3804 1.87835C10.6204 1.26835 9.54037 1.23935 8.74037 1.76835L8.58937 1.87835L2.50937 6.77936C2.16037 7.03835 1.95037 7.42836 1.90037 7.83836L1.88937 7.99835V16.0984C1.88937 17.4284 2.92937 18.5184 4.25037 18.5984H6.20037C6.42037 18.5984 6.61037 18.4494 6.63937 18.2394L6.66037 18.0594L6.67037 18.0084V15.3094C6.67037 14.2394 7.49037 13.3694 8.54037 13.2884H11.3604C12.4294 13.2884 13.2994 14.1094 13.3804 15.1594V18.1684C13.3804 18.3784 13.5304 18.5594 13.7304 18.5984H15.5894C16.9294 18.5984 18.0194 17.5694 18.0994 16.2584L18.1104 16.0984V7.99835C18.0994 7.56936 17.9204 7.16835 17.6104 6.86935L17.4804 6.75835L11.3804 1.87835Z'
                    fill='#EA7C69'
                  />
                </svg>
              </a>
            </li>
            <li className={` ${style.nav__item}`}>
              <a className={style.nav__link} href='#'>
                <svg
                  width='20'
                  height='21'
                  viewBox='0 0 20 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.9511 1.71645L12.1334 1.88645L12.8522 2.6052C13.0991 2.85092 13.4229 3.00242 13.7674 3.03646L13.9161 3.04378H14.9441C16.5479 3.04378 17.8594 4.29795 17.951 5.87883L17.9561 6.05578V7.08278C17.9561 7.43258 18.0767 7.76886 18.2943 8.03624L18.3934 8.14645L19.1122 8.86525C20.2437 9.99165 20.2943 11.7929 19.2577 12.98L19.1224 13.1251L18.3941 13.8535C18.1491 14.099 17.9975 14.4231 17.9634 14.7672L17.9561 14.9158V15.9448C17.9561 17.5485 16.702 18.8591 15.1211 18.9507L14.9441 18.9558H13.9161C13.5676 18.9558 13.2309 19.0769 12.9633 19.2951L12.8531 19.3945L12.1352 20.1113C11.01 21.2442 9.20745 21.2944 8.01992 20.2574L7.86577 20.1131L7.14866 19.396C6.90027 19.1494 6.57583 18.9973 6.23232 18.9631L6.0841 18.9558H5.0551C3.45197 18.9558 2.14083 17.7023 2.04922 16.1217L2.0441 15.9448V14.9158C2.0441 14.5678 1.92281 14.2308 1.70472 13.9637L1.60541 13.8537L0.888277 13.1356C-0.244298 12.0094 -0.294536 10.2068 0.742484 9.02044L0.877774 8.87545L1.60389 8.14834C1.85084 7.89963 2.00267 7.57581 2.03676 7.23146L2.0441 7.08278V6.05578L2.04922 5.87885C2.13744 4.35668 3.3566 3.13715 4.87824 3.0489L5.0551 3.04378H6.0841C6.43259 3.04378 6.76936 2.9229 7.0364 2.70572L7.14641 2.60682L7.86457 1.88765C8.99094 0.756177 10.7934 0.706363 11.9511 1.71645ZM9.04152 2.84256L8.9268 2.94674L8.20555 3.66899C7.6883 4.18258 7.00418 4.48966 6.28193 4.53727L6.0841 4.54378H5.0551C4.26754 4.54378 3.61982 5.14793 3.55028 5.91821L3.5441 6.05578V7.08278C3.5441 7.81195 3.2795 8.5131 2.80221 9.06116L2.6668 9.20674L1.93963 9.93491C1.38782 10.4892 1.35569 11.3649 1.84334 11.9589L1.9478 12.0738L2.66706 12.7941C3.18147 13.3097 3.48976 13.995 3.53756 14.7178L3.5441 14.9158V15.9448C3.5441 16.7328 4.14781 17.3801 4.91762 17.4496L5.0551 17.4558H6.0841C6.81189 17.4558 7.51365 17.7207 8.06183 18.198L8.20743 18.3335L8.93075 19.0568C9.48896 19.6119 10.3649 19.6442 10.9584 19.1565L11.0731 19.0521L11.794 18.3322C12.3107 17.8179 12.9952 17.5101 13.7181 17.4623L13.9161 17.4558H14.9441C15.7328 17.4558 16.3804 16.8524 16.4499 16.0823L16.4561 15.9448V14.9158C16.4561 14.1869 16.7209 13.4839 17.1976 12.9383L17.3328 12.7935L18.0603 12.066C18.6121 11.511 18.644 10.6358 18.1571 10.0419L18.0528 9.92711L17.3309 9.20523C16.817 8.68765 16.5102 8.00422 16.4626 7.28094L16.4561 7.08278V6.05578C16.4561 5.26737 15.852 4.61951 15.0817 4.54996L14.9441 4.54378H13.9161C13.1869 4.54378 12.4849 4.27939 11.938 3.80243L11.7928 3.66711L11.1048 2.97734L11.065 2.94031C10.5107 2.38855 9.63484 2.35624 9.04152 2.84256ZM13.0965 13.0424C13.1665 13.1124 13.2265 13.1924 13.2665 13.2824C13.2965 13.3724 13.3165 13.4724 13.3165 13.5724C13.3165 13.6734 13.2965 13.7624 13.2665 13.8524C13.2265 13.9424 13.1665 14.0324 13.0965 14.1024C12.9565 14.2424 12.7665 14.3224 12.5665 14.3224C12.3665 14.3224 12.1765 14.2424 12.0365 14.1024C11.9665 14.0324 11.9165 13.9424 11.8765 13.8524C11.8365 13.7624 11.8165 13.6734 11.8165 13.5724C11.8165 13.4724 11.8365 13.3724 11.8765 13.2824C11.9165 13.1924 11.9665 13.1124 12.0365 13.0424C12.3165 12.7624 12.8165 12.7624 13.0965 13.0424ZM13.1001 7.89915C13.3664 8.16542 13.3906 8.58208 13.1728 8.87569L13.1001 8.95981L7.96013 14.0998C7.66724 14.3927 7.19237 14.3927 6.89947 14.0998C6.63321 13.8335 6.609 13.4169 6.82686 13.1233L6.89947 13.0392L12.0395 7.89915C12.3324 7.60626 12.8072 7.60626 13.1001 7.89915ZM7.9564 7.90278C8.09641 8.04178 8.1764 8.23278 8.1764 8.43278C8.1764 8.53278 8.1664 8.62178 8.1264 8.71278C8.0864 8.80278 8.0264 8.88278 7.9564 8.96278C7.8864 9.03278 7.8064 9.08178 7.7164 9.12178C7.6264 9.16178 7.5264 9.18278 7.4264 9.18278C7.3264 9.18278 7.2364 9.16178 7.1464 9.12178C7.0564 9.08178 6.9664 9.03278 6.8964 8.96278C6.8264 8.88278 6.7764 8.80278 6.7364 8.71278C6.6964 8.62178 6.6764 8.53278 6.6764 8.43278C6.6764 8.33178 6.6964 8.23278 6.7364 8.14278C6.7764 8.05278 6.8264 7.96278 6.8964 7.90278C7.1864 7.62178 7.6764 7.62178 7.9564 7.90278Z'
                    fill='#EA7C69'
                  />
                </svg>
              </a>
            </li>
            <li className={`${style.nav__item}`}>
              <a className={style.nav__link} href='#'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.49776 4.7606C8.58545 4.93485 8.63817 5.12392 8.65332 5.32102L9.04185 10.8095C9.04706 10.8847 9.08269 10.9548 9.14085 11.0042C9.18448 11.0413 9.23808 11.0645 9.29801 11.0712L9.35991 11.0724L14.9341 10.7366C15.3867 10.71 15.8305 10.8675 16.1604 11.1719C16.4902 11.4763 16.6768 11.9004 16.6744 12.3912C16.4265 16.0037 13.773 19.0237 10.159 19.8065C6.54503 20.5893 2.83611 18.9474 1.05781 15.7848C0.582292 14.9695 0.261779 14.0778 0.113798 13.1749L0.0664268 12.8359C0.0253023 12.5821 0.00319023 12.3257 0 12.0795L0.00311369 11.8372C0.0133983 8.06546 2.66156 4.80403 6.38809 3.92434L6.64383 3.86807L6.7814 3.84532C7.502 3.74681 8.21097 4.12453 8.49776 4.7606ZM7.01643 5.27813L6.93217 5.28772L6.70369 5.33933C3.73526 6.05477 1.6062 8.61031 1.48796 11.621L1.4828 11.8661C1.47569 12.0525 1.4825 12.2392 1.50499 12.4378L1.53277 12.6408C1.63212 13.495 1.90795 14.3206 2.34914 15.0772C3.81632 17.6863 6.86669 19.0367 9.839 18.3929C12.8113 17.7491 14.9936 15.2653 15.1958 12.3414C15.1958 12.2974 15.1774 12.2552 15.1446 12.225C15.1228 12.2049 15.0959 12.1912 15.0675 12.1851L15.024 12.1817L9.45904 12.5169C8.98938 12.5503 8.52549 12.3992 8.17003 12.0971C7.81456 11.7951 7.59684 11.3669 7.56522 10.91L7.17702 5.42617C7.17632 5.41708 7.17385 5.40822 7.15682 5.37299C7.1315 5.31695 7.07648 5.28131 7.01643 5.27813ZM11.423 0.00105033C15.7084 0.122269 19.3029 3.20162 19.9904 7.34084L20 7.4567L19.9977 7.65855C19.9737 7.95621 19.8538 8.23931 19.6545 8.46677C19.4041 8.75241 19.0477 8.92862 18.6588 8.95674L12.0133 9.39005C11.1615 9.43818 10.4295 8.80509 10.3741 7.97348L9.92986 1.44914L9.9349 1.30295L9.95698 1.13824C10.0162 0.84619 10.1684 0.579378 10.3925 0.376428C10.6739 0.121564 11.0474 -0.0133911 11.423 0.00105033ZM11.4113 1.44902L11.8511 7.87814C11.8537 7.91719 11.888 7.94688 11.9214 7.94502L18.5182 7.51352L18.4854 7.33352C17.8318 4.0802 15.0119 1.66443 11.6287 1.45932L11.4113 1.44902Z'
                    fill='#EA7C69'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button className={`btn ${style.header__logOutBtn}`}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z'
            fill='#EA7C69'
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;