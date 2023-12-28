import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 w-full px-20 gap-8 border-b">
      <div>Logo</div>
      <div>
        <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Service</Link>
          </li>
          <li>
            <Link href="/">Find Location</Link>
          </li>
          <li>
            <Link href="/">My Account</Link>
          </li>
        </ul>
      </div>
      <div>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
