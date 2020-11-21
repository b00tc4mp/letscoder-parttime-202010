// array
var animals = ["carnivores", "herbivores", "omnivores"]
var carnivores = ['lion', 'shark', 'wolve', 'puma', 'snake']
var herbivores = ['elephant', 'giraffe', 'gacelle', 'hippo', 'koala']
var omnivores = ['human', 'monkey', 'dog', 'bear', 'pig']
// animals [1][0]==="elephant"
animals[1] = herbivores
animals[0] = carnivores
animals[2] = omnivores
// todos los elementos sean plurares
for (var i = 0; i < animals.length; i++) {
    for (var j = 0; j < animals[i].length; j++) {
        animals[i][j] = animals[i][j] + "s"
    }   //igual a animals[i][j] += "s"

}
console.log(animals) 