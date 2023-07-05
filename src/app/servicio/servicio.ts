
export interface servicioDTO{
    idServicio: number,
    idComercio: number,
    nomServicio : string,
    horaApertura: string,
    horaCierre: number,
    duracion: number
}

export interface servicioCreacionDTO{        
    idComercio: number,
    nomServicio : string,
    horaApertura: string,
    horaCierre: number,
    duracion: number
}