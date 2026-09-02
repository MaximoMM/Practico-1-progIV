# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

_Permite realizar Declaration Merging (fusión de declaraciones). Si se declaran dos interfaces con el mismo nombre en el mismo ambito (o a través de distintos archivos/modulos), TypeScript automaticamente combina las propiedades en una sola interfaz. Con type intentar declarar el mismo identificador dos veces genera un error de compilacion _

## ¿Qué permite hacer `type` que `interface` no?

_type es mucho más flexible porque permite definir alias para cualquier tipo de dato, no solamente la estructura de un objeto,tambien permite _

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

_Si,las 2 estructuras se pueden extender para armar tipos más complejos, pero usan sintaxis distintas _

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

_Elegiría interface por que las entidades del dominio (como Alumno) representan la forma de un objeto o contrato de la aplicación y justamente interface está optimizada para definir estructuras de objetos puras,_
