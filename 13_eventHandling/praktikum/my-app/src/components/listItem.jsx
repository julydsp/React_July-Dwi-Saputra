export default function ListItem() {
  return (
    <div className="footer">
        <div className="title">
            <h2>List Product</h2>
        </div>

        <div className="table-responsive"></div>
        <table className="table w-75">
            <thead>
                <tr className="tr-1">
                    <th scope="col">No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Image Of Product</th>
                    <th scope="col">Product Freshness</th>
                    <th scope="col">Additional description</th>
                    <th scope="col">Product Price</th>
                </tr>
            </thead>
            <tbody id="table">
                <tr className="tr-1">
                    <th scope="row">1001</th>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>brand new</td>
                    <td>adipiscing</td>
                    <td>9</td>
                </tr>
            </tbody>
        </table>

        <div className="search">
            <input type="text" id="productname" className="form-control fw-bold" placeholder="Search by Product Name" />
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn-deletion" id="buttonDelete">
                    deletion
                </button>
                <button type="button" className="btn-search">
                    search
                </button>
            </div>
        </div>
    </div>
  );
}
