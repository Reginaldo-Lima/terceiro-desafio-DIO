//Criação da classe heroi
class Hero {
  constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
  }

  attack() {
      let attack;
      switch (this.type) {
          case "mago":
              attack = "magia"
              break
          case "guerreiro":
              attack = "espada"
              break
          case "monge":
              attack = "artes marciais"
              break
          case "ninja":
              attack = "shuriken"
              break
          default:
              attack = "usou um ataque desconhecido"
      }

      const mensagem = `o ${this.type} atacou usando ${attack}`
      console.log(mensagem)
  }
}

const myHero = new Hero("Aragorn", 35, "guerreiro")
myHero.attack()