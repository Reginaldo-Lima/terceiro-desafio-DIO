/*
class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    createAttack(){
        let attack
        switch (this.type) {
            case 'mago':
        attack = 'usou magia';
        break;
      case 'guerreiro':
        attack = 'usou espada';
        break;
      case 'monge':
        attack = 'usou artes marciais';
        break;
      case 'ninja':
        attack = 'usou shuriken';
        break;
      default:
        attack = 'usou um ataque desconhecido';
        }
    }

    toString(){
        console.log(`o ${this.type} atacou usando ${attack}`)
    }   
}    
*/
//chatGPT
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe
  const meuHeroi = new Heroi('Herói1', 30, 'mago');
  meuHeroi.atacar();