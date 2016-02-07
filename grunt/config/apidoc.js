module.exports = {
	apiRouteDocs: {
		src: 'server/routes/',
		dest: 'apidoc/',
		options: {
			debug: true,
			includeFilters: [ '.*\\.js$' ]
		}
	}
};
