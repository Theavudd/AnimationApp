// import Counter from '.';
// import React from 'react';
// import {render} from '@testing-library/react';

// describe('Counter', () => {
//   it('Render Correct initial count', () => {
//     const {getByTestId} = render(<Counter />);
//     const countValue = getByTestId('Count').testContent;
//     console.log('countValue', countValue);
//     expect(countValue).toBe('0');
//   });
// });

import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '.';

test('renders correctly', () => {
  const {} = renderer.create(<Counter />);
  console.log('getIn', getInstance().children());
});
