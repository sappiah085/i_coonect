import Image from "next/image";
import image from "../../public/assets/image.png";
export default function FeatureCard() {
  return (
    <article className="w-full text-white h-full relative rounded-md overflow-hidden flex flex-col justify-between after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-black/50 font-Montserrat ">
      <Image
        className="absolute h-full w-full object-cover"
        src={image}
        alt="thumbnail"
      />
      <span className="z-[1] p-5 flex flex-col gap-5 max-w-sm">
        <h2 className="text-3xl font-bold">The End of Nowhere</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          malesuada amet accumsan dolor orci, at. In sociis arcu turpis enim sem
          ultricies maecenas adipiscing.{" "}
        </p>
      </span>
      <div className="z-[1] p-5 flex items-center justify-between flex-wrap gap-3">
        <h3 className="text-sm">Produced by: Homeland Pictures</h3>
        <div className="flex gap-2 items-center">
          <button className="p-1 bg-red rounded-md">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2819 7.10034L6.16345 1.94475C6.08665 1.90133 5.99872 1.87762 5.90873 1.87606C5.81873 1.8745 5.72991 1.89515 5.65141 1.93588C5.5729 1.97662 5.50754 2.03597 5.46205 2.10782C5.41656 2.17968 5.39258 2.26145 5.39258 2.34473V12.6559C5.39258 12.7392 5.41656 12.8209 5.46205 12.8928C5.50754 12.9647 5.5729 13.024 5.65141 13.0647C5.72991 13.1055 5.81873 13.1261 5.90873 13.1246C5.99872 13.123 6.08665 13.0993 6.16345 13.0559L15.2819 7.90028C15.356 7.85841 15.4172 7.79963 15.4596 7.7296C15.5021 7.65956 15.5244 7.58061 15.5244 7.50031C15.5244 7.42001 15.5021 7.34106 15.4596 7.27102C15.4172 7.20098 15.356 7.14221 15.2819 7.10034Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="p-1 bg-red rounded-md">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3302_14467)">
                <path
                  d="M13.6306 9.22376L13.5511 9.15557C13.4144 9.05439 13.2459 9.00563 13.0763 9.01814C12.9067 9.03065 12.7472 9.10361 12.6268 9.22376L10.0509 11.7996V5.46416L10.0443 5.36756C10.021 5.19753 9.93684 5.04169 9.80749 4.92888C9.67814 4.81607 9.51232 4.75391 9.34069 4.75391L9.24409 4.76054C9.07405 4.78388 8.91822 4.868 8.80541 4.99735C8.6926 5.1267 8.63044 5.29253 8.63043 5.46416V11.8015L6.05459 9.22376L5.97409 9.15462C5.82995 9.04889 5.65124 9.0014 5.47362 9.02163C5.29601 9.04186 5.13255 9.12832 5.01588 9.26376C4.89921 9.3992 4.8379 9.57366 4.84419 9.75231C4.85048 9.93097 4.92391 10.1007 5.04982 10.2276L8.83783 14.0175L8.91738 14.0857C9.05408 14.1868 9.22255 14.2356 9.39217 14.2231C9.56178 14.2106 9.72127 14.1376 9.84165 14.0175L13.6306 10.2295L13.6997 10.149C13.8011 10.0121 13.8498 9.84335 13.8371 9.67352C13.8244 9.50369 13.7511 9.34407 13.6306 9.22376Z"
                  fill="white"
                />
                <path
                  d="M3.89612 0.96582C3.07984 0.96582 2.297 1.29008 1.71981 1.86727C1.14262 2.44447 0.818359 3.2273 0.818359 4.04358L0.818359 14.9341C0.818359 15.7504 1.14262 16.5332 1.71981 17.1104C2.297 17.6876 3.07984 18.0119 3.89612 18.0119H14.7866C15.6029 18.0119 16.3857 17.6876 16.9629 17.1104C17.5401 16.5332 17.8644 15.7504 17.8644 14.9341V4.04358C17.8644 3.2273 17.5401 2.44447 16.9629 1.86727C16.3857 1.29008 15.6029 0.96582 14.7866 0.96582L3.89612 0.96582ZM2.23886 4.04358C2.23886 3.12877 2.98131 2.38632 3.89612 2.38632H14.7866C15.7014 2.38632 16.4439 3.12877 16.4439 4.04358V14.9341C16.4439 15.3736 16.2693 15.7952 15.9585 16.106C15.6477 16.4167 15.2262 16.5914 14.7866 16.5914H3.89612C3.45658 16.5914 3.03506 16.4167 2.72426 16.106C2.41347 15.7952 2.23886 15.3736 2.23886 14.9341V4.04358Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3302_14467">
                  <rect
                    width="17.046"
                    height="17.046"
                    fill="white"
                    transform="translate(0.818359 0.96582)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
