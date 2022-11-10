import { render } from "@testing-library/react";
import Button from "./Button";


describe("@components/Button", () =>{

    it("It should render the component", () => {
        const { getByRole } = render(
            <Button type="button"/>
        );

        const buttonTest = getByRole("button");

        expect(buttonTest).toBeDefined();
    });
});