
import { ModelProps } from "@akanjs/client";
import { cnst, usePage } from "@koyo/client";
import { Link } from "@akanjs/ui";

export const Card = ({ inventory, href }: ModelProps<"inventory", cnst.LightInventory>) => {
  const { l } = usePage();
  return (
    <Link href={href} className="animate-fadeIn w-full h-36 flex rounded-lg shadow-sm hover:shadow-lg duration-300">
      <div>{l("inventory.id")}:{inventory.id}</div>
    </Link>
  );
};
