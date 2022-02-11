# Dynamic Config
It watches the given file changes

## Install
```sh
npm i @mersanuzun/dynamic-config
```

## Usage
```javascript
import DynamicConfig from '@mersanuzun/dynamic-config';
import path from 'path';

const dynamicConfig = new DynamicConfig({ files: [ path.join(__dirname, 'config.json') ] });

dynamicConfig.getValue('some-key');
```

## License
MIT
