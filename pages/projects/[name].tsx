import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter();
  console.log(router);
  return <h1>ola</h1>;
}
