import Image from "next/image";
type NavbarProps = {
  onAgendarClick: () => void;
};
export const Navbar = ({ onAgendarClick }: NavbarProps) => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-around text-white bg-black/30 backdrop-blur-md"
      style={{ boxShadow: "0 1px 0px rgb(146, 122, 15)" }}
    >
      <Image
        src="/logo.png"
        alt="Logo da Elite Classic Barbearia"
        width={60}
        height={50}
        className="object-cover"
      />

      <ul className="flex justify-around items-center gap-20">
        <li className="group relative">
          <a href="#sobre"  className="font-medium transition-all duration-300 ease-in-out group-hover:scale-110 cursor-pointer">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </li>

        <li className="group relative">
          <a href="#unidades"  className="font-medium transition-all duration-300 ease-in-out group-hover:scale-110 cursor-pointer">
            Unidades
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </li>

        <li className="group relative">
          <a className="font-medium transition-all duration-300 ease-in-out group-hover:scale-110 cursor-pointer">
            Visagismo
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </li>

        <li className="group relative">
          <a href="#servicos"   className="font-medium transition-all duration-300 ease-in-out group-hover:scale-110 cursor-pointer">
            Serviços
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      <button 
      onClick={onAgendarClick}
      className="px-10 py-1 rounded-2xl bg-yellow-500 shadow-sm shadow-amber-700 cursor-pointer text-black"
      >
        Agendar
      </button>
    </nav>
  );
};
