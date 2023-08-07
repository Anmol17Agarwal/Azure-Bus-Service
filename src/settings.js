import fs from 'fs';
import path from 'path';

export const BASE_DIR = path.dirname(path.dirname(__filename));

export const ENV = process.env.RECEIVER_ENV || 'development';

export const CONFIG = JSON.parse(
    fs.readFileSync(
        path.join(BASE_DIR, 'resources', `${ENV}.json`), 'utf-8',
    ),
);
