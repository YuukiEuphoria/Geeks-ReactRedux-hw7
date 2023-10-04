import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TabsComponent from "../../components/tabs/TabsComponent";
import Clan from "../../components/clan/Clan";
import History from "../../components/history/History";
import Ability from "../../components/ability/Ability";
import Other from "../../components/other/Other";
import Representavites from "../../components/representatives/Representatives";

const VALUES = {
  clan: "clan",
  history: "history",
  ability: "ability",
  representatives: "representavitives",
  other: "ohter",
};

const GetCategories = ({ action }) => {
  switch (action) {
    case VALUES.clan: {
      return <Clan />;
    }
    case VALUES.history: {
      return <History/>
    }
    case VALUES.ability: {
      return <Ability/>
    }
    case VALUES.other: {
      return <Other/>
    }
    case VALUES.representatives: {
      return <Representavites/>
    }
    default: {
      return <></>;
    }
  }
};

const Main = ({ valueKey, labelKey }) => {
  const { categories } = useSelector((state) => state.mainReducer);

  const categoriesSelect = [
    { value: VALUES.clan, label: "О клане" },
    { value: VALUES.history, label: "История" },
    { value: VALUES.ability, label: "Способности" },
    { value: VALUES.representatives, label: "Известные представители" },
    { value: VALUES.other, label: "Прочее" },
  ];

  const [value, setValue] = useState(categoriesSelect?.[0].value);

  return (
    <>
      <h1>Клан Учиха (うちは一族)
</h1>
      <TabsComponent
        categoriesSelect={categoriesSelect}
        setValue={setValue}
        value={value}
      />
      <GetCategories action={value} />
    </>
  );
};

export default Main;
