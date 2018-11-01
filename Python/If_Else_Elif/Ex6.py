# Escriba un programa que lea un nivel de sonido en decibelios del usuario. Si el usuario ingresa un nivel de decibelios que coincide con uno de los ruidos en la tabla
# luego su programa debe mostrar un mensaje que contenga sólo ese ruido. Si el usuario ingresa un número de decibelios entre los ruidos enumerados,
# entonces su programa debería mostrar un mensaje indicando en qué ruidos se encuentra el nivel. Asegúrese de que su programa también genera
# salida razonable para un valor más pequeño que el ruido más silencioso de la tabla, y para un Valor mayor que el ruido más fuerte en la tabla.

jackhammer = 130
gasLawnmower = 106
alarmClock = 70
quietRoom = 40
voice = 15

valor = int(input("Ingrese un valor (dB) que esté entre 0 y 130: "))

if valor >= 1 and valor <= 15:
  print(f"El valor {valor} es similar a la voz humana.")
elif valor >= 15 and valor <= 40:
  print(f"El valor {valor} es similar a una habitacion con gente hablando normalmente.")
elif valor >= 41 and valor <= 70:
 	print(f"El valor {valor} es similar a un reloj alarma.")
elif valor >= 71 and valor <= 106:
 	print(f"El valor {valor} es similar a un lanza llamas.")
elif valor >= 107 and valor <= 130:
 	print(f"El valor {valor} es similar a un martillo neumatico.")