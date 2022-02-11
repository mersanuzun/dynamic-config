import {DynamicConfigOptions} from "./types";
// @ts-ignore
import chokidar from 'chokidar';
import fs from 'fs';

export default class DynamicConfig {
    private options: DynamicConfigOptions;
    private allConfigs: { [key: string]: any } = {};

    constructor(options: DynamicConfigOptions) {
        this.options = options;

        this.readFiles();
        this.watchFileChange();
    }

    private readFiles() {
        this.options.files.forEach(file => {
            this.readFile(file);
        })
    }

    private readFile(file: string) {
        const fileContent = fs.readFileSync(
            file,
            { encoding:'utf8', flag:'r' }
        );

        this.allConfigs = JSON.parse(fileContent);
    }

    private watchFileChange() {
        chokidar.watch(this.options.files).on('change', (path: string) => {
            this.readFile(path);
        })
    }

    public getConfig(key: string): any {
        return this.allConfigs[key];
    }
}
