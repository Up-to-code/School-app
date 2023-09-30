import Link from "next/link";

function Icone_style({ children, text, href }) {
  return (
    <Link href={`/Settings/${href}`}>
      <div className=" text-2xl mx-3 text-zinc-600 t-all hover:bg-red-400 hover:text-zinc-50  p-1  rounded-md flex justify-center items-center">
        {children}
      </div>
    </Link>
  );
}

export default Icone_style;

function Icone_style_none_link({ children }) {
  return (
    <div className=" text-2xl mx-3 text-zinc-600 t-all hover:bg-red-400 hover:text-zinc-50  p-1  rounded-md flex justify-center items-center">
      {children}
    </div>
  );
}

export const Icone_style_none = Icone_style_none_link;
