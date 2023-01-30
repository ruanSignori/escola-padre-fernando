import { NavContainer } from "@/components/NavContainer";
import { Typography } from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <NavContainer />
      <div className="flex items-center justify-center flex-col">
        <p>Escola Padre Fernando</p>
        <p>valor em educação</p>
      </div>
    </>
  )
}
