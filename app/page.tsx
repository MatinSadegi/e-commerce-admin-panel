import BestSelling from "./BestSelling";
import Category from "./Category";
import Earning from "./Earning";
import RecentOrder from "./RecentOrder";
import RevenueChart from "./RevenueChart";
import Static from "./Static";

export default function Home() {
  return (
    <main className=" bg-gray-100 p-5">
      <Static />
      <Category />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <RevenueChart />
        <BestSelling />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <RecentOrder />
        <Earning />
      </div>
    </main>
  );
}
