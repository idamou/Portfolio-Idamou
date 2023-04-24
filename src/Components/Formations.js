import { Card } from 'primereact/card';
export default function Formations(){
    return(
        <div>

           <Card title="2021-en cours: cycle d'ingénieur " style={{width:'70%', margin:'auto'}}>
                <p className="m-0">
                <strong>Ecole : </strong> ECOLE MAROCAINE DES SCIENCES DEL'INGENIEUR (EMSI MARRAKECH)
                    <br/>
                  
               <strong>filière : </strong>  Ingénierie Informatique et Réseaux
                 </p>
            </Card>

            <Card title="2017-2018: licence universitaire professionnelle" style={{width:'70%', margin:'auto', marginTop:'20px'}}>
                <p className="m-0">
                <strong>Ecole : </strong> FST SETTAT
                    <br/>
                    <strong>filière : </strong>  Ingénierie système, Réseau et sécurité

                </p>
            </Card>

            <Card title="2015-2017: DTS(diplôme de technicien spécialisé)" style={{width:'70%', margin:'auto', marginTop:'20px'}}>
                <p className="m-0">
                <strong>Ecole : </strong> ISGI (OFPPT) Laayoune.
                    <br/>
                    <strong>filière : </strong> Réseau informatique

                </p>
            </Card>
            <Card title="2014 - 2EME ANNEE BAC" style={{width:'70%', margin:'auto', marginTop:'20px'}}>
                <p className="m-0">
                <strong>Ecole : </strong> lycée HASSANE 2
                    <br/>
                    <strong>filière : </strong> Science Physique Chimie

                </p>
            </Card>
        </div>
    );
}