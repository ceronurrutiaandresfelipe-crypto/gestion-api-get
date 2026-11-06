import { Controller,Get } from '@nestjs/common';

@Controller('inicio')
export class InicioController {

@Get ('bienvenida')
bienvenida(){
    return {
        mensaje: 'bienvenido al sistema',
        sistema: 'gestion API get',
        version: '1.0.0'
    };
}

}



