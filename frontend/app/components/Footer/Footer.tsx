import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-secondary text-highlight border-t border-gray-600 shadow-md bottom-0 w-full">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-6 py-8 lg:py-10 md:grid-cols-4 text-highlight bg-secondary rounded-t-lg">
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">
              Programming Partner
            </h2>
            <p className="text-sm">
              A place where developers connect, collaborate, and grow together.
            </p>
          </div>

          <nav aria-label="Company Info">
            <h2 className="mb-4 text-sm font-semibold uppercase">Company</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aboutUs" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Help Center">
            <h2 className="mb-4 text-sm font-semibold uppercase">Support</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/communityGuidelines" className="hover:underline">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="mb-4 text-sm font-semibold uppercase">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacyPolicy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/termsAndConditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-600">
          <span className="text-sm sm:text-center">
            © 2025{" "}
            <Link to="#" className="hover:underline">
              ProgrammingPartner.com
            </Link>
            . All Rights Reserved.
          </span>

          {/* Social Media Icons */}
          <div className="flex mt-4 space-x-5 md:mt-0">
            <Link to="#" className="hover:text-gray-400" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 19">
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link to="#" className="hover:text-gray-400" aria-label="Discord">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
