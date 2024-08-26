// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

function isYarnAvailable() {
	try {
		return !!(
			execSync('yarn --version', {
				stdio: [0, 'pipe', 'ignore'],
			}).toString() || ''
		).trim();
	} catch (error) {
		return null;
	}
}
function isNpmAvailable() {
	try {
		return !!(
			execSync('npm --version', {
				stdio: [0, 'pipe', 'ignore'],
			}).toString() || ''
		).trim();
	} catch (error) {
		return null;
	}
}

module.exports = {
	async apply(value, previousValues) {
		return new Promise(resolve => {
			let packageManager = null;

			// react-native cli prefer yarn so we follow the same logic
			if (isYarnAvailable()) {
				packageManager = 'yarn';
			} else if (isNpmAvailable()) {
				packageManager = 'npm';
			}

			if (!packageManager) {
				console.error(
					'🚨 No package manager found. Please install yarn or npm.'
				);
				process.exit(1);
			}

			if (!value) {
				console.log('\n');

				console.log('📦 Loading the build tool...');
				execSync(`${packageManager} add -D typescript`);

				console.log('🧱 Building the javascript source...');
				execSync(
					'npx tsc --jsx react-native --module ESNext -t esnext --outDir js --noEmit false'
				);

			} 

			resolve();
		});
	},
};
