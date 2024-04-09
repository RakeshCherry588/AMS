function Table() {
  return (
    <>
      <div
        id="table"
        className="table-responsive mx-4"
        style={{ width: "auto" }}
      >
        <table className="table align-middle table-success table-hover table-borderless border-primary">
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Work hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>
                <select>
                  <option value="">Select any option</option>
                  <option value="workfromoffice">Work from Office</option>
                  <option value="workfromhome">Work from home</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Table;
