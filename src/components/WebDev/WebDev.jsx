import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WebDev = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-3">
        {/* Card start */}
        <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-3 lg:p-5">
          <div className="">
            {/* <div className="flex items-center justify-start p-4 w-24">
              <svg
                fill="#000000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                enable-background="new 0 0 512 512"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g id="5151e0c8492e5103c096af88a51e75c7">
                    {' '}
                    <path
                      display="inline"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958 c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918 C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938 c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857 c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458 c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917 c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822 c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425 c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511 c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969 c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344 C433.706,340.486,474.331,355.693,470.696,409.917z"
                    >
                      {' '}
                    </path>{' '}
                  </g>{' '}
                </g>
              </svg>
            </div> */}
            <div className="p-4">
              <div className="text-2xl text-gray-800 font-bold">Job Title</div>
              <p className="text-gray-600 text-lg mt-2">
                Short description for the job goes here. It can be a brief
                overview of the job requirements and responsibilities.
              </p>
              <div className="flex flex-col xl:flex-row justify-between mt-4">
                <p className="text-slate-700 text-lg font-medium pb-2">
                  <span className="font-semibold">Deadline:</span> 2023-12-18
                </p>
                <p className="text-slate-700 text-lg font-medium">
                  <span className="font-semibold">Price Range:</span> $400 -
                  $600
                </p>
              </div>
              <div className="pt-5">
                <Link>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    className="rounded-lg btn bg-emerald-600 text-white transition hover:bg-emerald-800 w-40"
                  >
                    Bid Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Card end */}
      </div>
    </div>
  );
};

export default WebDev;
