import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo(){

    return (
        <Layout titulo="Exemplo de Params">
            <Cabecalho titulo="teste de Título"/>
            <Cabecalho titulo="teste de parâmetro 2"/>
        </Layout>
    )
}