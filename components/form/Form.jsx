//
//

import React from "react";
import { useState } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import FileInput from "./FileInput";
import InfoInput from "./InfoInput";
import Button from "./Button";

export default function Form() {
  const [plantInput, setPlant] = useState({
    name: "",
    species: "",
    info: "",
    // image: "",
    error_list: [],
  });

  const handleChange = (e) => {
    e.persist();
    setPlant({ ...plantInput, [e.target.name]: e.target.value });
  };

  const savePlant = (e) => {
    e.preventDefault();

    const data = {
      name: plantInput.name,
      species: plantInput.species,
      info: plantInput.info,
      // image: plantInput.image,
    };

    axios.post(`/api/add-plant`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        setPlant({
          name: "",
          species: "",
          info: "",
          // image: "",
          error_list: [],
        });
        history.push("/plants");
      } else if (res.data.status === 422) {
        setPlant({ ...plantInput, error_list: res.data.validate_err });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-10">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Add Your Plant!
        </h1>
      </div>

      <form className="mb-0 space-y-6" onSubmit={savePlant}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow-sm">
          {/* Column 1 */}
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-6 md:p-4 space-y-2">
              {/* Name Input */}
              <TextInput
                htmlFor="plant name"
                key="1"
                title="Name"
                name="name"
                onChange={handleChange}
                value={plantInput.name}
              />
              {/* Species Input */}
              <TextInput
                htmlFor="species name"
                key="2"
                title="Species"
                name="species"
                onChange={handleChange}
                value={plantInput.species}
              />
              {/* File Input */}
              <FileInput
                title="Upload an Image"
                key="3"
                name="image"
                // value={plantInput.image}
              />
            </div>
          </div>

          {/* Column 2 - Text Area */}
          <div className="w-full overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-full text-left p-4 md:p-4 space-y-2">
              {/* Info Input */}
              <InfoInput
                title="Details & Requirements"
                key="4"
                value={plantInput.info}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center pb-12">
          <div>
            <Button title="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
