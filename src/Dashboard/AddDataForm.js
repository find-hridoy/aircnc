import { Button } from "@material-ui/core";
import React from "react";
import Form from "react-component-form";
import { toast, ToastContainer } from "react-toastify";
import "./AddDataForm.css";

function AddDataForm() {
  const handleSubmit = (formData, formElement) => {
    // formElement.reset();
    if (
      formData.title === "" ||
      formData.description === "" ||
      formData.price === "" ||
      formData.rating === "" ||
      formData.guests === "" ||
      formData.baths === "" ||
      formData.beds === ""
    ) {
      toast.error("Fields is required", {
        position: "bottom-right",
      });
    } else {
      console.log(formData);
      toast.success("Data submit successfully", {
        position: "bottom-right",
      });
    }
  };
  return (
    <div className="addDataForm">
      <Form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input type="text" name="title" />
        <br />
        <label>Description</label> <br />
        <input type="text" name="description" />
        <br />
        <label>Price</label> <br />
        <input type="text" name="price" />
        <br />
        <label>Rating</label> <br />
        <input type="text" name="rating" />
        <br />
        <label>Guests</label> <br />
        <input type="text" name="guests" />
        <br />
        <label>Beds</label> <br />
        <input type="text" name="beds" />
        <br />
        <label>Baths</label> <br />
        <input type="text" name="baths" />
        <br />
        {/* <label>Big Image</label> <br />
        <input type="file" name="bImage1" />
        <br />
        <label>Big Images 2</label> <br />
        <input type="file" name="bImage2" />
        <br /> */}
        <label>Images</label> <br />
        <input type="file" name="images" multiple />
        <br />
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}
export default AddDataForm;
