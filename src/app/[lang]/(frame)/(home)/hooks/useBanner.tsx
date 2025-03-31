import { useLingui } from "@lingui/react";
import useSWR from "swr";
import api, { KYData } from "~/src/service/index";
export type Banner = {
  image: string;
  title: string;
  link: string;
};
export const useBanner = () => {
  const { i18n } = useLingui();
  const key = "marketing/dapp/v3/index/pass/recruit/referral/banner";
  const fetcher = async () => {
    const res = await api.get(key).json<KYData<Banner>>();
    return res.data;
  };
  return useSWR([key, i18n.locale], fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
};
//接口调用示例
