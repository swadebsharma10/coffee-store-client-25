import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";


const Home = () => {
      const loadedCoffees = useLoaderData();
      const [coffees, setCoffees] = useState(loadedCoffees);

      return (
            <div className="p-6">
                 <h4 className="text-2xl text-center text-primary font-bold mb-6">Your dynamic Coffee Are <br /> Here!</h4>
                 <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                  {
                        coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        ></CoffeeCard>)
                  }
                 </div>
            </div>
      );
};

export default Home;