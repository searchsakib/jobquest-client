import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WebDev from '../WebDev/WebDev';
import DigitalMarketing from '../DigitalMarketing/DigitalMarketing';
import GraphicsDesign from '../GraphicsDesign/GraphicsDesign';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 2xl:px-0 ">
      <div className="bg-[#DFF7E5]">
        <div className="container mx-auto">
          <Tabs selectedIndex={activeTab} onSelect={handleSelect} className="">
            <TabList className="flex flex-col md:flex-row  text-lg font-semibold">
              <Tab
                className="border-none"
                style={{
                  backgroundColor: activeTab === 0 ? '#05386B' : '#DFF7E5',
                  color: activeTab === 0 ? 'white' : 'black',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',
                  outline:
                    activeTab === 0 ? '2px solid #05386B' : '2px solid #05386B',
                  borderRadius: 0,
                  transition: 'background-color 0.3s',
                }}
              >
                Web Development
              </Tab>
              <Tab
                className="border-none"
                style={{
                  backgroundColor: activeTab === 1 ? '#05386B' : '#DFF7E5',
                  color: activeTab === 1 ? 'white' : 'black',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',
                  outline:
                    activeTab === 1 ? '2px solid #05386B' : '2px solid #05386B',
                  borderRadius: 0,
                  transition: 'background-color 0.3s',
                }}
              >
                Digital Marketing
              </Tab>
              <Tab
                className="border-none"
                style={{
                  backgroundColor: activeTab === 2 ? '#05386B' : '#DFF7E5',
                  color: activeTab === 2 ? 'white' : 'black',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px',

                  outline:
                    activeTab === 2 ? '2px solid #05386B' : '2px solid #05386B',
                  borderRadius: 0,
                  transition: 'background-color 0.3s',
                }}
              >
                Graphics Design
              </Tab>
            </TabList>

            <TabPanel className={`p-4 ${activeTab !== 0 ? 'hidden' : 'block'}`}>
              <WebDev></WebDev>
            </TabPanel>
            <TabPanel className={`p-4 ${activeTab !== 1 ? 'hidden' : 'block'}`}>
              <DigitalMarketing></DigitalMarketing>
            </TabPanel>
            <TabPanel className={`p-4 ${activeTab !== 2 ? 'hidden' : 'block'}`}>
              <GraphicsDesign></GraphicsDesign>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
