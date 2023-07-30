/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useState } from "react";
import style from "./TableRow.module.css";
import { PiCaretCircleRight } from "react-icons/pi";
import { MdExpandCircleDown } from "react-icons/md";

const CityRow = (props: {
  cityInfo: {
    city: string;
    value: string;
  };
}) => {
  const { cityInfo } = props;

  return (
    <Fragment>
      <tr className={style.cityRow}>
        <td>
          <span>{`${cityInfo.city ? cityInfo.city : "(empty)"}`}</span>
        </td>
      </tr>
    </Fragment>
  );
};

const RegionRow = (props: {
  regionInfo: {
    region: string;
    cities: [];
  };
}) => {
  const { regionInfo } = props;
  const [isClickedRegion, setIsClickedRegion] = useState(false);
  const isOpenCities = isClickedRegion && regionInfo.cities.length > 0;

  const onClickRegionGroup = () => {
    setIsClickedRegion(!isClickedRegion);
  };

  return (
    <Fragment>
      <tr className={style.regionRow}>
        <td onClick={onClickRegionGroup}>
          <span>
            {isClickedRegion ? <MdExpandCircleDown /> : <PiCaretCircleRight />}
            {`${regionInfo.region ? regionInfo.region : "(empty)"}(${
              regionInfo.cities.length
            })`}
          </span>
        </td>
      </tr>
      {isOpenCities && (
        <Fragment>
          {regionInfo.cities.map((cityInfo, idx) => (
            <CityRow key={idx} cityInfo={cityInfo} />
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const TableRow = (props: { rowInfo: any }) => {
  const { rowInfo } = props;
  const [isClickedCountry, setIsClickedCountry] = useState(false);
  const isOpenRegions = isClickedCountry && rowInfo.regions.length > 0;

  const onClickCountryGroup = () => {
    setIsClickedCountry(!isClickedCountry);
  };

  const getRegionSum = (
    regions: Array<{
      region: string;
      cities: [];
    }>
  ) => {
    let result = 0;
    regions.forEach((region) => {
      result += region.cities.length;
    });
    return result;
  };

  return (
    <Fragment>
      <tr>
        <td onClick={onClickCountryGroup}>
          <span>
            {isClickedCountry ? <MdExpandCircleDown /> : <PiCaretCircleRight />}
            {`${rowInfo.country ? rowInfo.country : "(empty)"}(${getRegionSum(
              rowInfo.regions
            )})`}
          </span>
        </td>
        <td></td>
      </tr>
      {isOpenRegions && (
        <Fragment>
          {rowInfo.regions.map(
            (regionInfo: { region: string; cities: [] }, idx: number) => (
              <RegionRow key={idx} regionInfo={regionInfo} />
            )
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default TableRow;
