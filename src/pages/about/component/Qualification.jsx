
import { Box } from "@mui/system";
import SubHeading from "../../../component/typography/SubHeading";
import MainHeading from "../../../component/typography/MainHeading";
import PrimaryBTN from "../../../component/buttons/PrimaryBTN";
import knit from '../../../assets/image/knit.jpeg'
export default function Qualification() {
  return (
    <div>
      <div className="my-container pt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card working-card">
              <img
                src={knit}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <Box sx={{ width: "100%" }}>
              <div className="mb-4">
                <SubHeading text={"PROJECT"} />
                <MainHeading text={"My Qualification"} />
              </div>

              <div className="pb-3">
                I have completed my MCA from KNIT sultanpur uttar pradesh.
              </div>
              <div>
                <span className="label">Qualification</span> :
                <span className="fw-semibold">MCA</span>
              </div>
              <div>
                <span className="label">College</span> :
                <span className="fw-semibold">KNIT</span>
              </div>
              <div>
                <span className="label">CGPA</span> :
                <span className="fw-semibold">87</span>
              </div>
              <PrimaryBTN>About company</PrimaryBTN>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
