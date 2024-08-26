const { green, blue, yellow, red } = require('kleur');

module.exports = {
	async apply(value, previousValues) {
		return new Promise(resolve => {
			console.log('\n');
			console.log(
				`Mehtab Ismail's React-Native Boilerplate initialized with success ! 🚀\n`
			);
			console.log(
				`${green(
					'                                                       	\n' +
						'	M     M   EEEEE   H   H   TTTTTTT   AAA    BBBBB 	\n' +
						'	MM   MM   E       H   H      T     A   A   B   B 	\n' + 
						'	M M M M   EEEEE   HHHHH      T     AAAAA   BBBBB 	\n' +  
						'	M  M  M   E       H   H      T     A   A   B   B 	\n' + 
						'	M     M   EEEEE   H   H      T     A   A   BBBBB 	\n' +  
						'													 	\n' +
						'	IIIIIII  SSSSSS   M     M    AAA   IIIII  LL     	\n' +     
						'      I     S        MM   MM   A   A    I    LL     	\n' +    
						'	   I     SSSSSS   M M M M   AAAAA    I    LL        \n' +  
						'	   I          S   M  M  M   A   A    I    LL        \n' +
						'	IIIIIII  SSSSSS   M     M   A   A  IIIII  LLLLLLL 	\n' +
					'															'
				)}`);
			if (previousValues.typescript) {
				console.log(blue('  THE TYPESCRIPT VERSION 📘'));
			} else {
				console.log(yellow('  THE JAVASCRIPT VERSION 📒'));
			}
			console.log('\n');

			console.log(
				'- 📚 If you need to read more about this boilerplate : https://github.com/mehtabismail/RNBoilerplate.git'
			);
			console.log(
				'- 🤕 If you have some troubles : https://github.com/mehtabismail/RNBoilerplate.git/issues'
			);
			console.log(
				'- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/mehtabismail/RNBoilerplate.git'
			);

			if (!previousValues.typescript) {
				console.log('\n');
				console.log(
					red(
						'🚨 You choose the javascript version, don\'t forget to run "yarn lint --fix" after the installation 🚨'
					)
				);
				console.log('\n');
			}

			resolve();
		});
	},
};
