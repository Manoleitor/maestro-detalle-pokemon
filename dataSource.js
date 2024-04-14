class DataSource{

getData(){
// El JSON proporcionado
const jsonData = 
{
    "data": {
      "pokemon": [
        {
          "name": "bulbasaur",
          "height": 7,
          "id": 1,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "overgrow",
                "id": 65,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine grass Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "chlorophyll",
                "id": 34,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Während strong sunlight ist die speed eines Pokémon mit dieser Fähigkeit doppelt so hoch wie normal.\n\nDieser Bonus zählt nicht als stat modifier.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "ivysaur",
          "height": 10,
          "id": 2,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "overgrow",
                "id": 65,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine grass Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "chlorophyll",
                "id": 34,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Während strong sunlight ist die speed eines Pokémon mit dieser Fähigkeit doppelt so hoch wie normal.\n\nDieser Bonus zählt nicht als stat modifier.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "venusaur",
          "height": 20,
          "id": 3,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "overgrow",
                "id": 65,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine grass Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "chlorophyll",
                "id": 34,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Während strong sunlight ist die speed eines Pokémon mit dieser Fähigkeit doppelt so hoch wie normal.\n\nDieser Bonus zählt nicht als stat modifier.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "charmander",
          "height": 6,
          "id": 4,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "blaze",
                "id": 66,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine fire Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "solar-power",
                "id": 94,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Während starkem Sonnenlicht, wird der special attack von Pokémon mit dieser Fähigkeit um 50% erhöht, dafür erleidet es 1/8 seiner maximalen hp Schaden am Ende der Runde.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "charmeleon",
          "height": 11,
          "id": 5,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "blaze",
                "id": 66,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine fire Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "solar-power",
                "id": 94,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Während starkem Sonnenlicht, wird der special attack von Pokémon mit dieser Fähigkeit um 50% erhöht, dafür erleidet es 1/8 seiner maximalen hp Schaden am Ende der Runde.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "charizard",
          "height": 17,
          "id": 6,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "blaze",
                "id": 66,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine fire Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "solar-power",
                "id": 94,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Während starkem Sonnenlicht, wird der special attack von Pokémon mit dieser Fähigkeit um 50% erhöht, dafür erleidet es 1/8 seiner maximalen hp Schaden am Ende der Runde.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "squirtle",
          "height": 5,
          "id": 7,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "torrent",
                "id": 67,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine water Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "rain-dish",
                "id": 44,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit heilen am Ende jeder Runde 1/16 ihrer maximalen hp wenn es regnet.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "wartortle",
          "height": 10,
          "id": 8,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "torrent",
                "id": 67,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine water Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "rain-dish",
                "id": 44,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit heilen am Ende jeder Runde 1/16 ihrer maximalen hp wenn es regnet.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "blastoise",
          "height": 16,
          "id": 9,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "torrent",
                "id": 67,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine water Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "rain-dish",
                "id": 44,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit heilen am Ende jeder Runde 1/16 ihrer maximalen hp wenn es regnet.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "caterpie",
          "height": 3,
          "id": 10,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "shield-dust",
                "id": 19,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Ein Pokémon mit dieser Fähigkeit ist immun gegen Zusatzeffekt von Attacken.\n\nEin Zusatzeffekt ist die Chance einer Attacke, als \"Effektchance\" bezeichnet, eine status ailment oder eine stat modifier hervorzurufen oder das Ziel zurückschrecken zu lassen, zusätzlich zum Haupteffekt einer Attacke. Zum Beispiel ist die paralysis die thunder shock verursachen kann ein Zusatzeffekt, im Gegensatz zu thunder wave, genauso wie das Entfernen des Items durch knock off und die erhöhte kritische Trefferchance durch air cutter.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "run-away",
                "id": 50,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit können immer aus Kämpfen mit wilden Pokémon fliehen, selbst wenn es durch eine Attacke oder eine Fähigkeit gefangen ist.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "metapod",
          "height": 7,
          "id": 11,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "shed-skin",
                "id": 61,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit haben am Ende jeder Runde eine 33% Chance von einer bestehenden major status ailment geheilt zu werden.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "butterfree",
          "height": 11,
          "id": 12,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "compound-eyes",
                "id": 14,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Die Attacken eines Pokémon mit dieser Fähigkeit haben eine um 30% erhöhte accuracy.\n\nDiese Fähigkeit hat keinen Einfluss auf K.O.-Attacken (fissure, guillotine, horn drill und sheer cold).\n\nAußerhalb vom Kampf: Wenn ein Pokémon mit dieser Fähigkeit an erster Stelle im Team steht, erhöht sich die Chance, dass ein wildes Pokémon ein Item trägt von 50%, 5% oder 1% auf 60%, 20% oder 5%, respektive.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "tinted-lens",
                "id": 110,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit verdoppeln den Schaden von Attacken die not very effective gegen das Ziel sind.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "weedle",
          "height": 3,
          "id": 13,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "shield-dust",
                "id": 19,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Ein Pokémon mit dieser Fähigkeit ist immun gegen Zusatzeffekt von Attacken.\n\nEin Zusatzeffekt ist die Chance einer Attacke, als \"Effektchance\" bezeichnet, eine status ailment oder eine stat modifier hervorzurufen oder das Ziel zurückschrecken zu lassen, zusätzlich zum Haupteffekt einer Attacke. Zum Beispiel ist die paralysis die thunder shock verursachen kann ein Zusatzeffekt, im Gegensatz zu thunder wave, genauso wie das Entfernen des Items durch knock off und die erhöhte kritische Trefferchance durch air cutter.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "run-away",
                "id": 50,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit können immer aus Kämpfen mit wilden Pokémon fliehen, selbst wenn es durch eine Attacke oder eine Fähigkeit gefangen ist.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "kakuna",
          "height": 6,
          "id": 14,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "shed-skin",
                "id": 61,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit haben am Ende jeder Runde eine 33% Chance von einer bestehenden major status ailment geheilt zu werden.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "beedrill",
          "height": 10,
          "id": 15,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "swarm",
                "id": 68,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit dieser Fähigkeit nur noch 1/3 seiner maximalen hp oder weniger hat, werden all seine bug Attacken verstärkt, so dass sie 1,5× so viel regular damage anrichten wie sonst.\n\nAußerhalb vom Kampf: Wenn ein Pokémon mit dieser Fähigkeit an erster Stelle im Team steht, ist die Wahrscheinlichkeit einem wilden Pokémon zu begegnen doppelt so hoch wie normal.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "sniper",
                "id": 97,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit verursachen bei kritischen Treffern 3× so viel Schaden anstatt 2× wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "pidgey",
          "height": 3,
          "id": 16,
          "pokemon_v2_pokemonabilities": [
            {
              "pokemon_v2_ability": {
                "name": "keen-eye",
                "id": 51,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Pokémon mit dieser Fähigkeit kann die accuracy nicht gesenkt werden.\n\nDie Fähigkeit verhindert nur direkte Statuswertveränderungen, der Genauigkeitsverlust durch fog wird nicht verhindert, auch nicht das Erhöhen des Fluchtwerts des Gegners. Pokémon mit dieser Fähigkeit kann trotzdem negative accuracy durch heart swap übertragen werden.\n\nAußerhalb vom Kampf: Wenn das erste Pokémon im Team diese Fähigkeit hat, dann hat jede Begegnung mit einem Pokémon das 5 oder mehr Level niedriger ist, eine Chance von 50% übersprungen zu werden.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "tangled-feet",
                "id": 77,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Wenn ein Pokémon mit diese Fähigkeit verwirrt ist, ist sein evasion doppelt so hoch wie sonst.",
                    "language_id": 6
                  }
                ]
              }
            },
            {
              "pokemon_v2_ability": {
                "name": "big-pecks",
                "id": 145,
                "pokemon_v2_abilityeffecttexts": [
                  {
                    "effect": "Die defense von Pokémon mit dieser Fähigkeit kann nicht von anderen Pokémon gesenkt werden.\n\nDas Pokémon kann nagative defense durch heart swap oder guard swap erhalten.",
                    "language_id": 6
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  }

  return jsonData;
}
}
