import StatusCard from "components/StatusCard";
import HistoryTable from "components/HistoryTable";
import RowBar from "components/tests/RowBar";
import Line from "components/tests/Line";

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4"></div>
        </div>
      </div>

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <Line />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <RowBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
