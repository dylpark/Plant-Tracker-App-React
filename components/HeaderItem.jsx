//
//
import Link from "next/link";

function HeaderItem({ Icon, title, href }) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-gray-900">
        <Icon className="h-8 mb-1 text-gray-900" href={href} />
        <p className="tracking-widest font-medium text-gray-900 ">{title}</p>
      </div>
    </Link>
  );
}

export default HeaderItem;
