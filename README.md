# Platzom

Platzom es un idioma inventado para el [Curso de fundamentos de javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educacion online

## Descripcion del problema

- Si la palabra termina con "ar", se le quitan las dos letras
- Si la palabra inicia con z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion de medio
-Por ultimo, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas

## Instalacion
```
npm install platzom
```

## Curso

```
import platzom from 'platzom'

platzom('Programar')//Program
platzom('Zorro');//Zorrope
platzom('Zarpar');//Zarppe
platzom('abecedario');//abece-dario
platzom('sometemos');//SoMeTeMoS
```

## Creditos
- [Carlos Rdoriguez]

## Licencia

[MIT](https://opensource.org/licenses/MIT)
