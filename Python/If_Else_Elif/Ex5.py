# En este ejercicio creará un programa que lee una letra del alfabeto del usuario. Si el usuario ingresa a, e, i, o, u, entonces su programa debería mostrar un mensaje
# indicando que la letra introducida es una vocal. De lo contrario si es una consonante.

letra = input("Ingrese una letra: ")

if letra in ["a", "e", "i", "o", "u"]:
    print("Usted ingreso una vocal")
else:
    print("Usted ingreso una consonante")
