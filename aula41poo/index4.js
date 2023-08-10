// Método de Instância Estático

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
     // método de instância
    aumentarVolume() {
        this.volume += 2;
    }
    // método de instância
    diminuirVolume() {
        this.volume -= 2;
    }
    // método estático
    static trocaPilha() {
        console.log('Ok, vou trocar!')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

// Só consigo acessar esse método pela classe por conta de ser estático
ControleRemoto.trocaPilha();