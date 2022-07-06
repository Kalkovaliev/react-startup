import { fireEvent, render, screen } from "@testing-library/react";
import Button from "patterns/design/singleton/components/button";


describe("patterns: singleton -> button", () => {

    it("renders button with right parameters", () => {
        render(
            <Button className="red" name="Red Button" testId="redBtn" />
        );
        expect(screen.getByText("Red Button")).toBeInTheDocument();

    });

    it("clicks button", () => {
        render(
            <Button className="red" name="Red Button" testId="redBtn" />
        );

        const btn = screen.getByTestId("redBtn");
        fireEvent.click(btn);
        expect(screen.getByText("Red Button")).toBeInTheDocument();

    });


});