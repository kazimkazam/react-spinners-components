# react-spinners-components

> Very easy to use loading spinners for React.

[![NPM](https://img.shields.io/npm/v/react-spinners-components.svg)](https://www.npmjs.com/package/react-spinners-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

You can check the available loading spinners on the link below:

#### https://showcase-react-spinners-components.netlify.app

## Install

```
npm install react-spinners-components
```

or 

```
yarn add react-spinners-components
```

## Usage

There is a total of 15 types of loading spinners: Ball, Blocks, Cube, Discuss, Disk, DualBall, Eater, Gear, Infinity, Interwind, Pulse, Ripple, Rolling, Spinner, Wedges.
Please capitalize the first letter when inserting the type prop, e.g., Ball ---> 'Ball'.

Please notice the following:
- When the component accepts only one color ---> prop is called color and accepts a single string, e.g., 'red' or '#f91a10';
- When the component needs more than one color ---> prop is called colors and accepts an array with the colors that it needs (check the examples to know how many colors each type needs);
- The size prop needs a string, and you should use px, e.g., '150px';

#### If no props are given
- None of the props are required. If no props are given, the react-spinners-components will return the LoadingSpinnerComponent with the 'Ball' type, default colors and size.

### Examples

> Loading spinner type 'Ball'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Ball' } color={ 'red' } size={ '100px' } />
  );
};

export default Example;
```

> Loading spinner type 'Blocks'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Blocks' } colors={ [ '#06628d', '#f91a10' ] } size={ '100px' } />
  );
};

export default Example;
```

> Loading spinner type 'Cube'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Cube' } colors={ [ '#06628d', '#f91a10', 'yellow', 'purple' ] } size={ '100px' } />
  );
};

export default Example;
```

> Loading spinner type 'Discuss'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Discuss' } color={ '#06628d' } size={ '100px' } />
  );
};

export default Example;
```

> Loading spinner type 'Disk'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Disk' } colors={ [ '#06628d', 'purple'] } size={ '100px' } />
  );
};

export default Example;
```

> Loading spinner type 'DualBall'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'DualBall' } colors={ [ '#06628d', 'purple', '#06628d'] } size={ '200px' } />
  );
};

export default Example;
```

'DualBall' can actually work like a 'ThreeBall' by using 3 different colors, example below:

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'DualBall' } colors={ [ '#06628d', 'purple', 'yellow'] } size={ '200px' } />
  );
};

export default Example;
```

> Loading spinner type 'Eater'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Eater' } colors={ [ '#06628d', 'purple'] } size={ '150px' } />
  );
};

export default Example;
```

> Loading spinner type 'Gear'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Gear' } color={ 'purple' } size={ '150px' } />
  );
};

export default Example;
```

> Loading spinner type 'Infinity'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Infinity' } color={ 'purple' } size={ '150px' } />
  );
};

export default Example;
```

> Loading spinner type 'Interwind'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Interwind' } colors={ [ '#06628d', 'purple'] } size={ '125px' } />
  );
};

export default Example;
```

> Loading spinner type 'Pulse'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Pulse' } colors={ [ '#06628d', 'purple', 'blue'] } size={ '150px' } />
  );
};

export default Example;
```

> Loading spinner type 'Ripple'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Ripple' } colors={ [ '#06628d', 'purple'] } size={ '150px' } />
  );
};

export default Example;
```

> Loading spinner type 'Rolling'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Rolling' } color={ 'purple' } size={ '150px' } />
  );
};

export default Example;
```

> Loading spinner type 'Spinner'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Spinner' } color={ 'purple' } size={ '150px' } />
  );
};

export default Example;
```

> Loading spinner type 'Wedges'

```jsx

import React from 'react';
import LoadingSpinnerComponent from 'react-spinners-components';

const Example = () => {
  return(
    <LoadingSpinnerComponent type={ 'Wedges' } colors={ [ '#06628d', 'purple', 'blue', 'yellow'] } size={ '300px' } />
  );
};

export default Example;
```

## References

- [All svg animations are provided by loading.io](https://loading.io/spinner/)

## Author

[@kazimkazam](https://github.com/kazimkazam)

## Repository

[@Github](https://github.com/kazimkazam/react-spinners-components)

[@npm](https://www.npmjs.com/package/react-spinners-components)

## License

MIT © [kazimkazam](https://github.com/kazimkazam)
