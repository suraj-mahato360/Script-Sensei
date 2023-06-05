const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto  md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Script-Sensei
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
