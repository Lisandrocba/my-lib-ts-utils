# Librería de Utilidades

Esta librería de utilidades ha sido creada como parte de una práctica personal, pero está abierta a la comunidad para que pueda ser utilizada por otros desarrolladores. La librería incluye funciones de validación de formularios para validar campos de tipo texto, email y password. También cuenta con funciones de utilidad para validar diferentes tipos de entradas, comprobar si un valor está vacío y capitalizar texto.

## Instalación

Para instalar la librería, puedes utilizar npm. Ejecuta el siguiente comando en tu terminal:

```bash
npm install lisandrocba-lib-js-utils
```

import * as utils from 'lisandrocba-lib-js-utils'

## Funciones Disponibles

### check
`isString(value: unknown):boolean`: Funcion que valida si la entrada es un string.
`isObject(value: unknown):boolean`: Funcion que valida si la entrada es un Objeto.
`isNullOrUndefined(value: unknown):boolean`: Funcion que valida si la entrada es null o undefined.
`isFunction(value: unknown):boolean`: Funcion que valida si la entrada es una funcion.
`isEmpty(value: unknown):boolean`: Funcion que valida si la entrada es una instancia de un Objeto.

### string
`capitalLetter(value: unknown):string`: Capitaliza un texto.

### form
`inputEmail(value: unknown):{message: string, validation: boolean, value}`: Funcion que valida si la entrada es un email de tipo string.
`inputText(value: unknown):{message: string, validation: boolean, value}`: Funcion que valida si la entrada es un string y le quita los espacios anteriores y posteriores al texto.
`inputPassword(value: unknown):{message: string, validation: boolean, value}`: Funcion que valida si el valor ingresado es de tipo string y si cumple con los siguientes requisitos: La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.

### array
`arraylable = <T> (value: T | null): T | []`: Funcion que valida si la entrada es un arreglo y retorna un arreglo en caso de serlo y un arreglo vacio en caso de no serlo
`sumArray = (value: number[]): number`: Funcion que toma un arreglo de numeros y retorna el total de la suma de todos sus elementos.


## Pruebas Unitarias

Cada función de la librería tiene sus propias pruebas unitarias escritas con Vite. Puedes encontrar los archivos de pruebas en la carpeta __tests__.

## Mutation Testing
Las pruebas unitarias de la librería están validadas con mutation testing utilizando la librería Stryker. Puedes ejecutar las pruebas de mutation testing utilizando el comando:
```
    npm run test:mutation
```


### Contribución
¡Siéntete libre de contribuir a esta librería! Si tienes ideas para nuevas funciones o mejoras, puedes abrir un issue o enviar un pull request.

##
Lisandro Cba (lisandrocba)