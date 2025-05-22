import { cn } from "@/lib/utils";

interface PropTypes {
  className?: string;
}

const Divider = (props: PropTypes) => {
  const { className } = props;

  return (
    <hr className={cn("w-full my-1 border-[1.2px] shadow-md", className)} />
  );
};

export default Divider;
