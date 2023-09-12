import { Banner } from "./Banner";
import { Row } from "./Row";
import { Ads } from "./Ads";

export const Event = () => {
  return (
    <div>
      <section className="w-screen h-[85vh]">
        <div className="h-full">
          <div className="h-full overflow-hidden">
            <Banner />
          </div>
        </div>
      </section>

      <section className="w-screen my-16">
        <div className="max-w-7xl mx-auto">
          <div className="select-none">
            <Row title="Trending Now" rowID={1} fetchURL={"/event.json"}/>
          </div>
        </div>
      </section>
      {/* <section className="w-screen my-16">
        <div className="max-w-7xl mx-auto">
          <div className="select-none">
            <Row title="Coming Soon" rowID={2} fetchURL={"/event-dummy.json"}/>
          </div>
        </div>
      </section> */}

      <section className="w-screen mb-8">
        <div className="max-w-7xl mx-auto">
          <Ads />
        </div>
      </section>
    </div>
  );
};
