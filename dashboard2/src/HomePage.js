import Timer from "./Timer";
import Form from "./Form";
import Card from "./Card";
import "./App.css";

function HomePage() {
  return (
    <>
      <div className="row" id="bodypart">
        <div className="col-3 mt-4">
          <Timer />
        </div>
        <div className="col-8 mt-5">
          <div className="d-flex justify-content-between mt-2">
            <Card title="Casual" total="9" remaining="2" />
            <Card title="Sick" total="9" remaining="5" />
            <Card title="Earned" total="9" remaining="9" />
          </div>
          <div className="d-flex justify-content-between mt-2">
            <Card title="Adjustment" total="9" remaining="4" />
            <Card title="Unpaid" total="9" remaining="6" />
            <Card title="Half" total="9" remaining="3" />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          top: "-10px",
          right: "-80vw",
          width: "300px",
        }}
      >
        <Form />
      </div>
    </>
  );
}
export default HomePage;
