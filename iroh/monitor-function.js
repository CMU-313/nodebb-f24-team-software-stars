'use strict';

const Iroh = require('iroh');

// Asked ChatGPT for help on making this function
function monitorFunction(fn, name) {
	console.log(`Monitoring ${name} with Iroh`);

	const stage = new Iroh.Stage(`
        function monitored() {
            try {
                return target();
            } catch(e) {
                console.error(e);
                throw e;
            }
        }
    `);

	stage.addListener(Iroh.CALL)
		.on('before', () => {
			console.log(`Entering ${name}`);
		})
		.on('after', () => {
			console.log(`Exiting ${name}`);
		});

	return async function (...args) {
		console.log(`Entering ${name}`);

		try {
			const result = await fn.apply(this, args);
			console.log(`Exiting ${name}`);
			return result;
		} catch (error) {
			console.error(`Error with ${name}:`, error);
			throw error;
		}
	};
}

module.exports = {
	monitorFunction: monitorFunction,
	CALL: Iroh.CALL,
	FUNCTION: Iroh.FUNCTION,
	TRY: Iroh.TRY,
};