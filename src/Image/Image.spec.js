import { render } from '@testing-library/react';
import Image from './Image';

describe('@components/Image', () => {
  it("It should test basic image attributes", () => {
    //arrange
    const { getByRole } = render(
      <Image alt="PlatziCoolImg" src="http://www.platziversosupercool.com/img" />
    );
    //act
    const ImageTest = getByRole('img')
    //assert
    expect(ImageTest).toBeInTheDocument();
    expect(ImageTest).toHaveAttribute("src", "http://www.platziversosupercool.com/img")
    expect(ImageTest).toHaveAttribute("alt", "PlatziCoolImg" )
  })
})