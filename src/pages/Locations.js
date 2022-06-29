import React from "react";
import classNames from "classnames";
import Sidebar from "../components/partials/Sidebar";
import { list } from "postcss";
const erieLocations = [
  {
    name: "ACL Main Lab",
    add1: "1526 Peach Street",
    add2: "Erie, PA 16501-2110",
    add3: false,
    phone: "814-461-2400",
    fax: "814-461-2582",
    hours: {
      mf: "7:00 a.m. - 5:30 p.m.",
      sat: "7:00 a.m. - 12:00 p.m.",
      sun: "7:00 a.m. - 11:00 a.m.",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
  {
    name: "ACL Bayfront",
    add1: "350 East Bayfront Parkway",
    add2: "Erie, PA 16507-2410",
    add3: false,
    phone: "814-459-6012",
    fax: "814-459-6015",
    hours: {
      mf: "7:00 a.m. - 3:00 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL East 38th Street",
    add1: "2020 East 38th Street",
    add2: "Erie, PA 16510-3607",
    add3: false,
    phone: "814-825-6102",
    fax: "814-825-7893",
    hours: {
      mf: "6:30 a.m. - 3:30 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL East Harbor",
    add1: "4916 Buffalo Road",
    add2: "Erie, PA 16510-2304",
    add3: false,
    phone: "814-899-8068",
    fax: "814-897-0153",
    hours: {
      mf: "7:00 a.m. - 4:30 p.m.",
      sat: "7:00 a.m. - 12:00 p.m.",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
  {
    name: "ACL Edinboro",
    add1: "448 Erie Street",
    add2: "Edinboro, PA 16412-2294",
    add3: "Suite 100",
    phone: "814-734-9900",
    fax: "814-734-9935",
    hours: {
      mf: "6:30 a.m. - 2:30 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL Girard",
    add1: "5165 Imperial Pkwy",
    add2: "Girard, PA 16417-9523",
    add3: false,
    phone: "814-774-4546",
    fax: "814-774-4548",
    hours: {
      mf: "6:30 a.m. - 4:30 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL Liberty Street",
    add1: "3315 Liberty Street",
    add2: "Erie, PA 16508-2558",
    add3: false,
    phone: "814-868-4661",
    fax: "814-868-8691",
    hours: {
      mf: "6:30 a.m. - 5:00 p.m.",
      sat: "7:00 a.m. - 12:00 p.m.",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
  {
    name: "ACL North East",
    add1: "2060 North Pearl St",
    add2: "North East, PA 16428-1926",
    add3: "Suite A",
    phone: "814-725-1366",
    fax: "814-725-1368",
    hours: {
      mf: "7:00 a.m. - 4:00 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL Summit",
    add1: "7200 Peach St",
    add2: "Erie, PA 16509-4754",
    add3: "Unit 16",
    phone: "814-866-8632",
    fax: "814-866-8649",
    hours: {
      mf: "7:00 a.m. - 3:00 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "8:00 a.m. - 3:00 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL Waterford",
    add1: "991 Route 19",
    add2: "Waterford, PA 16441-9739",
    add3: "Suite G",
    phone: "814-796-6782",
    fax: "814-796-6784",
    hours: {
      mf: "7:00 a.m. - 3:00 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:00 a.m. - 12:30 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL West Ridge",
    add1: "4247 West Ridge Road",
    add2: "Erie, PA 16506",
    add3: "Suite 102",
    phone: "814-315-6506",
    fax: "814-315-6645",
    hours: {
      mf: "6:30 a.m. - 4:30 p.m.",
      sat: "7:00 a.m. - 12:00 p.m.",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: false,
      sat: false,
    },
  },
  {
    name: "ACL Yorktown",
    add1: "2501 W 12th Street,",
    add2: "Erie, PA 16505-4527",
    add3: "Suite B",
    phone: "814-459-4991",
    fax: "814-454-8265",
    hours: {
      mf: "6:30 a.m. - 5:00 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: false,
    },
  },
  {
    name: "ACL Zuck",
    add1: "4108 Zuck Road",
    add2: "Erie, PA 16506-4539",
    add3: false,
    phone: "814-833-1286",
    fax: "814-835-7179",
    hours: {
      mf: "6:30 a.m. - 3:30 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
];

const newyorkLocations = [
  {
    name: "ACL - Dunkirk",
    add1: "312 Central Avenue",
    add2: "Dunkirk, NY 14048-2125",
    add3: false,
    phone: "716-363-7417",
    fax: "716-363-7419",
    hours: {
      mf: "7:00 a.m. - 11:30 a.m. 12:00 p.m. - 3:30 p.m.",
      sat: "7:00 a.m. - 12:00 p.m.",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
  {
    name: "ACL Westfield",
    add1: "193 East Main Street",
    add2: "Westfield, NY 14787-1104",
    add3: false,
    phone: "716-326-7300",
    fax: "716-326-7308",
    hours: {
      mf: "6:30 a.m. - 3:00 p.m.",
      sat: "7:00 a.m. - 12:00 p.m.",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
  {
    name: "ACL Jamestown",
    add1: "320 Prather Avenue",
    add2: "Jamestown, NY 14701",
    add3: "Suite 200 B-C",
    phone: "716-484-7147",
    fax: "716-484-1232",
    hours: {
      mf: "6:30 a.m. - 4:00 p.m.",
      sat: "7:00 a.m. - 12:00 p.m.",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
];

const otherLocations = [
  {
    name: "ACL Meadville",
    add1: "289 North St, North Street Plaza",
    add2: "Meadville, PA 16335-2521",
    add3: false,
    phone: "814-337-7045",
    fax: "814-337-7522",
    hours: {
      mf: "7:00 a.m. - 3:00 p.m.",
      sat: "8:00 a.m. - 11:00 a.m.",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "8:00 a.m. - 11:00 a.m.",
    },
  },
  {
    name: "ACL Seneca",
    add1: "3742 State Route 257",
    add2: "Seneca, PA 16346-3318",
    add3: "Suite B",
    phone: "814-493-6001",
    fax: "814-493-6002",
    hours: {
      mf: "7:00 a.m. - 1:00 p.m.",
      sat: "closed",
      sun: "closed",
    },
    details: false,
    drugScreen: {
      mf: "9:30 a.m. - 3:00 p.m.",
      sat: "9:00 a.m. - 11:00 a.m.",
    },
  },
];

const Locations = (props) => (
  <div className="main">
    <div className="container mx-auto md_flex">
      <div className="leader md_w-2--3 w-full">
        <p className="px-4 md_px-0">
          Through our affiliation with Quest Diagnostics Incorporated we are
          pleased to offer our patients access to the following services:
        </p>
        <h3 className="text-blue-900 mb-4 font-bold text-2xl my-6 px-4 md_px-0">
          PSC Locator and Appointment Scheduler
        </h3>
        <p className="px-4 md_px-0">
          Use the Quest Diagnostics{" "}
          <a href="https://secure.questdiagnostics.com/hcp/psc/jsp/SearchLocation.do">
            PSC Locator and Appointment Scheduler
          </a>{" "}
          to find an ACL Patient Service Center and schedule an appointment.
        </p>
        <LocationsTabs />
        <LocationAccordions />
      </div>
      <br />
      <Sidebar />
    </div>
  </div>
);

const LocationsTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const handleTabSelection = (e, i) => {
    e.preventDefault();
    setActiveTab(i);
  };
  const handleChangeTab = (e) => {
    setActiveTab(e.target.value);
  };
  return (
    <>
      <div>
        <div className="px-4 md_hidden">
          <select
            defaultValue={0}
            onChange={(e) => handleChangeTab(e)}
            className="form-select block w-full"
          >
            <option value={0}>Erie Locations</option>
            <option value={1}>NY Locations</option>
            <option value={2}>Other Locations</option>
          </select>
        </div>
        <div className="hidden sm_block">
          <div className="border-b border-gray-600">
            <nav className="-mb-px flex">
              <a
                href="#"
                onClick={(e) => handleTabSelection(e, 0)}
                className={classNames({
                  "w-1--4 py-4 px-1 text-center border-b-2 font-medium text-sm leading-5 text-gray-600 hover_text-gray-700 hover_border-gray-300 focus_outline-none focus_text-gray-700 focus_border-gray-300": true,
                  "border-indigo-500": activeTab === 0,
                  "text-indigo-500": activeTab === 0,
                  "font-bold": activeTab === 0,
                })}
              >
                Erie Locations
              </a>
              <a
                href="#"
                onClick={(e) => handleTabSelection(e, 1)}
                className={classNames({
                  "w-1--4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-600 hover_text-gray-700 hover_border-gray-300 focus_outline-none focus_text-gray-700 focus_border-gray-300": true,
                  "border-indigo-500": activeTab === 1,
                  "text-indigo-500": activeTab === 1,
                  "font-bold": activeTab === 1,
                })}
              >
                NY Locations
              </a>
              <a
                href="#"
                onClick={(e) => handleTabSelection(e, 2)}
                className={classNames({
                  "w-1--4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-600 focus_outline-none focus_text-indigo-800 focus_border-indigo-700": true,
                  "border-indigo-500": activeTab === 2,
                  "text-indigo-500": activeTab === 2,
                  "font-bold": activeTab === 2,
                })}
              >
                Other Locations
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="tabs">{locationTabs[activeTab]}</div>
    </>
  );
};

const OtherLocations = (props) => (
  <>
    <div className="tab-header">
      <h3 className="px-4 text-blue-900 mb-4 font-bold text-2xl my-6">
        Other PSC Locations{" "}
      </h3>
    </div>
    <div className="tab-body">
      <iframe
        className="mapbox w-full p-4 bg-green-600 rounded-lg shadow-md"
        width="350"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/d/embed?mid=zBx3a54ww2nM.kQtWuFETU4sY"
      ></iframe>
      <p className="px-4">
        <a href="https://www.google.com/maps/d/embed?mid=zBx3a54ww2nM.kQtWuFETU4sY">
          View ACL Other PA Locations in a larger map
        </a>
      </p>
    </div>
  </>
);

const NewYorkLocation = (props) => (
  <>
    <div className="tab-header">
      <h3 className="px-4 text-blue-900 mb-4 font-bold text-2xl my-6">
        PSC Locations in Western New York
      </h3>
    </div>
    <div className="tab-body">
      <iframe
        className="mapbox w-full p-4 bg-green-600 rounded-lg shadow-md"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps/ms?msa=0&amp;msid=208325745493819797190.0004cf0258cd6c9c55abc&amp;ie=UTF8&amp;t=m&amp;ll=42.344335,-79.359741&amp;spn=0.710509,0.961304&amp;z=9&amp;output=embed"
      ></iframe>
      <p className="px-4">
        <a href="https://maps.google.com/maps/ms?msa=0&msid=208325745493819797190.0004cf0258cd6c9c55abc&ie=UTF8&t=m&ll=42.344335,-79.359741&spn=0.710509,0.961304&z=9&source=embed">
          View ACL NY Locations in a larger map
        </a>
      </p>
    </div>
  </>
);

const ErieLocation = (props) => (
  <>
    <div className="tab-header">
      <h3 className="px-4 text-blue-900 mb-4 font-bold text-2xl my-6">
        PSC Locations in Erie County, PA
      </h3>
    </div>
    <div className="tab-body">
      <iframe
        className="w-full p-4 bg-green-600 rounded-lg shadow-md mapbox"
        frameBorder="0"
        scrolling="no"
        marginHeight="100"
        marginWidth="0"
        src="https://maps.google.com/maps/ms?msid=208325745493819797190.0004cea31c30fc764fc89&amp;msa=0&amp;ie=UTF8&amp;t=m&amp;z=10&amp;output=embed"
      ></iframe>
      <a
        className="pr-4 text-sm mt-0 pt-0 text-blue-500 font-bold underline"
        href="https://www.google.com/maps/d/viewer?mid=1Eo231_VUHsSRN2M1K-JXkdWenGA&msa=0&ie=UTF8&t=m&ll=41.95846899999999%2C-80.09994499999999&spn=0.674004%2C0.65918&z=10&source=embed"
        target="_blank"
      >
        View Erie County, PA ACL Locations on a full-screen map &raquo;
      </a>
    </div>
  </>
);
const locationTabs = [
  <ErieLocation />,
  <NewYorkLocation />,
  <OtherLocations />,
];

const LocationAccordions = (props) => {
  const [openAccordion, setOpen] = React.useState("erie");
  const [hoursShown, setHoursShown] = React.useState(false);
  const count = [1, 2, 3, 4, 5];

  const setOpenAccordion = (e, value) => {
    e.preventDefault();
    if (value === openAccordion) {
      setOpen("");
      return;
    }
    setOpen(value);
  };

  const showHours = (e, index) => {
    if (hoursShown === index && hoursShown !== false) {
      setHoursShown(false);
      return;
    }
    setHoursShown(index);
  };

  return (
    <div className="mt-8 location-list">
      <div className="mt-2 mb-2 location-accordion">
        <div className="location-title mb-2">
          <h1 className="uppercase pb-3 border-b-2 border-blue-200 mb-4">
            <a onClick={(e) => setOpenAccordion(e, "erie")}>
              Erie County ACL PSC Location Addresses &amp; Hours{" "}
              <strong>{openAccordion === "erie" ? "-" : "+"}</strong>
            </a>
          </h1>
        </div>
        {openAccordion === "erie" && (
          <div className="location-content">
            <div className="flex flex-wrap justify-between items-center">
              {erieLocations.map((location, i) => (
                <div
                  key={i}
                  className="w-1--3 address text-center mb-4 mt-2 mx-0"
                >
                  <h3 className="font-bold text-blue-600">
                    <a href="#">{location.name}</a>
                  </h3>
                  <p className="leading-tight mt-0 mb-0">
                    {location.add1}
                    <br />
                    {location.add2} <br />
                    {location.add3 && location.add3}
                  </p>
                  <p className="leading-none mt-2 mb-0">
                    Phone:{" "}
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </p>
                  <p className="leading-none mt-2 mb-0">Fax: {location.fax}</p>
                  <div className="location-hours">
                    <p
                      onClick={(e) => showHours(e, i)}
                      className="font-bold mt-3 text-sm hours-title"
                    >
                      VIEW HOURS {hoursShown === i ? "-" : "+"}
                    </p>
                    {hoursShown === i && (
                      <div className="hours">
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Monday - Friday:
                          </span>{" "}
                          <br /> {location.hours.mf}
                        </p>
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Saturday:
                          </span>{" "}
                          <br /> {location.hours.sat}
                        </p>
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Sunday:
                          </span>{" "}
                          <br /> {location.hours.sun}
                        </p>
                      </div>
                    )}
                  </div>
                  {/*{*/}
                  {/*	location.drugScreen.mf || location.drugScreen.sat &&*/}
                  {/*	<p className="font-bold mt-3 text-sm">DRUG SCREEN HOURS</p>*/}
                  {/*}*/}
                  {/*{location.drugScreen.mf &&*/}
                  {/*	<p className="leading-none mt-2 mb-0"><span className="text-sm">Monday - Friday:</span> <br /> {location.drugScreen.mf}</p>*/}
                  {/*}*/}
                  {/*{location.drugScreen.sat &&*/}
                  {/*	<p className="leading-none mt-2 mb-0"><span className="text-sm">Saturday:</span> <br /> {location.drugScreen.sat}</p>*/}

                  {/*}*/}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 mb-2 location-accordion">
        <div className="location-title mb-2">
          <h1 className="uppercase pb-3 border-b-2 border-blue-200 mb-4">
            <a onClick={(e) => setOpenAccordion(e, "new-york")}>
              New York ACL PSC Location Addresses &amp; Hours{" "}
              <strong>{openAccordion === "new-york" ? "-" : "+"}</strong>
            </a>
          </h1>
        </div>
        {openAccordion === "new-york" && (
          <div className="location-content">
            <div className="flex flex-wrap justify-between items-center">
              {newyorkLocations.map((location, i) => (
                <div
                  key={i}
                  className="w-1--3 address text-center mb-4 mt-2 mx-0"
                >
                  <h3 className="font-bold text-blue-600">
                    <a href="#">{location.name}</a>
                  </h3>
                  <p className="leading-tight mt-0 mb-0">
                    {location.add1}
                    <br />
                    {location.add2} <br />
                    {location.add3 && location.add3}
                  </p>
                  <p className="leading-none mt-2 mb-0">
                    Phone:{" "}
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </p>
                  <p className="leading-none mt-2 mb-0">Fax: {location.fax}</p>
                  <div className="location-hours">
                    <p
                      onClick={(e) => showHours(e, i)}
                      className="font-bold mt-3 text-sm hours-title"
                    >
                      VIEW HOURS {hoursShown === i ? "-" : "+"}
                    </p>
                    {hoursShown === i && (
                      <div className="hours">
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Monday - Friday:
                          </span>{" "}
                          <br /> {location.hours.mf}
                        </p>
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Saturday:
                          </span>{" "}
                          <br /> {location.hours.sat}
                        </p>
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Sunday:
                          </span>{" "}
                          <br /> {location.hours.sun}
                        </p>
                      </div>
                    )}
                  </div>
                  {/*{*/}
                  {/*	location.drugScreen.mf || location.drugScreen.sat &&*/}
                  {/*	<p className="font-bold mt-3 text-sm">DRUG SCREEN HOURS</p>*/}
                  {/*}*/}
                  {/*{location.drugScreen.mf &&*/}
                  {/*	<p className="leading-none mt-2 mb-0"><span className="text-sm">Monday - Friday:</span> <br /> {location.drugScreen.mf}</p>*/}
                  {/*}*/}
                  {/*{location.drugScreen.sat &&*/}
                  {/*	<p className="leading-none mt-2 mb-0"><span className="text-sm">Saturday:</span> <br /> {location.drugScreen.sat}</p>*/}

                  {/*}*/}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 mb-2 location-accordion">
        <div className="location-title mb-2">
          <h1 className="uppercase pb-3 border-b-2 border-blue-200 mb-4">
            <a onClick={(e) => setOpenAccordion(e, "other")}>
              Other ACL PSC Location Addresses &amp; Hours{" "}
              <strong>{openAccordion === "other" ? "-" : "+"}</strong>
            </a>
          </h1>
        </div>
        {openAccordion === "other" && (
          <div className="location-content">
            <div className="flex flex-wrap justify-start items-center">
              {otherLocations.map((location, i) => (
                <div
                  key={i}
                  className="w-1--3 address text-center mb-4 mt-2 mx-0"
                >
                  <h3 className="font-bold text-blue-600">
                    <a href="#">{location.name}</a>
                  </h3>
                  <p className="leading-tight mt-0 mb-0">
                    {location.add1}
                    <br />
                    {location.add2} <br />
                    {location.add3 && location.add3}
                  </p>
                  <p className="leading-none mt-2 mb-0">
                    Phone:{" "}
                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                  </p>
                  <p className="leading-none mt-2 mb-0">Fax: {location.fax}</p>
                  <div className="location-hours">
                    <p
                      onClick={(e) => showHours(e, i)}
                      className="font-bold mt-3 text-sm hours-title"
                    >
                      VIEW HOURS {hoursShown === i ? "-" : "+"}
                    </p>
                    {hoursShown === i && (
                      <div className="hours">
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Monday - Friday:
                          </span>{" "}
                          <br /> {location.hours.mf}
                        </p>
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Saturday:
                          </span>{" "}
                          <br /> {location.hours.sat}
                        </p>
                        <p className="leading-none mt-2 mb-0">
                          <span className="text-sm font-bold text-blue-800">
                            Sunday:
                          </span>{" "}
                          <br /> {location.hours.sun}
                        </p>
                      </div>
                    )}
                  </div>
                  {/*{*/}
                  {/*	location.drugScreen.mf || location.drugScreen.sat &&*/}
                  {/*	<p className="font-bold mt-3 text-sm">DRUG SCREEN HOURS</p>*/}
                  {/*}*/}
                  {/*{location.drugScreen.mf &&*/}
                  {/*	<p className="leading-none mt-2 mb-0"><span className="text-sm">Monday - Friday:</span> <br /> {location.drugScreen.mf}</p>*/}
                  {/*}*/}
                  {/*{location.drugScreen.sat &&*/}
                  {/*	<p className="leading-none mt-2 mb-0"><span className="text-sm">Saturday:</span> <br /> {location.drugScreen.sat}</p>*/}

                  {/*}*/}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Locations;
