## ES6/ES2015.

Examine the file `lab002/car.js`. It contains the definition for a custom class, Car. For illustrative purposes, a car's registration property has been made private. Other properties (e.g. owner details, features, previous owners) are coded as c.  

Now create a new file in `lab992`, called `useCar.js` and paste in the following code:

		import Car from './car.js' ;

		let car1 = new Car('Joe Bloggs','3 Walkers Lane',
						'Toyota','Corolla',1.8,'10-WD-1058');
		car1.newOwner( 'Pat Smith', '1 Main Street');
		car1.newOwner( 'Sheila Dwyer', '2 High Street');
		car1.newOwner('Donal Dunne','5 Kings Way');
		let report = (`
		Registration: ${car1.getRegistration()}
		Previous owner: ${car1.previous_owners[2].name }
		Current owner: ${car1.owner}
		Car age: ${car1.howOld() }
		` )
		console.log(report)

Because this code is using some syntax not yet supported by node, e.g. import/export, we must transpile it before execution.  

       $ npx run babel-node useCar.js 

*babel-node* transpiles ES6 into vanilla JS and then runs the output in the Node environment. 

The Car class is missing the 'features' aspect, e.g. Alarm, Parking assist, hasFeature method. __You are required__ to examine `functions.js` (or `constructor.js`) to review how it was implemented and then update the Car class definition to incorporate it. To prove your code works, add the following to the end of `useCar.js`:

      console.log(`Alarm: ${aCar.hasFeature('alarm')}` );

and run it.

After completing the solution update the git repository:
 
        $ git add -A
        $ git commit -m "Completed Car class"

[solution]: ./solutions.html
[demo]: demo.zip 
[car]: ./car.zip


