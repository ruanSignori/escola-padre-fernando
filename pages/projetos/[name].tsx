import { useRouter } from "next/router";

export default function Projetos() {
  const router = useRouter();
  console.log(router);
  return <h1>ola</h1>;
}
