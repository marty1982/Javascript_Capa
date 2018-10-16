# Sentencias condicionales anidadas

print("Piense un numero del 1 al 4.")
print("Contest S (si) o N (no) a mis preguntas")
primera = input("¿El numero pensado es mayor que 2? ")
if primera == "S":
  segunda = input("¿El numero pensado es mayor a 3? ")
  if segunda == "S":
    print("El numero pensado es 4")
  else:
    print("El numero pensado es 3")
else:
  segunda = input("¿El numero pensado es mayor que 1? ")
  if segunda == "S":
    print("El numero pensado es 2")
  else:
    print("El numero pensado es 1")
print("Saliendo del programa...!")
