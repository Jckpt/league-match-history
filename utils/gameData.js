export const summonerData = async (summonerNameWithTag, server) => {
  summonerNameWithTag = decodeURIComponent(summonerNameWithTag);
  let [summonerName, tag] = summonerNameWithTag.split("#");
  const res = await fetch(
    "https://app.mobalytics.gg/api/lol/graphql/v1/query",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en_us",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-moba-client": "mobalytics-web",
        "x-moba-proxy-gql-ops-name": "LolProfilePageSummonerInfoQuery",
      },
      referrer: `https://app.mobalytics.gg/lol/profile/${server}/${summonerName}/overview`,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `{"operationName":"LolProfilePageSummonerInfoQuery","variables":{"gameName":"${summonerName}","tagLine":"${tag}","region":"${server}","sQueue":null,"sRole":null,"sChampion":null},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"69fd82d266137c011d209634e4b09ab5a8c66d415a19676c06aa90b1ba7632fe"}}}`,
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
export async function getLatestVersion() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions = await response.json();
  return versions[0];
}
export async function getChampionData(version) {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
  );
  const data = await response.json();
  return data;
}
export async function championKeyMap(version) {
  const data = await getChampionData(version);
  const championKeyMap = new Map();
  for (const champion in data.data) {
    championKeyMap.set(data.data[champion].key, data.data[champion]);
  }
  return championKeyMap;
}
export function getChampion(championKeys, championId) {
  return championKeys.get(championId);
}
export async function itemKeyMap(version) {
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/item.json`
  );
  const data = await response.json();
  const itemKeyMap = new Map();
  for (const item in data.data) {
    itemKeyMap.set(item, data.data[item]);
  }
  return itemKeyMap;
}
export function getItem(itemKeys, itemId) {
  return itemKeys.get(itemId);
}
