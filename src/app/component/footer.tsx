export function Footer() {
  return (
    <>
      <footer className="bg-white shadow fixed bottom-0 w-full">
        <div className="flex items-center justify-between p-6 container mx-auto max-w-7xl">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://vmcmu.vet.cmu.ac.th/index_page?lang=th"
              className="hover:underline"
            >
              VMCMU
            </a>
            . All Rights Reserved.
          </span>
          <ul className=" flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-3 hidden md:flex">
            <li>
              <a href="#" className="hover:underline">
              งานสารบรรณ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
              งานบุคคล
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
              งานอาคารและยานพาหนะ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
              งานเทคโนโลยีสารสนเทศ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
              ติดต่อสอบถาม
              </a>
            </li>
         
          </ul>
        </div>
      </footer>
    </>
  );
}
