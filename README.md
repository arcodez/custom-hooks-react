# Creacion de Custom Hooks o Hooks personalizados

## ¿Porque crearlo?

Los Hooks nos ayudan mucho a la reutilizaciñon de codigo y orden en el mismo ya que podemos refactorizar y reutilizar porque al fin y al cabo son funciones que se destructuran ya sea como objetos, arreglos, variables unicas o funciones como tal

## ¿Cuando usar un arreglo o un objeto?

Al crear custom hooks es mas probable que se usen objetos ya que el orden en que se obtienen los datos es independiente ya que se destructura como se hace normalmente, asi que veamos las diferenecias

_Objetos:_ se pueden obtener valores independientes sin importar el orden en que se declaran, pero al momento de obtenerlos los nombres deben ser iguales y para cambiarlos se le deben asignar alias.

_Arreglos:_ Para obtener los valores deben seguir el orden en que se declaran, pero se le puede cambiar el nombre directamente sin asignar alias

_Variable unica:_ cuando solo se retorna un valor no se debe destructurar nada solo se devuelve una variable
