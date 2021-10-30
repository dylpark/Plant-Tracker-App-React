//
//
import Input from "./Input";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import { useRouter } from "next/router";

function Form() {
  const router = useRouter();

  const state = {
    name: "",
    species: "",
    info: "",
    image: "",
  };

  const handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  const savePlant = async (e) => {
    e.preventDefault();
    const res = router.post("/api/add-plants", this.state);
  };

  return (
    <div className="flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Add Your Plant!
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form
            className="mb-0 space-y-6"
            action="#"
            method="POST"
            onSubmit={savePlant}
          >
            <Input
              for="Plant Name"
              title="Plant Name"
              name="name"
              onChange={handleInput}
              value={state.name}
            />
            <Input
              for="species"
              title="Species"
              name="species"
              onChange={handleInput}
              value={state.species}
            />
            <Input
              for="Plant Details"
              title="Plant Details & Requirements"
              name="info"
              onChange={handleInput}
              value={state.info}
            />

            <ImageUpload
              title="Upload an Image"
              name="image"
              onChange={handleInput}
              value={state.image}
            />

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;