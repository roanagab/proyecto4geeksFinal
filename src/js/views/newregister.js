import React from 'react';
import '../../styles/newregister.css';


export const NewRegister = () => {
    return ( 
        <div class="container"> 
         <div class="col-md-12 text-center" id="reg">
                <h1> Créa tu evento</h1>
            </div>        
        <form>                       
            <div class="row">
                <div class="col-md-6 ">                   
                    <input type="text" class="form-control" placeholder="Nombre del evento" />
                </div>                
                <div class="col-md-6 ">
                    <input type="text" class="form-control" placeholder="Descripción del evento"></input><br></br>
                </div>
            </div>
            <label for="avatar">Seleccione foto del evento: </label>
            <div class="col-md-0"></div>
            <input type="file" accept="image/png, image/jpeg" /><br></br><br></br><br></br>
            <input type="text" class="form-control" placeholder="Link video demostrativo" /><br></br>
            <div class="row">
                <div class="col-md-6 ">
                    <label>Fecha inicio </label>
                    <input type="date" class="form-control" placeholder="Fecha inicio del evento" />
                </div>
                <div class="col-md-6">
                    <label>Fecha Término</label>
                    <input type="date" class="form-control" placeholder="Fecha término del evento" /><br></br>
                </div>
                <div class="col-md-6 ">
                    <label>Hora inicio </label>
                    <input type="time" class="form-control" placeholder="Hora inicio" />
                </div>
                <div class="col-md-6 ">
                    <label>Hora término</label>
                    <input type="time" class="form-control" placeholder="Hora término" /><br></br>
                </div>
            </div>
            <input type="text" class="form-control" placeholder="Dirección del evento" /><br></br>
            <label>Requisitos</label>
            <div class="row">
                <div class="col-md-3 ">
                    <input type="text" class="form-control" />
                </div>
                <div class="col-md-3 ">
                    <input type="text" class="form-control" />
                </div>
                <div class="col-md-3 ">
                    <input type="text" class="form-control" /><br></br>
                </div>
                <div class="col-md-3 ">
                    <input type="text" class="form-control" />
                </div>
                <div class="col-md-3 ">
                    <input type="text" class="form-control" />
                </div>
                <div class="col-md-3 ">
                    <input type="text" class="form-control" /><br></br>
                </div>
                <div class="col-md-3 ">
                    <input type="text" class="form-control" />
                </div>
                <div class="col-md-3 ">
                    <input type="text" class="form-control" /><br></br>
                </div>               
            </div>
            <div class="row">
                <div class="col-7">
                    <button type="button" class="btn btn-primary btn-sm  float-right">Crear evento</button>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary btn-sm  float-right">Cancelar</button>
                </div>
            </div>                      
        </form>  
      </div>      
    )
}