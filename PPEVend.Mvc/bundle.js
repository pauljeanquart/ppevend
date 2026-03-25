const esbuild = require('esbuild');

bundleCss();
bundleJavaScript();

function bundleCss() {
    esbuild.build({
        logLevel: 'info',
        entryPoints: ['wwwroot/css/app.css'],
        bundle: true,
        minify: true,
        sourcemap: true,
        loader: {
            '.woff': 'copy',
            '.woff2': 'copy',
            '.ttf': 'copy'
        },
        outfile: 'wwwroot/css/app.bundle.css'
    }).catch(() => process.exit(1));
}

function bundleJavaScript() {
    esbuild.build({
        logLevel: 'info',
        entryPoints: ['wwwroot/js/app.js'],
        bundle: true,
        minify: true,
        sourcemap: true,
        outfile: 'wwwroot/js/app.bundle.js'
    }).catch(() => process.exit(1));
}
