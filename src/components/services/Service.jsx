import "./service.css";
import cardimg from "../../assets/cardimg.png";

const carditems = [
  {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  },
  {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  },
  {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  },
  {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  },
  {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  }, {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  }, {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  }, {
    img: `${cardimg}`,
    title: "Anna Geniushene - 4K HDR preview",
    description:
      "An exploration of how Van Cliburn's win at the 1958 International Tchaikovsky Competition led to one of the most preeminent international music contests ever.",
  },
];

function Service() {
  return (
    <>
      <div className="serviceContainer">
        <h1 className="heading">Perfomances</h1>

        <div className="cardContainer">
          {carditems.map((item, ind) => (
            <>
              <div className="card" key={ind}>
                <img src={item.img} alt="" className="cardimg" />

                <h3 className="cardtitle">{item.title}</h3>

                <p className="desc">{item.description}</p>
              </div>
            </>
          ))}
        </div>

        <button>Learn More</button>
      </div>
    </>
  );
}

export default Service;
