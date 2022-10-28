

const Card = ({details}) => {


    
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={details.picture?.large}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">
            {details.name?.title} <span>{details.name?.first}</span>{" "}
            <span>{details.name?.last}</span>
          </h5>
          <p className="card-text">
            I am from {details.location?.city} ,
            <span>{details.location?.state}</span>. I am {details.dob?.age} and
            my phone number is {details.phone}
          </p>
          <p> email {details.email}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
};
 
export default Card