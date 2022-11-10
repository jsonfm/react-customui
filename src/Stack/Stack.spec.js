import { render } from "@testing-library/react";
import Stack from "./Stack";


describe("@components/Stack", () =>{

    it("It should render the component", () => {

        const { getByRole } = render(
            <Stack flexDirection="row" role="stack" />
        );

        const stackTest = getByRole("stack");

        expect(stackTest).toBeDefined();
    });

    it("It should have the correct background style", () => {
        const background = "blue";

        const { getByRole } = render(
            <Stack role="stack" bgColor={`${background}`} />
        )

        const stackTest = getByRole("stack");
        expect(stackTest).toHaveStyle(`background-color: ${background}`);
    });

});