class Factory {
  constructor() {
    this.make = "Mazda";
    this.location = "USA";
    this.airbags = true;
    this.abs = true;
    this.warranty = "(60,000 miles / 3 years)";
    this.massBuild = function(quantity, options) {
      let message = `Building ${quantity} ${options.color} ${options.trim} ${options.model}`
      if (quantity > 1) message += 's'
    };
    this.customerBuild = function(color, options) {
      console.log(`Building one ${color} ${options.trim} ${options.model} with the following options: ${options.options.join(", ")}`);
    };
  }
}

class Car extends Factory {
  constructor({model, doors, color, engineType, transmission, trim, wheelsTrim, audio, seatsTrim, moonroof}){
    super();
    this.model = model;
    this.doors = doors;
    this.color = color;
    this.engineType = engineType;
    this.transmission = transmission;
    this.trim = trim;
    this.wheelsTrim = wheelsTrim;
    this.audio = audio;
    this.seatsTrim = seatsTrim;
    this.moonroof = moonroof;
    this.engineSize = 4;
    this.navigation = true;
    this.backupCamera = true;
    this.warranty = '100,000 miles / 5 years';
  }
}

class Sport extends Car {
  constructor({model, trim, transmission, top, color, seatsTrim, audio, wheelsTrim}){
    super({
      model: model, 
      trim: trim, 
      transmission: transmission,
      wheelsTrim: wheelsTrim, 
      audio: audio, 
      seatsTrim: seatsTrim, 
      doors: 2,
      convertible: true,
      engineType: 'Gasoline', 
      moonroof: false,
    });

    this.top = top;
  }
}

class Truck extends Factory{
  constructor({model, color, engineSize, hitch, bed, navigation, doors}){
    super();
    this.model = model;
    this.color = color;
    this.engineSize = engineSize;
    this.hitch = hitch;
    this.bed = bed;
    this.doors = doors;
    this.navigation = navigation;
    this.warranty = "150,000 miles / 6 years";
  }
}


const mazda3 = new Car({
  model: 'Mazda3', 
  color: 'Red', 
  engineType: 'Hybrid', 
  transmission: 'Automatic', 
  trim: 'Touring', 
  wheelsTrim: 'Base', 
  audio: 'Premium', 
  seatsTrim: 'Leather', 
  doors: 4, 
  moonroof: true,
});


// Print mazda3. I should have all the above properties.
console.log(mazda3);

// Print calling massBuild(), building 35000 cars.
// It should print: "Building 35000 Red Touring Mazda3's."
console.log(mazda3.massBuild(35000, {
  color: 'Red',
  trim: 'Touring',
  model: 'Mazda3'
}));


// Print, calling customerBuild(), building one yellow mazda3 with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
console.log(mazda3.customerBuild(
  "yellow", {
    model: "Mazda3", 
    trim: 'Touring', 
    options:['Weather Package', 'Satellite Radio', 'Rear Spoiler'],
  }
))

// MIATA-RF MASS PRODUCTION
// Create an instance of Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  
//top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:
const miataRf = new Sport({
  model: 'Miata-RF',
  trim: 'Grand Touring',
  transmission: 'Manual', 
  top: 'Hard top',
  color: 'Red',
  seats: 'Leather',
  audio: 'Premium',
  wheels: 'Premium',
})

// Print miataRf. It should have all of the above properties. 
console.log(miataRf);

// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
console.log(miataRf.massBuild(15000, {
  color: 'Red',
  trim: 'Grand Touring',
  model: 'Miata-RF'
}));

// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"

console.log(miataRf.customerBuild("Black", {
  model: 'Miata-RF', 
  trim: 'Grand Touring', 
  options: ["hID headlights", "sports suspension" ,"leather steering wheel", "heated seats", "adaptive cruise control"]
}));


// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
const trailBlazer = new Truck({
  model: 'Trail Blazer', 
  color: 'Blue', 
  trim: 'Sport', 
  engineSize: 8, 
  hitch: true, 
  bed: 'standard',
  naviation: true, 
  doors: true
});


// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
console.log(trailBlazer);

// Print trailBlazer, calling massBuild(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."

console.log(trailBlazer.massBuild(35000, {
  color: 'blue',
  trim: 'Sport Trail Blazer',
}));


// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"

console.log(mazda3.customerBuild(
  "red", {
    model: "Mazda3", 
    trim: 'Touring', 
    options:['Seat Warmers', 'Tinted Windows', 'Fog Lamps'],
  }
))


