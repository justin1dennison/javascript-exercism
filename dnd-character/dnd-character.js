
const roll = () => 1 + Math.floor(Math.random() * 6)
const sort = arr => [...arr].sort()
const plus = (x, y) => x + y

export const abilityModifier = n => {
    if(n < 3) throw new Error('Ability scores must be at least 3') 
    if(n > 18) throw new Error('Ability scores can be at most 18')
    return Math.floor((n - 10) / 2)
}

export class Character {
  static rollAbility() {
      return sort([roll(), roll(), roll(), roll()])
          .slice(1)
          .reduce(plus, 0)
  }

  constructor() {
      this._strength = Character.rollAbility()
      this._dexterity = Character.rollAbility()
      this._constitution = Character.rollAbility()
      this._intelligence = Character.rollAbility()
      this._wisdom = Character.rollAbility()
      this._charisma = Character.rollAbility()
      this._hp = abilityModifier(this._constitution) + 10
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence
  }

  get wisdom() {
    return this._wisdom
  }

  get charisma() {
    return this._charisma
  }

  get hitpoints() {
    return this._hp
  }
}
