import React from "react";
import '../css/Testimonio.css'

function Testimonio(p) {
    return (
        <div className='container-testimonio'>
            <img className="imagen-testimonio" src= {`https://unavatar.io/${p.name}`}/>
            <div className="card-testimonio">
                <p className="nombre-testimonio">{p.name}</p>
                <p className="cargo-testimonio"><b>{p.title}</b></p>
            <p className="text-testimonio">"{p.description}"</p>
            </div>
        </div>
    );
}

export default Testimonio;