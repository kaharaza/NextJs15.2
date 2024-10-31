export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-gray-100 to-gray-50 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="../hr_research"
          className="flex  items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.vet.cmu.ac.th/webmed/adminvet/image/header2.png"
            className="h-auto w-[220px] md:h-auto md:w-[300px]"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-3xl text-gray-300 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            <li>
              <a
                href="../hr_research"
                className="block py-2 px-3  text-gray-800 bg-white rounded md:bg-transparent md:text-blue-850 md:p-0   "
                aria-current="page"
              >
                หน้าแรก
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                งานสารบรรณ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                งานบุคคล
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                งานอาคารและยานพาหนะ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                งานเทคโนโลยีสารสนเทศ
              </a>
            </li>
          
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                ติดต่อสอบถาม
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
