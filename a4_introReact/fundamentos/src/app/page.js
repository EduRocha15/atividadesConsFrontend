import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";
import Pagina from "./components/Pagina";

export default function Home() {

  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}
      <Pagina/>

      <Link href="/fundamentos">Página Fundamentos</Link> <br />
    </main>
  );
}
