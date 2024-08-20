import { Alert, Container } from "react-bootstrap"
import Cabecalho from "../components/Cabecalho"
import Link from "next/link"

export default function Fundamentos () {

    return (
        <>
            <Container>        
                <Cabecalho titulo="Titulo 2"/>
                    <Link href="/">Página inicial</Link>
                    <Alert>
                        Warning!
                    </Alert>
                    <h1>Fundamentos</h1>
                    <p>Sucesso!</p>
                <Cabecalho />
            </Container>
        </>
    )
    
}