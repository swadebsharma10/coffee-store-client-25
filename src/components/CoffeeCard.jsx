import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee , setCoffees, coffees}) => {
  const { _id, name, photo, chef, taste } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Delete a Coffee
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
            }
            const remainingCoffees = coffees.filter(cof => cof._id !==id);
            setCoffees(remainingCoffees)
          });
      }
    });
  };
  return (
    <div className="card lg:w-96 lg:mx-auto bg-base-400 shadow-lg">
      <figure>
        <img src={photo} alt="Coffee" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Taste: {taste}</p>
        <p className="font-bold">Chef: {chef}</p>
        <div className="card-actions justify-end">
          <div className="join join-vertical lg:join-horizontal">
            <button className="btn join-item btn-primary">Details</button>
            <button className="btn join-item btn-secondary"><Link to={`/update/${_id}`}>Edit</Link></button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item btn-warning"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
