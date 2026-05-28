type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button(props: ButtonProps) {
    return (
        <button type={props.type} onClick={props.onClick} className="bg-amber-300 hover:bg-amber-400 text-black hover:text-gray-800 font-bold py-2 px-2 rounded-full transition ease-in-out duration-300 cursor-pointer">
            {props.children}
        </button>
    )
}