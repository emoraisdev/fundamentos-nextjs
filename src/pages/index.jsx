import Link from "next/link";
import Navegador from "../components/Navegador";

export default function Inicio() {

    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
            }
        }>
            <Navegador destino="/estiloso" name="Estiloso" />
            <Navegador destino="/exemplo" name="Exemplo" cor="#ede193ff"/>
            <Navegador destino="/navegacao" name="Navegação #01" cor="#7fb686ff"/>
            <Navegador destino="/cliente/sp-2/123" name="Navegação #02" cor="#d9fc65ff"/>
            <Navegador destino="/estado" name="Componente com Estado" cor="#c1d7f5ff"/>
            <Navegador destino="/integracao" name="Integracao com API #01" cor="#e387b0ff"/>
            <Navegador destino="/estatico" name="Conteúdo Estático" cor="#b2f7b7ff"/>
        </div>
    )
}