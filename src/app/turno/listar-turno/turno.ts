export interface turnoDTO{    
    idTurno: number,
    idServicio: number,
    fechaTurno : Date,
    horaInicio: string,
    horaFin: number,
    estado: boolean
}

export interface turnoCreacionDTO{        
    idServicio: number,
    fechaInicio: Date,
    fechaFin: Date
}

