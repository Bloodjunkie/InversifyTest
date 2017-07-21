requirejs.config({
    paths: {
        'reflect_metadata': 'node_modules/reflect-metadata/Reflect',
        'inversify': 'node_modules/inversify/amd/',
        'inversify-inject-decorators': 'node_modules/inversify-inject-decorators/amd/'
    },
    packages: [
        {
            name: "inversify",
            path: "node_modules/inversify/amd/",
            main: "inversify"
        },
        {
            name: "inversify-inject-decorators",
            path: "node_modules/inversify-inject-decorators/amd/",
            main: "index"
        }
    ]
});
