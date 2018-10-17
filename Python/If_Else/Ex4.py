# Ejemplo de elif para numero multiplo de dos

numero = int(input("Escriba un numero: "))
if numero % 2 == 0 and numero % 4 != 0:
    print(f"{numero} es multiplo de dos")
elif numero % 4 == 0:
    print(f"{numero} es multiplo de cuatro y de dos")
else:
    print(f"{numero} no es multiplo de dos")
