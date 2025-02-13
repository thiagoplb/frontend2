class Pessoa:
    def __init__(self, altura, genero):
        self.altura = altura
        self.genero = genero
        
def leitura(vezes):
    
    lista = []

    for i in range (vezes):
        genl = input("Digite seu gênero (M ou F): ")
        altl = int(input("Digite sua altura em centímetros: "))
        pessoa = Pessoa(altl,genl)
        lista.append(pessoa)

    return lista
    
PARTICIPANTES = 15
somaaltura = 0 
qthomens = 0
listaaltura = []

lista = leitura(PARTICIPANTES)


for i in lista:
    
    listaaltura.append(i.altura)

    if i.genero == 'M' or i.genero == 'm':
        somaaltura = i.altura + somaaltura
        qthomens = qthomens +1 
        
print(f"\nA maior altura é de {max(listaaltura)} e a menor é de {min(listaaltura)}")
print(f"A média da altura das pessoas masculinas é de {somaaltura/qthomens}")
print(f"O numero de pessoas do gênero femínino é de: {PARTICIPANTES-qthomens}\n")
