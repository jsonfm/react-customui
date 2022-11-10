import { render } from '@testing-library/react';
import Text from './Text'

describe('@component/Text', () =>{
  it('It should test that Text is rendered', () => {
    const { getByRole } = render(
      <Text component="h1" >Platzi Aventura con Rick and Morty</Text>
    );
    const textTest = getByRole('heading', { name: /Platzi Aventura con Rick and Morty/i });
    expect(textTest).toBeDefined();
  })
})