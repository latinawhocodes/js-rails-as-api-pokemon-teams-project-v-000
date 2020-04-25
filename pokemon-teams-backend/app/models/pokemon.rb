class Pokemon < ApplicationRecord
  belongs_to :trainer

  validate do
    pokemon_count_valid?
  end

  private
    #validation so max 6 pokemon can belong to a trainer
    def pokemon_count_valid?
      #? methods always return a boolean -> this is an instance method ^^
      if self.trainer.pokemons.count >= 6
        self.errors.add(:team_max, "Hey don't get greedy! The maximum number of pokemons is 6.")
      end
    end
end
