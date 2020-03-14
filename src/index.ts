import express from "express";

/**
 * Required External Modules
 */

/**
 * App Variables
 */
const app = express();

/**
 *  App Configuration
 */

/**
 * Server Activation
 */
app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 8082;
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callback?: (updatedDependencies: ModuleId[]) => void,
        ): void;
        accept(dependency: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
