import { describe, expect, it } from "vitest";
import FormProduct from "../Pages/form-create-product/formCreateProduct.jsx";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByRole,
  getByTestId,
  getByLabelText,
  getByText,
} from "@testing-library/react";

describe("FormProduct", () => {
  describe("The form must be able to be saved and displayed correctly.", () => {
    it("Form Product should render", () => {
      const { container } = render(<FormProduct />);
      expect(container).toBeInTheDocument();
    });

    it("input form product name should trigger input onChange correctly", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      const productNameValue = "Celana";

      fireEvent.change(productName, { target: { value: productNameValue } });

      expect(productName.value).toBe(productNameValue);
    });

    it("should update and display the choose product category correctly", async () => {
      render(<FormProduct />);

      const productCategory = screen.getByLabelText("Product Category");
      const selectProductCatgory = "1";

      fireEvent.change(productCategory, {
        target: { value: selectProductCatgory },
      });

      await waitFor(() => {
        expect(productCategory.value).toBe(selectProductCatgory);
      });
    });

    it("should update and display the choose product image correctly", () => {
      render(<FormProduct />);

      const fileInput = screen.getByLabelText("Product Image");
      const imageFile = new File(["image content"], "image.png", {
        type: "file",
      });

      fireEvent.change(fileInput, { target: { files: imageFile } });
      expect(fileInput.files).toBe(imageFile);
    });

    it("should update and display the choose product freshness correctly", () => {
      render(<FormProduct />);

      const brandNewRadio = screen.getByLabelText("Brand New");

      fireEvent.click(brandNewRadio);

      expect(brandNewRadio.checked).toBe(true);
    });

    it("should update and display the input product description correctly", () => {
      render(<FormProduct />);

      const descriptionTextarea = screen.getByLabelText(
        "Additional description"
      );
      const description = "This is a test description.";

      fireEvent.change(descriptionTextarea, { target: { value: description } });

      expect(descriptionTextarea.value).toBe(description);
    });

    it("should update and display the input product price correctly", () => {
      render(<FormProduct />);

      const priceInput = screen.getByPlaceholderText("1");
      const price = "1";

      fireEvent.change(priceInput, { target: { value: price } });

      expect(priceInput.value).toBe(price);
    });
  });

  describe("input form validation must be correct", () => {
    it("displays an error message if Product Name is empty", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      fireEvent.change(productName, { target: { value: "" } });

      const submit = screen.getByText("Submit");
      fireEvent.click(submit);
      expect(
        screen.getByText(
          "Product Name cannot empty. Please enter a valid Product name!!!"
        )
      ).toBeInTheDocument();
    });

    it("there must be no these characters in the product name @", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      fireEvent.change(productName, { target: { value: "invalid@name" } });

      const erorMessage = screen.getByText(
        "Product Name cannot contain symbols."
      );
      expect(erorMessage).toBeInTheDocument();
    });
    it("there must be no these characters in the product name #", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      fireEvent.change(productName, { target: { value: "invalid#name" } });

      const erorMessage = screen.getByText(
        "Product Name cannot contain symbols."
      );
      expect(erorMessage).toBeInTheDocument();
    });
    it("there must be no these characters in the product name { ", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      fireEvent.change(productName, { target: { value: "invalid{name" } });

      const erorMessage = screen.getByText(
        "Product Name cannot contain symbols."
      );
      expect(erorMessage).toBeInTheDocument();
    });
    it("there must be no these characters in the product name } ", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      fireEvent.change(productName, { target: { value: "invalid}name" } });

      const erorMessage = screen.getByText(
        "Product Name cannot contain symbols."
      );
      expect(erorMessage).toBeInTheDocument();
    });
    it("there must be no these characters in the product name / ", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      fireEvent.change(productName, { target: { value: "invalid/name" } });

      const erorMessage = screen.getByText(
        "Product Name cannot contain symbols."
      );
      expect(erorMessage).toBeInTheDocument();
    });

    it("there must be no more than 10 character in the product name", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      fireEvent.change(productName, {
        target: { value: "Product Name must not exceed 10 characters." },
      });

      const erorMessage = screen.getByText(
        "Product Name must not exceed 10 characters."
      );
      expect(erorMessage).toBeInTheDocument();
    });

    it("productname is not empty", () => {
      render(<FormProduct />);

      const productName = screen.getByLabelText("Product Name");
      const productNameValue = "";

      fireEvent.change(productName, { target: { value: productNameValue } });
      const submit = screen.getByText("Submit");
      fireEvent.click(submit);

      expect(productName.value).not.toBeNull(productNameValue);
    });

    it("Product category is not empty", async () => {
      render(<FormProduct />);

      const productCategory = screen.getByLabelText("Product Category");
      const selectProductCatgory = "";

      fireEvent.change(productCategory, {
        target: { value: selectProductCatgory },
      });

      await waitFor(() => {
        const submit = screen.getByText("Submit");
        fireEvent.click(submit);
        expect(productCategory.value).not.toBeNull(selectProductCatgory);
      });
    });

    it("Product freshness is not empty", () => {
      render(<FormProduct />);

      const brandNewRadio = screen.getByLabelText("Brand New");
      fireEvent.change(brandNewRadio, { target: { value: "" } });

      const submit = screen.getByText("Submit");
      fireEvent.click(submit);
      expect(brandNewRadio.checked).not.toBeNull();
    });

    it("productImage cannot empty", () => {
      render(<FormProduct />);

      const fileInput = screen.getByLabelText("Product Image");
      const imageFile = new File(["image content"], "image", {
        type: "file",
      });

      fireEvent.change(fileInput, { target: { files: imageFile } });
      const submit = screen.getByText("Submit");
      fireEvent.click(submit);
      expect(fileInput.files).not.toBeNull(imageFile);
    });
  });
});
