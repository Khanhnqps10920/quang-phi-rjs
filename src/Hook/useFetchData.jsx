import { useEffect, useState } from "react";
import { myAxios } from "../Service/axios";

export default function (keyParam, page, limit) {
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("tab1");

  const fetchData = async () => {
    try {
      setLoading(true);
      const queryParams = {
        search: keyParam,
      };

      const data = await myAxios.get(`products?page=${page}&limit=${limit}`, {
        params: queryParams,
      });

      setListData(data.data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [listData, loading, limit, tab, setTab];
}
