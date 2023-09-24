
export default function listItem({data, removeList}) {
  const handleDelete = (id) => {
    const answer = window.confirm("apa kamu yakin menghapus item ini?");
    if (answer) {
      const updatedList = data.filter((data) => data.id !== id);
      removeList(updatedList);
    } 
  };
  return (
    <div className="footer">
      <div className="title">
        <h2>List Product</h2>
      </div>

      <div className="table-responsive">
        <table id="table" className="table w-75">
          <thead>
            <tr className="title">
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image Of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional description</th>
              <th scope="col">Product Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-item">
            {data.map((list) => (
              <tr className="tr-1" key={list.id}>
                <th scope="row">{list.id}</th>
                <td>{list.productName}</td>
                <td>{list.productCategory}</td>
                <td>image.jpg</td>
                <td>{list.productFreshness}</td>
                <td>adipiscing</td>
                <td>Rp.{list.priceProduct}</td>
                <td className="action-1">
                  <button type="button" onClick={() => handleDelete(list.id)}>
                    delete
                  </button>
                </td>
                <td className="action-2">
                  <button type="button">edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="search">
        <input
          type="text"
          id="productname"
          className="form-control fw-bold"
          placeholder="Search by Product Name"
        />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn-search">
            search
          </button>
        </div>
      </div>
    </div>
  );
}