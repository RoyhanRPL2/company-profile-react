import PropTypes from "prop-types";

function companyCard({
  title,
  description,
  logo,
  category,
  image,
  totalInvesment,
  year
}) {
  return (
    <>
      <div className="relative group/item lg:w-[40%] lg:h-[600px] overflow-hidden w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="company-detail absolute opacity-100 lg:opacity-0 lg:group-hover/item:opacity-100 bottom-0 p-4 backdrop-blur-lg lg:transition-opacity lg:duration-500 lg:transform lg:group-hover/item:translate-y-0 lg:translate-y-full bg-black bg-opacity-50 m-3 rounded-md lg:rounded-none lg:m-0 lg:bg-transparent">
          <img src={logo} alt={title} className="w-[30px] h-[30px]"></img>
          <h1 className="text-white mt-4 text-[1.5rem]">{title}</h1>
          <p className="text-white mt-4">{description}</p>
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="text-white">Industry Category</p>
              <p className="text-white">{category}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-white">Total Invesment</p>
              <p className="text-white">{totalInvesment}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-white">Investment Year</p>
              <p className="text-white">{year}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

companyCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    totalInvesment: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default companyCard;
