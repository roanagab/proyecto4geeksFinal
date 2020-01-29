import React from 'react';

export const CardDetail = () => {
    return (

        <div class="card" style={{ width: 100 + "%" }}>
            <img class="card-img-top" style={{ width: 100 + "%" }} src="https://lh6.googleusercontent.com/proxy/Hi3ZjYOGMawOBoLbmjKFWfNUrqppa6MMevzY9vY-bPvmcqnppPpZcFm-ksSV0ZiSRGo-SarnKCCVquZjvVo_7tfFBTRw0WWE8ZFhDieilOo6s-2_PM0KcLALIQ" alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title">Titulo del Evento</h5>
                <p class="card-text">Algunos Requerimientos</p>
                <p class="card-text">Algunos Requerimientos</p>
                <a href="#" id="sumarse" className="btn btn-success">Sumarse</a>
                <a href="#" id="bajarse" className="btn btn-danger">Bajarse</a>
            </div>
        </div>
    );
}        