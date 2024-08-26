import React from "react";

function UpdateSinglePhone() {
  let { id } = useParams();

  const [mobileData, setMobileData] = useState({});
  // console.log(id);
  let headers = {
    id: id,
  };
  return <div>UpdateSinglePhone</div>;
}

export default UpdateSinglePhone;
