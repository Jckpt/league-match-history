import React from "react";
import Image from "next/image";
import ItemIcon from "./ItemIcon";
import Participants from "./Participants";
import { getItems } from "../utils/itemFunctions";
import { getChampionName } from "../utils/getChampionName";
const Match = async ({
  match: {
    participants,
    subject: { kda, finalBuild, championId },
  },
}) => {
  const [items, trinket] = getItems(finalBuild);
  const slug = await getChampionName(championId);
  return (
    <div className="card bg-base-100 shadow-xl mb-3 w-full">
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full mr-3">
              <Image
                alt=""
                samesite="Strict"
                src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${slug}.png`}
                height={48}
                width={48}
              />
            </div>
          </div>
          <div>
            {kda.k}/{kda.d}/{kda.a}
          </div>
          <div className="grid-cols-3 grid gap-1 w-40">
            {items.map((item, i) => (
              <div className="avatar" key={i}>
                <div className="w-12 h-12 rounded">
                  <ItemIcon item={item} />
                </div>
              </div>
            ))}
          </div>
          <div className="avatar">
            <div className="w-12 h-12 rounded mr-3">
              <ItemIcon item={trinket} />
            </div>
          </div>
          <Participants participants={participants} />
        </div>
      </div>
    </div>
  );
};

export default Match;
