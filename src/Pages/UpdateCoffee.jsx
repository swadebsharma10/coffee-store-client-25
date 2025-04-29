import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
      const coffee = useLoaderData();
      const { _id, name, chef, supplier, category, taste, details, photo } = coffee;

      const handleUpdateCoffee = e =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const category = form.category.value;
            const taste = form.taste.value;
            const details = form.details.value;
            const photo = form.photo.value;
        
            const newCoffee = {name, chef, supplier, category, taste, details, photo};

            fetch(`http://localhost:5000/coffee/${_id}`, {
                  method: 'PUT',
                  headers:{
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify(newCoffee)
            
                })
                .then(res => res.json())
                .then(data =>{
                 
                  if(data.modifiedCount){
                    Swal.fire({
                      title: "Update coffee Successfully!",
                      icon: "success",
                      draggable: true
                    });
                  }
                })
      }        


      return (
            <div className="p-10">
                <h2 className="text-3xl font-bold text-center mb-16">Your Coffee: <span className="text-secondary font-bold">{name}</span> Need To Updated. <br />Please Do This !</h2>
                <div>
                <div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="lg:flex gap-5">
            {/* raw lest */}
            <div className="lg:w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter coffee name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Supplier"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter Category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* Right side */}
            <div className="lg:w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    placeholder="Enter Chef name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Taste"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Enter Details"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* photo url */}
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter PhotoUrl"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            className="btn btn-block btn-secondary mt-6"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
                </div>
            </div>
      );
};

export default UpdateCoffee;