function dictionary(list) {
    let dict = {};

    for (const line of list) {
        let word = JSON.parse(line);
        dict = Object.assign(dict, word)
    }

    let sortedKeys = Object.keys(dict)
    sortedKeys.sort((a, b) => a.localeCompare(b));

    for (let term of sortedKeys) {
        let definition = dict[term];

        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
dictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',
    '{"Bus":"A large motor vehiclecarrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument  for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])
