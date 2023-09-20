import PriceOption from "../Price-Option/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": "$29.99/month",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness classes"
      ]
    },

    {
      "id": 2,
      "name": "Premium Membership",
      "price": "$49.99/month",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Personal trainer sessions (2/month)"
      ]
    },

    {
      "id": 3,
      "name": "VIP Membership",
      "price": "$99.99/month",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Unlimited personal trainer sessions",
        "Access to spa and sauna"
      ]
    }
  ]


  return (
    <div className="m-12 ">
      <h2 className="text-5xl text-center ">Best Prices in the Town</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5">
        {
          priceOptions.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
        }

      </div>
    </div>
  );
};

export default PriceOptions;