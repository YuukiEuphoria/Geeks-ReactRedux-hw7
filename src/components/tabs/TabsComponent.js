import React from "react";
import { Tab, Tabs } from "@mui/material";

const TabsComponent = ({ categoriesSelect, valueKey = "value", labelKey = "label", value, setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="categoriesList">
      <div>
        <Tabs value={value} onChange={handleChange}>
          {categoriesSelect.map((tab) => (
            <Tab
              className="categoriesTitle"
              key={tab[valueKey]}
              value={tab[valueKey]}
              label={tab[labelKey]}
            >
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabsComponent;
